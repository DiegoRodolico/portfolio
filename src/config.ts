export const siteConfig = {
  name: "Diego Rodolico",
  title: "Analista de Datos | FullStack Developer",
  description:
    "Portfolio de Diego Rodolico, analista de datos y desarrollador full stack especializado en Phyton, Django, React, Node.js y PostgreSQL.",
  accentColor: "#1d4ed8",
  social: {
    email: "mailto:rodolicodiego@gmail.com",
    linkedin: "https://www.linkedin.com/in/diego-rodolico/",
    whatsapp: "https://wa.me/5491166762487",
    github: "https://github.com/DiegoRodolico",
  },
  aboutMe:
    "Analista de datos y desarrollador con experiencia construyendo dashboards de analítica de ventas, procesamiento de datos con pandas y visualización interactiva. Transformo datos en decisiones de negocio."
  "Experiencia práctica diseñando KPIs, generando reportes automatizados y construyendo herramientas de visualización para la optimización de procesos. Combino la capacidad de desarrollar soluciones fullstack con una fuerte orientación a datos y business intelligence.",
  skills: [
    "Linux",
    "Python",
    "Django",
    "Pandas",
    "NumPy",
    "MySQL",
    "PostgreSQL",
    "Java",
    "Spring",
    "JavaScript",
    "Node.js",
    "Express",
    "Prisma",
    "Debian",
    "Docker",
  ],
  projects: [
    {
      name: "Reno USA - Backend de Plataforma de Gestión de Obras",
      description:
        "Desarrollé el backend completo de esta plataforma para una empresa de arquitectura que remodela inmuebles: API REST en Node.js/Express con arquitectura en capas (controllers, services, routes y middleware), modelo de datos en PostgreSQL con Prisma ORM y sistema de autenticación. Endpoints para la gestión de proyectos por fases, tareas por oficio, registro diario de avance, detección de incidencias y reportes exportables a PDF. Trabajo en equipo dentro de un monorepo, con Docker Compose para levantar el entorno y despliegue en Vercel.",
      link: "https://github.com/DiegoRodolico/i006-reno-usa-fullstack",
      gallerySlug: "reno-usa",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    },
    {
      name: "Contracultura Bar - Sistema de Gestión",
      description:
        "Aplicación web fullstack en Django para la gestión integral de un bar: productos, categorías, clientes, mesas y pedidos. Incluye CRUD completo, dashboard de control con alertas de stock crítico y flujo de reposición de inventario. Modelado relacional en SQLite, panel de administración y UI responsive con Bootstrap.",
      link: "https://github.com/DiegoRodolico/contracultura_bar_web",
      gallerySlug: "contracultura",
      skills: ["Python", "Django", "SQLite", "Bootstrap"],
    },
    {
      name: "GameHub Solidario - Torneos de Gaming con Impacto Social",
      description:
        "Sitio web frontend para una comunidad de gaming que organiza torneos de videojuegos para recaudar donaciones para comedores y ONGs. Landing con torneos en curso, rankings y galería; panel de administración con login para crear, editar y eliminar torneos; y formulario de colaboración con lógica de formularios dinámicos. Desarrollado con HTML, CSS y JavaScript puro.",
      link: "https://github.com/DiegoRodolico/pagina",
      gallerySlug: "gamehub",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ],
  experience: [
    {
      company: "Igrowker Training",
      title: "Desarrollador Backend - Bootcamp Fullstack",
      dateRange: "2026",
      bullets: [
        "Desarrollé el backend completo de Reno USA, una plataforma de gestión de obras para una empresa de arquitectura: API REST en Node.js/Express, base de datos PostgreSQL con Prisma ORM y sistema de autenticación.",
        "Apliqué arquitectura en capas (controllers, services, routes y middleware) trabajando en equipo dentro de un monorepo y usando Git con flujo de ramas.",
        "Levantamiento del entorno con Docker Compose y despliegue de la aplicación en Vercel, integrando el frontend desarrollado por mis compañeros.",
      ],
    },
    {
      company: "Contracultura Bar & Café",
      title: "Encargado y Desarrollador de Sistemas",
      dateRange: "2020 - Presente",
      bullets: [
        "Desarrollé e implementé el sistema de gestión integral del bar (productos, clientes, mesas y pedidos) con Django, digitalizando la operación diaria del local.",
        "Gestión del día a día del negocio: manejo de equipo, control de stock e integración de tareas, tanto liderando como colaborando.",
        "Traduje necesidades reales de un negocio en una solución de software funcional que hoy usan en el local.",
      ],
    },
  ],
  education: [
    {
      school: "Universidad Nacional de Hurlingham (UNAHUR)",
      degree: "Tecnicatura Universitaria en Informática",
      dateRange: "2025 - Presente",
      achievements: [
        "Formación en programación orientada a objetos, estructuras de datos, bases de datos y desarrollo de software.",
      ],
    },
    {
      school: "Universidad Nacional de Hurlingham (UNAHUR)",
      degree: "Licenciatura en Informática",
      dateRange: "En camino (continuación de la tecnicatura)",
      achievements: [
        "Trayectoria académica orientada a profundizar en ingeniería de software y desarrollo profesional.",
      ],
    },
  ],
};
