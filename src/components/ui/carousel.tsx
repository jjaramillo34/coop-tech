'use client';

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerView: number | {
    sm?: number;
    md?: number;
    lg?: number;
  };
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  items,
  itemsPerView = {
    sm: 1,
    md: 2,
    lg: 3,
  },
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<'sm' | 'md' | 'lg'>('sm');
  const timerRef = useRef<NodeJS.Timeout>();

  // Update breakpoint on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCurrentBreakpoint('lg');
      else if (width >= 768) setCurrentBreakpoint('md');
      else setCurrentBreakpoint('sm');
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get current items per view based on breakpoint
  const currentItemsPerView = typeof itemsPerView === 'number' 
    ? itemsPerView 
    : itemsPerView[currentBreakpoint] || 1;

  const totalSlides = Math.ceil(items.length / currentItemsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      timerRef.current = setInterval(handleNext, interval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, interval, isHovered, handleNext]);

  return (
    <div 
      className="relative group touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div 
              key={slideIndex}
              className="flex-shrink-0 w-full grid gap-4 sm:gap-6 md:gap-8"
              style={{
                gridTemplateColumns: `repeat(${currentItemsPerView}, minmax(0, 1fr))`,
              }}
            >
              {items.slice(
                slideIndex * currentItemsPerView,
                (slideIndex + 1) * currentItemsPerView
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Hidden on touch devices */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12",
              "p-2 rounded-full bg-white shadow-lg border border-gray-200",
              "opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
              "transition-all duration-300 hover:bg-gray-50",
              "focus:outline-none focus:ring-2 focus:ring-primary-500",
              "hidden sm:flex items-center justify-center"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-12",
              "p-2 rounded-full bg-white shadow-lg border border-gray-200",
              "opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
              "transition-all duration-300 hover:bg-gray-50",
              "focus:outline-none focus:ring-2 focus:ring-primary-500",
              "hidden sm:flex items-center justify-center"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-primary-500 w-6" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 