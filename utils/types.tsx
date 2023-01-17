
// Cleaning & Subscription
export interface Subscription {
  Address: JobAddress;
  SubscriptionType: SubscriptionType;
  MonthlyHours: number;
  Cleanings: MonthlyCleanings[],
  Notes: string,
  DefaultPriority: string;
  Users: string[]
}

export interface Cleaning {
  Address: JobAddress;
  Date: Date;
  Time: {
    From: string;
    To: string;
  };
  Subscription: string, 
  CleaningTypes: CleaningType[];
  Notes: string;
  Priority: string;
  Cleaners: [];
}

export interface MonthlyCleanings {
  MonthAndYear: string,
  Cleanings: Cleaning[]
}


export interface JobAddress {
  Street: string,
  StreetNumber: string,
  PostalCode: string,
  City: string,
  Country: string,
  Addition?: string,
} 
export type CleaningType =
  | "Housekeeping"
  | "Car cleaning"
  | "Garden cleaning"
  | "Office cleaning"
  | "Windows cleaning"
  | "Furniture cleaning"
  | "Carpet cleaning"
  | "Deep cleaning";

export type SubscriptionType = "Starter" | "Standard" | "Deluxe" | "Custom";

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



