import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="kontakt" className="relative bg-black text-white py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-bg" />
        <div className="bloom" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          <motion.nav initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex gap-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#features" className="hover:text-white transition">Usługi</a>
            <a href="#mapa" className="hover:text-white transition">Mapa/Rezerwacja</a>
            <a href="#b2b" className="hover:text-white transition">Współpraca</a>
            <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
          </motion.nav>

          <div className="flex items-center gap-4">
            <a aria-label="Facebook" href="#" className="p-2 rounded-lg border border-white/10 hover:border-[#00CC00]/60 transition"><Facebook className="w-5 h-5" /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-lg border border-white/10 hover:border-[#00CC00]/60 transition"><Instagram className="w-5 h-5" /></a>
            <a aria-label="Mail" href="mailto:kontakt@bodyscan.pl" className="p-2 rounded-lg border border-white/10 hover:border-[#00CC00]/60 transition"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <form className="rounded-xl border border-white/10 p-6 bg-black/40">
            <h4 className="font-semibold">Szybki kontakt</h4>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <input placeholder="Imię" className="bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:border-[#00CC00]" />
              <input placeholder="Email" className="bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:border-[#00CC00]" />
            </div>
            <textarea placeholder="Wiadomość" className="mt-4 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:border-[#00CC00]" rows={4} />
            <button type="button" className="mt-4 inline-flex items-center rounded-md bg-[#00CC00] px-5 py-2 font-semibold text-black shadow-[0_0_20px_rgba(0,204,0,0.4)] hover:brightness-110 transition">Wyślij</button>
          </form>
          <div className="rounded-xl border border-white/10 p-6 bg-black/40">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} BodyScan.pl – Wszystkie prawa zastrzeżone.</p>
            <p className="text-sm text-gray-400 mt-2">Projekt inspirowany estetyką High-Tech i neonową zielenią.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
