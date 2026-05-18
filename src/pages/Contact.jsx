import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError(false)
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xzzjyykn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setSent(true); form.reset() }
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const fields = [
    { id: 'name', label: 'Name', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'tel', label: 'Phone (optional)', type: 'tel', required: false },
  ]

  return (
    <PageTransition>
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="font-display text-accent text-xs tracking-[0.2em]">04 / CONTACT</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-text font-bold mb-6">Let's build<br /><span className="text-accent">something.</span></h2>
          <p className="font-body text-subtle text-sm leading-relaxed">
            Une idée, un projet, un stage ou juste envie de se connecter ?
            Je suis toujours ouvert à explorer de nouvelles opportunités.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <div className="border border-accent/30 bg-accent/5 p-8 text-center">
                <div className="font-display text-accent text-sm tracking-widest mb-2">MESSAGE ENVOYÉ</div>
                <p className="font-body text-text/60 text-sm">Je reviendrai vers toi très bientôt !</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map(({ id, label, type, required }) => (
                  <div key={id} className="relative">
                    <label htmlFor={id} className="block font-display text-xs text-muted tracking-wider mb-2">
                      {label.toUpperCase()}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required={required}
                      className="w-full bg-surface border border-border focus:border-accent/60 text-text font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-muted"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block font-display text-xs text-muted tracking-wider mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-surface border border-border focus:border-accent/60 text-text font-body text-sm px-4 py-3 outline-none transition-colors duration-200 resize-none placeholder:text-muted"
                  />
                </div>

                {error && (
                  <p className="font-display text-xs text-accent2 tracking-wider">Erreur lors de l'envoi. Réessaie.</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent text-bg font-display text-sm font-bold tracking-widest py-4 hover:bg-accent/90 transition-all duration-200 disabled:opacity-50"
                >
                  {sending ? 'ENVOI...' : 'ENVOYER →'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-8 pt-4"
          >
            <div>
              <div className="font-display text-xs text-muted tracking-widest mb-3">LOCALISATION</div>
              <p className="font-body text-text/70 text-sm">France — disponible à distance</p>
            </div>
            <div>
              <div className="font-display text-xs text-muted tracking-widest mb-3">STATUT</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="font-body text-text/70 text-sm">Ouvert aux opportunités & stages</p>
              </div>
            </div>
            <div>
              <div className="font-display text-xs text-muted tracking-widest mb-3">GITHUB</div>
              <a
                href="https://github.com/Matthias2007"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-subtle hover:text-accent text-sm transition-colors"
              >
                github.com/Matthias2007 →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
