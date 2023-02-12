import React, { useState, useContext, useEffect } from "react";
import { getAllUserSubscriptions } from "../utils/firebase/firestore/functions";
import { CurrentUser, getCurrentUser } from "@/firebase/auth/variables";

// Context
import { ConnectedUserContext } from "@/contexts";

// Next
import { NextPage } from "next";
import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";

// Components
import Loader from "../components/elements/general/Loader";
import Navbar from "@/sections/navbar/Navbar";
import EnterCleaningCodeModal from "@/sections/dashboard/EnterCleaningCodeModal";
import CleaningsList from "@/sections/dashboard/cleanings/CleaningsList";
import SubscriptionCleaningBox from "@/sections/dashboard/cleanings/SubscriptionCleaningBox";

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
} from "@mantine/core";
import { GetBackgroundColorForTheme } from "@/helpers";
import { IconPlus } from "@tabler/icons";

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

interface Props {}

const Dashboard: NextPage<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const { connectedUser } = useContext(ConnectedUserContext);

  const getSubscriptions = async () => {
    if (connectedUser) {
      let documents = await getAllUserSubscriptions(connectedUser.uid);

      setSubscriptions(documents);
    }
  };

  // Fetch subscriptions
  useEffect(() => {
    getSubscriptions();
  }, [connectedUser]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: GetBackgroundColorForTheme(),
      }}
    >
      <Navbar />

      <Container>
        <Flex className={classes.subHeader}>
          <Title>My cleanings</Title>
          <Button
            className={classes.subHeaderButton}
            leftIcon={<IconPlus />}
            onClick={() => setShowModal(true)}
          >
            Add New
          </Button>
        </Flex>
        {/* Main panel */}
        {subscriptions.length > 0 ? (
          <CleaningsList subscriptions={subscriptions} />
        ) : (
          // Show default message when there are no cleanings
          <Paper shadow="xs" radius="lg" p="xl">
            <Center>
              <Text c="dimmed">You have no cleanings yet.</Text>
            </Center>
          </Paper>
        )}
      </Container>

      {/* Enter cleaning code modal */}
      {showModal && (
        <EnterCleaningCodeModal
          opened={showModal}
          onClose={() => setShowModal(false)}
          title="Enter cleaning code"
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
