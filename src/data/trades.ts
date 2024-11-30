export interface Trade {
  slug: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  careers: string[];
  duration: string;
  schedule: string;
  prerequisites: string;
  certification: string;
  locations: string[];
  additionalInfo?: string;
}

export const trades: Trade[] = [
  {
    slug: "automotive",
    title: "Automotive Technology",
    description:
      "Learn comprehensive automotive repair and maintenance skills in our state-of-the-art facility.",
    image: "/images/trades/automotive.jpg",
    skills: [
      "Engine diagnostics and repair",
      "Brake systems maintenance",
      "Electrical systems troubleshooting",
      "Transmission service",
      "Suspension and steering",
      "Emissions control systems",
    ],
    careers: [
      "Automotive Technician",
      "Diesel Mechanic",
      "Service Manager",
      "Parts Specialist",
      "Fleet Maintenance Technician",
    ],
    duration: "10 months",
    schedule: "Monday-Friday, 8:00 AM - 2:20 PM",
    prerequisites: "High school diploma or equivalent",
    certification: "ASE Certification preparation",
    locations: [
      "Manhattan-96th Street",
      "Long Island City H.S. Campus",
      "Queens Transitional Center Campus",
    ],
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    description:
      "Master woodworking and construction techniques with hands-on training in our professional workshop.",
    image: "/images/trades/carpentry.jpg",
    skills: [
      "Blueprint reading",
      "Wood joinery techniques",
      "Power tool operation",
      "Cabinet making",
      "Framing and finishing",
      "Project planning",
    ],
    careers: [
      "Carpenter",
      "Cabinet Maker",
      "Construction Supervisor",
      "Furniture Maker",
      "Renovation Specialist",
    ],
    duration: "10 months",
    schedule: "Monday-Friday, 8:00 AM - 2:20 PM",
    prerequisites: "High school diploma or equivalent",
    certification: "NCCER Carpentry Certification",
    locations: ["Manhattan-96th Street", "Long Island City H.S. Campus"],
  },
  {
    slug: "electrical",
    title: "Electrical Installation",
    description:
      "Develop expertise in electrical systems installation and maintenance with comprehensive training.",
    image: "/images/trades/electrical.jpg",
    skills: [
      "Circuit design and installation",
      "Electrical code compliance",
      "Wiring methods",
      "Motor controls",
      "Safety procedures",
      "Troubleshooting techniques",
    ],
    careers: [
      "Electrician",
      "Electrical Contractor",
      "Industrial Electrician",
      "Maintenance Technician",
      "Solar Installation Specialist",
    ],
    duration: "10 months",
    schedule: "Monday-Friday, 8:00 AM - 2:20 PM",
    prerequisites: "High school diploma or equivalent",
    certification: "NCCER Electrical Certification",
    locations: ["Manhattan-96th Street", "Longwood Campus"],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    description:
      "Learn professional plumbing installation and repair techniques in our modern training facility.",
    image: "/images/trades/plumbing.jpg",
    skills: [
      "Pipe fitting",
      "Plumbing code requirements",
      "Water systems",
      "Drainage systems",
      "Fixture installation",
      "Repair techniques",
    ],
    careers: [
      "Plumber",
      "Pipefitter",
      "Plumbing Contractor",
      "Maintenance Plumber",
      "Sprinkler System Installer",
    ],
    duration: "10 months",
    schedule: "Monday-Friday, 8:00 AM - 2:20 PM",
    prerequisites: "High school diploma or equivalent",
    certification: "NCCER Plumbing Certification",
    locations: ["Manhattan-96th Street"],
  },
  {
    slug: "cosmetology",
    title: "Cosmetology",
    description:
      "Gain comprehensive training in hair styling, skincare, and beauty techniques.",
    image: "/images/trades/cosmetology.jpg",
    skills: [
      "Hair cutting and styling",
      "Color techniques",
      "Skin care",
      "Nail care",
      "Makeup application",
      "Salon management",
    ],
    careers: [
      "Hair Stylist",
      "Salon Owner",
      "Color Specialist",
      "Beauty Consultant",
      "Platform Artist",
    ],
    duration: "10 months",
    schedule: "Monday-Friday, 8:00 AM - 2:20 PM",
    prerequisites: "High school diploma or equivalent",
    certification: "State Board Cosmetology License preparation",
    locations: ["Canarsie H.S. Campus"],
    additionalInfo:
      "Students will have the opportunity to practice their skills in our student-run salon.",
  },
];

export function getAllTrades(): Trade[] {
  return trades;
}

export function getTradeBySlug(slug: string): Trade | undefined {
  return trades.find((trade) => trade.slug === slug);
}

export function isValidTrade(tradeName: string): boolean {
  return trades.some((trade) => trade.title === tradeName);
}
