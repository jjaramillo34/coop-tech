'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/config/images';

export default function Footer() {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logos = logosRef.current?.querySelectorAll('.logo-image');
    if (!logos) return;

    const animations: Animation[] = [];

    logos.forEach((logo) => {
      // Create hover animation
      const animation = logo.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(1.05)' }
        ],
        {
          duration: 300,
          easing: 'ease-out',
          fill: 'both'
        }
      );
      animation.pause();
      animations.push(animation);

      // Add event listeners
      logo.addEventListener('mouseenter', () => {
        animation.play();
      });

      logo.addEventListener('mouseleave', () => {
        animation.reverse();
      });
    });

    // Cleanup
    return () => {
      animations.forEach(animation => animation.cancel());
    };
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-primary-50 border-t border-primary-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 py-12 gap-8">
        {/* Logo and Address Column */}
        <div className="mb-3">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src={images.logo.main}
              alt="CoopTech logo"
              width={200}
              height={80}
              className="w-auto h-auto"
            />
          </Link>
          <p className="text-gray-600">
            © {new Date().getFullYear()} School Cooperative Technical Education
          </p>
          <p className="mt-2 text-primary-700">
            321 East 96th Street <br />
            (212) 369-8800
          </p>
        </div>

        {/* Empty Column for spacing */}
        <div className="hidden md:block"></div>

        {/* Site Map Column */}
        <div>
          <h5 className="font-semibold text-lg mb-4 text-primary-800">Site Map</h5>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/" 
                className="text-gray-600 hover:text-primary-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-primary-700 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/trades" 
                className="text-gray-600 hover:text-primary-700 transition-colors"
              >
                Programs
              </Link>
            </li>
          </ul>
        </div>

        {/* Logos Column */}
        <div ref={logosRef} className="flex flex-col gap-6">
          <div className="logo-image relative w-[200px] h-[80px]">
            <Image
              src={images.logos.d79.src}
              alt={images.logos.d79.alt}
              fill
              className="object-contain transition-transform duration-300"
            />
          </div>
          <div className="logo-image relative w-[200px] h-[80px]">
            <Image
              src={images.logos.doe.src}
              alt={images.logos.doe.alt}
              fill
              className="object-contain transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-100 bg-white/50">
        <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            All rights reserved © {new Date().getFullYear()} Coop Tech
          </p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-primary-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 hover:text-primary-700 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 