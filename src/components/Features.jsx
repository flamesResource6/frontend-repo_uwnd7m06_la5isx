import React from 'react'
import { motion } from 'framer-motion'
import { Activity, BarChart3, Cpu, Brain } from 'lucide-react'

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.1 * i, duration: 0.45, ease: 'easeOut' }
  })
}

export default function Features() {
  const feats = [
    {
      icon: BarChart3,
      title: 'Analiza',
      desc: 'Skład Ciała InBody 270 (Woda, Mięśnie, Tłuszcz).'
    },
    {
      icon: Activity,
      title: 'Dynamika',
      desc: '4 Testy Sportowe (Skoczność, Reakcja, Siła Uścisku, Zwinność).'
    },
    {
      icon: Cpu,
      title: 'Cyfrowy Wgląd',
      desc: 'Wygodna Aplikacja z Historią Pomiarów.'
    },
    {
      icon: Brain,
      title: 'Plan Działania',
      desc: 'Spersonalizowany Raport AI (Trening i Żywienie).'
    }
  ]

  return (
    <section id="features" className="relative bg-[#0B0B0B] text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-bg" />
        <div className="bloom" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-3xl sm:text-4xl font-bold">Dane, Które Napędzają Twój Progres.</motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {feats.map((f, idx) => (
            <motion.div
              key={f.title}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm hover:border-[#00CC00]/40 transition group"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx + 1}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-black/50 border border-white/10 group-hover:border-[#00CC00]/60 transition shadow-[0_0_20px_rgba(0,204,0,0.15)]">
                  {React.createElement(f.icon, { className: 'w-6 h-6 text-[#00CC00]' })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-gray-300/90">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
