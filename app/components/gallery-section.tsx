'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const images = [
  { src: '/images/01-external.jpg', alt: 'Building exterior', label: 'Exterior' },
  { src: '/images/02-living-room-1.jpg', alt: 'Living room with dark sofa and gold cushions', label: 'Living Room' },
  { src: '/images/03-living-room-2.jpg', alt: 'Living room alternate angle with TV', label: 'Living Room' },
  { src: '/images/04-kitchen.png', alt: 'Modern kitchen with marble backsplash', label: 'Kitchen' },
  { src: '/images/05-shelf.png', alt: 'Storage shelf and utility area', label: 'Storage' },
  { src: '/images/06-bathroom.jpg', alt: 'Marble shower bathroom', label: 'Bathroom' },
  { src: '/images/07-bathroom-2.jpg', alt: 'Bathroom vanity and mirror', label: 'Bathroom' },
  { src: '/images/08-table.jpg', alt: 'Dining table with chairs', label: 'Dining' },
  { src: '/images/09-table-stairs.jpg', alt: 'Dining area under the staircase', label: 'Dining' },
  { src: '/images/10-stairs-up-bg.jpg', alt: 'Wooden staircase leading to loft', label: 'Staircase' },
  { src: '/images/11-bedroom.jpg', alt: 'Loft bedroom with large bed and wardrobe', label: 'Bedroom' },
  { src: '/images/12-stairs-down.jpg', alt: 'View from the loft looking down', label: 'Loft View' },
  { src: '/images/13-desk.jpg', alt: 'Desk workspace', label: 'Desk' },
  { src: '/images/waterfront-1.jpg', alt: 'Thessaloniki waterfront sunset with White Tower', label: 'Waterfront' },
  { src: '/images/waterfront-2.jpg', alt: 'Thessaloniki seafront promenade', label: 'Waterfront' },
  { src: '/images/waterfront-3.jpg', alt: 'Thessaloniki waterfront at dusk with lights', label: 'Waterfront' },
]

export default function GallerySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goNext = useCallback(() => setLightboxIndex((p: number | null) => (p !== null ? (p + 1) % images.length : null)), [])
  const goPrev = useCallback(() => setLightboxIndex((p: number | null) => (p !== null ? (p - 1 + images.length) % images.length : null)), [])

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#faf7f2]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#b8860b] font-semibold text-sm tracking-widest uppercase mb-3 block">Gallery</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#2d2a24] mb-4">
            Explore Every Corner
          </h2>
          <div className="w-16 h-1 bg-[#d4a843] mx-auto rounded-full" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img: any, i: number) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.6) }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); closeLightbox() }}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]?.src ?? ''}
                alt={images[lightboxIndex]?.alt ?? 'Apartment photo'}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                sizes="90vw"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
              {(lightboxIndex ?? 0) + 1} / {images.length} — {images[lightboxIndex]?.label ?? ''}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
