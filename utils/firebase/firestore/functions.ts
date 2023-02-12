import firebase from "@/firebase-client";
import "firebase/firestore";
import { docRef, user, now } from "@/FS-client-refs";
import { Subscription } from "@/types";
import { dummySubscriptionData } from "../../dummyData";

const db = firebase.firestore(); // mostly for transactions or batches

// functions accessed from components

export const getAllUserSubscriptions = async (uid) => {
  let subscriptions = [];

  // Fetch documents
  await db
    .collection("subscriptions")
    .where("Users", "array-contains", uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        subscriptions.push(doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting subscriptions: ", error);
    });

  return subscriptions;
};

export const getAllDocs = async (params) => {
  // access a reference
  // get data
  // process data
  // return to components
};

//example
// export const getDocByID = async (id) => {
//   const data = await docRef(id)
//     .get()
//     .then((doc) => {
//       if (doc.exists) Promise.resolve(doc.data());
//       else return Promise.reject("No such document");
//     });
//   return data;
// };

// saved registered user;s in user's collection
// check FirebaseAuth.js for this function
export const registerUser = async (uid) => {
  await user(uid).set({ uid: uid, registered: now });
};

export const setSubscriptionDocument = (docID: string, subscriptionData: Subscription) => {
  db.collection("subscriptions")
    .doc(docID)
    .set(subscriptionData)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}


  // Actions on Firestore
  // setSubscriptionDocument("5XyskUDedaSFNE65T2Kg", dummySubscriptionData)


