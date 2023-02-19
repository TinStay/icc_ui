import React, { useState } from "react";

// Helpers & Variables
import { Subscription } from "@/types";
import { GetAddressString } from "@/helpers";

// Components
import CleaningHoursSemiCircle from "@/elements/cleanings/general/CleaningHoursCircle";
import SubscriptionTypeBadge from "@/elements/cleanings/subscriptions/SubscriptionTypeBadge";
import CleaningTypesBadgeList from "@/elements/cleanings/general/CleaningTypesBadgeList";
import SubscriptionDetails from "@/elements/cleanings/subscriptions/SubscriptionDetails";
import CustomizedPaper from "@/elements/general/CustomizedPaper";
// Mantine
import {
  Paper,
  Text,
  Title,
  Box,
  createStyles,
  useMantineTheme,
  MantineTheme,
  Collapse,
  Space,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconUsers, IconRotateRectangle } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  containerHeader: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    marginTop: "12px",

    [theme.fn.largerThan("xs")]: {
      marginTop: "0px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  subscriptionTypeBadgeContainer: {
    position: "absolute",
    left: "50%",
    top: "-15px",
    transform: "translate(-50%, 0)",
  },
}));

type Props = {
  subscriptionData: Subscription;
};

const SubscriptionCleaningBox = ({ subscriptionData }: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const theme: MantineTheme = useMantineTheme();

  const isDesktopView: boolean = useMediaQuery(
    `(min-width: ${theme.breakpoints.xs}px)`
  );

  // Formatted address to display
  let address: string = GetAddressString(subscriptionData?.Address);

  const { classes } = useStyles();

  return (
    <CustomizedPaper
      p={isDesktopView ? "xl" : "sm"}
      radius="xl"
      shadow="lg"
      sx={{
        position: "relative",
      }}
    >
      {/* Cleaning badge for subscription type */}
      <Box className={classes.subscriptionTypeBadgeContainer}>
        <SubscriptionTypeBadge type={subscriptionData?.SubscriptionType} />
      </Box>

      {/* Main information */}
      <Box
        onClick={() => setShowDetails(!showDetails)}
        className={classes.containerHeader}
      >
        {/* Show address on top in mobile view */}
        {!isDesktopView && <Text fz="xl">{address}</Text>}

        {/* Monthly hours semi circle */}
        <Space h="md" />
        <CleaningHoursSemiCircle>
          <Title order={2}>{subscriptionData?.MonthlyHours}</Title>
          <Text>monthly hours</Text>
        </CleaningHoursSemiCircle>
        <Space h="md" />

        <Box sx={{ marginLeft: isDesktopView ? "2rem" : "0px" }}>
          {/* Show address in desktop view */}
          {isDesktopView && <Text fz="xl">{address}</Text>}

          {/* Cleaning types */}
          <Box sx={!isDesktopView && { textAlign: "center" }}>
            <CleaningTypesBadgeList
              types={subscriptionData?.AllCleaningTypes}
            />
          </Box>
          <Box sx={{ display: "flex", marginTop: theme.spacing.xs }}>
            {isDesktopView && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: theme.spacing.xl,
                }}
              >
                <IconRotateRectangle />
                <Text fz="md" ml={5}>
                  bi-weekly
                </Text>
              </Box>
            )}
            {isDesktopView && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconUsers />
                <Text fz="md" ml={5}>
                  2 cleaners
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Detailed information */}
      <Collapse in={showDetails}>
        <SubscriptionDetails subscription={subscriptionData} />
      </Collapse>
    </CustomizedPaper>
  );
};

export default SubscriptionCleaningBox;
