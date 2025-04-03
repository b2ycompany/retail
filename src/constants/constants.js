const nameRegex = /^[A-Z][a-zA-Z'-]+$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const mobileRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9)[0-9]{3,4}\-?[0-9]{4}$/;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export { nameRegex, emailRegex, mobileRegex, passwordRegex };

export const popularLocations = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília"];

export const trendingLocations = [
  "Salvador",
  "Fortaleza",
  "Curitiba",
  "Manaus",
];

export const aboutUS = ["Contact Us"];

export const olx = [
  "Help",
  "Sitemap",
  "Legal & Privacy Information",
  "Vulnerability Disclosure Program",
];

export const subMenu = [
  "Cars",
  "MotorCycles",
  "Mobile",
  "For Sale: House & Apartments",
  "Scooters",
  "Commercial: & other Vehicles",
  "For Rent: House & Apartments",
];