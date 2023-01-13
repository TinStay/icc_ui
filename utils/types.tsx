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
