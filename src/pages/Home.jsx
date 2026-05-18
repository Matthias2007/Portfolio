import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const fullText = 'Beginner Developer & AI Enthusiast'

export default function Home() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) { clearInterval(timer); setDone(true) }
    }, 45)
    return () => clearInterval(timer)
  }, [])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <PageTransition>
      <section className="min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-20">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="w-5 h-px bg-accent" />
            <span className="font-display text-accent text-xs tracking -[0.2em]">EPITECH · PROMO 2028</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="font-display text-5xl md:text-7xl font-bold text-text leading-none mb-2">
            Matthias
          </motion.h1>
          <motion.h1 variants={item} className="font-display text-5xl md:text-7xl font-bold leading-none mb-8">
            <span className="text-accent">Holzschneiders</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.p variants={item} className="font-display text-lg md:text-xl text-subtle mb-10 min-h-[1.8em]">
            {displayed}
            {!done && <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-cursor-blink align-middle" />}
          </motion.p>

          {/* Bio */}
          <motion.p variants={item} className="font-body text-text/70 text-base leading-relaxed max-w-xl mb-12">
            Passionné par le développement logiciel et l'intelligence artificielle.
            J'explore en permanence de nouvelles technos pour construire des projets qui allient
            logique et créativité.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group flex items-center gap-3 px-6 py-3 bg-accent text-bg font-display text-sm font-bold tracking-wider hover:bg-accent/90 transition-all duration-200"
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 px-6 py-3 border border-border text-subtle font-display text-sm tracking-wider hover:border-accent hover:text-accent transition-all duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Skills quick bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-border flex flex-wrap gap-3"
        >
          {['Python', 'JavaScript', 'HTML/CSS', 'Docker', 'SQL', 'pandas', 'sklearn', 'React', 'tailwind'].map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}
