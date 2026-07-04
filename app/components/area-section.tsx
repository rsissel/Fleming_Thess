'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coffee, ShoppingBag, TrainFront, Sunset } from 'lucide-react'
import Image from 'next/image'

const features = [
  { icon: TrainFront, title: 'Metro Access', desc: 'Steps from Fleming Metro Station for seamless commuting.' },
  { icon: Sunset, title: 'Seaside Walks', desc: '6-minute stroll to the stunning Thessaloniki waterfront.' },
  { icon: Coffee, title: 'Cafés & Dining', desc: 'Coffee shops and restaurants just around the corner.' },
  { icon: ShoppingBag, title: 'Local Shopping', desc: 'Grocery stores and markets within walking distance.' },
]

export default function AreaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="area" className="py-20 md:py-28 bg-[#faf7f2]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#b8860b] font-semibold text-sm tracking-widest uppercase mb-3 block">The Neighborhood</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#2d2a24] mb-4">
            Live Where the City Meets the Sea
          </h2>
          <div className="w-16 h-1 bg-[#d4a843] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[#4a4640] leading-relaxed text-base md:text-lg mb-8">
              Perfectly positioned just steps from the Fleming Metro Station, this vibrant neighborhood offers the ultimate blend of coastal tranquility and urban convenience. Whether you are a digital nomad seeking a fresh workspace view or a young couple looking for your next adventure, the community delivers.
            </p>
            <p className="text-[#4a4640] leading-relaxed text-base md:text-lg mb-8">
              Start your mornings with a fresh brew from one of the coffee shops just around the corner, grab ingredients for dinner at the nearby local grocery stores, or unwind after a productive workday with a breathtaking walk along the sea. Everything you need to live, work, and thrive is right at your doorstep.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f: any, i: number) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2 bg-[#d4a843]/15 rounded-md inline-block mb-2">
                    <f.icon size={20} className="text-[#b8860b]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#2d2a24] mb-1">{f.title}</h4>
                  <p className="text-xs text-[#7a756d] leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/images/waterfront-1.jpg"
                alt="Thessaloniki waterfront sunset"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-gray-100 mt-8">
              <Image
                src="/images/waterfront-2.jpg"
                alt="Thessaloniki seafront promenade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md bg-gray-100 col-span-2">
              <Image
                src="/images/waterfront-3.jpg"
                alt="Thessaloniki waterfront at dusk with illuminated promenade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
