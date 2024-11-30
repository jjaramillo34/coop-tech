'use client';

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";
import { Menu, X } from "lucide-react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: 'SIMPLE' | 'HORIZONTAL' | 'VERTICAL';
            autoDisplay?: boolean;
          },
          element: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Automotive",
    href: "/trades/automotive",
    description: "Learn automotive repair and maintenance skills.",
  },
  {
    title: "Carpentry",
    href: "/trades/carpentry",
    description: "Master woodworking and construction techniques.",
  },
  {
    title: "Cosmetology",
    href: "/trades/cosmetology",
    description: "Study hair styling, skincare, and beauty techniques.",
  },
  {
    title: "Electrical",
    href: "/trades/electrical",
    description: "Train in electrical installation and maintenance.",
  },
  {
    title: "HVAC/R",
    href: "/trades/hvac",
    description: "Learn heating, ventilation, and air conditioning.",
  },
  {
    title: "Plumbing",
    href: "/trades/plumbing",
    description: "Study plumbing installation and repair.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Define the initialization function
    window.googleTranslateElementInit = function() {
      // Initialize desktop translator
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'es,zh-CN,ar,ru,ko,ht',
          layout: 'SIMPLE',
          autoDisplay: false
        },
        'google_translate_element'
      );

      // Initialize mobile translator
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'es,zh-CN,ar,ru,ko,ht',
          layout: 'SIMPLE',
          autoDisplay: false
        },
        'google_translate_element_mobile'
      );
    };

    // Load the Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav className="bg-white border-b">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={images.logo.main}
                alt="CoopTech logo"
                width={images.logo.width}
                height={images.logo.height}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <ListItem href="/about" title="About Us">
                          Learn about our mission, vision, and history.
                        </ListItem>
                        <ListItem href="/staff" title="Staff Directory">
                          Meet our dedicated team of educators and staff.
                        </ListItem>
                        <ListItem href="/adult-education" title="Adult Education">
                          Evening programs for adults 22 and older.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/locations" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Locations
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <ListItem href="/gallery" title="Gallery">
                          View photos of our programs and facilities.
                        </ListItem>
                        <ListItem href="/faq" title="FAQ">
                          Find answers to frequently asked questions.
                        </ListItem>
                        <ListItem href="/contact" title="Contact">
                          Get in touch with us.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Google Translate Element - Desktop */}
              <div 
                id="google_translate_element" 
                className="ml-4 flex-shrink-0"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden",
              isOpen ? "block" : "hidden"
            )}
          >
            <div className="pt-2 pb-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </Link>

              {/* Programs Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('programs')}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <span>Programs</span>
                  <span className={cn(
                    "ml-2 transition-transform duration-200",
                    activeDropdown === 'programs' ? 'rotate-180' : ''
                  )}>▼</span>
                </button>
                {activeDropdown === 'programs' && (
                  <div className="pl-4">
                    {components.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('about')}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <span>About</span>
                  <span className={cn(
                    "ml-2 transition-transform duration-200",
                    activeDropdown === 'about' ? 'rotate-180' : ''
                  )}>▼</span>
                </button>
                {activeDropdown === 'about' && (
                  <div className="pl-4">
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/staff"
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Staff Directory
                    </Link>
                    <Link
                      href="/adult-education"
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Adult Education
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/locations"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Locations
              </Link>

              {/* Resources Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <span>Resources</span>
                  <span className={cn(
                    "ml-2 transition-transform duration-200",
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  )}>▼</span>
                </button>
                {activeDropdown === 'resources' && (
                  <div className="pl-4">
                    <Link
                      href="/gallery"
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Gallery
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* Google Translate Element - Mobile */}
              <div className="px-3 py-2">
                <div 
                  id="google_translate_element_mobile" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        /* Hide Google Translate attribution */
        .goog-logo-link {
          display: none !important;
        }
        .goog-te-gadget {
          color: transparent !important;
        }
        .goog-te-gadget .goog-te-combo {
          color: #374151;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          padding: 0.375rem 2.25rem 0.375rem 0.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          background-color: #fff;
          cursor: pointer;
          width: 100%;
          max-width: 100%;
        }
        @media (min-width: 1024px) {
          .goog-te-gadget .goog-te-combo {
            width: auto;
          }
        }
        .goog-te-gadget .goog-te-combo:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        /* Hide the top banner when the page is translated */
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        /* Mobile specific styles */
        #google_translate_element_mobile .goog-te-gadget {
          width: 100%;
        }
        #google_translate_element_mobile .goog-te-gadget .goog-te-combo {
          width: 100%;
          margin: 0;
        }
      `}</style>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"; 