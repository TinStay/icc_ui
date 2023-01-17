import React, { useState } from "react";
import { getAllUserSubscriptions } from "../utils/firebase/firestore/functions";

// Next
import { NextPage } from "next";
import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";

// Components
import Loader from "../components/elements/general/Loader";
import Navbar from "@/sections/navbar/Navbar";
import EnterCleaningCodeModal from "@/sections/dashboard/EnterCleaningCodeModal";

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
} from "@mantine/core";
import { GetBackgroundColorForTheme } from "@/helpers";

interface Props {}

const Dashboard: NextPage<Props> = () => {
  const [showModal, setShowModal] = useState(false);

  const theme = useMantineTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: GetBackgroundColorForTheme(),
      }}
    >
      <Navbar />

      <Container>
        <Flex justify="space-between" align="center" mb="20px">
          <Title>My cleanings</Title>
          <Button onClick={() => setShowModal(true)}>Add cleaning</Button>
        </Flex>
        <Paper shadow="xs" radius="lg" p="xl">
          <Center>
            <Text c="dimmed">You have no cleanings yet.</Text>
          </Center>
        </Paper>
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

// export async function getServerSideProps() {
//   let query = await getAllUserSubscriptions();
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
