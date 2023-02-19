// Cleaning & Subscription
export interface Subscription {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Address: JobAddress;
  SubscriptionType: SubscriptionType;
  MonthlyHours: number;
  AllCleanings: CleaningsPerYear;
  AllCleaningTypes: CleaningType[];
  Notes: string;
  DefaultPriority: string;
  Users: string[];
  ActivationCode: string;
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
  Address: JobAddress;
  Hours: number;
  Date: any;
  Time: {
    From: string;
    To: string;
  };
  CleaningTypes: CleaningType[];
  Notes: string;
  Priority: string;
  Cleaners: Cleaner[] | [];
}

export interface JobAddress {
  Street: string;
  StreetNumber: string;
  PostalCode: string;
  City: string;
  Country: string;
  Addition?: string;
}

export interface Cleaner {
  ID: string;
  FirstName: string;
  LastName: string;
  ImageURL: string;
  PhoneNumber: string;
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

export type SubscriptionType = "Starter" | "Standard" | "Deluxe" | "Custom";

export type CleaningStatus = "Finished" | "Ongoing" | "Upcoming";

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
