'use client';

import { useRef, useEffect } from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import gsap from 'gsap';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({ imageSrc, imageAlt }: HeroProps) {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div ref={heroRef} className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full">
            <OptimizedImage
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 