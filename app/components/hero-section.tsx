'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect()
        setOffset(-rect.top * 0.35)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 w-full h-[130%]"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/images/10-stairs-up-bg.jpg"
          alt="Apartment interior with wooden staircase"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[800px]"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin size={16} className="text-[#d4a843]" />
            <span className="text-sm font-medium">Thessaloniki, Greece</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            Modern Loft Apartment
            <br />
            <span className="text-[#d4a843]">Near the Sea</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-[600px] mx-auto leading-relaxed">
            A beautifully updated urban retreat just steps from Fleming Metro and the Thessaloniki waterfront.
          </p>

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <BedDouble size={18} className="text-[#d4a843]" />
              <span className="text-sm font-medium">1 Bedroom</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Bath size={18} className="text-[#d4a843]" />
              <span className="text-sm font-medium">1 Bathroom</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector('#gallery')?.scrollIntoView?.({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-[#b8860b] hover:bg-[#9a7209] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Gallery
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView?.({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold rounded-lg border border-white/30 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.button>
      </div>
    </section>
  )
}
