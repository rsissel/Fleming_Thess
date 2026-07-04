'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Wifi, AirVent, Tv, WashingMachine, CookingPot, Snowflake,
  ShowerHead, BedDouble, Armchair, UtensilsCrossed
} from 'lucide-react'

const amenities = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: AirVent, label: 'Air Conditioning' },
  { icon: Tv, label: 'Smart TV' },
  { icon: WashingMachine, label: 'Washer & Dryer' },
  { icon: CookingPot, label: 'Fully Equipped Kitchen' },
  { icon: Snowflake, label: 'Heating System' },
  { icon: ShowerHead, label: 'Rain Shower' },
  { icon: BedDouble, label: 'Loft Bedroom' },
  { icon: Armchair, label: 'Comfortable Lounge' },
  { icon: UtensilsCrossed, label: 'Dining Area' },
]

export default function AmenitiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="py-20 md:py-28 bg-[#2d2a24] text-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#d4a843] font-semibold text-sm tracking-widest uppercase mb-3 block">Amenities</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need
          </h2>
          <div className="w-16 h-1 bg-[#d4a843] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {amenities.map((a: any, i: number) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.5) }}
              className="flex flex-col items-center gap-3 p-5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-center"
            >
              <div className="p-3 bg-[#d4a843]/15 rounded-lg">
                <a.icon size={24} className="text-[#d4a843]" />
              </div>
              <span className="text-sm font-medium text-white/90">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
