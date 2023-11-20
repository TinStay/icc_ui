import { useState } from "react";
import { createStyles, Box, Text } from "@mantine/core";

const useStyles = createStyles(
  (theme, { isSelected }: { isSelected: boolean }) => ({
    box: {
      cursor: "pointer",
      padding: theme.spacing.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      border: `1px solid ${theme.colors.gray[4]}`,
      borderRadius: theme.radius.md,
      backgroundColor: isSelected ? theme.colors.blue[0] : theme.white,
      borderColor: isSelected ? theme.colors.blue[6] : theme.colors.gray[4],
      color: isSelected ? theme.colors.blue[6] : theme.black,
      "&:hover": {
        backgroundColor: theme.colors.gray[0],
      },
    },
  })
);

type SelectableBoxProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
};

const SelectableBox = ({
  icon,
  label,
  value,
  selectedValue,
  onChange,
}: SelectableBoxProps) => {
  const { classes } = useStyles({ isSelected: value === selectedValue });

  return (
    <Box
      className={classes.box}
      onClick={() => onChange(value)}
      role="button"
      aria-pressed={value === selectedValue}
    >
      {icon}
      <Text>{label}</Text>
    </Box>
  );
};

export default SelectableBox;
