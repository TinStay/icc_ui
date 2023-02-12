import firebase from "@/firebase-client";
import "firebase/firestore";
import { FirestoreCollections } from "@/constants";

export let CurrentUser = null;
const db = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((res, rej) =>
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = db.collection(FirestoreCollections.USERS).doc(user.uid);
        await docRef.get().then((doc) => {
          if (doc.exists) {
            res(doc.data()) 
          }
        });
      } else {
        console.log("error: can't get current user ");
        return rej("error: can't get current user ");
      }
    })
  );
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
