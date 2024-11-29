'use client';

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerView?: number;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  items,
  itemsPerView = 4,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const totalSlides = Math.ceil(items.length / itemsPerView);

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
      className="relative group"
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
              className="flex-shrink-0 w-full grid grid-cols-4 gap-8"
            >
              {items.slice(
                slideIndex * itemsPerView,
                (slideIndex + 1) * itemsPerView
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12",
          "p-2 rounded-full bg-white shadow-lg border border-gray-200",
          "opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
          "transition-all duration-300 hover:bg-gray-50",
          "focus:outline-none focus:ring-2 focus:ring-primary-500"
        )}
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
          "focus:outline-none focus:ring-2 focus:ring-primary-500"
        )}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Dots Indicator */}
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
          />
        ))}
      </div>
    </div>
  );
} 