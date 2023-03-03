import React, {useContext} from "react";
import {
  Paper,
  useMantineTheme,
  MantineTheme,
  createStyles,
} from "@mantine/core";
import { UtilitiesContext } from "@/contexts";

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

const CustomizedPaper = ({ children, ...props }) => {
  const theme: MantineTheme = useMantineTheme();
  const { classes } = useStyles();


  const { isDesktopView } = useContext(UtilitiesContext);

  return (
    <Paper
      radius="xl"
      p={isDesktopView ? "lg" : "sm"}
      withBorder
      className={classes.calendarPaper}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default CustomizedPaper;
