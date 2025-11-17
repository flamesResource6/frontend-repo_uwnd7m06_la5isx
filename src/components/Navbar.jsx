import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a href="#home" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-white font-semibold tracking-tight">
          <span className="text-[#00CC00]">Body</span>Scan
        </motion.a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          {['Usługi', 'Mapa/Rezerwacja', 'Współpraca', 'Kontakt'].map((item) => (
            <a key={item} href={item === 'Usługi' ? '#features' : item === 'Mapa/Rezerwacja' ? '#mapa' : item === 'Współpraca' ? '#b2b' : '#kontakt'} className="hover:text-white transition">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="sm:hidden text-white">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="sm:hidden px-6 pb-4 text-gray-300">
          <a href="#features" className="block py-2">Usługi</a>
          <a href="#mapa" className="block py-2">Mapa/Rezerwacja</a>
          <a href="#b2b" className="block py-2">Współpraca</a>
          <a href="#kontakt" className="block py-2">Kontakt</a>
        </div>
      )}
    </header>
  )
}
