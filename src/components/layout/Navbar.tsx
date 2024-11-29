'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { images } from '@/config/images';

const programsMenu = [
  { name: 'Automotive Services', href: '/programs/automotive' },
  { name: 'Construction and Building Skills', href: '/programs/construction' },
  { name: 'Culinary', href: '/programs/culinary' },
  { name: 'Electrical', href: '/programs/electrical' },
  { name: 'Health Services', href: '/programs/health' },
  { name: 'Information Technology', href: '/programs/it' },
  { name: 'Unisex Styling', href: '/programs/styling' },
  { name: 'Work-Based Learning(WBL)', href: '/programs/wbl' },
  { name: 'OSHA', href: '/programs/osha' },
];

const aboutMenu = [
  { name: 'About Coop', href: '/about' },
  { name: "Principal's Message", href: '/about/principal' },
  { name: 'Staff', href: '/about/staff' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={images.logo.main}
                alt="CoopTech logo"
                width={images.logo.width}
                height={images.logo.height}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {programsMenu.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block p-2 hover:bg-gray-50 rounded-md"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-4">
                      {aboutMenu.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block p-2 hover:bg-gray-50 rounded-md"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">
                    Contact
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/faq" className="px-3 py-2 text-gray-700 hover:text-gray-900">
                    FAQ
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="http://co-optech.org/Application/AE/Adult_ed_flyer_11.21.jpg"
                    className="px-3 py-2 text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adult Education
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/PDFs/Application.pdf"
                    className="px-3 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Apply
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Google Translate Element */}
            <div id="google_translate_element" className="ml-4" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Programs Dropdown */}
            <div className="space-y-1">
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => {/* Toggle programs submenu */}}
              >
                Programs
              </button>
              <div className="pl-4">
                {programsMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="space-y-1">
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => {/* Toggle about submenu */}}
              >
                About Us
              </button>
              <div className="pl-4">
                {aboutMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>

            <Link
              href="/faq"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              FAQ
            </Link>

            <Link
              href="http://co-optech.org/Application/AE/Adult_ed_flyer_11.21.jpg"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adult Education
            </Link>

            <Link
              href="/PDFs/Application.pdf"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 