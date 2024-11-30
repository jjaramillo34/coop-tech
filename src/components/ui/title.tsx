'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'section' | 'subsection';
  align?: 'left' | 'center' | 'right';
  underline?: boolean;
  id?: string;
  text?: string;
}

export function Title({
  children,
  className,
  variant = 'default',
  align = 'left',
  underline = true,
  id,
  text,
}: TitleProps) {
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

  const variants = {
    default: 'text-5xl md:text-6xl font-bold',
    section: 'text-4xl md:text-5xl font-bold',
    subsection: 'text-3xl md:text-4xl font-semibold',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full',
        className
      )}
    >
      <h2
        id={id}
        className={cn(
          variants[variant],
          alignments[align],
          'text-primary-900 mb-8 [text-wrap:balance] transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        {children || text}
      </h2>
      {underline && (
        <div className="relative h-2 bg-primary-50 rounded-full overflow-hidden 
          mx-auto max-w-[250px] shadow-sm">
          <div 
            className={cn(
              "absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full transition-all duration-1000",
              isVisible ? 'w-full' : 'w-0'
            )}
          >
            <div 
              className="absolute inset-0 animate-shine"
              style={{ 
                boxShadow: '0 0 30px rgba(45, 137, 160, 0.4)' 
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
} 