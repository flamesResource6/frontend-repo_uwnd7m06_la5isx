import React from 'react'
import { motion } from 'framer-motion'

export default function B2B() {
  const groups = [
    { title: 'Kluby Fitness', desc: 'Zwiększ retencję i wartość karnetu.' },
    { title: 'Trenerzy Personalni', desc: 'Oprzyj plany treningowe na twardych danych.' },
    { title: 'Dietetycy', desc: 'Twórz precyzyjne plany żywieniowe.' },
  ]

  return (
    <section id="b2b" className="relative bg-[#0B0B0B] text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-bg" />
        <div className="bloom" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-3xl sm:text-4xl font-bold">Zbuduj Lojalność Klientów. Zostań Partnerem BodyScan.</motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 * i }} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-gray-300/90">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10">
          <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-[#00CC00] px-7 py-3 text-base font-semibold text-black shadow-[0_0_20px_rgba(0,204,0,0.4)] hover:brightness-110 transition">KUP PAKIET B2B i Uruchom Punkt</a>
        </motion.div>
      </div>
    </section>
  )
}
