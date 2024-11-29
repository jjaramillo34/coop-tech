'use client';

import { useRef, useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Title } from '@/components/ui/title';
import { cn } from '@/lib/utils';

interface Reason {
  Icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  reasons: Reason[];
}

export default function WhyChooseUs({ reasons }: WhyChooseUsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-primary-50/50 to-white"
      aria-labelledby="why-choose-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Title
            id="why-choose-title"
            variant="section"
            align="center"
          >
            Why Choose Coop Tech?
          </Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={cn(
                `group p-8 text-center bg-white rounded-xl shadow-md hover:shadow-xl 
                transition-all duration-500 border-2 border-primary-100 hover:border-primary-400 
                transform hover:-translate-y-2`,
                isVisible && "animate-fade-in-up"
              )}
              role="article"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative inline-block mb-6">
                <div 
                  className="absolute inset-0 bg-primary-100 rounded-full 
                  transform scale-150 opacity-20 group-hover:scale-175 
                  transition-transform duration-500"
                />
                <reason.Icon 
                  className="w-12 h-12 relative z-10 text-primary-600 
                    transform group-hover:scale-110 group-hover:rotate-3 
                    transition-all duration-500" 
                  aria-hidden="true"
                />
              </div>
              <h3 
                className="text-xl font-bold mb-4 text-primary-900 
                group-hover:text-primary-700 transition-colors duration-300"
              >
                {reason.title}
              </h3>
              <p 
                className="text-base leading-relaxed text-gray-700 
                group-hover:text-gray-900 transition-colors duration-300
                [text-wrap:balance]"
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 