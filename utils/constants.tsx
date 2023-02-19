import { HeaderSearchLink, CleaningStatus } from "./types";

// Firestore
export const FirestoreCollections = {
  USERS: "users",
  SUBSCRIPTIONS: "subscriptions",
};

// App support for cleaning types
export const CleaningTypes = {
  HOUSEKEEPING: "Housekeeping",
  HOUSECLEANING: "House cleaning",
  WINDOWSCLEANING: "Windows cleaning",
  CARPETCLEANING: "Carpet cleaning",
  DEEPCLEANING: "Deep cleaning",
  GARDENCLEANING: "Garden cleaning",
  CARCLEANING: "Car cleaning",
};


// Cleaning status constants
export const CleaningStatusUpcoming: CleaningStatus = "Upcoming"
export const CleaningStatusOngoing: CleaningStatus = "Ongoing"
export const CleaningStatusFinished: CleaningStatus = "Finished"

// Header Menu
export const MenuLinks: HeaderSearchLink[] = [
  {
    link: "/dashboard",
    label: "Dashboard",
  },
  {
    link: "/account",
    label: "Account",
  },
];

export const Months = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

