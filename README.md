# Portfolio — Abril Tufet Coll

Web de portfolio construïda amb React + Vite + Tailwind CSS v4, amb una direcció visual
inspirada en els plànols tècnics d'enginyeria (blueprint): línies blanques sobre fons
neutre, blocs de títol i marques de registre, amb un accent verd com a color de senyal
i l'ambre reservat als projectes privats. Disponible en català, castellà i anglès.

## Desenvolupament local

```bash
npm install
npm run dev
```

## Build de producció

```bash
npm run build
```

## Desplegament a GitHub Pages

1. Crea un repositori nou a GitHub. **Important:** si li poses un nom diferent de
   `portfolio`, edita `base: '/portfolio/'` a `vite.config.js` perquè coincideixi
   amb el nom exacte del repositori (p. ex. `/el-meu-portfolio/`).
2. Puja el projecte:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/<el-teu-usuari>/portfolio.git
   git push -u origin main
   ```
3. Al repositori de GitHub: **Settings → Pages → Build and deployment → Source** →
   selecciona **GitHub Actions**.
4. Ja està. El workflow a `.github/workflows/deploy.yml` es dispara sol a cada
   `push` a `main`: construeix el projecte i el publica. Al cap d'un parell de
   minuts la web és a `https://<el-teu-usuari>.github.io/portfolio/`.

## Contingut pendent de personalitzar

- `src/data/projects.js` — descripcions reals dels teus projectes (screenshots/demos).
- `src/data/experience.js` — experiència i formació (ja amb dades reals del CV, revisa-les).
- `src/data/posts.js` — entrades del blog (ara mateix són només títols; falta la pàgina de detall de cada post).
- `public/cv-abril-tufet-coll.pdf` — ja hi és el teu CV real; substitueix-lo quan l'actualitzis.
- `public/favicon.svg` — substituir pel favicon per defecte de Vite.
