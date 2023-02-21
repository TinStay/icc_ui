import { useMantineTheme } from "@mantine/core";
import { CleaningType } from "./types";
import { CleaningTypes } from "./constants";

export const GetBackgroundColorForTheme = () => {
  const theme = useMantineTheme();
  return theme.colorScheme === "light" ? theme.colors.backgroundWhite : "";
};

// Use address object to return string address
export const GetAddressString = (address) => {
  return `${address.Street} ${address.StreetNumber}, ${address.PostalCode}`;
};

export const getColorForType = (type: CleaningType) => {
  switch (type) {
    case CleaningTypes.HOUSECLEANING:
      return "indigo";
    case CleaningTypes.HOUSEKEEPING:
      return "yellow";
    case CleaningTypes.DEEPCLEANING:
      return "orange";
    case CleaningTypes.WINDOWSCLEANING:
      return "grape";
    case CleaningTypes.CARPETCLEANING:
      return "gray";
    case CleaningTypes.GARDENCLEANING:
      return "green";
    case CleaningTypes.CARCLEANING:
      return "purple";

    default:
      return "blue";
  }
};
