import React, { useState, useCallback, useContext, useEffect } from "react";
import dayjs from "dayjs";
// Mantine
import {
  Box,
  useMantineTheme,
  MantineTheme,
  createStyles,
  Indicator,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";

// Types
import { Subscription, Cleaning } from "@/types";

import CleaningBox from "./CleaningBox";
import { useMediaQuery } from "@mantine/hooks";
import CleaningDetails from "./CleaningDetails";
import CustomizedPaper from "../../general/CustomizedPaper";

// Helpers
import { UtilitiesContext } from "@/contexts";
import { getMonthAndYear } from "@/helpers";
import { Months } from "@/constants";

const useStyles = createStyles((theme) => ({
  subscriptionDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.fn.largerThan("xs")]: {
      justifyContent: "space-around",
      marginTop: theme.spacing.xl,
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
    // [theme.fn.largerThan("sm")]: {},
  },
  calendarDay: {
    margin: "0 1px",
    borderRadius: theme.radius.xl,
  },
  cleaningsListContainer: {
    marginTop: "10px",
    flexGrow: 1,
    height: "390px",
    overflowY: "scroll",
    padding: "0 10px ",

    [theme.fn.largerThan("sm")]: {
      height: "387px",
      padding: "20px",
      marginLeft: "30px",
      marginTop: "0",
    },
  },
}));

const getCleaningDatesPerYearAndMonth = (
  subscriptionData: Subscription,
  year: number,
  month: string
) => {
  let cleanings = [];

  subscriptionData.AllCleanings[year][month]?.forEach((cleaning) => {
    console.log("cleaning.Date", typeof cleaning.Date.toDate());
    cleanings.push(cleaning.Date.toDate());
  });

  return cleanings;
};

type Props = {
  subscription: Subscription;
  showCleaningDetails: (cleaning) => void;
};

const SubscriptionDetails = ({ subscription, showCleaningDetails }: Props) => {
  // State & Variables
  const { currentMonth, currentYear, nextMonth, nextYear } = getMonthAndYear();

  const [cleaningDates, setCleaningDates] = useState<Date[]>(
    getCleaningDatesPerYearAndMonth(subscription, currentYear, currentMonth)
  );
  // useEffect(() => {
  //   getCleaningDatesPerYearAndMonth(subscription, currentYear, currentMonth)

  // }, [subscription])

  console.log(
    "cleaningDates",
    getCleaningDatesPerYearAndMonth(subscription, currentYear, currentMonth)
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
  const getStyleForDate = useCallback((date: Date) => {
    console.log("date", date);
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
    // Today
    let isToday =
      date.getDate() === new Date().getDate() &&
      date.getMonth() === new Date().getMonth();

    // Check if it there is a cleaning today
    let isCleaningDay = false;
    cleaningDates.forEach((cleaningDate) => {
      if (
        cleaningDate.getDate() === date.getDate() &&
        cleaningDate.getMonth() === date.getMonth()
      )
        return (isCleaningDay = true);
    });

    let displayDay = <Box>{date.getDate()}</Box>;

    // Display more cleaning info to user on hover
    // if (
    //   cleaningDates.find(
    //     (cleaningDate) =>
    //       cleaningDate.toLocaleDateString() === date.toLocaleDateString()
    //   )
    // )

    let backgroundColor = "none";
    if (isToday) backgroundColor = theme.colors.lime[5];

    displayDay = (
      <Box onClick={() => selectDateFromCalendar(date)}>
        {/* {isToday && isCleaningDay ? (
          <Box
            sx={{
              backgroundColor: backgroundColor,
              padding: "6px",
              borderRadius: theme.radius.xl,
            }}
          >
            {date.getDate()}
          </Box>
        ) : isToday ? (
          <Box sx={{ backgroundColor: theme.colors.blue[5] }}>
            {date.getDate()}
          </Box>
        ) : (
          <Box>{date.getDate()}</Box>
        )} */}

        <Box
          sx={{
            backgroundColor: backgroundColor,
            padding:  isToday && !isCleaningDay ? "11px" : "6px",
            borderRadius: theme.radius.xl,
            color: isToday && !isCleaningDay && "white"
          }}
        >
          {date.getDate()}
        </Box>

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
    let cleaning = subscription.AllCleanings[currentYear][currentMonth].find(
      (cl) =>
        cl.Date.toDate().toLocaleDateString() === date.toLocaleDateString()
    );
    // Open cleaning details on date clicked
    showCleaningDetails(cleaning);
  };

  const thisMonthCleanings =
    subscription.AllCleanings[currentYear]?.[currentMonth] || [];
  const nextMonthCleanings =
    subscription.AllCleanings[nextYear]?.[nextMonth] || [];
  const viewCleanings = [...thisMonthCleanings, ...nextMonthCleanings];

  return (
    <Box
      my={isDesktopView ? theme.spacing.xl : theme.spacing.sm}
      className={classes.subscriptionDetailsContainer}
    >
      <Box sx={{ flexGrow: 0, height: "100%" }}>
        {/* Calendar */}
        <CustomizedPaper>
          <Calendar
            // multiple
            // value={cleaningDates}
            // value={cleaningDates && cleaningDates.map(date => new Date(date))}
            // onChange={() => {}}
            // onChange={date => console.log('object :>> ', date)}
            // onDayMouseEnter={date => console.log(date)}
            size={isDesktopView ? "md" : "sm"}
            defaultDate={cleaningDates[0]}
            classNames={{
              day: classes.calendarDay,
            }}
            // getDayProps={(date) => getStyleForDate(date)}
            getDayProps={(date) => ({
              selected: cleaningDates.some((s) =>
                dayjs(date).isSame(s, "date")
              ),
            })}
            renderDay={(date) => getDayWithHoverCard(date)}
            // renderDay={(date) => {
            //   const day = date.getDate();
            //   const today = new Date().getDate();

            //   if (day === today) {
            //     return (
            //       <Indicator
            //         size={isDesktopView ? 16 : 14}
            //         color="lime"
            //         offset={-5}
            //       >
            //         <div>{day}</div>
            //       </Indicator>
            //     );
            //   } else {
            //     return null;
            //   }
            // }}
          />
        </CustomizedPaper>
      </Box>
      {/* Cleanings list */}
      <Box className={classes.cleaningsListContainer}>
        {viewCleanings ? (
          viewCleanings?.map((cleaning) => (
            <CleaningBox
              key={cleaning.ID}
              cleaningInfo={cleaning}
              monthlyHours={subscription.MonthlyHours}
              defaultCleaningTypes={subscription.DefaultCleaningTypes}
              onShowDetails={() => onShowCleaningDetails(cleaning)}
            />
          ))
        ) : (
          <Box>No Cleanings Available</Box>
        )}
      </Box>
      {/* <Box className={classes.cleaningsListContainer}>
        {viewCleanings &&
          viewCleanings?.map((cleaning) => (
            <CleaningBox
              key={cleaning.ID}
              cleaningInfo={cleaning}
              monthlyHours={subscription.MonthlyHours}
              defaultCleaningTypes={subscription.DefaultCleaningTypes}
              onShowDetails={() => onShowCleaningDetails(cleaning)}
            />
          ))}
      </Box> */}
    </Box>
  );
};

export default SubscriptionDetails;
