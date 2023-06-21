import React, { useContext } from "react";
import {
  Box,
  Paper,
  Text,
  Divider,
  useMantineTheme,
  MantineTheme,
  createStyles,
  Tooltip,
  Title,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { UtilitiesContext } from "@/contexts";
// Types
import { Cleaning, CleaningType } from "@/types";

import moment from "moment";
import { getColorForType } from "@/helpers";
import CleaningStatusChip from "./CleaningStatusChip";

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
  monthlyHours: number;
  defaultCleaningTypes: CleaningType[];
  onShowDetails: () => void;
};

const CleaningBox = ({
  cleaningInfo,
  monthlyHours,
  defaultCleaningTypes,
  onShowDetails,
}: Props) => {
  // Styles
  const theme: MantineTheme = useMantineTheme();
  const { classes } = useStyles();
  const { isDesktopView } = useContext(UtilitiesContext);

  // Label values
  let cleaningDate: string = moment(cleaningInfo.Date.toDate()).format(
    " DD MMMM, dddd"
  );
  let cleaningHoursLabel: string = `${cleaningInfo.Time.From} - ${cleaningInfo.Time.To}`;

  let cleaningTypes =
    cleaningInfo?.CleaningTypes.length !== 0
      ? cleaningInfo.CleaningTypes
      : defaultCleaningTypes;

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
          alignItems: "center",
          flexGrow: 0,
          width: "90px",
        }}
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
          <Title order={1} mr={4}>
            {cleaningInfo.Hours}
          </Title>
          <Title fw={600} order={3} sx={{ marginBottom: "1px" }}>
            h
          </Title>
        </Box>

        {/* Vertical divider */}
        <Box
          sx={{
            height: "69px",
            width: "3px",
            borderRadius: "5px",
            backgroundColor: theme.colors.primaryBlue,
            margin: "0 15px",
            flexGrow: 0,
          }}
        ></Box>
      </Box>
      <Box sx={{ flexGrow: 1, display: isDesktopView ? "flex" : "block", alignItems: "center",justifyContent: "space-between", }}>
        <Box>
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: " start",
              marginTop: "3px",
            }}
          >
            {/* Time */}
            <Text fz="sm" c="dimmed">
              {cleaningHoursLabel}
            </Text>
          </Box>
        </Box>
        <Box>
          {/* Cleaning status */}
          <CleaningStatusChip status={cleaningInfo?.Status} />
        </Box>
      </Box>

      {/* Open cleaning button */}
      <Box ml="10px" sx={{ flexGrow: 0 }}>
        <IconChevronRight size={26} color={theme.colors.gray[6]} />
      </Box>
    </Paper>
  );
};


 {/* Cleaning types */}
//  {cleaningTypes &&
//   cleaningTypes.map((type) => (
//     <Tooltip
//       transition="pop-top-right"
//       label={type}
//       withArrow
//       color={getColorForType(type)}
//     >
//       <Box
//         sx={{
//           margin: "2px",
//           borderRadius: "20px",
//           width: "20px",
//           height: "10px",
//           backgroundColor: theme.colors[getColorForType(type)][6],
//         }}
//       ></Box>
//     </Tooltip>
//   ))}

export default CleaningBox;
