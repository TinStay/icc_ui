import React from "react";
import { Box, Badge, Text, useMantineTheme, MantineTheme } from "@mantine/core";
import { CleaningType } from "@/types";
import { CleaningTypes } from "@/constants";
import { useMediaQuery } from "@mantine/hooks";

const CleaningTypeChip = ({ type, readOnly }) => {
  const theme: MantineTheme = useMantineTheme();

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
  const isDesktopView: boolean = useMediaQuery(
    `(min-width: ${theme.breakpoints.xs}px)`
  );
  return (
    <Badge
      color={getColorForType(type)}
      variant="filled"
      size="lg"
      radius="md"
      my="5px"
      m={isDesktopView ? "0 6px 0 0 " : "0 3px"}
      sx={{ textTransform: "capitalize" }}
    >
      <Text sx={{ fontWeight: 600 }}> {type}</Text>
    </Badge>
  );
};

export default CleaningTypeChip;
