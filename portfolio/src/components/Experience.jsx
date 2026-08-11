import { GraduationCap, Briefcase } from 'lucide-react'
import TitleBlock from './TitleBlock'
import { getWork, getEducation } from '../data/experience'
import { useLanguage } from '../i18n/LanguageContext'

function TimelineColumn({ heading, icon: Icon, items }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5">
        <Icon size={14} strokeWidth={1.75} />
        {heading}
      </div>
      <div className="relative border-l border-white/15 pl-6 space-y-8">
        {items.map((e) => (
          <div key={e.role} className="relative">
            <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/50 mb-1">
              {e.period}
            </p>
            <h3 className="font-display text-base font-semibold mb-1">{e.role}</h3>
            <p className="font-mono text-[11px] uppercase tracking-wide text-white/50 mb-2">
              {e.org} · {e.location}
            </p>
            {e.description && (
              <p className="text-white/70 text-sm leading-relaxed">{e.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const { lang, t } = useLanguage()
  const work = getWork(lang)
  const education = getEducation(lang)

  return (
    <section id="experiencia" className="px-6 py-24 bg-[var(--blueprint-deep)] blueprint-grid">
      <div className="max-w-5xl mx-auto">
        <TitleBlock index="04" label={t.career.label} meta={t.career.meta} />

        <div className="grid md:grid-cols-2 gap-12">
          <TimelineColumn heading={t.career.education} icon={GraduationCap} items={education} />
          <TimelineColumn heading={t.career.work} icon={Briefcase} items={work} />
        </div>

        <a
          href={`${import.meta.env.BASE_URL}cv-abril-tufet-coll.pdf`}
          className="inline-flex items-center gap-2 mt-12 font-mono text-xs uppercase tracking-wider border border-white/25 px-5 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          {t.career.downloadCv}
        </a>
      </div>
    </section>
  )
}
