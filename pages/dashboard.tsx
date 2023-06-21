import React, { useState, useContext, useEffect } from "react";
import { getAllUserSubscriptions } from "../utils/firebase/firestore/functions";

// Context
import { ConnectedUserContext, UtilitiesContext } from "@/contexts";

// Next
import { NextPage } from "next";
import { withAuthUser, AuthAction } from "next-firebase-auth";

// Components
import Loader from "../components/elements/general/Loader";
import Navbar from "@/sections/navbar/Navbar";
import EnterCleaningCodeModal from "@/sections/dashboard/components/EnterCleaningCodeModal";
import CleaningsList from "@/sections/dashboard/cleanings/CleaningsList";

import { MenuLinks } from "@/constants";
// Mantine
import {
  Box,
  useMantineTheme,
  Paper,
  Title,
  Text,
  Container,
  Flex,
  Button,
  Center,
  createStyles,
  Loader as MantineLoader,
  Skeleton,
} from "@mantine/core";

import { GetBackgroundColorForTheme } from "@/helpers";
import { IconPlus } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    [theme.fn.largerThan("xs")]: {
      flexDirection: "row",
      mb: "10px",
    },
  },

  subHeaderButton: {
    // width: "80%",
    margin: "0 ",
    padding: "0 12px",
    [theme.fn.largerThan("xs")]: {
      width: "auto",
      margin: "0",
    },
  },
}));

interface Props {}

const Dashboard: NextPage<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const { connectedUser } = useContext(ConnectedUserContext);

  const getSubscriptions = async () => {
    if (connectedUser) {
      setLoading(true);

      let documents = [];
      if (connectedUser.UID)
        documents = await getAllUserSubscriptions(connectedUser.UID);

      setSubscriptions(documents);
      setLoading(false);
    }
  };

  // Fetch subscriptions
  useEffect(() => {
    getSubscriptions();
  }, [connectedUser]);

  const { isDesktopView } = useContext(UtilitiesContext);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: GetBackgroundColorForTheme(),
      }}
    >
      <Navbar links={MenuLinks} />

      <Container sx={{ height: "100%" }}>
        <Flex className={classes.subHeader}>
          <Title>My cleanings</Title>
          <Button
            className={classes.subHeaderButton}
            rightIcon={<IconPlus />}
            onClick={() => setShowModal(true)}
          >
            Add
          </Button>
        </Flex>

        <Box sx={{ marginTop: "1.8rem" }}>
          {loading ? (
            <Skeleton visible={loading} height={150} radius="xl" />
          ) : (
            <Box>
              {/* Main panel */}
              {subscriptions.length > 0 ? (
                <CleaningsList subscriptions={subscriptions} />
              ) : (
                // Show default message when there are no cleanings
                <Paper shadow="xs" radius="xl" p="xl" sx={{ height: 150 }}>
                  <Center h={100}>
                    <Text c="dimmed">You have no cleanings yet</Text>
                  </Center>
                </Paper>
              )}
            </Box>
          )}
          {/* Loader */}
          {loading && <MantineLoader sx={{ margin: "20px auto" }} />}
        </Box>
      </Container>

      {/* Enter cleaning code modal */}
      {showModal && (
        <EnterCleaningCodeModal
          opened={showModal}
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            setTimeout(() => getSubscriptions(), 500);

            setShowModal(false);
          }}
          title="Enter activation code"
        />
      )}
    </Box>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Loader,
  authPageURL: "/login",
})(Dashboard);

// Dashboard.getInitialProps = async () => {
//   //   let query = null
//   // // const AuthUser = await useAuthUser()
//   const { connectedUser } = useContext(ConnectedUserContext);
//   console.log("connectedUser", connectedUser);
//   //   const AuthUser = await getCurrentUser()

//   // if(AuthUser){
//   //   query = await getAllUserSubscriptions(AuthUser.id);

//   // }

//   return {
//     user: connectedUser, // will be passed to the page component as props
//   };
// };
