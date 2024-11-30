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
    <section className={cn("space-y-8", className)}>
      <Title variant="section" align="center">Featured Programs</Title>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayPrograms.map((program) => (
          <Link
            key={program.slug}
            href={`/trades/${program.slug}`}
            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary-100 hover:border-primary-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {program.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {program.description}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {limit && programs.length > limit && (
        <div className="text-center mt-8">
          <Link
            href="/trades"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold"
          >
            View all programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  );
} 