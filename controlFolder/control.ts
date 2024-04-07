export const companyName = "BusGeo";
export const companyDomain = "https://busgeo.com/";
export const companyDescription =
  "Mini bus for Gerogian trip, Micro Bus, მიკრო ავტობუსი, მარშუტკა, mikro avtobusi, marshutka";

//nav items and sort
import { NavItemProps } from "../components/header/header3/Navigation";
export const navItems: NavItemProps[] = [
  { title: "HOME", url: "/", homePage: true },
  { title: "GALLERY", url: "/gallery" },
  { title: "ABOUT", url: "/about" },
  { title: "PRICE", url: "/price" },
  { title: "CONTACT", url: "/contact" },
  { title: "RESERVATION", url: "/reservation", button: true },
];

// firebase iiner menuLink for fetching menu
// for example: export const firebaseMenuLink = "chachaab/menu";
