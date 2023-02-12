import React from "react";
import { Badge,  } from "@mantine/core";

interface Props {
  type: string
}

const SubscriptionTypeBadge = ({ type }: Props) => {
  return (
    <Badge
    variant="gradient"
    gradient={{ from: "blue", to: "cyan" }}
    size="lg"
  >
    {type} Subscription
  </Badge>
  );
};

export default SubscriptionTypeBadge;
