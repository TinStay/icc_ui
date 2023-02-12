import React from "react";
// Components
import CleaningTypeChip from "./CleaningTypeChip";

// Types
import { CleaningType } from "@/types";

// Mantine
import { Box } from "@mantine/core";

interface Props {
  types: CleaningType[];
}

const CleaningTypesBadgeList = ({ types }: Props) => {
  return (
    <Box>
      {types &&
        types.map((type) => (
          <CleaningTypeChip key={type} type={type} readOnly={true} />
        ))}
    </Box>
  );
};

export default CleaningTypesBadgeList;
