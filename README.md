# Portfolio de Diego Rodolico

Portfolio personal de [Diego Rodolico](https://github.com/DiegoRodolico), desarrollador full stack especializado en Python/Django, Node.js, React y PostgreSQL. Sitio one-page en español con modo claro/oscuro y galerías de capturas por proyecto.

Construido con [Astro](https://astro.build/) y [Tailwind CSS v4](https://tailwindcss.com/), y desplegable en cualquier hosting estático.

## Créditos

Este proyecto está basado en el template **DevPortfolio** de [Ryan Fitzgerald](https://github.com/RyanFitzgerald/devportfolio), y fue personalizado por completo: contenido propio, traducción al español, tema oscuro, galerías de proyectos y ajustes de responsive.

- Template original: [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio)

## Características

- **One-page** con secciones: Hero, Sobre mí, Proyectos, Experiencia y Educación
- **Modo claro/oscuro** con toggle persistente (Tailwind v4 + `@custom-variant dark`)
- **Galerías por proyecto**: botón "Ver Galería" que abre `/galeria/<slug>/` con lightbox (navegación con teclado)
- **Contenido centralizado** en `src/config.ts` — no hace falta tocar componentes para editar el sitio
- **Secciones condicionales**: si una sección no tiene datos en la config, no se renderiza
- Icons de [Tabler Icons](https://tabler.io/icons)

## Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS utility-first
- [Tabler Icons](https://tabler.io/icons) — iconos open source
- TypeScript — configuración tipada

## Personalizar el sitio

Toda la configuración vive en `src/config.ts`. Ese archivo controla:

- **Datos personales**: nombre, título, descripción
- **Color de acento**: `accentColor` (se propaga por todo el sitio)
- **Links sociales**: email, LinkedIn, WhatsApp y GitHub (opcionales)
- **Sobre mí**: biografía (`aboutMe`) y skills
- **Proyectos**: nombre, descripción, link, `gallerySlug` y tecnologías
- **Experiencia**: empresa, cargo, rango de fechas y logros
- **Educación**: institución, título y logros

Si se vacía `skills`, `projects`, `experience` o `education`, la sección correspondiente se oculta sola.

### Estructura de ejemplo

```typescript
// Datos básicos
name: "Diego Rodolico",
title: "Desarrollador Full Stack",
description: "Portfolio de Diego Rodolico, desarrollador full stack...",
accentColor: "#1d4ed8",

// Redes (todas opcionales)
social: {
  email: "mailto:rodolicodiego@gmail.com",
  linkedin: "https://www.linkedin.com/in/diego-rodolico/",
  whatsapp: "https://wa.me/5491166762487",
  github: "https://github.com/DiegoRodolico",
},

// Proyectos (gallerySlug es opcional)
projects: [
  {
    name: "Reno USA - Backend",
    description: "Backend completo en Node.js/Express...",
    link: "https://github.com/DiegoRodolico/i006-reno-usa-fullstack",
    gallerySlug: "reno-usa", // agrega botón "Ver Galería"
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
  },
],

// Experiencia
experience: [
  {
    company: "Contracultura Bar & Café",
    title: "Encargado de sistemas",
    dateRange: "2021 - Presente",
    bullets: ["Sistema de gestión interno...", "Otra tarea..."],
  },
],

// Educación
education: [
  {
    school: "UNAHUR",
    degree: "Tecnicatura en Informática",
    dateRange: "2024 - Presente",
    achievements: ["En curso", "..."],
  },
],
```

## Galerías de capturas

Cada proyecto con `gallerySlug` muestra un botón **"Ver Galería"** que enlaza a `/galeria/<slug>/`.

1. Creá una carpeta `public/screenshots/<slug>/` (el slug debe coincidir con `gallerySlug`).
2. Copiá ahí las capturas (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.avif`, `.svg`).
3. Reconstruí el sitio (`npm run build`). Las imágenes se leen automáticamente en build-time (`src/lib/gallery.ts`) y se ordenan numéricamente.

Si la carpeta está vacía, la galería muestra un estado vacío.

## Estructura del proyecto

```
portfolio-diego/
├── public/
│   ├── favicon.svg                 # Favicon
│   └── screenshots/                # Capturas por proyecto (subcarpeta por slug)
│       ├── reno-usa/
│       ├── contracultura/
│       └── gamehub/
├── src/
│   ├── components/                 # Secciones en Astro
│   │   ├── About.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── lib/
│   │   └── gallery.ts              # Lee las capturas de cada galería
│   ├── pages/
│   │   ├── index.astro             # Página principal (one-page)
│   │   └── galeria/[slug].astro    # Visor de galería con lightbox
│   ├── styles/
│   │   └── global.css              # Estilos globales + dark variant
│   └── config.ts                   # Toda la configuración del sitio
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Desarrollo local

```
npm install
npm run dev
```

## Deploy

El sitio es estático y se puede desplegar gratis en cualquier hosting:

- [Netlify](https://docs.astro.build/en/guides/deploy/netlify/)
- [Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Render](https://docs.astro.build/en/guides/deploy/render/)

Más guías en [docs.astro.build](https://docs.astro.build/en/guides/deploy/).

## Licencia

MIT — ver [LICENSE.md](LICENSE.md). El template original **DevPortfolio** es de [Ryan Fitzgerald](https://github.com/RyanFitzgerald/devportfolio).
