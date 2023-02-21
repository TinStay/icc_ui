import { SetSubscriptionDocument } from "./firebase/firestore/functions";
import { Subscription } from "./types";
import {
  CleaningStatusUpcoming,
  CleaningStatusOngoing,
  CleaningStatusFinished,
  CleaningFrequencyWeekly,
  CleaningFrequencyThreeTimes
} from "./constants";
import { uuid } from "uuidv4";
import moment from "moment";

export const dummyCleaners = [
  {
    ID: uuid(),
    FirstName: "Alexandra",
    LastName: "Jones",
    ImageURL:
      "https://www.resumeviking.com/wp-content/uploads/2019/07/Cleaning-lady-profile-photo.jpg",
    PhoneNumber: "(+31) 6 44244032",
  },
  {
    ID: uuid(),
    FirstName: "Sasha",
    LastName: "Gray",
    ImageURL:
      "https://theorganicmaids.com/wp-content/uploads/2019/11/maid-with-cloth-and-spray-bottle-in-hand.jpg",
    PhoneNumber: "(+359) 887066622",
  },
];

export const dummySubscriptionData: Subscription = {
  ID: "5XyskUDedaSFNE65T2Kg",
  CreatedAt: new Date(),
  UpdatedAt: new Date(),
  Address: {
    Street: "Saturnsweg",
    StreetNumber: "23",
    PostalCode: "5612FW",
    City: "Eindhoven",
    Country: "Netherlands",
    Addition: "",
  },
  SubscriptionType: "Standard",
  MonthlyHours: 15,
  CleaningFrequency: CleaningFrequencyThreeTimes,
  Cleaners: dummyCleaners,
  AllCleanings: {
    "2023": {
      February: [
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatusFinished,
          Hours: 2,
          Address: null,
          Date: new Date(moment().subtract(7, "days").calendar()),
          Time: {
            From: "11:00",
            To: "13:00",
          },
          CleaningTypes: [],
          Notes: "",
          Priority: "",
          Cleaners: [],
        },
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatusOngoing,
          Hours: 4,
          Address: null,
          Date: new Date(),
          Time: {
            From: "11:00",
            To: "14:00",
          },
          CleaningTypes: [],
          Notes: "",
          Priority: "",
          Cleaners: [],
        },
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatusUpcoming,
          Hours: 5,
          Address: null,
          Date: new Date(moment().add(7, "days").calendar()),
          Time: {
            From: "11:00",
            To: "13:30",
          },
          CleaningTypes: [],
          Notes: "",
          Priority: "",
          Cleaners: [],
        },
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatusUpcoming,
          Hours: 4,
          Address: null,
          Date: new Date(moment().add(14, "days").calendar()),
          Time: {
            From: "10:00",
            To: "12:00",
          },
          CleaningTypes: [],
          Notes: "",
          Priority: "",
          Cleaners: [],
        },
      ],
    },
  },
  AllCleaningTypes: ["Housekeeping", "Windows cleaning", "Deep cleaning"],
  DefaultCleaningTypes: ["Housekeeping", "Windows cleaning"],
  DefaultPriority: "Kitchen",
  Notes: "Clean under radiators",
  Users: ["yUUfATYNwgX5uLrdqzw6ywmowe52"],
  ActivationCode: "12345"
};
