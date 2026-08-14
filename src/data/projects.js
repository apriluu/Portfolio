// Shared, language-independent fields
const base = [
  {
    id: 'thesis',
    tags: ['LLM Fine-Tuning', 'QLoRA / PEFT', 'Claude API', 'Model Evaluation'],
    status: 'academic',
  },
  {
    id: 'face-recognition',
    tags: ['FastAPI', 'Docker', 'scikit-learn', 'Gradio', 'CI/CD'],
    status: 'private',
    demoUrl: 'https://face-recognition-mlops.onrender.com',
  },
  {
    id: 'ifc-agent',
    tags: ['LangGraph', 'Claude API', 'RAG', 'FAISS', 'ifcopenshell'],
    status: 'private',
  },
  {
    id: 'iot-dashboard',
    tags: ['Python', 'MQTT', 'PostgreSQL', 'Flask', 'IoT'],
    status: 'public',
    repoUrl: 'https://github.com/apriluu/dashboard',
  },
  {
    id: 'pdf-tools',
    tags: ['JavaScript', 'Node.js', 'Vite', 'REST API'],
    status: 'public',
    repoUrl: 'https://github.com/apriluu/Eines-PDF',
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
    'face-recognition': {
      title: 'Face Recognition MLOps',
      summary:
        'Pipeline de reconeixement facial (MTCNN → FaceNet → SVM) empaquetat com a API REST de producció: FastAPI, Docker, demo interactiva amb Gradio, tests i CI/CD amb GitHub Actions. Desplegat en viu.',
      statusLabel: 'Repo privat · Demo en viu',
    },
    'ifc-agent': {
      title: 'IFC Analysis Agent',
      summary:
        "Agent LangGraph amb RAG local (FAISS) que respon preguntes en llenguatge natural sobre models IFC/BIM residencials — Claude decideix quines de les 10 eines cridar segons la pregunta, en lloc d'executar sempre un pipeline fix.",
      statusLabel: 'Repo privat',
    },
    'iot-dashboard': {
      title: 'Sistema IoT de monitorització d\'inundacions',
      summary:
        'Sensors ESP32 → MQTT → servidor Python → PostgreSQL → dashboard en temps real (Flask/SocketIO) → bot de Telegram d\'alertes.',
      statusLabel: 'Repositori públic',
    },
    'pdf-tools': {
      title: 'Eines de PDF',
      summary:
        "Aplicació web amb servidor i API pròpia per unir, dividir, girar, comprimir i signar PDFs — tot el processament es fa en local, sense pujar cap fitxer a internet.",
      statusLabel: 'Repositori públic',
    },
  },
  es: {
    thesis: {
      title: 'Generación automatizada de memorias técnicas con LLMs',
      summary:
        'TFG (nota 10/10). Sistema en dos fases para automatizar la redacción de memorias técnicas reglamentarias para una ingeniería. Fase I: pipeline agéntico (5 módulos encadenados) que edita el XML interno de plantillas Word, reduciendo el tiempo de redacción de 3-5h a ~45-60 min de revisión. Fase II: fine-tuning de Mistral-7B con QLoRA sobre 13 ejemplos, comparado con Claude zero-shot mediante ROUGE-L y BERTScore.',
      statusLabel: 'TFG · Nota 10/10',
    },
    'face-recognition': {
      title: 'Face Recognition MLOps',
      summary:
        'Pipeline de reconocimiento facial (MTCNN → FaceNet → SVM) empaquetado como API REST de producción: FastAPI, Docker, demo interactiva con Gradio, tests y CI/CD con GitHub Actions. Desplegado en vivo.',
      statusLabel: 'Repo privado · Demo en vivo',
    },
    'ifc-agent': {
      title: 'IFC Analysis Agent',
      summary:
        'Agente LangGraph con RAG local (FAISS) que responde preguntas en lenguaje natural sobre modelos IFC/BIM residenciales — Claude decide cuáles de las 10 herramientas llamar según la pregunta, en lugar de ejecutar siempre un pipeline fijo.',
      statusLabel: 'Repo privado',
    },
    'iot-dashboard': {
      title: 'Sistema IoT de monitorización de inundaciones',
      summary:
        'Sensores ESP32 → MQTT → servidor Python → PostgreSQL → dashboard en tiempo real (Flask/SocketIO) → bot de Telegram de alertas.',
      statusLabel: 'Repositorio público',
    },
    'pdf-tools': {
      title: 'Herramientas de PDF',
      summary:
        'Aplicación web con servidor y API propia para unir, dividir, girar, comprimir y firmar PDFs — todo el procesamiento se hace en local, sin subir ningún archivo a internet.',
      statusLabel: 'Repositorio público',
    },
  },
  en: {
    thesis: {
      title: 'Automated Technical Report Generation with LLMs',
      summary:
        "Bachelor thesis (grade 10/10). A two-phase system automating regulatory technical-report generation for an engineering firm. Phase I: an agentic pipeline (5 chained modules) that edits Word templates' internal XML directly, cutting drafting time from 3-5 hours to ~45-60 minutes. Phase II: fine-tuned Mistral-7B with QLoRA on 13 domain-specific examples, benchmarked against zero-shot Claude using ROUGE-L and BERTScore.",
      statusLabel: 'Bachelor thesis · Grade 10/10',
    },
    'face-recognition': {
      title: 'Face Recognition MLOps',
      summary:
        'A face-recognition pipeline (MTCNN → FaceNet → SVM) packaged as a production REST API: FastAPI, Docker, an interactive Gradio demo, tests, and CI/CD with GitHub Actions. Deployed live.',
      statusLabel: 'Private repo · Live demo',
    },
    'ifc-agent': {
      title: 'IFC Analysis Agent',
      summary:
        'A LangGraph agent with local RAG (FAISS) that answers natural-language questions about residential IFC/BIM models — Claude decides which of 10 tools to call based on the question, instead of always running a fixed pipeline.',
      statusLabel: 'Private repo',
    },
    'iot-dashboard': {
      title: 'IoT Flood Monitoring System',
      summary:
        'ESP32 sensors → MQTT → Python server → PostgreSQL → real-time dashboard (Flask/SocketIO) → Telegram alert bot.',
      statusLabel: 'Public repo',
    },
    'pdf-tools': {
      title: 'PDF Tools',
      summary:
        'A web app with its own server and API to merge, split, rotate, compress and sign PDFs — all processing happens locally, no file is ever uploaded.',
      statusLabel: 'Public repo',
    },
  },
}

export function getProjects(lang) {
  return base.map((p) => ({ ...p, ...content[lang][p.id] }))
}

export function getAllTags(lang) {
  return [...new Set(getProjects(lang).flatMap((p) => p.tags))]
}
