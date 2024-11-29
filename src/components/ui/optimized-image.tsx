'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
}

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={alt}
      className={cn(
        'duration-700 ease-in-out',
        isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0',
        className
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
} 