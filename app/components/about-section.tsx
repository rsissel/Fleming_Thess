'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Train, Waves, Ruler } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  { icon: Home, label: 'Loft Design', desc: 'Private upstairs bedroom & workspace' },
  { icon: Train, label: 'Metro Access', desc: 'Steps from Fleming station' },
  { icon: Waves, label: 'Near the Sea', desc: '6-min walk to the waterfront' },
  { icon: Ruler, label: 'Fully Equipped', desc: 'Washer, dryer & modern kitchen' },
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#b8860b] font-semibold text-sm tracking-widest uppercase mb-3 block">Welcome</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#2d2a24] mb-4">
            Your Urban Oasis in Thessaloniki
          </h2>
          <div className="w-16 h-1 bg-[#d4a843] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-100"
          >
            <Image
              src="/images/02-living-room-1.jpg"
              alt="Stylish living room with dark sofa and gold accents"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-[#4a4640] leading-relaxed text-base md:text-lg mb-8">
              Welcome to your urban oasis, perfectly positioned just moments from the Fleming Metro Station and a lovely walk by the sea. This beautifully updated 1-bedroom, 1-bathroom apartment seamlessly blends contemporary style with welcoming warmth. The thoughtfully designed layout features a striking upstairs loft, offering a private and versatile sanctuary complete with a large, plush bed and a dedicated workspace.
            </p>
            <p className="text-[#4a4640] leading-relaxed text-base md:text-lg mb-8">
              The home also includes conveniences like an in-unit washer and dryer to ensure your daily routine is effortlessly streamlined. Whether you are commuting into the city via the nearby metro or taking a leisurely 6-minute stroll down to the sea to catch the evening sunset, this property offers the absolute best of both worlds.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h: any, i: number) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#faf7f2] hover:bg-[#f5efe5] transition-colors"
                >
                  <div className="p-2 bg-[#d4a843]/15 rounded-md">
                    <h.icon size={20} className="text-[#b8860b]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#2d2a24]">{h.label}</p>
                    <p className="text-xs text-[#7a756d]">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
