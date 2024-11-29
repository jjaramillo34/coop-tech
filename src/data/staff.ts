export interface StaffMember {
  name: string;
  title: string;
  email?: string;
  department?: string;
}

export interface StaffData {
  [key: string]: StaffMember[];
}

export const staffData: StaffData = {
  administration: [
    {
      name: "Benstraum, Sarah",
      title: "Assistant Principal",
      email: "sbenstraum@schools.nyc.gov",
    },
    {
      name: "Crowe, Alrick",
      title: "Assistant Principal",
      email: "acrowe@schools.nyc.gov",
    },
    {
      name: "Gathers, Victor",
      title: "Assistant Principal",
      email: "vgather@schools.nyc.gov",
    },
    {
      name: "Peterson, Carolyn",
      title: "Assistant Principal",
      email: "cpeters12@schools.nyc.gov",
    },
    {
      name: "Gumbs, DeLaina",
      title: "School Business Manager",
      email: "dgumbs4@schools.nyc.gov",
    },
  ],
  faculty: [
    {
      name: "Ackil, Michael",
      title: "Special Education",
      email: "mackil@schools.nyc.gov",
    },
    {
      name: "Barry, Amadou",
      title: "Welding",
      email: "abarry4@schools.nyc.gov",
    },
    {
      name: "Blake, Wilton",
      title: "Electrical",
      email: "wblake7@schools.nyc.gov",
    },
    {
      name: "Cintron, Robert",
      title: "Electrical",
      email: "rcintro3@schools.nyc.gov",
    },
    {
      name: "Clark, Michelle",
      title: "Natural Hairstyling",
      email: "mclark47@schools.nyc.gov",
    },
    {
      name: "DeJesus, Diana",
      title: "Special Education",
      email: "ddejesu2@schools.nyc.gov",
    },
    {
      name: "Devitt, Marc",
      title: "Plumbing",
      email: "mdevitt@schools.nyc.gov",
    },
    {
      name: "Ferguson, Cherry Ann",
      title: "Work Based Learning Coordinator",
      email: "cfergus3@schools.nyc.gov",
    },
    {
      name: "Fernandez, Fred",
      title: "Carpentry",
      email: "ffernan6@schools.nyc.gov",
    },
    {
      name: "Fiorica, Emma",
      title: "Medical Health Careers",
      email: "efiorica@schools.nyc.gov",
    },
    {
      name: "Forstein, Jonathan",
      title: "Audio & Video Production",
      email: "jforstein@schools.nyc.gov",
    },
    // ... add all faculty members
  ],
  guidance: [
    {
      name: "Dayton, Lynne",
      title: "Guidance Counselor",
      email: "ldayton@schools.nyc.gov",
    },
    {
      name: "Delgado, Diane",
      title: "Social Worker",
      email: "ddelgado5@schools.nyc.gov",
    },
    {
      name: "Jacques, Francine",
      title: "Guidance Counselor",
      email: "fjacques@schools.nyc.gov",
    },
    {
      name: "Mondschein, Aimee",
      title: "Guidance Counselor",
      email: "amondschein@schools.nyc.gov",
    },
    {
      name: "Morales, Luis",
      title: "Social Worker",
      email: "lmorales24@schools.nyc.gov",
    },
    {
      name: "Romano, Iris",
      title: "Guidance Counselor",
      email: "IRomano@schools.nyc.gov",
    },
  ],
  support: [
    { name: "Allocca, Wendi", title: "School Secretary" },
    { name: "Ariza, Jose", title: "Community Associate" },
    { name: "Brown, Deneni", title: "Educational Paraprofessional" },
    { name: "Caines, Randee", title: "Educational Paraprofessional" },
    { name: "Calderon, Kelly", title: "School Secretary" },
    { name: "Castro, Darcy", title: "Educational Paraprofessional" },
    { name: "Evereklian, Vilma", title: "Secretary" },
    { name: "Figueroa, Luis", title: "Educational Paraprofessional" },
    { name: "Gallego, Brandon", title: "School Aide" },
    { name: "Gutierrez, Fanny", title: "School Aide" },
    // ... add all support staff
  ],
};
