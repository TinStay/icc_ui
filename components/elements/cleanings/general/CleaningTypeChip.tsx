import React from "react";
import { Box, Badge, Text } from "@mantine/core";
import { CleaningType } from "@/types";
import { CleaningTypes } from "@/constants";

const CleaningTypeChip = ({ type, readOnly }) => {
  const getColorForType = (type: CleaningType) => {
    switch (type) {
      case CleaningTypes.HOUSECLEANING:
        return "indigo";
      case CleaningTypes.HOUSEKEEPING:
        return "yellow";
        break;
      case CleaningTypes.DEEPCLEANING:
        return "orange";
        break;
      case CleaningTypes.WINDOWSCLEANING:
        return "grape";
        break;
      case CleaningTypes.CARPETCLEANING:
        return "gray";
        break;
      case CleaningTypes.GARDENCLEANING:
        return "green";
        break;
      case CleaningTypes.CARCLEANING:
        return "purple";
        break;

      default:
        break;
    }
  };

  return (
    <Badge
      color={getColorForType(type)}
      variant="filled"
      size="lg"
      radius="md"
      my="5px"
      mx="4px"
      sx={{ textTransform: "capitalize" }}
    >
      <Text sx={{ fontWeight: 600 }}> {type}</Text>
    </Badge>
  );
};

export default CleaningTypeChip;
