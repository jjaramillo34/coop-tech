'use client';

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { Title } from "@/components/ui/title";

interface ProgramGridProps {
  programs: string[];
  limit?: number;
}

export default function ProgramGrid({ programs, limit }: ProgramGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({ ref });
  const displayPrograms = limit ? programs.slice(0, limit) : programs;

  return (
    <div 
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-primary-50/50 to-white"
      aria-labelledby="programs-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Title
            id="programs-title"
            variant="section"
            align="center"
          >
            Featured Programs
          </Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {displayPrograms.map((program, index) => (
            <Link 
              key={program}
              href={`/trades/${program.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                "group p-8 rounded-xl bg-white",
                "shadow-md hover:shadow-xl transition-all duration-500",
                "border-2 border-primary-100 hover:border-primary-400",
                "transform hover:-translate-y-2 hover:bg-primary-50/30",
                isVisible && "animate-fade-in-up"
              )}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                "text-primary-900 group-hover:text-primary-700",
                "transition-colors duration-300"
              )}>
                {program}
              </h3>
              <p className={cn(
                "text-lg mb-6",
                "text-gray-700 group-hover:text-gray-900",
                "transition-colors duration-300"
              )}>
                Learn more about our {program} program
              </p>
              <div className={cn(
                "flex items-center gap-2",
                "text-primary-600 font-semibold",
                "group-hover:text-primary-700"
              )}>
                <span>Explore Program</span>
                <ArrowRight 
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    "group-hover:translate-x-1"
                  )}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 