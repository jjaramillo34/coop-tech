'use client';

import { useRef } from 'react';
import { Title } from '@/components/ui/title';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({ ref });

  return (
    <div 
      className="py-16 bg-gradient-to-b from-primary-50 via-white to-primary-50"
      aria-labelledby="mission-title"
    >
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <Title
            id="mission-title"
            variant="section"
            align="center"
            className="mb-8"
          >
            Our Mission
          </Title>
          <div 
            className={cn(
              "bg-white p-8 rounded-xl shadow-md border border-primary-100 transition-all duration-700",
              "hover:shadow-lg hover:border-primary-300 hover:bg-gradient-to-br hover:from-white hover:to-primary-50/30",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <p className="text-xl leading-relaxed text-gray-700 mb-4 transition-all duration-300">
              The School of Cooperative Technical Education exists to provide students 
              with the opportunity to learn both the traditional trades along with a 
              variety of state-of-the-art technology courses.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 transition-all duration-300">
              Our students will develop the skills to become independent, self-supporting, 
              lifelong learners in an increasingly complex and technologically based society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 