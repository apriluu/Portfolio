import TitleBlock from './TitleBlock'
import { getPosts } from '../data/posts'
import { useLanguage } from '../i18n/LanguageContext'

export default function Blog() {
  const { lang, t } = useLanguage()
  const posts = getPosts(lang)

  return (
    <section id="blog" className="px-6 py-24 bg-[var(--blueprint)] blueprint-grid-fine">
      <div className="max-w-4xl mx-auto">
        <TitleBlock index="05" label={t.blog.label} meta={`${posts.length} ${t.blog.metaSuffix}`} />

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 hover:bg-white/[0.03] transition-colors px-2 -mx-2"
            >
              <span className="font-mono text-xs text-white/40 shrink-0 sm:w-20">{p.date}</span>
              <div>
                <h3 className="font-display text-base font-semibold group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
