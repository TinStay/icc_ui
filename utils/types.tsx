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


export interface Cleaning {
  address: string,

}
export interface Subscription {
  address: string,
  subscriptionType: string,
  monthlyHours: number,
  pastCleanings: Cleaning[]
  
}
