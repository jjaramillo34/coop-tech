'use client';

import { useState } from 'react';
import { X, Bell } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-600/95 text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary-600">
      <div className="container mx-auto">
        <div className="relative">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6">
            {/* Left side with icon and text */}
            <div className="flex items-center gap-x-3 sm:gap-x-4">
              <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-4">
                <p className="font-semibold text-base sm:text-lg">
                  Now Enrolling for Fall 2024!
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    "text-sm sm:text-base text-white/90 hover:text-white",
                    "transition-colors duration-200 hover:underline",
                    "flex items-center gap-x-1"
                  )}
                >
                  Contact us to learn more
                  <span aria-hidden="true" className="hidden sm:inline"> →</span>
                </Link>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className={cn(
                "p-2 hover:bg-white/10 rounded-full transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-white/20",
                "absolute sm:relative right-2 top-1/2 sm:top-auto transform -translate-y-1/2 sm:transform-none"
              )}
              aria-label="Dismiss announcement"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Animated border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
      </div>
    </div>
  );
} 