import React from "react";
import { Badge,  } from "@mantine/core";
import { getGradientForSubscriptionType } from "@/helpers"; 
import { SubscriptionType } from "@/types";

interface Props {
  type: SubscriptionType
}

const SubscriptionTypeBadge = ({ type }: Props) => {
  return (
    <Badge
    variant="gradient"
    gradient={getGradientForSubscriptionType(type)}
    size="lg"
  >
    {type} Subscription
  </Badge>
  );
};

export default SubscriptionTypeBadge;
