import { BrainCircuit, Boxes, FileText, Wrench } from 'lucide-react'
import TitleBlock from './TitleBlock'
import { useLanguage } from '../i18n/LanguageContext'

const CATEGORIES = [
  { key: 'ml', icon: BrainCircuit, items: ['Python', 'PyTorch', 'Hugging Face', 'QLoRA / PEFT', 'Claude API'] },
  { key: 'backend', icon: Boxes, items: ['C#', '.NET 8', 'MCP', 'AutoCAD API', 'Revit API'] },
  { key: 'docs', icon: FileText, items: ['XML Automation', 'xlsx', 'docx', 'Obsidian / RAG'] },
  { key: 'tools', icon: Wrench, items: ['Git', 'Prompt Engineering', 'Model Evaluation'] },
]

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="px-6 py-24 bg-[var(--blueprint-deep)] blueprint-grid">
      <div className="max-w-6xl mx-auto">
        <TitleBlock index="02" label={t.techStack.label} meta={t.techStack.meta} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map(({ key, icon: Icon, items }) => (
            <div key={key} className="corner-marks border border-white/10 p-5">
              <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
                <Icon size={16} strokeWidth={1.75} />
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  {t.techStack.categories[key]}
                </span>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-white/70 font-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
