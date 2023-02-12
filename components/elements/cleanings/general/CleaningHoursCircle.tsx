import React from "react";
import { Box, useMantineTheme, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  subHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    [theme.fn.largerThan("xs")]: {
      flexDirection: "row",
      mb: "10px",
    },
  },

  subHeaderButton: {
    width: "80%",
    margin: "0 auto",
    [theme.fn.largerThan("xs")]: {
      width: "auto",
      margin: "0",
    },
  },
}));

interface Props {
  children: JSX.Element[] | JSX.Element
}

const CleaningHoursSemiCircle = ({ children }: Props) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        width: "180px",
        height: "100px",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
        border: `5px solid ${theme.colors.primaryBlue}`,
        borderBottom: "0",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: "10px",
          width: "80%",
          color: theme.colors.darkBlueText,
          fontWeight: 600,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CleaningHoursSemiCircle;
