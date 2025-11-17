import React from 'react'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-bg" />
        <div className="bloom" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-3xl sm:text-4xl font-bold">BodyScan – Mobilna Diagnoza w Twoim Klubie.</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 text-gray-300/90 max-w-3xl">Jesteśmy tam, gdzie Ty trenujesz. Rezerwacja online. Szybki pomiar (15 min). Profesjonalny Operator/Trener.</motion.p>

        {/* Map placeholder with subtle zoom-in */}
        <motion.div initial={{ scale: 0.96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }} id="mapa" className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative">
            <iframe
              title="Mapa punktów BodyScan"
              className="absolute inset-0 w-full h-full"
              style={{ filter: 'grayscale(0.2) contrast(1.1) brightness(0.9)' }}
              src="https://www.google.com/maps/d/embed?mid=1cWc0-BodyScan-Map-Example&ehbc=2E312F"
            />
            <div className="pointer-events-none absolute inset-0 scanline-overlay" />
          </div>
        </motion.div>

        {/* Reservation widget placeholder */}
        <div id="rezerwacja" className="mt-10">
          <div className="rounded-xl border border-[#00CC00]/30 p-6 bg-black/40">
            <h3 className="text-xl font-semibold">Widget Rezerwacyjny</h3>
            <p className="mt-2 text-gray-300/90">Tutaj wstawimy integrację z systemem rezerwacji. Na razie to placeholder – użytkownicy widzą, gdzie będzie rezerwacja.</p>
            <button className="mt-4 inline-flex items-center rounded-md bg-[#00CC00] px-5 py-2 font-semibold text-black shadow-[0_0_20px_rgba(0,204,0,0.4)] hover:brightness-110 transition">ZAREZERWUJ TERMIN</button>
          </div>
        </div>
      </div>
    </section>
  )
}
