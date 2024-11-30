'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center gap-x-4">
            <span className="font-semibold">
              Now Enrolling for Fall 2024!
            </span>
            <Link
              href="/contact"
              className="hidden sm:inline-block hover:underline"
            >
              Contact us to learn more →
            </Link>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-primary-500 rounded-full transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
} 