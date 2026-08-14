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
          {visible.map((p) => (
            <article
              key={p.id}
              className="bg-[var(--blueprint-deep)]/60 border border-white/10 p-6 flex flex-col hover:border-white/25 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <span
                  className={`shrink-0 mt-1 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap ${
                    p.status === 'private'
                      ? 'text-[var(--amber)]'
                      : p.status === 'academic'
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--live)]'
                  }`}
                >
                  {p.statusLabel}
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">{p.summary}</p>
              <p className="text-white/40 text-xs mb-3">{p.tags.join(' · ')}</p>
              {(p.repoUrl || p.demoUrl) && (
                <div className="flex flex-wrap gap-4 text-xs">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/70 hover:text-[var(--accent)] transition-colors"
                    >
                      {t.projects.viewRepo}
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/70 hover:text-[var(--accent)] transition-colors"
                    >
                      {t.projects.viewDemo}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
