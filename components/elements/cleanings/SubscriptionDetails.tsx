import React, { useState, useCallback } from "react";

// Mantine
import {
  Box,
  useMantineTheme,
  MantineTheme,
  createStyles,
  Paper,
  Drawer,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";

// Types
import { Subscription, Cleaning } from "@/types";

import { Months } from "@/constants";
import CleaningBox from "./Subscriptions/CleaningBox";
import { useMediaQuery } from "@mantine/hooks";
import CleaningDetails from "./Subscriptions/CleaningDetails";
import CustomizedPaper from "../general/CustomizedPaper";

const useStyles = createStyles((theme) => ({
  subscriptionDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    mx: "20px",

    [theme.fn.largerThan("xs")]: {
      justifyContent: "space-around",
      marginTop: "2.5rem",
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
    [theme.fn.largerThan("sm")]: {
      margin: "0 10px",
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
};

const SubscriptionDetails = ({ subscription }: Props) => {
  // State & Variables
  const [cleaningDates, setCleaningDates] = useState<Date[]>(
    getCleaningDatesPerYearAndMonth(subscription, "2023", Months.Feb)
  );
  const [activeCleaning, setActiveCleaning] = useState<Cleaning | null>(null);
  const [showCleaningDetails, setShowCleaningDetails] =
    useState<boolean>(false);

  const theme: MantineTheme = useMantineTheme();

  const { classes } = useStyles();

  const isDesktopView: boolean = useMediaQuery(
    `(min-width: ${theme.breakpoints.xs}px)`
  );

  // Open specific cleaning details in a drawer
  const onShowCleaningDetails = (cleaning: Cleaning) => {
    // Save target cleaning information to state
    setActiveCleaning(cleaning);
    // Open drawer
    setShowCleaningDetails(true);

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

  return (
    <Box my={theme.spacing.xl} className={classes.subscriptionDetailsContainer}>
      <CustomizedPaper>
        <Calendar
          multiple
          value={cleaningDates}
          onChange={() => {}}
          // onChange={setValue}
          size={isDesktopView ? "md" : "sm"}
          preventFocus
          classNames={{
            calendarBase: classes.calendar,
            day: classes.calendarDay,
          }}
          dayStyle={(date) => getStyleForDate(date)}
        />
      </CustomizedPaper>
      {/* Cleanings list */}
      <Box className={classes.cleaningsListContainer}>
        {subscription &&
          subscription.AllCleanings["2023"][Months.Feb]?.map((cleaning) => (
            <CleaningBox
              key={cleaning.ID}
              cleaningInfo={cleaning}
              onShowDetails={() => onShowCleaningDetails(cleaning)}
            />
          ))}
      </Box>

      {/* Cleaning details drawer */}
      <Drawer
        opened={showCleaningDetails}
        onClose={() => setShowCleaningDetails(false)}
        title="House cleaning"
        position="right"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={5}
        transition="slide-left"
        padding="xl"
        size="xl"
      >
        {/* Drawer content */}
        <CleaningDetails cleaning={activeCleaning} />
      </Drawer>
    </Box>
  );
};

export default SubscriptionDetails;
