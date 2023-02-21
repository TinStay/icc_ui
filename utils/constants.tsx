import { HeaderSearchLink, CleaningStatus, CleaningFrequency } from "./types";

export const appVersion = "0.0.5";

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
export const CleaningStatusUpcoming: CleaningStatus = "Upcoming";
export const CleaningStatusOngoing: CleaningStatus = "Ongoing";
export const CleaningStatusFinished: CleaningStatus = "Finished";

// Cleaning frequency constants
export const CleaningFrequencyWeekly: CleaningFrequency = "Weekly";
export const CleaningFrequencyBiWeekly: CleaningFrequency = "Bi-weekly";
export const CleaningFrequencyThreeTimes: CleaningFrequency = "3 times a month";
export const CleaningFrequencyOnce: CleaningFrequency = "Once a month";
export const CleaningFrequencyMoreThanFiveTimes: CleaningFrequency =
  "More than 5 times a month";
export const CleaningFrequencyLessThanFiveTimes: CleaningFrequency =
  "Less than 5 times a month";

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
