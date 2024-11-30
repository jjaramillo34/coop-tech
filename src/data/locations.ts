export interface Location {
  name: string;
  address: string;
  coordinates: [number, number];
  programs: string[];
}

export const locations: Location[] = [
  {
    name: "Manhattan-96th Street",
    address: "321 E 96th, New York, NY",
    coordinates: [-73.9469, 40.7845],
    programs: [
      "Architectural Drafting",
      "Automotive",
      "Barbering",
      "Carpentry",
      "Certified Nursing Assistant",
      "Computer Networking",
      "Culinary Arts",
      "Electrical",
      "Natural Hairstyling",
      "Plumbing",
      "Vision Technology",
      "Web Design",
      "Welding",
      "Advertising & Design",
      "Audio and Video Production",
      "Medical Billing and Coding",
      "Introduction to Construction Trades",
    ],
  },
  {
    name: "Canarsie H.S. Campus",
    address: "1600 Rockaway Pkwy, Brooklyn, NY",
    coordinates: [-73.8978189, 40.6410498],
    programs: [
      "Computer Networking",
      "Introduction to Construction Trades",
      "Introduction to Cosmetology Nails and Waxing",
      "Medical Health Careers",
    ],
  },
  {
    name: "Concord H.S. Campus",
    address: "109 Rhine Avenue, Staten Island, NY",
    coordinates: [-74.0754, 40.6033],
    programs: [
      "Advertising & Design",
      "Introduction to Construction Trades",
      "Natural Hairstyling",
    ],
  },
  {
    name: "Long Island City H.S. Campus",
    address: "14-30 Broadway, Queens, NY",
    coordinates: [-73.9419, 40.7566],
    programs: ["Automotive", "Carpentry"],
  },
  {
    name: "Longwood Campus",
    address: "965 Longwood Avenue, Bronx, NY",
    coordinates: [-73.8913, 40.8197],
    programs: [
      "Barbering",
      "Electrical",
      "Introduction to Construction Trades",
      "Natural Hairstyling",
    ],
  },
  {
    name: "Queens Transitional Center Campus",
    address: "142-10 Linden Blvd, Queens NY",
    coordinates: [-73.799, 40.6915],
    programs: [
      "Automotive",
      "Barbering",
      "Culinary Arts",
      "Advertising & Design",
    ],
  },
];

export const getLocationByName = (name: string) => {
  return locations.find((location) => location.name === name);
};
