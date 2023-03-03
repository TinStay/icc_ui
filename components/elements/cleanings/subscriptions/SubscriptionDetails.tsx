import React, { useState, useCallback, useContext } from "react";

// Mantine
import {
  Box,
  useMantineTheme,
  MantineTheme,
  createStyles,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";

// Types
import { Subscription, Cleaning } from "@/types";

import { Months } from "@/constants";
import CleaningBox from "./CleaningBox";
import { useMediaQuery } from "@mantine/hooks";
import CleaningDetails from "./CleaningDetails";
import CustomizedPaper from "../../general/CustomizedPaper";

import { UtilitiesContext } from "@/contexts";

const useStyles = createStyles((theme) => ({
  subscriptionDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.fn.largerThan("xs")]: {
      justifyContent: "space-around",
      marginTop: theme.spacing.xl * 1.5,
    },
    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  calendarPaper: {
    height: "100%",
    border: `1px solid ${theme.colors.gray[1]}`,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    margin: "0 ",
    marginBottom: theme.spacing.xl,
    // marginBottom: isDesktopView ? "0" : theme.spacing.xl,
    [theme.fn.largerThan("sm")]: {},
  },
  calendar: {
    margin: "0 auto",
    [theme.fn.largerThan("sm")]: {},
  },
  calendarDay: {
    margin: "0 1px",
    borderRadius: theme.radius.xl,
  },
  cleaningsListContainer: {
    marginTop: "10px",
    flexGrow: 1,
    [theme.fn.largerThan("sm")]: {
      marginLeft: "30px",
      marginTop: "0",
    },
  },
}));

const getCleaningDatesPerYearAndMonth = (
  subscriptionData: Subscription,
  year: string,
  month: string
) => {
  let cleanings = [];
  subscriptionData.AllCleanings[year][month].forEach((cleaning) =>
    cleanings.push(cleaning.Date.toDate())
  );
  return cleanings;
};

type Props = {
  subscription: Subscription;
  showCleaningDetails: (cleaning) => void;
};

const SubscriptionDetails = ({ subscription, showCleaningDetails }: Props) => {
  // State & Variables
  const [cleaningDates, setCleaningDates] = useState<Date[]>(
    getCleaningDatesPerYearAndMonth(subscription, "2023", Months.FEB)
  );

  const theme: MantineTheme = useMantineTheme();

  const { classes } = useStyles();

  const { isDesktopView } = useContext(UtilitiesContext);

  // Open specific cleaning details in a drawer
  const onShowCleaningDetails = (cleaning: Cleaning) => {
    // Save target cleaning information and show details drawer
    showCleaningDetails(cleaning);
  };

  // Style calendar days
  const getStyleForDate = useCallback((date) => {
    // Today
    let isToday =
      date.getDate() === new Date().getDate() &&
      date.getMonth() === new Date().getMonth();

    // Cleaning day
    let isCleaningDay = false;
    cleaningDates.forEach((cleaningDate) => {
      if (
        cleaningDate.getDate() === date.getDate() &&
        cleaningDate.getMonth() === date.getMonth()
      )
        return (isCleaningDay = true);
    });

    if (isToday && isCleaningDay)
      return {
        backgroundColor: theme.colors.indigo[5],
        color: "white",
        border: `3px solid ${theme.colors.orange[4]}`,
      };

    if (isToday) return { border: `3px solid ${theme.colors.lime[5]}` };

    if (isCleaningDay)
      return { backgroundColor: theme.colors.indigo[5], color: "white" };

    return null;
  }, []);

  const getDayWithHoverCard = (date: Date) => {
    let displayDay = <Box>{date.getDate()}</Box>;

    // Display more cleaning info to user on hover
    if (
      cleaningDates.find(
        (cleaningDate) =>
          cleaningDate.toLocaleDateString() === date.toLocaleDateString()
      )
    )
      displayDay = (
        <Box onClick={() => selectDateFromCalendar(date)}>
          <Box>{date.getDate()}</Box>
          {/* <HoverCard width={240} shadow="md" >
          <HoverCard.Target>
            <Box>{date.getDate()}</Box>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            Hover card is revealed when user hovers over target element, it will
            be hidden once mouse is not over both target and dropdown elements
          </HoverCard.Dropdown>
        </HoverCard> */}
        </Box>
      );

    return displayDay;
  };

  const selectDateFromCalendar = (date: Date) => {
    // Find selected date amongst all cleanings
    let cleaning = subscription.AllCleanings["2023"][Months.FEB].find(
      (cl) =>
        cl.Date.toDate().toLocaleDateString() === date.toLocaleDateString()
    );
    // Open cleaning details on date clicked
    showCleaningDetails(cleaning);
  };

  return (
    <Box
      my={isDesktopView ? theme.spacing.xl : theme.spacing.sm}
      className={classes.subscriptionDetailsContainer}
    >
      <Box sx={{ flexGrow: 0, height: "100%" }}>
        {/* Calendar */}
        <CustomizedPaper >
          <Calendar
            multiple
            value={cleaningDates}
            onChange={() => {}}
            // onChange={date => console.log('object :>> ', date)}
            // onDayMouseEnter={date => console.log(date)}
            size={isDesktopView ? "md" : "sm"}
            preventFocus
            classNames={{
              calendarBase: classes.calendar,
              day: classes.calendarDay,
            }}
            dayStyle={(date) => getStyleForDate(date)}
            renderDay={(date) => getDayWithHoverCard(date)}
          />
        </CustomizedPaper>
      </Box>
      {/* Cleanings list */}
      <Box className={classes.cleaningsListContainer}>
        {subscription &&
          subscription.AllCleanings["2023"][Months.FEB]?.map((cleaning) => (
            <CleaningBox
              key={cleaning.ID}
              cleaningInfo={cleaning}
              monthlyHours={subscription.MonthlyHours}
              defaultCleaningTypes={subscription.DefaultCleaningTypes}
              onShowDetails={() => onShowCleaningDetails(cleaning)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default SubscriptionDetails;
