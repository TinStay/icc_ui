import React, { useState, useContext } from "react";

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
  Tooltip,
  Text,
  Title,
  Box,
  Flex,
  createStyles,
  useMantineTheme,
  MantineTheme,
  Collapse,
  Space,
} from "@mantine/core";
import { IconSortAscending2 } from "@tabler/icons";
import { UtilitiesContext } from "@/contexts";

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
  showCleaningDetails: (cleaning, subscription) => void;
};

const SubscriptionCleaningBox = ({
  subscriptionData,
  showCleaningDetails,
}: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const theme: MantineTheme = useMantineTheme();

  const { isDesktopView } = useContext(UtilitiesContext);

  // Formatted address to display
  let address: string = GetAddressString(subscriptionData?.Address);

  const { classes } = useStyles();

  console.log("isDesktopView", isDesktopView)
  return (
    <CustomizedPaper
      p={isDesktopView ? "xl" : "sm"}
      radius="xl"
      shadow="lg"
      sx={{
        position: "relative",
        // maxHeight: "600px",
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

          <Flex
            gap="md"
            direction={isDesktopView ? "row" : "column"}
            p={isDesktopView ? "0" : "md"}
            sx={{
              marginTop: theme.spacing.sm,
            }}
          >
            {/* Frequency */}
            <IconAndText
              icon={<IconRotateRectangle />}
              text={subscriptionData?.CleaningFrequency}
              tooltipText="Cleaning frequency"
            />

            {/* Priority */}
            <IconAndText
              icon={<IconSortAscending2 />}
              text={subscriptionData?.DefaultPriority}
              tooltipText="Cleaning priority"
            />

            {/* Cleaners */}
            <IconAndText
              icon={<IconUsers />}
              text={subscriptionData?.Cleaners.length}
              tooltipText="Number of cleaners"
            />
          </Flex>
        </Box>
      </Box>

      {/* Detailed information */}
      <Collapse in={showDetails}>
        <SubscriptionDetails
          subscription={subscriptionData}
          showCleaningDetails={(cleaning) =>
            showCleaningDetails(cleaning, subscriptionData)
          }
        />
      </Collapse>
    </CustomizedPaper>
  );
};

export default SubscriptionCleaningBox;

const IconAndText = ({ icon, text, tooltipText }) => {
  const theme: MantineTheme = useMantineTheme();
  return (
    <Tooltip
      label={tooltipText}
      color={theme.colors.primaryBlue[0]}
      position="bottom"
      withArrow
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px",
          color: theme.colors.primaryBlue,
        }}
      >
        {icon}
        <Text fz="md" ml={5} sx={{ color: theme.colors.darkBlueText }}>
          {text}
        </Text>
      </Box>
    </Tooltip>
  );
};
