import { SetSubscriptionDocument } from "./firebase/firestore/functions";
import { Subscription } from "./types";
import {
  CleaningStatuses,
  CleaningFrequencies,
  UserRoles,
  CleaningTypes,
  Months
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
    FirstName: "Martin",
    LastName: "Staykov",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2Ftinstay.jpg?alt=media&token=37ef4613-5804-4a03-91cc-37f03f442930",
    PhoneNumber: "(+359) 887066622",
    Role: UserRoles.SUPERADMIN,
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
    Status: CleaningStatuses.UPCOMING,
    Hours: 2,
    Address: null,
    Date: new Date("2023-05-01"),
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
    Date: new Date("2023-05-03"),
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
    Date: new Date("2023-05-06"),
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
    Date: new Date("2023-05-07"),
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
    Date: new Date("2023-05-12"),
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
    Date: new Date("2023-05-14"),
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
    Date: new Date("2023-05-15"),
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
    Date: new Date("2023-05-18"),
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
    Date: new Date("2023-05-19"),
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
]

export const subscriptionDataAirbnb: Subscription = {
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
      [Months.MAY]: [...airbnbCleanings],
    },
  },
  AllCleaningTypes: [
    CleaningTypes.HOUSECLEANING,
    CleaningTypes.DEEPCLEANING,
  ],
  DefaultCleaningTypes: [
    CleaningTypes.HOUSECLEANING,
  ],
  DefaultPriority: "Beds & Kitchen",
  Notes: `Before Cleaning:
  - Perform quick evaluation
    - Take pictures if anything is broken
    - Turn thermostat to 19 degrees
    - Open windows for ventilation
  - Prepare X number of bedsheets and towels
  
  First Floor:
  - Dust corners, top surfaces, and fixtures
  - Wipe down top surfaces and furniture with wet cloth
  - Empty and replace the trash bag
    - Match size of trash bag with trash bin  
  - Prepare bed sheets under the couch (if they have not been used)
  - Place dirty towels and sheets in the shed
  - Replace hand towel in kitchen
  - Vacuum clean the floor
    - Move and clean under the small table
    - Under the couch
    - Stairs to the second floor
  - Wipe hair off sink and toilet using wet cloth or paper
  - Mop the floor
  - Add toilet cleaner and leave it there
  - If needed
    - Wash and dry dishes/glasses
    - Remove used items from the fridge
    - Wipe mirrors 
    - Refill soap 
    - Scrub sink and toilet with a sponge
    - Replace or add another roll of toilet paper
    - Quickly dust again
  
  Second Floor:
  - Change bed sheets (use matching pillowcases)
  - Dust corners and surfaces
  - Wipe down surfaces with wet cloth
  - Clean bathroom 
    - Scrub sink & bathtub with sponge
    - Remove hair
  - Place dirty towels in the shed
  - Replace hand towel
  - Vacuum clean (including under the beds!)
  - Mop the floor
  - If needed
    - Clean mirrors
    - Replace toilet paper and trash bags 
    - Refill soap
  
  After Cleaning:
  - Fill the water bottle and put X number of glasses on the living room table (X - number of upcoming guests)
  - Place X number of towels on the table
  - Leave bathroom windows open for ventilation
  - Close all other windows
  - Close shed
  - Close the backdoor
  - Inspect the house for quality control and ensure everything is done
    - Take photos of beds
  - Dispose of the trash
  - Place the key in the locker
  
  Useful Info & Tips
  - Beds
    - White or black sheets go on top of mattresses
    - Gray are blankets
    - Match pillowcases
  - Trash 
    - Trash bags are under the sink
    - Put smallest bags in the smallest trashcans
  - Mopping
    - Mop corners of rooms
    - Mop dirty spots on the ground
  - Wiping
    - Avoid leaving marks on the table or furniture
  - Use the same glasses for consistency
  - Put unknown items in shed`,
  Users: [""],
  ActivationCode: "13076",
};


