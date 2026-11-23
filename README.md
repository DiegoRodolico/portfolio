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


## Licencia

MIT — ver [LICENSE.md](LICENSE.md). El template original **DevPortfolio** es de [Ryan Fitzgerald](https://github.com/RyanFitzgerald/devportfolio).
