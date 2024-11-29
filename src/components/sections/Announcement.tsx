'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Announcement() {
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
      className="bg-gradient-to-r from-primary-50 to-secondary-50 py-8"
    >
      <div 
        className={cn(
          "container mx-auto px-4 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            We are excited to announce that we will be launching our new online enrollment system shortly. 
            <span className="block mt-2 text-primary-600">
              Please keep checking here for the live link.
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
} 