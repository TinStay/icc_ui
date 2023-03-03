import React from "react";
import { Box, Badge, Text } from "@mantine/core";
import { CleaningStatus } from "@/types";
import { getColorForStatus } from "@/helpers";

type Props = {
  status: CleaningStatus;
  readOnly?: boolean;
};
const CleaningStatusChip = ({ status, readOnly }: Props) => {
  return (
    <Badge
      color={getColorForStatus(status)}
      size="lg"
      radius="md"
      sx={{ textTransform: "capitalize" }}
    >
      <Text sx={{ fontWeight: 600 }}>{status}</Text>
    </Badge>
  );
};

export default CleaningStatusChip;
