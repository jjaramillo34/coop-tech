'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({ imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-primary to-primary-600 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Future with Technical Training
            </h1>
            <p className="text-xl text-primary-100">
              Join our comprehensive technical training programs and prepare for a successful career in high-demand trades.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/trades"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 