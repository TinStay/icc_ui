import React, { useState } from "react";
import {
  Box,
  Drawer,
  Title,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import SubscriptionCleaningBox from "./SubscriptionCleaningBox";
import CleaningDetails from "@/elements/cleanings/subscriptions/CleaningDetails";

import { Cleaning, Subscription } from "@/types";

// TODO: ADD typescript types props -> Subscriptions + Single cleanings
const CleaningsList = ({ subscriptions }) => {
  // State
  const [showCleaningDetails, setShowCleaningDetails] =
    useState<boolean>(false);
  const [activeCleaning, setActiveCleaning] = useState<Cleaning | null>(null);
  const [targetSubscription, setTargetSubscription] =
    useState<Subscription | null>(null);

  const theme: MantineTheme = useMantineTheme();

  const onOpenCleaningDetails = (cleaning, subscription) => {
    setActiveCleaning(cleaning);
    setShowCleaningDetails(true);
    setTargetSubscription(subscription)
  };

  return (
    <Box>
      {subscriptions &&
        subscriptions.map((subscription) => (
          <SubscriptionCleaningBox
            subscriptionData={subscription}
            showCleaningDetails={(cleaning) =>
              onOpenCleaningDetails(cleaning, subscription)
            }
            key={subscription}
          />
        ))}

      {/* Cleaning details drawer */}
      <Drawer
        opened={showCleaningDetails}
        onClose={() => setShowCleaningDetails(false)}
        title={<Title order={4}>Cleaning details</Title>}
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
        <CleaningDetails cleaning={activeCleaning} subscription={targetSubscription}/>
      </Drawer>
    </Box>
  );
};

export default CleaningsList;
