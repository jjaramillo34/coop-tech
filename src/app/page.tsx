'use client';

import { useEffect } from 'react';
import { GraduationCap, MapPin, Wrench, Users, Award, Briefcase, Clock } from 'lucide-react';
import { getAllTrades } from '@/data/trades';
import { images } from '@/config/images';
import Announcement from '@/components/sections/Announcement';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Mission from '@/components/sections/Mission';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Partnerships from '@/components/sections/Partnerships';
import ProgramGrid from '@/components/sections/ProgramGrid';

const features = [
  {
    Icon: Wrench,
    title: 'Hands-on Training',
    description: 'Learn practical skills from industry experts',
  },
  {
    Icon: MapPin,
    title: 'Multiple Locations',
    description: 'Convenient campuses across NYC',
  },
  {
    Icon: GraduationCap,
    title: 'Career Ready',
    description: 'Get prepared for in-demand careers',
  },
];

const reasons = [
  {
    Icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from experienced professionals in your field',
  },
  {
    Icon: Award,
    title: 'Industry Certifications',
    description: 'Earn recognized credentials for your career',
  },
  {
    Icon: Briefcase,
    title: 'Job Placement',
    description: 'Connect with employers and find opportunities',
  },
  {
    Icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose from morning or afternoon sessions',
  },
];

export default function Home() {
  const trades = getAllTrades();

  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Announcement />
      <Hero 
        imageSrc={images.hero.main}
        imageAlt="CoopTech Trades Collage"
      />
      <Mission />
      <Features features={features} />
      <WhyChooseUs reasons={reasons} />
      <Partnerships />
      <ProgramGrid programs={trades} limit={6} />
    </div>
  );
}
