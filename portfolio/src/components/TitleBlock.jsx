export default function TitleBlock({ index, label, meta }) {
  return (
    <div className="flex items-end justify-between border-b border-white/15 pb-3 mb-10 font-mono text-xs tracking-widest uppercase text-[var(--white)]/60">
      <div className="flex items-baseline gap-3">
        <span className="text-[var(--accent)]">SEC. {index}</span>
        <span className="text-white">{label}</span>
      </div>
      {meta && <span className="hidden sm:inline">{meta}</span>}
    </div>
  )
}
