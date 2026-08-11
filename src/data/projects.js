// Shared, language-independent fields
const base = [
  {
    id: 'thesis',
    tags: ['LLM Fine-Tuning', 'QLoRA / PEFT', 'Claude API', 'Model Evaluation'],
    status: 'public',
  },
  {
    id: 'email-agent',
    tags: ['Python', 'LLM', 'Outlook API', 'Automation'],
    status: 'private',
  },
  {
    id: 'mcp-autocad',
    tags: ['MCP', 'AutoCAD', 'C#', '.NET'],
    status: 'private',
  },
  {
    id: 'revit-plugin',
    tags: ['Revit API', 'C#', '.NET 8', 'BIM'],
    status: 'private',
  },
  {
    id: 'second-brain',
    tags: ['Obsidian', 'RAG', 'Generative AI'],
    status: 'private',
  },
]

const content = {
  ca: {
    thesis: {
      title: 'Generació automatitzada de memòries tècniques amb LLMs',
      summary:
        "TFG (nota 10/10). Sistema en dues fases per automatitzar la redacció de memòries tècniques reglamentàries per a una enginyeria. Fase I: pipeline agèntic (5 mòduls encadenats) que edita l'XML intern de plantilles Word, reduint el temps de redacció de 3-5h a ~45-60 min de revisió. Fase II: fine-tuning de Mistral-7B amb QLoRA sobre 13 exemples, comparat amb Claude zero-shot mitjançant ROUGE-L i BERTScore.",
      statusLabel: 'TFG · Nota 10/10',
    },
    'email-agent': {
      title: 'Agent de gestió de correu',
      summary:
        "Sistema automatitzat que classifica el correu entrant per projecte, detecta urgències i prepara esborranys de resposta en l'estil de cada destinatari.",
      statusLabel: 'Privat · Ús intern E3G',
    },
    'mcp-autocad': {
      title: 'Integració MCP per a AutoCAD',
      summary:
        "Connector que permet a un agent d'IA llegir i operar sobre fitxers d'AutoCAD, desplegat a diverses estacions de treball de l'empresa.",
      statusLabel: 'Privat · Demo disponible',
    },
    'revit-plugin': {
      title: 'E3G BIM Tools — Plugin de Revit',
      summary:
        "Eina d'IA integrada a Revit per assistir tasques BIM: generació d'elements, consulta de dades de model i suport a la documentació de projectes.",
      statusLabel: 'Privat · Demo disponible',
    },
    'second-brain': {
      title: "Segon cervell d'enginyeria (Obsidian + IA)",
      summary:
        "Sistema que transforma l'històric de projectes d'E3G en una base de coneixement consultable, capaç de redactar noves memòries a partir de precedents.",
      statusLabel: 'Privat · En desenvolupament',
    },
  },
  es: {
    thesis: {
      title: 'Generación automatizada de memorias técnicas con LLMs',
      summary:
        'TFG (nota 10/10). Sistema en dos fases para automatizar la redacción de memorias técnicas reglamentarias para una ingeniería. Fase I: pipeline agéntico (5 módulos encadenados) que edita el XML interno de plantillas Word, reduciendo el tiempo de redacción de 3-5h a ~45-60 min de revisión. Fase II: fine-tuning de Mistral-7B con QLoRA sobre 13 ejemplos, comparado con Claude zero-shot mediante ROUGE-L y BERTScore.',
      statusLabel: 'TFG · Nota 10/10',
    },
    'email-agent': {
      title: 'Agente de gestión de correo',
      summary:
        'Sistema automatizado que clasifica el correo entrante por proyecto, detecta urgencias y prepara borradores de respuesta en el estilo de cada destinatario.',
      statusLabel: 'Privado · Uso interno E3G',
    },
    'mcp-autocad': {
      title: 'Integración MCP para AutoCAD',
      summary:
        'Conector que permite a un agente de IA leer y operar sobre archivos de AutoCAD, desplegado en varias estaciones de trabajo de la empresa.',
      statusLabel: 'Privado · Demo disponible',
    },
    'revit-plugin': {
      title: 'E3G BIM Tools — Plugin de Revit',
      summary:
        'Herramienta de IA integrada en Revit para asistir tareas BIM: generación de elementos, consulta de datos del modelo y soporte a la documentación de proyectos.',
      statusLabel: 'Privado · Demo disponible',
    },
    'second-brain': {
      title: 'Segundo cerebro de ingeniería (Obsidian + IA)',
      summary:
        'Sistema que transforma el histórico de proyectos de E3G en una base de conocimiento consultable, capaz de redactar nuevas memorias a partir de precedentes.',
      statusLabel: 'Privado · En desarrollo',
    },
  },
  en: {
    thesis: {
      title: 'Automated Technical Report Generation with LLMs',
      summary:
        "Bachelor thesis (grade 10/10). A two-phase system automating regulatory technical-report generation for an engineering firm. Phase I: an agentic pipeline (5 chained modules) that edits Word templates' internal XML directly, cutting drafting time from 3-5 hours to ~45-60 minutes. Phase II: fine-tuned Mistral-7B with QLoRA on 13 domain-specific examples, benchmarked against zero-shot Claude using ROUGE-L and BERTScore.",
      statusLabel: 'Bachelor thesis · Grade 10/10',
    },
    'email-agent': {
      title: 'Email triage agent',
      summary:
        "Automated system that classifies incoming email by project, flags urgent items, and drafts replies in each recipient's own style.",
      statusLabel: 'Private · Internal use at E3G',
    },
    'mcp-autocad': {
      title: 'MCP integration for AutoCAD',
      summary:
        'A connector that lets an AI agent read and operate on AutoCAD files, deployed across several workstations at the company.',
      statusLabel: 'Private · Demo available',
    },
    'revit-plugin': {
      title: 'E3G BIM Tools — Revit plugin',
      summary:
        'An AI tool integrated into Revit to assist BIM tasks: generating elements, querying model data, and supporting project documentation.',
      statusLabel: 'Private · Demo available',
    },
    'second-brain': {
      title: 'Engineering "second brain" (Obsidian + AI)',
      summary:
        "A system that turns E3G's past project history into a searchable knowledge base, capable of drafting new technical reports from precedent.",
      statusLabel: 'Private · In development',
    },
  },
}

export function getProjects(lang) {
  return base.map((p) => ({ ...p, ...content[lang][p.id] }))
}

export function getAllTags(lang) {
  return [...new Set(getProjects(lang).flatMap((p) => p.tags))]
}
