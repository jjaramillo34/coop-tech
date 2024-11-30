import { Title } from '@/components/ui/title';
import { StaffDirectory } from '@/components/sections/StaffDirectory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staff Directory | Coop Tech',
  description: 'Meet our dedicated staff members at Coop Tech.',
};

const staffData = {
  Administration: [
    { name: "Benstraum, Sarah", title: "Assistant Principal", email: "sbenstraum@schools.nyc.gov" },
    { name: "Crowe, Alrick", title: "Assistant Principal", email: "acrowe@schools.nyc.gov" },
    { name: "Gathers, Victor", title: "Assistant Principal", email: "vgather@schools.nyc.gov" },
    { name: "Peterson, Carolyn", title: "Assistant Principal", email: "cpeters12@schools.nyc.gov" },
    { name: "Gumbs, DeLaina", title: "School Business Manager", email: "dgumbs4@schools.nyc.gov" },
  ],
  Guidance: [
    { name: "Dayton, Lynne", title: "Guidance Counselor", email: "ldayton@schools.nyc.gov" },
    { name: "Delgado, Diane", title: "Social Worker", email: "ddelgado5@schools.nyc.gov" },
    { name: "Jacques, Francine", title: "Guidance Counselor", email: "fjacques@schools.nyc.gov" },
    { name: "Mondschein, Aimee", title: "Guidance Counselor", email: "amondschein@schools.nyc.gov" },
    { name: "Morales, Luis", title: "Social Worker", email: "lmorales24@schools.nyc.gov" },
    { name: "Romano, Iris", title: "Guidance Counselor", email: "IRomano@schools.nyc.gov" },
  ],
  Support: [
    { name: "Allocca, Wendi", title: "School Secretary" },
    { name: "Ariza, Jose", title: "Community Associate" },
    { name: "Brito, Yolanda", title: "School Aide" },
    { name: "Cintron, Maritza", title: "School Aide" },
    { name: "Colon, Maritza", title: "School Aide" },
    { name: "Diaz, Maritza", title: "School Aide" },
    { name: "Gonzalez, Maritza", title: "School Aide" },
  ]
};

export default function StaffPage() {
  return (
    <div className="container py-12">
      <Title 
        variant="default" 
        align="center" 
        className="mb-8"
        text="Our Staff"
      />
      <StaffDirectory staffData={staffData} />
    </div>
  );
} 