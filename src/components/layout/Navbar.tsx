'use client';

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

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
]

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container py-2">
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
      </div>
    </nav>
  )
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
  )
})
ListItem.displayName = "ListItem" 