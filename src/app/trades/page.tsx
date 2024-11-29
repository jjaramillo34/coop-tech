'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAllTrades } from '@/data/trades';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TradesPage() {
  const headerRef = useRef(null);
  const tradesRef = useRef(null);
  const trades = getAllTrades();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.trade-item', {
        scrollTrigger: {
          trigger: tradesRef.current,
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div ref={headerRef} className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Available Trade Programs
          </h1>
          <p className="text-xl opacity-90">
            Discover our comprehensive range of technical training programs
          </p>
        </div>
      </div>

      <div ref={tradesRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.map((trade) => (
            <Link
              key={trade}
              href={`/trades/${trade.toLowerCase().replace(/\s+/g, '-')}`}
              className="trade-item group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
                {trade}
              </h2>
              <div className="flex items-center text-blue-600">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 