import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      {/* Grid lines background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="h-full w-full opacity-[0.08] bg-[radial-gradient(circle_at_center,rgba(0,204,0,0.18)_0,transparent_60%)]" />
        <div className="grid-bg absolute inset-0" />
        <div className="scanline-overlay absolute inset-0" />
        <div className="bloom absolute inset-0" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1
            variants={textReveal}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight glitch-text"
          >
            BodyScan.pl: Pełny Skan Twojego Potencjału.
          </motion.h1>
          <motion.p
            variants={textReveal}
            custom={2}
            className="mt-6 text-lg sm:text-xl text-gray-200/90"
          >
            Łączymy precyzyjną Analizę Składu Ciała (InBody) z 4 Testami Wydajności Sportowej. Uzyskaj Raport AI z planem działania.
          </motion.p>

          <motion.div variants={textReveal} custom={3} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#rezerwacja"
              className="group inline-flex items-center justify-center rounded-md bg-[#00CC00] px-7 py-3 text-base font-semibold text-black shadow-[0_0_20px_rgba(0,204,0,0.4)] transition focus:outline-none focus:ring-2 focus:ring-[#00CC00] focus:ring-offset-2 focus:ring-offset-black hover:brightness-110 relative overflow-hidden"
            >
              <span className="relative z-10">ZAREZERWUJ SWÓJ SKAN</span>
              {/* digital ripple */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.25), transparent 40%)'
              }} />
            </a>
            <a href="#mapa" className="inline-flex items-center justify-center rounded-md border border-[#00CC00]/60 px-7 py-3 text-base font-semibold text-white/90 hover:text-white hover:border-[#00CC00] transition">
              ZOBACZ AKTUALNĄ MAPĘ PUNKTÓW
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
