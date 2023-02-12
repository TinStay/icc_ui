import React from "react";
import {
  Box,
  Paper,
  Text,
  Divider,
  useMantineTheme,
  MantineTheme,
  createStyles,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

// Types
import { Cleaning } from "@/types"

import moment from "moment";

const useStyles = createStyles((theme) => ({
  cleaningBoxPaper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.colors.gray[1]}`,
    boxSizing: "border-box",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    cursor: "pointer",
    [":hover"]: {
      border: `1px solid ${theme.colors.gray[2]}`,
      backgroundColor: theme.colors.gray[0],
    },
    [theme.fn.largerThan("sm")]: {},
  },
}));

type Props = {
  cleaningInfo: Cleaning,
  onShowDetails: () => void
};

const CleaningBox = ({ cleaningInfo, onShowDetails }: Props) => {
  // Styles
  const theme: MantineTheme = useMantineTheme();
  const { classes } = useStyles();

  // Label values
  let cleaningDate: string = moment(cleaningInfo.Date.toDate()).format("DD.MM");
  let cleaningHoursLabel: string = `${cleaningInfo.Time.From} - ${cleaningInfo.Time.To}`;

  return (
    <Paper
      radius="xl"
      p="lg"
      mb="lg"
      withBorder
      className={classes.cleaningBoxPaper}
      onClick={onShowDetails}
    >
      <Box sx={{ flexGrow: 0 }}>
        {/* Date */}
        <Text fw={700} mb="3px">
          {cleaningDate}
        </Text>

        {/* Time */}
        <Text fz="sm" c="dimmed">
          {cleaningHoursLabel}
        </Text>

      </Box>

      {/* Vertical divider */}
      <Divider
        size="md"
        orientation="vertical"
        color={theme.colors.indigo[5]}
        sx={{ margin: "0 10px", flexGrow: 0 }}
      />

      <Box sx={{ flexGrow: 1 }}>
        {/* Cleaning title */}
        <Text fw={700} mb="3px">
          Housekeeping
        </Text>
        
        {/* Cleaning priority */}
        <Text fz="sm"> Bathroom & Kitchen priority</Text>
      </Box>

      {/* Open cleaning button */}
      <Box ml="10px" sx={{ flexGrow: 0 }}>
        <IconChevronRight size={26} color={theme.colors.gray[6]} />
      </Box>
    </Paper>
  );
};

export default CleaningBox;
