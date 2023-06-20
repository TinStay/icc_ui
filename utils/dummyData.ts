import { SetSubscriptionDocument } from "./firebase/firestore/functions";
import { Subscription } from "./types";
import {
  CleaningStatuses,
  CleaningFrequencies,
  UserRoles,
  CleaningTypes,
  Months,
  Icons
} from "./constants";
import { uuid } from "uuidv4";
import moment from "moment";


export const dummyCleaners = [
  {
    UID: uuid(),
    FirstName: "Alexandra",
    LastName: "Jones",
    ImageURL:
      "https://www.resumeviking.com/wp-content/uploads/2019/07/Cleaning-lady-profile-photo.jpg",
    PhoneNumber: "(+31) 6 44244032",
    Role: UserRoles.CLEANER,
  },
  {
    UID: uuid(),
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
    UID: uuid(),
    FirstName: "Martin",
    LastName: "Staykov",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2Ftinstay.jpg?alt=media&token=37ef4613-5804-4a03-91cc-37f03f442930",
    PhoneNumber: "(+359) 887066622",
    Role: UserRoles.SUPERADMIN,
  },
  {
    UID: uuid(),
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

export const airbnbCleaners = [
  {
    UID: uuid(),
    FirstName: "Sara",
    LastName: "Daniels",
    ImageURL:
      "https://www.resumeviking.com/wp-content/uploads/2019/07/Cleaning-lady-profile-photo.jpg",
    PhoneNumber: "(+359) 887066622",
    Role: UserRoles.USER,
  },
];
export const airbnbManagers = [
  {
    UID: uuid(),
    FirstName: "Martin",
    LastName: "Staykov",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2Ftinstay.jpg?alt=media&token=37ef4613-5804-4a03-91cc-37f03f442930",
    PhoneNumber: "(+359) 887066622",
    Role: UserRoles.SUPERADMIN,
  },
  {
    UID: uuid(),
    FirstName: "Zoltan",
    LastName: "Hajnal",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2FzoltanImg.png?alt=media&token=937e64ce-ebbb-40dd-a7cd-24e891e55c8e",
    PhoneNumber: "(+31) 644244032",
    Role: UserRoles.SUPERADMIN,
  },
];

const airbnbCleanings = [
  {
    ID: uuid(),
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Status: CleaningStatuses.FINISHED,
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-09"),
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
    Status: CleaningStatuses.FINISHED,
    Hours: 1,
    Address: null,
    Date: new Date("2023-06-12"),
    Time: {
      From: "11:00",
      To: "12:00",
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
    Status: CleaningStatuses.FINISHED,
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-15"),
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
    Status: CleaningStatuses.FINISHED,
    Hours: 1,
    Address: null,
    Date: new Date("2023-06-20"),
    Time: {
      From: "11:00",
      To: "12:00",
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
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-22"),
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
    Status: CleaningStatuses.UPCOMING,
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-23"),
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
    Status: CleaningStatuses.UPCOMING,
    Hours: 1,
    Address: null,
    Date: new Date("2023-06-24"),
    Time: {
      From: "11:00",
      To: "12:00",
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
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-25"),
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
    Status: CleaningStatuses.UPCOMING,
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-26"),
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
    Status: CleaningStatuses.UPCOMING,
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-27"),
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
    Status: CleaningStatuses.UPCOMING,
    Hours: 2,
    Address: null,
    Date: new Date("2023-06-28"),
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
];


export const subscriptionDataAirbnbKruisstraat130: Subscription = {
  ID: "DEJzcxkug21eLriQdOje",
  CreatedAt: new Date(),
  UpdatedAt: new Date(),
  Address: {
    Street: "Kruisstraat",
    StreetNumber: "130",
    PostalCode: "5612 CM",
    City: "Eindhoven",
    Country: "Netherlands",
    Addition: "",
  },
  SubscriptionType: "Deluxe",
  MonthlyHours: 20,
  CleaningFrequency: CleaningFrequencies.WEEKLY,
  Cleaners: airbnbCleaners,
  Managers: airbnbManagers,
  AllCleanings: {
    "2023": {
      [Months.JUN]: [...airbnbCleanings],
    },
  },
  AllCleaningTypes: [CleaningTypes.HOUSECLEANING, CleaningTypes.DEEPCLEANING],
  DefaultCleaningTypes: [CleaningTypes.HOUSECLEANING],
  DefaultPriority: "Beds & Kitchen",
  Notes: ``,
  Links: [
    {
      To: "https://www.evernote.com/shard/s317/sh/3347f1ac-af2b-58fd-9871-3efb48d06c2c/0xMYjfFSMPPvuH_wU64rhbanMoqffSqBAglaVAhRjotcDsZsH34ZiI-fNQ",
      Label: "View Checklist",
      Icon: Icons.NOTES
    },
    {
      To: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjZ1cHZ1OG1qMTRvNGoxb2loZzVpYTBvamkgYjZiZjI4NzEzYjQ4MjY1NzY4N2NlNTU3NDE2MjUyMzU1OTEyYWI4MDNlNGYzNmI5OTExZTMzZDRjMjYwOTllZEBn&tmsrc=b6bf28713b482657687ce557416252355912ab803e4f36b9911e33d4c26099ed%40group.calendar.google.com",
      Label: "Open Google Calendar",
      Icon: Icons.GOOGLECALENDAREVENT
    },
  ],
  Users: [""],
  ActivationCode: "13076",
};

// const airbnbCleaningsNeunen114 = [
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.FINISHED,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-09"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.FINISHED,
//     Hours: 1,
//     Address: null,
//     Date: new Date("2023-06-12"),
//     Time: {
//       From: "11:00",
//       To: "12:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.FINISHED,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-15"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.FINISHED,
//     Hours: 1,
//     Address: null,
//     Date: new Date("2023-06-20"),
//     Time: {
//       From: "11:00",
//       To: "12:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-22"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-23"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 1,
//     Address: null,
//     Date: new Date("2023-06-24"),
//     Time: {
//       From: "11:00",
//       To: "12:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-25"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-26"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-27"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
//   {
//     ID: uuid(),
//     CreatedAt: new Date(),
//     UpdatedAt: new Date(),
//     Status: CleaningStatuses.UPCOMING,
//     Hours: 2,
//     Address: null,
//     Date: new Date("2023-06-28"),
//     Time: {
//       From: "11:00",
//       To: "13:00",
//     },
//     CleaningTypes: [],
//     Notes: "",
//     Priority: "",
//     Cleaners: [],
//     Managers: [],
//   },
// ];

// export const subscriptionDataAirbnbNuenen114: Subscription = {
//   ID: "DEJzcxkug21eLriQdOje",
//   CreatedAt: new Date(),
//   UpdatedAt: new Date(),
//   Address: {
//     Street: "Europalaan", 
//     StreetNumber: "114",
//     PostalCode: "5672 AL",
//     City: "Nuenen",
//     Country: "Netherlands",
//     Addition: "",
//   },
//   SubscriptionType: "Standard",
//   MonthlyHours: 15,
//   CleaningFrequency: CleaningFrequencies.WEEKLY,
//   Cleaners: airbnbCleaners,
//   Managers: airbnbManagers,
//   AllCleanings: {
//     "2023": {
//       [Months.JUN]: [...airbnbCleaningsNeunen114],
//     },
//   },
//   AllCleaningTypes: [CleaningTypes.HOUSECLEANING, CleaningTypes.DEEPCLEANING],
//   DefaultCleaningTypes: [CleaningTypes.HOUSECLEANING],
//   DefaultPriority: "Beds & Kitchen",
//   Notes: ``,
//   Links: [
//     {
//       To: "https://www.evernote.com/shard/s317/sh/3347f1ac-af2b-58fd-9871-3efb48d06c2c/0xMYjfFSMPPvuH_wU64rhbanMoqffSqBAglaVAhRjotcDsZsH34ZiI-fNQ",
//       Label: "View Checklist",
//       Icon: Icons.NOTES
//     },
//     {
//       To: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjZ1cHZ1OG1qMTRvNGoxb2loZzVpYTBvamkgYjZiZjI4NzEzYjQ4MjY1NzY4N2NlNTU3NDE2MjUyMzU1OTEyYWI4MDNlNGYzNmI5OTExZTMzZDRjMjYwOTllZEBn&tmsrc=b6bf28713b482657687ce557416252355912ab803e4f36b9911e33d4c26099ed%40group.calendar.google.com",
//       Label: "Open Google Calendar",
//       Icon: Icons.GOOGLECALENDAREVENT
//     },
//   ],
//   Users: [""],
//   ActivationCode: "13076",
// };
