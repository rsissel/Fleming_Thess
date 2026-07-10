export default function FooterSection() {
  return (
    <footer className="bg-[#2d2a24] text-white/70 py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="font-display font-semibold text-white text-sm">Fleming Residence</span>
        </div>
        <p className="text-xs text-white/50">
          Edmondou Rostan 29, Thessaloniki 546 41, Greece
        </p>
        <p className="text-xs text-white/40">
          &copy; 2026 Fleming Residence. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
