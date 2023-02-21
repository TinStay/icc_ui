import React from "react";
import { Box, Badge, Text, useMantineTheme, MantineTheme } from "@mantine/core";
import { CleaningType } from "@/types";
import { CleaningTypes } from "@/constants";
import { useMediaQuery } from "@mantine/hooks";
import { getColorForType } from "@/helpers";

const CleaningTypeChip = ({ type, readOnly }) => {
  const theme: MantineTheme = useMantineTheme();

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
