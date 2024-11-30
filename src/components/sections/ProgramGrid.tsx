'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Title } from "@/components/ui/title";
import type { Trade } from "@/data/trades";

interface ProgramGridProps {
  programs: Trade[];
  className?: string;
  limit?: number;
}

export default function ProgramGrid({ programs, className, limit }: ProgramGridProps) {
  const displayPrograms = limit ? programs.slice(0, limit) : programs;

  return (
    <section className={cn("py-12 sm:py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title variant="section" align="center">Featured Programs</Title>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of technical training programs designed 
            to prepare you for a successful career.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayPrograms.map((program) => (
            <Link
              key={program.slug}
              href={`/trades/${program.slug}`}
              className={cn(
                "group relative bg-white rounded-xl overflow-hidden",
                "border border-primary-100 hover:border-primary-300",
                "shadow-sm hover:shadow-xl transition-all duration-300",
                "transform hover:-translate-y-1"
              )}
            >
              {/* Program Image */}
              <div className="relative aspect-[16/9] bg-primary-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Duration:</span>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Locations:</span>
                    <span>{program.locations.length} available</span>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:text-primary-700">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Programs Button */}
        <div className="mt-12 text-center">
          <Link
            href="/trades"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4",
              "bg-primary-600 text-white rounded-xl",
              "font-semibold shadow-lg",
              "transform transition-all duration-300",
              "hover:bg-primary-700 hover:-translate-y-1 hover:shadow-xl",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            )}
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 