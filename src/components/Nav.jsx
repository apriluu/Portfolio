import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const LANGS = ['ca', 'es', 'en']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LINKS = [
    { id: 'projectes', label: t.nav.projects },
    { id: 'experiencia', label: t.nav.career },
    { id: 'blog', label: t.nav.blog },
    { id: 'contacte', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 font-mono text-xs tracking-wider transition-colors duration-300 ${
        scrolled ? 'bg-[var(--blueprint-deep)]/90 backdrop-blur border-b border-white/10' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="uppercase text-white hover:text-[var(--accent)] transition-colors">
          Abril Tufet Coll <span className="text-[var(--accent)]">/ ATC-01</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/70">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-[var(--accent)] transition-colors uppercase">
              {l.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}cv-abril-tufet-coll.pdf`}
            className="border border-white/25 px-3 py-1.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors uppercase"
          >
            {t.nav.downloadCv}
          </a>
          <div className="flex items-center gap-1 border border-white/15 px-1 py-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={`Switch language to ${l}`}
                className={`px-2 py-0.5 uppercase transition-colors ${
                  lang === l ? 'bg-[var(--accent)] text-[var(--ink)]' : 'text-white/50 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
