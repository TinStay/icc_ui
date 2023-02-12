import React from "react";
import { Box } from "@mantine/core";
import SubscriptionCleaningBox from "./SubscriptionCleaningBox";

// TODO: ADD typescript types props -> Subscriptions + Single cleanings
const CleaningsList = ({ subscriptions }) => {
  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      {subscriptions &&
        subscriptions.map((subscription) => (
          <SubscriptionCleaningBox
            subscriptionData={subscription}
            key={subscription}
          />
        ))}
    </Box>
  );
};

export default CleaningsList;
