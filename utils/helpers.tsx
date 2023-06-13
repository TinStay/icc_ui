import { useMantineTheme } from "@mantine/core";
import { CleaningType, CleaningStatus, SubscriptionType } from "./types";
import {
  CleaningTypes,
  CleaningStatuses,
  SubscriptionTypes,
  NotificationVariants,
  Months,
} from "./constants";
import { showNotification as displayNotification } from "@mantine/notifications";
import { IconX, IconExclamationMark, IconCheck } from "@tabler/icons";
import React from "react";

export const GetBackgroundColorForTheme = () => {
  const theme = useMantineTheme();
  return theme.colorScheme === "light" ? theme.colors.backgroundWhite : "";
};

// Use address object to return string address
export const GetAddressString = (address) => {
  return `${address.Street} ${address.StreetNumber}, ${address.PostalCode}`;
};

export const getColorForType = (type: CleaningType) => {
  switch (type) {
    case CleaningTypes.HOUSECLEANING:
      return "indigo";
    case CleaningTypes.HOUSEKEEPING:
      return "yellow";
    case CleaningTypes.DEEPCLEANING:
      return "orange";
    case CleaningTypes.WINDOWSCLEANING:
      return "grape";
    case CleaningTypes.CARPETCLEANING:
      return "gray";
    case CleaningTypes.GARDENCLEANING:
      return "green";
    case CleaningTypes.CARCLEANING:
      return "purple";

    default:
      return "blue";
  }
};

export const getColorForStatus = (status: CleaningStatus) => {
  switch (status) {
    case CleaningStatuses.UPCOMING:
      return "indigo";
    case CleaningStatuses.ONGOING:
      return "yellow";
    case CleaningStatuses.FINISHED:
      return "green";
    default:
      return "gray";
  }
};

export const getGradientForSubscriptionType = (type: SubscriptionType) => {
  switch (type) {
    case SubscriptionTypes.STARTER:
      return { from: "#82C91E", to: "blue" };
    case SubscriptionTypes.STANDARD:
      return { from: "#228BE6", to: "#20C997" };
    case SubscriptionTypes.DELUXE:
      return { from: "#BE4BDB", to: "blue" };
    case SubscriptionTypes.CUSTOM:
      return { from: "#845EF7", to: "#FF6B6B" };
    default:
      return { from: "blue", to: "cyan" };
  }
};

export const showNotification = ({title, message, variant, ...props}) => {
  const getIcon = (variant) => {
    switch (variant) {
      case NotificationVariants.DANGER:
        return { icon: <IconX />, color: "red" };
      case NotificationVariants.SUCCESS:
        return { icon: <IconCheck />, color: "green" };
      case NotificationVariants.INFO:
        return { icon: null, color: "blue" };
      case NotificationVariants.WARNING:
        return { icon: <IconExclamationMark />, color: "orange" };

      default:
        return null;
    }
  };
  const { icon, color } = getIcon(variant);
  displayNotification({
    id: "notification",
    // disallowClose: false,
    title: title,
    message: message,
    color: color,
    radius: "xl",
    icon: icon,
    ...props
  }); 
};

// Get current month 
export function getMonthAndYear() {
  const monthNames = [
    Months.JAN,  Months.FEB,  Months.MAR,  Months.APR,  Months.MAY,  Months.JUN,
     Months.JUL,  Months.AUG,  Months.SEP,  Months.OCT,  Months.NOV,  Months.DEC,
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const nextMonthIndex = (currentMonthIndex + 1) % 12;
  const nextYear = currentMonthIndex === 11 ? currentYear + 1 : currentYear;

  return {
    currentMonth: monthNames[currentMonthIndex],
    currentYear: currentYear,
    nextMonth: monthNames[nextMonthIndex],
    nextYear: nextYear,
  };
}