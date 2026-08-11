import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <footer id="contacte" className="px-6 py-24 bg-[var(--blueprint-deep)] blueprint-grid">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase mb-4">
          {t.contact.label}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">{t.contact.heading}</h2>
        <p className="text-white/70 max-w-md mx-auto mb-10">{t.contact.subtext}</p>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-wider">
          <a
            href="mailto:abriltc04@gmail.com"
            className="bg-[var(--accent)] text-[var(--ink)] px-5 py-3 font-semibold hover:bg-white transition-colors"
          >
            abriltc04@gmail.com
          </a>
          <a
            href="https://github.com/apriluu"
            target="_blank"
            rel="noreferrer"
            className="border border-white/25 px-5 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.contact.github}
          </a>
          <a
            href="https://linkedin.com/in/abril-tufet-coll"
            target="_blank"
            rel="noreferrer"
            className="border border-white/25 px-5 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.contact.linkedin}
          </a>
        </div>
        <p className="font-mono text-[10px] text-white/30 mt-16 uppercase tracking-widest">
          Abril Tufet Coll · Lleida, Catalonia · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
