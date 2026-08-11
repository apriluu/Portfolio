import { useState } from 'react'
import TitleBlock from './TitleBlock'
import { getProjects, getAllTags } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { lang, t } = useLanguage()
  const [filter, setFilter] = useState(t.projects.filterAll)

  const projects = getProjects(lang)
  const allTags = getAllTags(lang)

  const visible =
    filter === t.projects.filterAll ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projectes" className="px-6 py-24 bg-[var(--blueprint)] blueprint-grid-fine">
      <div className="max-w-6xl mx-auto">
        <TitleBlock
          index="03"
          label={t.projects.label}
          meta={`${projects.length} ${t.projects.metaSuffix}`}
        />

        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs uppercase tracking-wide">
          {[t.projects.filterAll, ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 py-1.5 border transition-colors ${
                filter === tag
                  ? 'border-[var(--accent)] text-[var(--accent)]'
                  : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className="corner-marks bg-[var(--blueprint-deep)]/60 border border-white/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3 font-mono text-[10px] uppercase tracking-widest text-white/50">
                <span>
                  {t.projects.ref} {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={p.status === 'private' ? 'text-[var(--amber)]' : 'text-[var(--live)]'}
                >
                  {p.statusLabel}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5 flex-1">{p.summary}</p>
              <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wide">
                {p.tags.map((tag) => (
                  <span key={tag} className="border border-white/15 px-2 py-1 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
