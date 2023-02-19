import React from "react";
import {
  Box,
  Paper,
  Text,
  Divider,
  useMantineTheme,
  MantineTheme,
  createStyles,
  Title,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { IconSortAscending2 } from "@tabler/icons";
import { IconUser } from "@tabler/icons";

// Types
import { Cleaning } from "@/types";

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
  cleaningInfo: Cleaning;
  onShowDetails: () => void;
};

const CleaningBox = ({ cleaningInfo, onShowDetails }: Props) => {
  // Styles
  const theme: MantineTheme = useMantineTheme();
  const { classes } = useStyles();

  // Label values
  let cleaningDate: string = moment(cleaningInfo.Date.toDate()).format(
    " DD MMMM, dddd"
  );
  let cleaningHoursLabel: string = `${cleaningInfo.Time.From} - ${cleaningInfo.Time.To}`;

  return (
    <Paper
      radius="xl"
      px="lg"
      py="md"
      mb="lg"
      withBorder
      className={classes.cleaningBoxPaper}
      onClick={onShowDetails}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          textAlign: "center",
          flexGrow: 0,
          padding: "0 8px",
        }}
      >
        {/* Cleaning Hours */}
        <Title order={1} sx={{ color: "" }} >
          5
        </Title>
        <Title order={5}  >
          /15
        </Title>
      </Box>

      {/* Vertical divider */}
      <Divider
        size="md"
        orientation="vertical"
        color={theme.colors.indigo[5]}
        sx={{ margin: "0 15px", flexGrow: 0 }}
      />

      <Box sx={{ flexGrow: 0, width: "200px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Date */}
          <Text fw={700} mb="2px">
            {cleaningDate}
          </Text>
        </Box>
        {/* Time */}
        <Text fz="sm" c="dimmed" mb="5px">
          {cleaningHoursLabel}
        </Text>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: " start",
            marginTop: "3px",
          }}
        >
          <IconSortAscending2 />
          <Text fz="sm" sx={{ marginLeft: "3px" }}>
            {" "}
            Bathroom & Kitchen
          </Text>
        </Box>
      </Box>

      {/* Open cleaning button */}
      <Box ml="10px" sx={{ flexGrow: 0 }}>
        <IconChevronRight size={26} color={theme.colors.gray[6]} />
      </Box>
    </Paper>
  );
};

export default CleaningBox;
