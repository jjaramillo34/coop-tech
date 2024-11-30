import { Title } from '@/components/ui/title';
import { Gallery } from '@/components/ui/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Coop Tech',
  description: 'View our gallery of images showcasing our programs and facilities.',
};

const galleryImages = [
  // Automotive
  {
    src: "/images/gallery/Auto-Display-1.webp",
    alt: "Automotive Technology Display",
    category: "Automotive"
  },
  {
    src: "/images/gallery/Auto-Gear-2.webp",
    alt: "Professional Automotive Equipment",
    category: "Automotive"
  },
  {
    src: "/images/gallery/Auto-Gear-8.webp",
    alt: "Advanced Diagnostic Tools",
    category: "Automotive"
  },
  {
    src: "/images/gallery/Auto-Students-1.webp",
    alt: "Students Learning Auto Repair",
    category: "Automotive"
  },
  {
    src: "/images/gallery/Auto-working-1.webp",
    alt: "Hands-on Automotive Training",
    category: "Automotive"
  },

  // Audio/Visual
  {
    src: "/images/gallery/AV-Gear-1.webp",
    alt: "Professional AV Equipment",
    category: "Audio/Visual"
  },
  {
    src: "/images/gallery/AV-Gear-3.webp",
    alt: "Audio Production Setup",
    category: "Audio/Visual"
  },
  {
    src: "/images/gallery/AV-Gear-4.webp",
    alt: "Video Production Equipment",
    category: "Audio/Visual"
  },
  {
    src: "/images/gallery/AV-working-1.webp",
    alt: "Students in AV Production",
    category: "Audio/Visual"
  },
  {
    src: "/images/gallery/AV-working-2.webp",
    alt: "Audio/Visual Project Work",
    category: "Audio/Visual"
  },

  // Barbering/Cosmetology
  {
    src: "/images/gallery/barber-display-1.webp",
    alt: "Professional Barbering Station",
    category: "Barbering"
  },
  {
    src: "/images/gallery/barber-working-1.webp",
    alt: "Student Practicing Haircuts",
    category: "Barbering"
  },
  {
    src: "/images/gallery/barber-working-2.webp",
    alt: "Advanced Hair Styling",
    category: "Barbering"
  },
  {
    src: "/images/gallery/barber-working-3.webp",
    alt: "Professional Grooming Techniques",
    category: "Barbering"
  },
  {
    src: "/images/gallery/barber-working-4.webp",
    alt: "Barbering Skills Practice",
    category: "Barbering"
  },

  // Building Trades
  {
    src: "/images/gallery/BT-1.webp",
    alt: "Building Trades Workshop",
    category: "Building Trades"
  },
  {
    src: "/images/gallery/BT-2.webp",
    alt: "Construction Skills Training",
    category: "Building Trades"
  },
  {
    src: "/images/gallery/BT-3.webp",
    alt: "Building Materials and Tools",
    category: "Building Trades"
  },

  // Carpentry
  {
    src: "/images/gallery/Carpentry-Display-1.webp",
    alt: "Carpentry Project Display",
    category: "Carpentry"
  },
  {
    src: "/images/gallery/Carpentry-Display-2.webp",
    alt: "Woodworking Showcase",
    category: "Carpentry"
  },
  {
    src: "/images/gallery/carpentry-working-7.webp",
    alt: "Students in Woodworking",
    category: "Carpentry"
  },

  // Culinary Arts
  {
    src: "/images/gallery/Chef-1.webp",
    alt: "Culinary Arts Training",
    category: "Culinary"
  },
  {
    src: "/images/gallery/Chef.webp",
    alt: "Professional Kitchen Skills",
    category: "Culinary"
  },

  // School Activities
  {
    src: "/images/gallery/Clothes-Closet-activity.webp",
    alt: "Community Service Activity",
    category: "Activities"
  },

  // School Displays
  {
    src: "/images/gallery/Co-op-Display-1.webp",
    alt: "Program Showcase Display",
    category: "Facilities"
  },
  {
    src: "/images/gallery/Co-op-Display-2.webp",
    alt: "Student Achievement Display",
    category: "Facilities"
  },
  {
    src: "/images/gallery/Co-op-display-3.webp",
    alt: "Program Information Display",
    category: "Facilities"
  },
  {
    src: "/images/gallery/Co-op-display-4.webp",
    alt: "Career Pathway Display",
    category: "Facilities"
  },

  // Design & Drafting
  {
    src: "/images/gallery/Design-Display-1.webp",
    alt: "Graphic Design Projects",
    category: "Design"
  },
  {
    src: "/images/gallery/Design-Display-2.webp",
    alt: "Student Design Work",
    category: "Design"
  },
  {
    src: "/images/gallery/Design-Display-3.webp",
    alt: "Digital Design Showcase",
    category: "Design"
  },
  {
    src: "/images/gallery/design-display-5.webp",
    alt: "Creative Design Exhibition",
    category: "Design"
  },
  {
    src: "/images/gallery/Design-Gear-1.webp",
    alt: "Design Equipment and Tools",
    category: "Design"
  },
  {
    src: "/images/gallery/drafting-display-1.webp",
    alt: "Technical Drawing Display",
    category: "Drafting"
  },
  {
    src: "/images/gallery/drafting-display-2.webp",
    alt: "Drafting Project Showcase",
    category: "Drafting"
  },
  {
    src: "/images/gallery/drafting-display-6.webp",
    alt: "CAD Design Projects",
    category: "Drafting"
  },
  {
    src: "/images/gallery/Drafting-Gear-1.webp",
    alt: "Drafting Tools and Equipment",
    category: "Drafting"
  },
  {
    src: "/images/gallery/Drafting-Gear-2.webp",
    alt: "Professional Drafting Station",
    category: "Drafting"
  },

  // Medical Programs
  {
    src: "/images/gallery/medical-billing-display-1.webp",
    alt: "Medical Billing Program Display",
    category: "Medical"
  }
];

export default function GalleryPage() {
  return (
    <div className="container py-12">
      <Title 
        variant="section" 
        align="center"
        text="Our Gallery"
      />
      <Gallery images={galleryImages} />
    </div>
  );
} 