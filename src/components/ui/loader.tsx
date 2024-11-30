'use client';

import { cn } from '@/lib/utils';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className={cn("flex flex-col items-center", className)}>
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-t-4 border-primary-500 rounded-full animate-spin" />
          <div className="absolute inset-2 border-r-4 border-primary-300 rounded-full animate-spin-reverse" />
          <div className="absolute inset-4 border-b-4 border-primary-200 rounded-full animate-spin" />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Coop Tech
        </h2>
        <p className="text-lg text-primary-600 animate-pulse">
          Learning that works
        </p>
      </div>
    </div>
  );
} 