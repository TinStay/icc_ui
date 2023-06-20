import { useState, useEffect } from "react";
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import admin from "@/firebase-admin";
import SubscriptionsTable from "@/sections/admin/SubscriptionsTable";
import { Box, Center } from "@mantine/core";
import { getAllSubscriptions } from "@/firebase/firestore/functions";

const Admin = ({ isAdmin, decodedToken }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  // console.log("isAdmin", isAdmin);
  // console.log("decodedToken", decodedToken);

  useEffect(() => {
    getSubscriptions();
  }, []);

  const getSubscriptions = async () => {
    let subs = await getAllSubscriptions();
    setSubscriptions(subs);
  };

  console.log("subscriptions", subscriptions);
  return (
    <Box>
      <Center>
        <SubscriptionsTable data={subscriptions} />
      </Center>
    </Box>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, res }) => {
  // const token = await AuthUser.getIdToken();
  // const decodedToken = await admin.auth().verifyIdToken(token);

  // const isAdmin = !!decodedToken.admin;

  // if (typeof window === "undefined" && !isAdmin) {
  //   res.writeHead(302, { Location: "/" });
  //   res.end();

  //   return { props: {} }; // as never with Typescript
  // } else {
  //   return {
  //     props: {
  //       isAdmin: isAdmin,
  //       decodedToken: decodedToken,
  //     },
  //   };
  // }

  // let subs = await getAllSubscriptions();
  // return {
  //   props: { ...subs },
  // };
});

export default withAuthUser()(Admin);
