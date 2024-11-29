'use client';

import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { Title } from "@/components/ui/title";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({ ref });

  return (
    <div 
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-primary-50/50 to-white"
      aria-labelledby="features-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Title
            id="features-title"
            variant="section"
            align="center"
          >
            Our Features
          </Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "group p-8 text-center bg-white rounded-xl shadow-md hover:shadow-xl",
                "transition-all duration-500 border-2 border-primary-100 hover:border-primary-400",
                "transform hover:-translate-y-2 hover:bg-primary-50/30",
                isVisible && "animate-fade-in-up"
              )}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative inline-block mb-6 group-hover:animate-float">
                <div 
                  className={cn(
                    "absolute inset-0 bg-primary-100 rounded-full",
                    "transform scale-150 opacity-20 group-hover:scale-175 group-hover:animate-pulse-soft",
                    "transition-transform duration-500"
                  )}
                />
                <feature.Icon 
                  className={cn(
                    "w-16 h-16 relative z-10 text-primary-600",
                    "transform group-hover:scale-110 group-hover:rotate-3",
                    "transition-all duration-500"
                  )}
                  aria-hidden="true"
                />
              </div>
              <h3 
                className={cn(
                  "text-2xl font-semibold mb-3 text-primary-900",
                  "group-hover:text-primary-700 transition-colors duration-300"
                )}
              >
                {feature.title}
              </h3>
              <p 
                className={cn(
                  "text-lg text-gray-700",
                  "group-hover:text-gray-900 transition-colors duration-300",
                  "[text-wrap:balance]"
                )}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 