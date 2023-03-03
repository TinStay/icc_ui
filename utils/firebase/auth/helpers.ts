import firebase from "@/firebase-client";
import "firebase/firestore";
import { FirestoreCollections, UserRoles } from "@/constants";

import axios from "axios";
import { showNotification } from "@/helpers";
import { NotificationVariants } from "@/constants";
import { registerUser } from "../firestore/functions";
import { User } from "@/types";
import { now } from "../firestore/references";

export const onUserLogout = () => {
  // Logout
  axios
    .get("/api/logout")
    .then((res) => console.log("res", res))
    .catch((err) => console.log("err", err));
};

export let CurrentUser = null;
const db = firebase.firestore();

export const onLogout = async () => {
  await firebase
    .auth()
    .signOut()
    .catch((error) => {
      showNotification({
        title: error.message,
        message: "Something went wrong when logging out.",
        variant: NotificationVariants.DANGER,
      });
    });
};

export const getCurrentUser = () => {
  return new Promise((res, rej) =>
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = db.collection(FirestoreCollections.USERS).doc(user.uid);
        await docRef.get().then((doc) => {
          if (doc.exists) {
            res(doc.data());
          }
        });
      } else {
        console.log("error: can't get current user ");
        return rej("error: can't get current user ");
      }
    })
  );
};

export const createAccountWithEmailAndPassword = (formValues) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(formValues.email, formValues.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // Compile form data of newly created user and save it to Firestore
      let userData: User = null;
      if (user) {
        userData = {
          UID: user.uid || "",
          Registered: now,
          LastUpdated: now,
          Email: user.email || "",
          FirstName: formValues.firstName || "",
          LastName: formValues.lastName || "",
          ImageURL: "",
          PhoneNumber: formValues.phoneNumber || "",
          Role: UserRoles.USER,
        };
      }
      // Register user in Firestore
      registerUser(user.uid, userData);
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.log("error", error);
    });
};
export const loginWithEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.log("error", error);
    });
};

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     CurrentUser = user;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     return;
//   }
//   return;
// });
