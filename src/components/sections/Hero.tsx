'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({ imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Mobile-optimized background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 100vw,
                 100vw"
          quality={90}
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div 
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-b from-black/70 via-black/50 to-black/70",
            "md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-black/30"
          )}
        />
      </div>

      {/* Content container with better mobile spacing */}
      <div className="relative min-h-[100svh] flex flex-col">
        <div className="container mx-auto px-4 flex-1 flex items-center">
          <div className="w-full md:max-w-3xl py-20 md:py-0">
            {/* Text content with mobile-first spacing */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                font-bold text-white tracking-tight">
                Build Your Future with{' '}
                <span className="block mt-2 text-primary-300">
                  Technical Training
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl 
                text-gray-200 max-w-2xl leading-relaxed">
                Join our comprehensive technical training programs and prepare for a 
                successful career in high-demand trades.
              </p>

              {/* Mobile-optimized button container */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
                <Link
                  href="/trades"
                  className={cn(
                    "flex items-center justify-center gap-2",
                    "bg-primary-500 text-white font-semibold",
                    "px-6 py-4 rounded-lg w-full sm:w-auto",
                    "transition-all duration-300",
                    "hover:bg-primary-600 hover:-translate-y-1",
                    "active:transform active:translate-y-0",
                    "focus:outline-none focus:ring-2 focus:ring-primary-300"
                  )}
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center justify-center gap-2",
                    "bg-white/10 backdrop-blur-sm text-white font-semibold",
                    "px-6 py-4 rounded-lg w-full sm:w-auto",
                    "transition-all duration-300",
                    "hover:bg-white/20 hover:-translate-y-1",
                    "active:transform active:translate-y-0",
                    "focus:outline-none focus:ring-2 focus:ring-white/50"
                  )}
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats with improved mobile layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 
                pt-8 md:pt-12">
                {[
                  { value: "20+", label: "Technical Programs" },
                  { value: "95%", label: "Job Placement Rate" },
                  { value: "6", label: "NYC Locations", className: "col-span-2 md:col-span-1" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6",
                      "transform transition-transform hover:translate-y-[-2px]",
                      stat.className
                    )}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-200">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 