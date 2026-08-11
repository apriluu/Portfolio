const work = {
  ca: [
    {
      period: 'Estiu 2025 — actual',
      role: 'AI Automation Specialist',
      org: 'E3G Energia i Enginyeria',
      location: 'Lleida',
      description:
        "Disseny i desplegament de fluxos d'automatització basats en LLMs (API de Claude) per als processos interns de generació documental. De pràctiques a plantilla, després de desplegar amb èxit iniciatives clau d'automatització.",
    },
    {
      period: '2024 — actual',
      role: 'Ponent en tallers de ciència i tecnologia',
      org: 'Universitat de Lleida',
      location: 'Lleida',
      description:
        "Representa la Universitat en actes de divulgació, presentant tallers de ciència i tecnologia a futurs estudiants i al públic general.",
    },
    {
      period: '2024 — 2025',
      role: 'Professora de robòtica i programació',
      org: 'Play Code Academy',
      location: 'Lleida',
      description: 'Disseny i impartició de tallers de programació i robòtica per a infants i adolescents.',
    },
  ],
  es: [
    {
      period: 'Verano 2025 — actual',
      role: 'AI Automation Specialist',
      org: 'E3G Energia i Enginyeria',
      location: 'Lleida',
      description:
        'Diseño y despliegue de flujos de automatización basados en LLMs (API de Claude) para los procesos internos de generación documental. De prácticas a plantilla, tras desplegar con éxito iniciativas clave de automatización.',
    },
    {
      period: '2024 — actual',
      role: 'Ponente en talleres de ciencia y tecnología',
      org: 'Universitat de Lleida',
      location: 'Lleida',
      description:
        'Representa a la Universidad en actos de divulgación, presentando talleres de ciencia y tecnología a futuros estudiantes y al público general.',
    },
    {
      period: '2024 — 2025',
      role: 'Profesora de robótica y programación',
      org: 'Play Code Academy',
      location: 'Lleida',
      description: 'Diseño e impartición de talleres de programación y robótica para niños y adolescentes.',
    },
  ],
  en: [
    {
      period: 'Summer 2025 — present',
      role: 'AI Automation Specialist',
      org: 'E3G Energia i Enginyeria',
      location: 'Lleida, Spain',
      description:
        'Designed and implemented LLM-based automation workflows (built on the Claude API) to streamline internal document-generation processes. Transitioned from intern to full-time staff after successfully delivering key automation initiatives.',
    },
    {
      period: '2024 — present',
      role: 'Scientific & Technology Workshop Speaker',
      org: 'Universitat de Lleida',
      location: 'Lleida, Spain',
      description:
        'Represents the University at public outreach events, presenting science and technology workshops to prospective students and the general public.',
    },
    {
      period: '2024 — 2025',
      role: 'Robotics & Programming Teacher',
      org: 'Play Code Academy',
      location: 'Lleida, Spain',
      description: 'Designed and delivered coding and robotics workshops for children and teenagers.',
    },
  ],
}

const education = {
  ca: [
    {
      period: '2022 — juny 2026',
      role: "Grau en Enginyeria Informàtica, menció IA",
      org: 'Universitat de Lleida (UdL)',
      location: 'Lleida',
      description:
        "Estada Erasmus+ a la Università di Modena e Reggio Emilia, Itàlia (2025-2026). TFG sobre generació automatitzada de memòries tècniques amb LLMs, nota 10/10.",
    },
    {
      period: '2020 — 2022',
      role: 'Batxillerat Tecnològic',
      org: 'INS Ermengol IV',
      location: 'Lleida',
      description: '',
    },
  ],
  es: [
    {
      period: '2022 — junio 2026',
      role: 'Grado en Ingeniería Informática, mención IA',
      org: 'Universitat de Lleida (UdL)',
      location: 'Lleida',
      description:
        'Estancia Erasmus+ en la Università di Modena e Reggio Emilia, Italia (2025-2026). TFG sobre generación automatizada de memorias técnicas con LLMs, nota 10/10.',
    },
    {
      period: '2020 — 2022',
      role: 'Bachillerato Tecnológico',
      org: 'INS Ermengol IV',
      location: 'Lleida',
      description: '',
    },
  ],
  en: [
    {
      period: '2022 — June 2026',
      role: 'Computer Engineering (BSc), AI track',
      org: 'Universitat de Lleida (UdL)',
      location: 'Lleida, Spain',
      description:
        'Erasmus+ semester abroad at Università di Modena e Reggio Emilia, Italy (2025-2026). Bachelor thesis on automated technical report generation with LLMs, graded 10/10.',
    },
    {
      period: '2020 — 2022',
      role: 'Technological Baccalaureate',
      org: 'INS Ermengol IV',
      location: 'Lleida, Spain',
      description: '',
    },
  ],
}

export function getWork(lang) {
  return work[lang]
}

export function getEducation(lang) {
  return education[lang]
}
