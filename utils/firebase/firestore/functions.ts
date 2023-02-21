import firebase from "@/firebase-client";
import "firebase/firestore";
import { docRef, user, now } from "@/FS-client-refs";
import { Subscription } from "@/types";
import { getCurrentUser } from "../auth/variables";
import { dummySubscriptionData } from "../../dummyData"; 
const db = firebase.firestore(); // mostly for transactions or batches
const subscriptionsRef = db.collection("subscriptions");

// functions accessed from components

export const getAllUserSubscriptions = async (uid) => {
  let subscriptions = [];

  // Fetch documents
  await subscriptionsRef
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

export const SetSubscriptionDocument = (
  docID: string,
  subscriptionData: Subscription
) => {
  subscriptionsRef
    .doc(docID)
    .set(subscriptionData)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export const ActivateSubscription = (code: number) => {
  return new Promise((resolve, reject) => {
    subscriptionsRef
      .where("ActivationCode", "==", `${code}`)
      .get()
      .then(async (snapshot) => {
        if (snapshot.empty)
          return reject(new Error(`Activation code is invalid`));

        if (snapshot.docs.length > 1)
          return console.log(
            "Activation code found in more than one subscriptions"
          );

        // Target subscription
        const targetSub = snapshot.docs[0].data();
        if (!targetSub.ID) reject(new Error(`Subscription not found`));

        // Get current user id
        await getCurrentUser().then((user: any) => {
          // Add user to "Users" array in subscription
          subscriptionsRef.doc(targetSub.ID).update({
            Users: [...targetSub.Users, user.uid],
          }).catch(err => reject(new Error(`Failed to add subscription: ${err}`)))
        });

        return resolve("Successfully added subscription")
      })
      .catch((error) => {
        reject(new Error(`Error activating subscription: ${error}`));
      });
  });
};

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Actions on Firestore
// SetSubscriptionDocument("5XyskUDedaSFNE65T2Kg", dummySubscriptionData)

// Cheetsheet
// 3.2. Modify a Part of the Document
// db.collection("todos").doc("afdghrujfkhotdf").update({
//   task2: "follow LucidMach on twitter"
// });
