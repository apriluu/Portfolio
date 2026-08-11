import Schematic from './Schematic'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative pt-36 pb-20 px-6 blueprint-grid overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase mb-4">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            {t.hero.headlinePre}
            <span className="text-[var(--accent)]">{t.hero.headlineAccent}</span>
            {t.hero.headlinePost}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">{t.hero.subtext}</p>
          <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider">
            <a
              href="#projectes"
              className="bg-[var(--accent)] text-[var(--ink)] px-5 py-3 font-semibold hover:bg-white transition-colors"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contacte"
              className="border border-white/25 px-5 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>

        <div className="corner-marks p-6">
          <Schematic />
        </div>
      </div>
    </section>
  )
}
