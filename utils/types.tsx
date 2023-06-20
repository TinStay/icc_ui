import firebase from "@/firebase-client";

// Cleaning & Subscription
export interface Subscription {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Address: JobAddress;
  SubscriptionType: SubscriptionType;
  MonthlyHours: number;
  CleaningFrequency: CleaningFrequency;
  AllCleanings: CleaningsPerYear;
  AllCleaningTypes: CleaningType[];
  DefaultCleaningTypes: CleaningType[];
  DefaultPriority: string;
  Notes: string;
  Links: Link[];
  Cleaners: User[] | [];
  Managers: User[] | [];
  Users: string[];
  ActivationCode: string;
}

export interface Link {
  To: string;
  Label: string;
  // TODO: Change the any
  Icon: any;
}
export interface CleaningsPerYear {
  [Year: string]: MonthlyCleanings;
}

export interface MonthlyCleanings {
  [Month: string]: Cleaning[];
}

export interface Cleaning {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Status: CleaningStatus;
  Address: JobAddress | null;
  Hours: number;
  Date: any;
  Time: {
    From: string;
    To: string;
  };
  CleaningTypes: CleaningType[];
  Notes: string;
  Priority: string;
  Cleaners: User[] | [];
  Managers: User[] | [];
}

export interface JobAddress {
  Street: string;
  StreetNumber: string;
  PostalCode: string;
  City: string;
  Country: string;
  Addition?: string;
}

export interface User {
  UID: string;
  Registered?: firebase.firestore.Timestamp;
  LastUpdated?: firebase.firestore.Timestamp;
  FirstName: string;
  LastName: string;
  Email?: string;
  ImageURL?: string;
  PhoneNumber?: string;
  Role: UserRole;
}

export type UserRole =
  | "User"
  | "Cleaner"
  | "Manager"
  | "Driver"
  | "Admin"
  | "Super admin";

export interface Roles {
  [Role: string]: UserRole;
}

export type CleaningType =
  | "Housekeeping"
  | "House cleaning"
  | "Car cleaning"
  | "Garden cleaning"
  | "Office cleaning"
  | "Windows cleaning"
  | "Furniture cleaning"
  | "Carpet cleaning"
  | "Deep cleaning";

  export interface CleaningTypeList {
    [Type: string]: CleaningType;
  }

export type SubscriptionType = "Starter" | "Standard" | "Deluxe" | "Custom";

export interface SubscriptionTypeList {
  [Type: string]: SubscriptionType;
}

export type CleaningFrequency =
  | "Weekly"
  | "Bi-weekly"
  | "3 times a month"
  | "Once a month"
  | "More than 5 times a month"
  | "Less than 5 times a month";

  export interface CleaningFrequencyList {
    [Frequency: string]: CleaningFrequency;
  }

export type CleaningStatus = "Finished" | "Ongoing" | "Upcoming";

export interface CleaningStatusList {
  [Status: string]: CleaningStatus;
}

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

// Header Menu
export interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}
export interface HeaderSearchLink {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
}
export interface NotificationVariantList {
  [type: string]: string;
}
