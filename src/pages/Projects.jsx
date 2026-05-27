import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const projects = [
  {
    num: '001',
    title: 'Python Hangman',
    subtitle: 'Console & Graphical Game',
    description:
      'Jeu du pendu développé en Python — version console entièrement fonctionnelle avec gestion des scores, aide contextuelle et messages de victoire/défaite. Projet fondateur dans mon apprentissage de Python.',
    tags: ['Python', 'CLI', 'Game Logic'],
    github: 'https://github.com/Matthias2007/hangman-game-jeu-du-pendu',
    accent: '#00e5ff',
    status: 'Terminé',
  },
  {
    num: '002',
    title: 'Next_buy',
    subtitle: 'ML Reorder Prediction',
    description:
      'Ingénierie de features comportementales pour prédire les prochains achats d\'un client via un modèle XGBoost. Gestion de données CSV, feature engineering avancé avec pandas, évaluation des performances avec sklearn.',
    tags: ['Python', 'XGBoost', 'pandas', 'sklearn', 'Data Science'],
    github: null,
    accent: '#ff6b35',
    status: 'Terminé',
  },
  {
    num: '003',
    title: 'Portfolio Personnel',
    subtitle: 'React + Vite + Tailwind',
    description:
      'Ce portfolio - conçu et développé from scratch en React. Navigation SPA avec React Router, animations Framer Motion, déploiement automatisé sur GitHub Pages.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: null,
    accent: '#a78bfa',
    status: 'Terminé',
  },
  {
    num: '004',
    title: 'Job aggregator - full stack',
    subtitle: 'python + SQL + sklearn + bcrypt + react + tailwind',
    description:
      'Plateforme de recherche d\'emploi et de stages alimentée par l\'API WeLoveDevs. Pipeline complet : ingestion et nettoyage des offres, stockage en base de données, API maison, et frontend de recherche avec filtres.',
    tags: ['Python', 'REST API', 'SQL', 'Data Cleaning', 'Full Stack'],
    github: null,
    accent: '#8bfab5',
    status: 'Terminé',
  },
]

export default function Projects() {
  return (
    <PageTransition>
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="font-display text-accent text-xs tracking-[0.2em]">02 / PROJECTS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-text font-bold">Selected Work</h2>
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-border hover:border-accent/30 bg-surface/40 hover:bg-surface/80 transition-all duration-300 p-8"
            >
              {/* Accent bar on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:opacity-100 opacity-0"
                style={{ background: p.accent }}
              />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  {/* Number + status */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-display text-xs text-muted">{p.num}</span>
                    <span
                      className="font-display text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        color: p.accent,
                        background: p.accent + '15',
                        border: `1px solid ${p.accent}30`,
                      }}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-text font-bold mb-1">{p.title}</h3>
                  <p className="font-body text-subtle text-sm mb-4">{p.subtitle}</p>
                  <p className="font-body text-text/60 text-sm leading-relaxed max-w-xl">{p.description}</p>
                </div>

                <div className="flex flex-col gap-4 md:items-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-display text-xs text-subtle hover:text-accent transition-colors tracking-wider border border-border hover:border-accent/40 px-4 py-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
