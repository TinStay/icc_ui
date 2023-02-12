import React from "react";
import {
  Box,
  useMantineTheme,
  Text,
  createStyles,
  Space,
  Image,
  Button,
} from "@mantine/core";
import { Cleaner } from "@/types";

import ReactWhatsapp from "react-whatsapp";
// const useStyles = createStyles((theme) => ({
//   subHeader: {

//     [theme.fn.largerThan("xs")]: {

//     },
//   },

// }));

interface Props {
  cleaner: Cleaner;
  openWhatsapp: (formattedPhoneNumber) => void;
}

const CleanerInfoBox = ({ cleaner, openWhatsapp }: Props) => {
  const theme = useMantineTheme();
  // const { classes } = useStyles();
  

  const cleanerFullName = `${cleaner.FirstName} ${cleaner.LastName} `;
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Profile photo */}
        <Image
          width={70}
          height={70}
          src={cleaner?.ImageURL}
          alt="Cleaner"
          withPlaceholder
          radius="xl"
        />
        <Space w="12px" />
        <Box>
          {/* Name */}
          <Text fz="sm" fw={700} mb="3px">
            {cleanerFullName}
          </Text>

          {/* Phone number */}
          <Text fz="sm" c="dimmed">{cleaner.PhoneNumber}</Text>
        </Box>
      </Box>

      <Button onClick={() => openWhatsapp(cleaner.PhoneNumber)}>
        Message
      </Button>
    </Box>
  );
};

export default CleanerInfoBox;
