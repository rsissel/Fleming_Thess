'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, MapPin, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#b8860b] font-semibold text-sm tracking-widest uppercase mb-3 block">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#2d2a24] mb-4">
            Interested? Get in Touch
          </h2>
          <div className="w-16 h-1 bg-[#d4a843] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[700px] mx-auto"
        >
          <div className="bg-[#faf7f2] rounded-2xl p-8 md:p-12 shadow-md">
            {/* Host info */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#d4a843]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-[#b8860b]">S</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2a24] mb-1">Slavica</h3>
              <p className="text-[#7a756d] text-sm">Your Host</p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="p-2.5 bg-[#d4a843]/15 rounded-lg">
                  <Phone size={20} className="text-[#b8860b]" />
                </div>
                <div>
                  <p className="text-xs text-[#7a756d] mb-0.5">Phone Number</p>
                  <a href="tel:+306942244944" className="font-semibold text-[#2d2a24] hover:text-[#b8860b] transition-colors">
                    +30 694 224 4944
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="p-2.5 bg-[#d4a843]/15 rounded-lg">
                  <MapPin size={20} className="text-[#b8860b]" />
                </div>
                <div>
                  <p className="text-xs text-[#7a756d] mb-0.5">Address</p>
                  <p className="font-semibold text-[#2d2a24] text-sm">Edmondou Rostan 14, Thessaloniki 546 41, Greece</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/306942244944?text=Hi%20Slavica%2C%20I%27m%20interested%20in%20the%20apartment%20near%20Fleming%20Metro."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.637-.766-6.464-2.064l-.45-.327-2.636.883.882-2.636-.327-.45A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B306942244944"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7360F2] hover:bg-[#5e4ed9] text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Viber
              </a>
            </div>

            <p className="text-center text-xs text-[#7a756d] mt-6">
              Feel free to reach out anytime — Slavica is happy to help with any questions about the property.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
