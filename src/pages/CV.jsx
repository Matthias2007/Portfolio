import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const education = [
  {
    period: '2025 →',
    title: 'Epitech',
    subtitle: 'Expert en Technologies de l\'Information - Promo 2028',
    desc: 'Spécialisation en développement logiciel et technologies numériques. Pédagogie par projets, approche hands-on.',
  },
  {
    period: '2022 - 2025',
    title: 'Lycée Jean Hanzelet',
    subtitle: 'Baccalauréat Général - Mention Assez Bien',
    desc: '',
  },
  {
    period: '2018 - 2022',
    title: 'Collège Joliot-Curie',
    subtitle: 'Diplôme National du Brevet',
    desc: '',
  },
  {
    period: 'Fév. 2022',
    title: 'Stage de 3e - Optic 2000',
    subtitle: 'Découverte du monde professionnel',
    desc: '',
  },
]

const hardSkills = [
  { cat: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'react', 'tailwind'] },
  { cat: 'Backend / Scripting', items: ['Python', 'SQL'] },
  { cat: 'DevOps', items: ['Docker'] },
  { cat: 'Data / IA', items: ['pandas', 'sklearn', 'matplotlib', 'XGBoost'] },
  { cat: 'Design', items: ['Responsive Design', 'UI/UX basics'] },
]

const softSkills = ['Auto-apprentissage', 'Gestion du temps', 'Communication', 'Ouverture d\'esprit']

export default function CV() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <PageTransition>
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="font-display text-accent text-xs tracking-[0.2em]">03 / CURRICULUM VITAE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-text font-bold">Parcours</h2>
            <a
              href="/assets/CV_Matthias.H.pdf"
              download
              className="group flex items-center gap-3 px-6 py-3 border border-border hover:border-accent text-subtle hover:text-accent font-display text-xs tracking-widest transition-all duration-200 self-start md:self-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger PDF
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="font-display text-xs text-accent tracking-[0.2em] mb-6">FORMATION</h3>
            <div className="relative space-y-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-6 relative"
                >
                  <span className="absolute left-0 top-2 w-2 h-2 rounded-full border border-accent bg-bg -translate-x-1/2" />
                  <div className="font-display text-xs text-muted mb-1">{e.period}</div>
                  <div className="font-body font-semibold text-text text-sm">{e.title}</div>
                  <div className="font-body text-subtle text-xs mb-1">{e.subtitle}</div>
                  {e.desc && <p className="font-body text-text/50 text-xs leading-relaxed">{e.desc}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <div className="space-y-8">
            <motion.div variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="font-display text-xs text-accent tracking-[0.2em] mb-6">HARD SKILLS</h3>
              <div className="space-y-4">
                {hardSkills.map((group, i) => (
                  <div key={i}>
                    <span className="font-display text-xs text-muted block mb-2">{group.cat}</span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="tag-accent">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="font-display text-xs text-accent tracking-[0.2em] mb-6">SOFT SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
