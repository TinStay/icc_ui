import { useMantineTheme } from "@mantine/core";

export const GetBackgroundColorForTheme = () => {
  const theme = useMantineTheme();
  return theme.colorScheme === "light" ? theme.colors.backgroundWhite : "";
};


// Use address object to return string address
export const GetAddressString = (address) => {
  return `${address.Street} ${address.StreetNumber}, ${address.PostalCode}`
};
