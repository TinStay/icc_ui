import {
  HeaderSearchLink,
  CleaningFrequencyList,
  CleaningTypeList,
  Roles,
  CleaningStatusList,
  SubscriptionTypeList,
  NotificationVariantList
} from "./types";

export const appVersion = "0.0.5";

// Firestore
export const FirestoreCollections = {
  USERS: "users",
  SUBSCRIPTIONS: "subscriptions",
};

// App support for cleaning types
export const SubscriptionAction = {
  VIEW: "View",
  EDIT: "Edit",
  DELETE: "Delete",
};

// App support for cleaning types
export const SubscriptionTypes: SubscriptionTypeList = {
  STARTER: "Starter",
  STANDARD: "Standard",
  DELUXE: "Deluxe",
  CUSTOM: "Custom",  
};

// Notification types
export const NotificationVariants: NotificationVariantList = {
  SUCCESS: "Success",
  WARNING: "Warning",
  DANGER: "Danger",
  INFO: "Info",  
};

// App support for cleaning types
export const CleaningTypes: CleaningTypeList = {
  HOUSEKEEPING: "Housekeeping",
  HOUSECLEANING: "House cleaning",
  WINDOWSCLEANING: "Windows cleaning",
  CARPETCLEANING: "Carpet cleaning",
  DEEPCLEANING: "Deep cleaning",
  GARDENCLEANING: "Garden cleaning",
  CARCLEANING: "Car cleaning",
};

// User roles constants
export const UserRoles: Roles = {
  USER: "User",
  CLEANER: "Cleaner",
  MANAGER: "Manager",
  DRIVER: "Driver",
  ADMIN: "Admin",
  SUPERADMIN: "Super admin",
};

// Cleaning status constants
export const CleaningStatuses: CleaningStatusList = {
  UPCOMING: "Upcoming",
  ONGOING: "Ongoing",
  FINISHED: "Finished",
};

export const CleaningFrequencies: CleaningFrequencyList = {
  WEEKLY: "Weekly",
  BIWEEKLY: "Bi-weekly",
  THREETIMES: "3 times a month",
  ONCE: "Once a month",
  MORETHANFIVETIMES: "More than 5 times a month",
  LESSTHANFIVETIMES: "Less than 5 times a month",
  
};

// Header Menu
export const MenuLinks: HeaderSearchLink[] = [
  {
    link: "/subscriptions",
    label: "Subscriptions",
  },
];
// {
//   link: "/account",
//   label: "Account",
// },

export const Months = {
  JAN: "January",
  FEB: "February",
  MAR: "March",
  APR: "April",
  MAY: "May",
  JUN: "June",
  JUL: "July",
  AUG: "August",
  SEP: "September",
  OCT: "October",
  NOV: "November",
  DEC: "December",
};
