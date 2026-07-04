'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play } from 'lucide-react'
import { useRef, useState } from 'react'

export default function VideoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    if (videoRef?.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section id="video" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#b8860b] font-semibold text-sm tracking-widest uppercase mb-3 block">Video Tour</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#2d2a24] mb-4">
            Take a Virtual Walk-Through
          </h2>
          <div className="w-16 h-1 bg-[#d4a843] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-[900px] mx-auto rounded-xl overflow-hidden shadow-xl bg-black"
        >
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            poster="/images/02-living-room-1.jpg"
            className="w-full aspect-video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/images/fleming-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play overlay */}
          {!isPlaying && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors group"
              aria-label="Play video"
            >
              <div className="w-20 h-20 bg-[#b8860b]/90 group-hover:bg-[#b8860b] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
