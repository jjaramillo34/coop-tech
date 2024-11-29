import Image from "next/image";
import { Title } from "@/components/ui/title";
import { StaffDirectory } from "@/components/sections/StaffDirectory";
import { GraduationCap, Users, Award } from 'lucide-react';
import { staffData } from '@/data/staff';

export const metadata = {
  title: 'About Us | Coop Tech',
  description: 'Learn about Coop Tech, our history, mission, and dedicated staff.',
};

function PrincipalsMessage() {
  return (
    <div className="py-24 bg-gradient-to-b from-primary-100/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Title
            variant="section"
            align="center"
            className="mb-12"
          >
            <Award className="w-12 h-12 mx-auto mb-4 text-primary-600" />
            Principal&apos;s Message
          </Title>
          <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg p-8 md:p-12 
            transform hover:scale-[1.02] transition-all duration-500
            border-2 border-primary-100 hover:border-primary-300">
            <h3 className="text-3xl font-bold text-primary-900 mb-8 
              text-center animate-fadeIn">
              Welcome to Coop Tech!
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6 
              leading-relaxed animate-fadeIn animation-delay-150">
              <p>
                The School of Cooperative Technical Education (Coop Tech) is a unique 
                citywide school that offers students opportunities to learn skills in 
                a variety of different career and technical education courses.
              </p>
              <p>
                We have a dedicated group of educators that strive to prepare our 
                students with the skills needed to be successful in high demand industries.
              </p>
              <p>
                At Coop Tech, it is critical that our students are given opportunities 
                to work towards state recognized industry certifications and develop 
                the skills necessary to meet the demands of industry, career and college.
              </p>
              <p>
                We strongly believe that all students can be prepared to meet the 
                industry demands and workforce challenges in a caring, supportive, 
                rigorous and highly academic student-centered environment.
              </p>
              <p>
                We continuously work towards providing students with authentic experiences 
                in career and technical education and look forward to welcoming you to 
                our school community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistorySection() {
  return (
    <div className="py-24 bg-gradient-to-b from-primary-100/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Title
            variant="section"
            align="center"
            className="mb-12"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary-600" />
            Our History
          </Title>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 
            transform hover:scale-[1.01] transition-all duration-500
            border-2 border-primary-100 hover:border-primary-300">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6 
              leading-relaxed animate-fadeIn">
              <p>
                For over thirty years, The School for Cooperative Technical Education 
                has been a half-day vocational program that offers students hands on 
                training in a variety of in demand and cutting edge trade areas.
              </p>
              <p>
                Coop Tech serves approximately 1500 students in all five boroughs who 
                are 17-21 years of age, and who represent a wide variety of ethnic and 
                cultural backgrounds, ability levels, and educational histories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CooperativeLearningSection() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-primary-100/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Title
            variant="section"
            align="center"
            className="mb-12"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-primary-600" />
            Cooperative Learning
          </Title>
          <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg p-8 md:p-12 
            transform hover:scale-[1.01] transition-all duration-500
            border-2 border-primary-100 hover:border-primary-300">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6 
              leading-relaxed animate-fadeIn">
              <p>
                Many students at Coop Tech are given the opportunity to take part in 
                the Department of Education&apos;s Work Based Learning (WBL) Program, 
                which provides job readiness skills, knowledge of basic safety and 
                OSHA procedures, CPR, and real-world work exposure.
              </p>
              <p>
                Upon recommendation of program faculty, certain students can be matched 
                with one of Coop Tech&apos;s intern partnership sites. Students are 
                encouraged to take full advantage of internship opportunities as they 
                build their portfolios and expand their skills for future employment.
              </p>
              <p>
                Eligible students who participate in paid internships receive minimum 
                wage in addition to real work experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24">
        <div className="container mx-auto px-4">
          <Title
            variant="default"
            align="center"
            className="mb-16"
          >
            About Coop Tech
          </Title>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Co-op-Fascade-4.webp"
                alt="Coop Tech Building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <HistorySection />
        <CooperativeLearningSection />
        <PrincipalsMessage />
        <StaffDirectory staffData={staffData} />
      </div>
    </div>
  );
} 