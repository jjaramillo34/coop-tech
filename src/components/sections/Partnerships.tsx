'use client';

import { useRef } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { Title } from "@/components/ui/title";
import { Carousel } from "@/components/ui/carousel";
import { images } from "@/config/images";

const partners = Object.values(images.partners);

export default function Partnerships() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({ ref });

  const partnerCards = partners.map((partner, index) => (
    <div 
      key={index}
      className={cn(
        "aspect-video relative bg-white rounded-xl",
        "shadow-md hover:shadow-xl transition-all duration-500",
        "border border-primary-100 hover:border-primary-300",
        "transform hover:-translate-y-1 hover:bg-primary-50/10",
        "group p-6",
        isVisible && "animate-fade-in-up"
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300 rounded-xl" />
      <div className="relative w-full h-full">
        <Image
          src={partner.src}
          alt={partner.alt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
        />
      </div>
    </div>
  ));

  return (
    <div 
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-primary-50/50 to-white"
      aria-labelledby="partnerships-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Title
            id="partnerships-title"
            variant="section"
            align="center"
          >
            Our Partners
          </Title>
        </div>
        <div className="max-w-7xl mx-auto">
          <Carousel 
            items={partnerCards}
            itemsPerView={4}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </div>
    </div>
  );
} 