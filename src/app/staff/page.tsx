import { Title } from "@/components/ui/title";
import { StaffSection } from "@/components/sections/StaffSection";

// Staff data organized by section
const staffData = {
  administration: [
    { name: "Benstraum, Sarah", title: "Assistant Principal", email: "sbenstraum@schools.nyc.gov" },
    { name: "Crowe, Alrick", title: "Assistant Principal", email: "acrowe@schools.nyc.gov" },
    { name: "Gathers, Victor", title: "Assistant Principal", email: "vgather@schools.nyc.gov" },
    { name: "Peterson, Carolyn", title: "Assistant Principal", email: "cpeters12@schools.nyc.gov" },
    { name: "Gumbs, DeLaina", title: "School Business Manager", email: "dgumbs4@schools.nyc.gov" },
  ],
  faculty: [
    // ... faculty data
  ],
  guidance: [
    { name: "Dayton, Lynne", title: "Guidance Counselor", email: "ldayton@schools.nyc.gov" },
    { name: "Delgado, Diane", title: "Social Worker", email: "ddelgado5@schools.nyc.gov" },
    { name: "Jacques, Francine", title: "Guidance Counselor", email: "fjacques@schools.nyc.gov" },
    { name: "Mondschein, Aimee", title: "Guidance Counselor", email: "amondschein@schools.nyc.gov" },
    { name: "Morales, Luis", title: "Social Worker", email: "lmorales24@schools.nyc.gov" },
    { name: "Romano, Iris", title: "Guidance Counselor", email: "IRomano@schools.nyc.gov" },
  ],
  support: [
    { name: "Allocca, Wendi", title: "School Secretary" },
    { name: "Ariza, Jose", title: "Community Associate" },
    // ... support staff data
  ],
};

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24">
        <div className="container mx-auto px-4">
          <Title
            variant="default"
            align="center"
            className="mb-8"
          >
            Staff Directory
          </Title>
          <p className="text-center text-gray-600 italic">
            Select any name below for contact information
          </p>
        </div>
      </div>

      {/* Staff Sections */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            <StaffSection
              title="Administration"
              staff={staffData.administration}
            />
            <StaffSection
              title="Faculty"
              staff={staffData.faculty}
            />
            <StaffSection
              title="Guidance"
              staff={staffData.guidance}
            />
            <StaffSection
              title="Support Staff"
              staff={staffData.support}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 