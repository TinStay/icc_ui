import { SetSubscriptionDocument } from "./firebase/firestore/functions";
import { Subscription } from "./types";
import {
  CleaningStatuses,
  CleaningFrequencies,
  UserRoles,
  CleaningTypes,
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
    Role: UserRoles.CLEANER,
  },
  {
    ID: uuid(),
    FirstName: "Sasha",
    LastName: "Gray",
    ImageURL:
      "https://theorganicmaids.com/wp-content/uploads/2019/11/maid-with-cloth-and-spray-bottle-in-hand.jpg",
    PhoneNumber: "(+359) 887066622",
    Role: UserRoles.CLEANER,
  },
];
export const dummyManagers = [
  {
    ID: uuid(),
    FirstName: "Martin",
    LastName: "Staykov",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2Ftinstay.jpg?alt=media&token=37ef4613-5804-4a03-91cc-37f03f442930",
    PhoneNumber: "(+359) 887066622",
    Role: UserRoles.SUPERADMIN,
  },
  {
    ID: uuid(),
    FirstName: "Zoltan",
    LastName: "Hajnal",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2FzoltanImg.png?alt=media&token=937e64ce-ebbb-40dd-a7cd-24e891e55c8e",
    PhoneNumber: "(+31) 644244032",
    Role: UserRoles.SUPERADMIN,
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
  CleaningFrequency: CleaningFrequencies.THREETIMES,
  Cleaners: dummyCleaners,
  Managers: dummyManagers,
  AllCleanings: {
    "2023": {
      February: [
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatuses.FINISHED,
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
          Managers: [],
        },
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatuses.ONGOING,
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
          Managers: [],
        },
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatuses.UPCOMING,
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
          Managers: [],
        },
        {
          ID: uuid(),
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          Status: CleaningStatuses.UPCOMING,
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
          Managers: [],
        },
      ],
    },
  },
  AllCleaningTypes: [
    CleaningTypes.HOUSECLEANING,
    CleaningTypes.WINDOWSCLEANING,
    CleaningTypes.DEEPCLEANING,
  ],
  DefaultCleaningTypes: [
    CleaningTypes.HOUSECLEANING,
    CleaningTypes.WINDOWSCLEANING,
  ],
  DefaultPriority: "Kitchen & Bathrooms",
  Notes: "Clean under radiators",
  Users: ["yUUfATYNwgX5uLrdqzw6ywmowe52"],
  ActivationCode: "12345",
};
