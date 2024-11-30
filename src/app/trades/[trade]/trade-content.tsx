'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trade } from '@/data/trades';

gsap.registerPlugin(ScrollTrigger);

interface TradeContentProps {
  trade: Trade;
}

export default function TradeContent({ trade }: TradeContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Animate image
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div ref={contentRef} className="prose prose-primary max-w-none">
        <p className="lead text-xl text-gray-600 mb-6">
          {trade.description}
        </p>

        <h2>What You&apos;ll Learn</h2>
        <ul>
          {trade.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h2>Career Opportunities</h2>
        <ul>
          {trade.careers.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>

        <h2>Program Details</h2>
        <ul>
          <li><strong>Duration:</strong> {trade.duration}</li>
          <li><strong>Schedule:</strong> {trade.schedule}</li>
          <li><strong>Prerequisites:</strong> {trade.prerequisites}</li>
          <li><strong>Certification:</strong> {trade.certification}</li>
        </ul>

        {trade.additionalInfo && (
          <>
            <h2>Additional Information</h2>
            <p>{trade.additionalInfo}</p>
          </>
        )}
      </div>

      <div ref={imageRef} className="relative">
        <div className="sticky top-8">
          <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={trade.image}
              alt={`${trade.title} program`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {trade.locations && trade.locations.length > 0 && (
            <div className="mt-6 bg-primary-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Available Locations</h3>
              <ul className="space-y-2">
                {trade.locations.map((location, index) => (
                  <li key={index} className="flex items-start gap-2 text-primary-800">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 