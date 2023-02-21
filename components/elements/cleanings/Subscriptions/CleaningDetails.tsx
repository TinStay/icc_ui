import React from "react";
import moment from "moment";

import {
  Box,
  Text,
  createStyles,
  Space,
  Title,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { GetAddressString } from "@/helpers";
// Types
import { Cleaning, CleaningStatus, Subscription } from "@/types";

// Components
import CleaningHoursSemiCircle from "../general/CleaningHoursCircle";
import CleaningTypesBadgeList from "../general/CleaningTypesBadgeList";
import CustomizedPaper from "@/elements/general/CustomizedPaper";
import CleanerInfoBox from "../general/CleanerInfoBox";
import CleaningStatusChip from "../general/CleaningStatusChip";

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
  subscription: Subscription;
};

const CleaningDetails = ({ cleaning, subscription }: Props) => {
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
  const status: CleaningStatus = cleaning?.Status;
  const priority = cleaning?.Priority || subscription.DefaultPriority;
  const notes = cleaning?.Notes || subscription.Notes;
  const cleaningTypes =
    (cleaning?.CleaningTypes.length > 0 && cleaning.CleaningTypes) ||
    subscription.DefaultCleaningTypes;
  const cleaners =
    (cleaning?.Cleaners.length > 0 && cleaning?.Cleaners) ||
    subscription.Cleaners;

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
          <Title order={2}>{`${cleaning?.Hours}h`}</Title>
        </CleaningHoursSemiCircle>
        <Space w={isDesktopView ? "xl" : "sm"} />

        {/* End time */}
        <HeaderAndText title="Ends:" text={endTime} />
      </Box>

      {/* Cleaning types */}
      <Space h="md" />
      <Box sx={{ textAlign: "center" }}>
        <CleaningTypesBadgeList types={cleaningTypes} />
      </Box>
      <Space h="md" />

      {/* Other information */}
      <CustomizedPaper sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Date */}
          <HeaderAndText title="Date" text={date} />

          {/* Status */}
          <CleaningStatusChip status={status} />
        </Box>
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
      </CustomizedPaper>
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
