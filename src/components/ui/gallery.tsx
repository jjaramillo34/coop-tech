"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(images.map(img => img.category))).sort()
  
  const filteredImages = selectedCategory
    ? images.filter(img => img.category === selectedCategory)
    : images

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const showNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const showPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  // Function to get JPG fallback path
  const getFallbackPath = (webpPath: string) => {
    return webpPath.replace('.webp', '.jpg')
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-primary/10 hover:bg-primary/20 text-primary-foreground"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-colors",
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-primary/10 hover:bg-primary/20 text-primary-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            <picture>
              <source srcSet={image.src} type="image/webp" />
              <Image
                src={getFallbackPath(image.src)}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </picture>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm">{image.alt}</p>
              <p className="text-xs opacity-75">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/90">
          <DialogHeader className="absolute top-4 left-4 right-4 z-50">
            <DialogTitle className="text-white">
              {selectedImage !== null ? filteredImages[selectedImage].alt : 'Image Gallery'}
            </DialogTitle>
          </DialogHeader>
          
          {selectedImage !== null && (
            <div className="relative h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
              <div className="flex items-center justify-center h-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    showPrevious()
                  }}
                  className="absolute left-4 text-white hover:text-gray-300"
                >
                  <ChevronLeft size={40} />
                </button>
                <div className="relative w-full h-full">
                  <picture>
                    <source srcSet={filteredImages[selectedImage].src} type="image/webp" />
                    <Image
                      src={getFallbackPath(filteredImages[selectedImage].src)}
                      alt={filteredImages[selectedImage].alt}
                      fill
                      className="object-contain"
                      sizes="90vw"
                      priority
                    />
                  </picture>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-lg font-semibold">{filteredImages[selectedImage].alt}</p>
                    <p className="text-sm opacity-75">{filteredImages[selectedImage].category}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    showNext()
                  }}
                  className="absolute right-4 text-white hover:text-gray-300"
                >
                  <ChevronRight size={40} />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 