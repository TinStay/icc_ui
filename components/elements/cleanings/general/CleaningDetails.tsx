import React, { useContext } from "react";
import moment from "moment";

import {
  Box,
  Text,
  Button,
  createStyles,
  Space,
  Title,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";

import { GetAddressString, getIconForLink } from "@/helpers";
// Types
import { Cleaning, CleaningStatus, Subscription } from "@/types";

// Components
import CleaningHoursSemiCircle from "./CleaningHoursCircle";
import CleaningTypesBadgeList from "./CleaningTypesBadgeList";
import CustomizedPaper from "@/elements/general/CustomizedPaper";
import PersonInfoBox from "./PersonInfoBox";
import CleaningStatusChip from "./CleaningStatusChip";
import { UtilitiesContext } from "@/contexts";
import Markdown from "@/elements/general/markdown/Markdown";

const useStyles = createStyles((theme) => ({
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
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

  const { isDesktopView } = useContext(UtilitiesContext);

  // Display values
  const startTime = cleaning?.Time.From || "";
  const endTime = cleaning?.Time.To || "";
  const date =
    moment(cleaning?.Date?.toDate()).format("DD.MM.YYYY (dddd)") || "";
  const status: CleaningStatus = cleaning?.Status;
  const priority = cleaning?.Priority || subscription.DefaultPriority;
  const notes = cleaning?.Notes || subscription.Notes;
  const links = subscription.Links;

  const cleaningTypes =
    (cleaning?.CleaningTypes.length > 0 && cleaning.CleaningTypes) ||
    subscription.DefaultCleaningTypes;

  const cleaners =
    (cleaning?.Cleaners.length > 0 && cleaning.Cleaners) ||
    subscription.Cleaners;
  const managers =
    (cleaning?.Managers?.length > 0 && cleaning.Managers) ||
    subscription.Managers;

  const openWhatsappChat = (targetPhone) => {
    // Formatted address for text
    let address: string = encodeURIComponent(
      GetAddressString(cleaning?.Address || subscription?.Address)
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
      <Box sx={{ flexGrow: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
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
      </Box>

      {/* Other information */}
      <CustomizedPaper
        sx={{
          width: "100%",
          flexGrow: 1,
          overflowY: "auto",
          paddingRight: "10px!important",
          paddingBottom: "6px!important",
          paddingTop: "6px!important",
        }}
      >
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            paddingRight: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
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
          <Text fw={700}>Links & Resources</Text>
          <Space h="8px" />
          {links &&
            links.map((link) => (
              <Button
                component="a"
                href={link.To}
                target="_blank"
                variant="outline"
                leftIcon={getIconForLink(link.Icon)}
                sx={{marginRight: 8, marginBottom: 6}}
              >
                <Text>{link.Label}</Text>
              </Button>
            ))}

          {/* // TODO: Implement Markdown text  */}
          {/* <Markdown content={notes}/> */}
          <Space h="md" />

          {/* Cleaners */}
          <HeaderAndContent
            title={`Cleaner${cleaners.length > 0 ? "s" : ""}`}
            content={
              cleaners ? (
                cleaners.map((cleanerInfo) => (
                  <PersonInfoBox
                    person={cleanerInfo}
                    openWhatsapp={openWhatsappChat}
                    key={cleanerInfo.UID}
                  />
                ))
              ) : (
                <Text>There is no cleaner information available.</Text>
              )
            }
          />
          {/* Cleaners */}
          <HeaderAndContent
            title={`Manager${cleaners.length > 0 ? "s" : ""}`}
            content={
              managers ? (
                managers.map((managerInfo) => (
                  <PersonInfoBox
                    person={managerInfo}
                    openWhatsapp={openWhatsappChat}
                    key={managerInfo.UID}
                  />
                ))
              ) : (
                <Text>There is no manager information available.</Text>
              )
            }
          />
        </Box>
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
