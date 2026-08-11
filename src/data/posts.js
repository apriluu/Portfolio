const posts = {
  ca: [
    {
      date: '2026.08',
      title: "Com he connectat un agent d'IA amb AutoCAD via MCP",
      excerpt:
        "Notes de disseny i decisions tècniques a l'hora de construir un connector MCP que permet a un LLM llegir i modificar fitxers d'AutoCAD.",
    },
    {
      date: '2026.07',
      title: "Un \"segon cervell\" per a projectes d'enginyeria",
      excerpt:
        "Per què vam triar Obsidian com a capa d'emmagatzematge per a un sistema RAG intern, i què hem après del procés.",
    },
    {
      date: '2026.06',
      title: 'Automatitzar la triatge de correu sense perdre el to humà',
      excerpt: 'Com generar esborranys de resposta que sonin com la persona real, no com un bot genèric.',
    },
  ],
  es: [
    {
      date: '2026.08',
      title: 'Cómo conecté un agente de IA con AutoCAD vía MCP',
      excerpt:
        'Notas de diseño y decisiones técnicas a la hora de construir un conector MCP que permite a un LLM leer y modificar archivos de AutoCAD.',
    },
    {
      date: '2026.07',
      title: 'Un "segundo cerebro" para proyectos de ingeniería',
      excerpt:
        'Por qué elegimos Obsidian como capa de almacenamiento para un sistema RAG interno, y qué hemos aprendido del proceso.',
    },
    {
      date: '2026.06',
      title: 'Automatizar el triaje de correo sin perder el tono humano',
      excerpt: 'Cómo generar borradores de respuesta que suenen como la persona real, no como un bot genérico.',
    },
  ],
  en: [
    {
      date: '2026.08',
      title: 'Connecting an AI agent to AutoCAD via MCP',
      excerpt:
        'Design notes and technical decisions behind building an MCP connector that lets an LLM read and modify AutoCAD files.',
    },
    {
      date: '2026.07',
      title: 'A "second brain" for engineering projects',
      excerpt:
        'Why we chose Obsidian as the storage layer for an internal RAG system, and what we learned along the way.',
    },
    {
      date: '2026.06',
      title: 'Automating email triage without losing the human tone',
      excerpt: 'How to generate reply drafts that sound like the real person, not a generic bot.',
    },
  ],
}

export function getPosts(lang) {
  return posts[lang]
}
