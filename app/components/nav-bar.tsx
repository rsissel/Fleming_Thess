'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Video', href: '#video' },
  { label: 'Area', href: '#area' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => handleClick('#home')} className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#b8860b' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className={`font-display font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-[#2d2a24]' : 'text-white'
            }`}>
              Fleming Residence
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l: { label: string; href: string }) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className={`text-sm font-medium transition-colors hover:text-[#b8860b] ${
                  scrolled ? 'text-[#4a4640]' : 'text-white/90'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className={scrolled ? 'text-[#2d2a24]' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-[#2d2a24]' : 'text-white'} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg pt-20"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((l: { label: string; href: string }) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-lg font-display font-semibold text-[#2d2a24] hover:text-[#b8860b] transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
