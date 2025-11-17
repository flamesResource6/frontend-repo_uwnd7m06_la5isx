import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import B2B from './components/B2B'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'

export default function App() {
  React.useEffect(() => {
    // Digital ripple on CTA: track mouse position for gradient center
    const btn = document.querySelector('#home a.group')
    if (!btn) return
    const handler = (e) => {
      const rect = btn.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      btn.style.setProperty('--x', `${x}%`)
      btn.style.setProperty('--y', `${y}%`)
    }
    btn.addEventListener('mousemove', handler)
    return () => btn.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <B2B />
      <Footer />
    </div>
  )
}
