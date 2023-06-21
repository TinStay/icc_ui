import React, { useContext } from "react";
import {
  Box,
  useMantineTheme,
  Text,
  CopyButton,
  ActionIcon,
  createStyles,
  Tooltip,
  Space,
  Image,
  Button,
} from "@mantine/core";
import { User } from "@/types";
import { IconCopy, IconCheck, IconBrandWhatsapp } from "@tabler/icons";
import { UtilitiesContext } from "@/contexts";


const useStyles = createStyles((theme) => ({
  whatsappButton: {
    // background: "-webkit-linear-gradient(to right, #128C7E, #25D366)",
    background: "linear-gradient(to bottom, #5bd266, #25b43c)",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    border: "0",
    [":hover"]: {
    },
    [theme.fn.largerThan("sm")]: {},
  },
}));

interface Props {
  person: User;
  openWhatsapp: (formattedPhoneNumber) => void;
}

const PersonInfoBox = ({ person, openWhatsapp }: Props) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { isDesktopView } = useContext(UtilitiesContext);
  const personFullName = `${person.FirstName} ${person.LastName} `;
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
          width={60}
          height={60}
          src={person?.ImageURL}
          alt="Cleaner"
          withPlaceholder
          radius="xl"
        />
        <Space w="12px" />
        <Box>
          {/* Name */}
          <Text fz="sm" fw={700} mb="3px">
            {personFullName}
          </Text>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Phone number */}
            <Text fz="sm" c="dimmed" mr={5}>
              {person.PhoneNumber}
            </Text>
            <CopyButton value={person.PhoneNumber} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="top"
                  color="blue"
                >
                  <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                    {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </Box>
        </Box>
      </Box>

      <Button
        onClick={() => openWhatsapp(person.PhoneNumber)}
        className={classes.whatsappButton}
      >
        <IconBrandWhatsapp />
        {isDesktopView && <Box ml={5}>Chat</Box>}
      </Button>
    </Box>
  );
};

export default PersonInfoBox;
