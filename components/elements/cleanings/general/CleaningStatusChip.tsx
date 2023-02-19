import React from "react";
import { Box, Badge, Text } from "@mantine/core";
import { CleaningStatus } from "@/types";
import {
  CleaningStatusUpcoming,
  CleaningStatusOngoing,
  CleaningStatusFinished,
} from "@/constants";

type Props = {
  status: CleaningStatus;
  readOnly?: boolean;
};
const CleaningStatusChip = ({ status, readOnly }: Props) => {
  const getColorForType = (status: CleaningStatus) => {
    switch (status) {
      case CleaningStatusUpcoming:
        return "indigo";
      case CleaningStatusOngoing:
        return "yellow";
        break;
      case CleaningStatusFinished:
        return "green";
        break;

      default:
        return "gray";
        break;
    }
  };

  return (
    <Badge
      color={getColorForType(status)}
      size="lg"
      radius="md"
      my="5px"
      mx="4px"
      sx={{ textTransform: "capitalize" }}
    >
      <Text sx={{ fontWeight: 600 }}>{status}</Text>
    </Badge>
  );
};

export default CleaningStatusChip;
