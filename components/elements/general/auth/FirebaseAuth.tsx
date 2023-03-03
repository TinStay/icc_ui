import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "@/firebase-client";
import "firebase/auth";
import { now } from "@/firebase/firestore/references";
import { registerUser } from "@/FS-client-functions";
import { User } from "@/types";
import { UserRoles } from "@/constants";

// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.

const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: "select_account",
      },
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: "select_account",
      },
    },
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: (authResult) => {
      // remove this if you don't want to save in user's collection
      if (authResult.additionalUserInfo.isNewUser) {
        let userData: User = null;

        // Construct base data for user
        if (authResult.user) {
          userData = {
            UID: authResult.user.uid || "",
            Registered: now,
            LastUpdated: now,
            ImageURL: authResult.user.photoURL || "",
            Email: authResult.user.email || "",
            FirstName: authResult.user.displayName.split(" ")[0] || "",
            LastName: authResult.user.displayName.split(" ")[1] || "",
            PhoneNumber: authResult.user.phoneNumber || "",
            Role: UserRoles.USER,
          };
        }
        registerUser(authResult.user.uid, userData);
      }

      // Don't automatically redirect. We handle redirecting based on
      // auth state in withAuthComponent.js.
      return false;
    },
  },
};

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
