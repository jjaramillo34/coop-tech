'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/config/images';

const footerLinks = [
  {
    title: "Programs",
    links: [
      { label: "All Programs", href: "/trades" },
      { label: "Locations", href: "/locations" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-primary-50/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <div className="relative w-[150px] h-[50px]">
                <Image
                  src={images.logos.d79.src}
                  alt={images.logos.d79.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Empowering students through cooperative technical education since 1984.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Coop Tech. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src={images.logos.doe.src}
                alt={images.logos.doe.alt}
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 