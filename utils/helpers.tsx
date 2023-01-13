import { useMantineTheme } from "@mantine/core";

export const GetBackgroundColorForTheme = () => {
  const theme = useMantineTheme();
  return theme.colorScheme === "light" ? theme.colors.backgroundWhite : "";
};
