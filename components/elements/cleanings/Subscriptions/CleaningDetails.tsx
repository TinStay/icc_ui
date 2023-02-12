import React from "react";
import moment from "moment";

import {
  Box,
  Text,
  createStyles,
  Space,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { GetAddressString } from "@/helpers";
// Types
import { Cleaning } from "@/types";

// Components
import CleaningHoursSemiCircle from "../general/CleaningHoursCircle";
import CleaningTypesBadgeList from "../general/CleaningTypesBadgeList";
import CustomizedPaper from "@/elements/general/CustomizedPaper";
import CleanerInfoBox from "../general/CleanerInfoBox";

const useStyles = createStyles((theme) => ({
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.fn.largerThan("sm")]: {},
  },
}));

type Props = {
  cleaning: Cleaning;
};

const CleaningDetails = ({ cleaning }: Props) => {
  // Styles
  const theme: MantineTheme = useMantineTheme();
  const { classes } = useStyles();

  const isDesktopView: boolean = useMediaQuery(
    `(min-width: ${theme.breakpoints.xs}px)`
  );

  // Display values
  const startTime = cleaning?.Time.From || "";
  const endTime = cleaning?.Time.To || "";
  const date =
    moment(cleaning?.Date?.toDate()).format("DD.MM.YYYY (dddd)") || "";
  const status = cleaning?.Status || "";
  const priority = cleaning?.Priority || "";
  const notes = cleaning?.Notes || "";
  const cleaners = cleaning?.Cleaners || [];

  const openWhatsappChat = (targetPhone) => {
    // Formatted address for text
    let address: string = encodeURIComponent(
      GetAddressString(cleaning?.Address)
    );

    // Format phone
    const formattedPhoneNum = targetPhone.replace(/\D/g, "");

    // Open whatsapp on a new window
    window.open(
      `https://wa.me/${formattedPhoneNum}?text=Hello,%20I'm%20texting%20you%20regarding%20a%20cleaning%20at%20${address}.`,
      "_blank"
    );
  };

  return (
    <Box className={classes.drawerContainer}>
      <Box sx={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
        {/* Start time */}
        <HeaderAndText title="Starts:" text={startTime} />

        {/* Cleaning hours */}
        <Space w={isDesktopView ? "xl" : "sm"} />
        <CleaningHoursSemiCircle>
          <Text fz="xl">{`${cleaning?.Hours}h`}</Text>
        </CleaningHoursSemiCircle>
        <Space w={isDesktopView ? "xl" : "sm"} />

        {/* End time */}
        <HeaderAndText title="Ends:" text={endTime} />
      </Box>

      {/* Cleaning types */}
      <Space h="md" />
      <Box sx={{ textAlign: "center" }}>
        <CleaningTypesBadgeList types={cleaning.CleaningTypes} />
      </Box>
      <Space h="md" />

      {/* Other information */}
      <Box sx={{ width: "100%" }}>
        <CustomizedPaper>
          {/* Status */}
          <HeaderAndText title="Status" text={status} />
          <Space h="md" />
          {/* Date */}
          <HeaderAndText title="Date" text={date} />
          <Space h="md" />

          {/* Cleaning Priority */}
          <HeaderAndText title="Priority" text={priority} />
          <Space h="md" />

          {/* Notes */}
          <HeaderAndText title="Notes" text={notes} />
          <Space h="md" />

          {/* Cleaners */}
          <HeaderAndContent
            title={`Cleaner${cleaners.length > 0 ? "s" : ""}`}
            content={
              cleaners ? (
                cleaners.map((cleanerInfo) => (
                  <CleanerInfoBox
                    cleaner={cleanerInfo}
                    openWhatsapp={openWhatsappChat}
                    key={cleanerInfo.ID}
                  />
                ))
              ) : (
                <Text>There is no cleaner information available.</Text>
              )
            }
          />
          <Space h="md" />
        </CustomizedPaper>
      </Box>
    </Box>
  );
};

const HeaderAndText = ({ title, text }) => (
  <Box sx={{ textAlign: "left", alignSelf: "end" }}>
    <Text fw={700}>{title}</Text>
    <Text>{text}</Text>
  </Box>
);

const HeaderAndContent = ({ title, content }) => (
  <Box sx={{ textAlign: "left", alignSelf: "end" }}>
    <Text fw={700}>{title}</Text>
    {content}
  </Box>
);

export default CleaningDetails;
