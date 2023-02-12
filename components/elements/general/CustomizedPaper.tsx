import React from "react";
import {
  Paper,
  useMantineTheme,
  MantineTheme,
  createStyles,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  calendarPaper: {
    height: "100%",
    border: `1px solid ${theme.colors.gray[1]}`,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    margin: "0 ",
    marginBottom: theme.spacing.xl,
    // marginBottom: isDesktopView ? "0" : theme.spacing.xl,
    [theme.fn.largerThan("sm")]: {},
  },
}));

const CustomizedPaper = ({ children }) => {
  const theme: MantineTheme = useMantineTheme();
  const { classes } = useStyles();

  const isDesktopView: boolean = useMediaQuery(
    `(min-width: ${theme.breakpoints.xs}px)`
  );
  return (
    <Paper
      radius="xl"
      p={isDesktopView ? "xl" : "sm"}
      withBorder
      className={classes.calendarPaper}
    >
      {children}
    </Paper>
  );
};

export default CustomizedPaper;
