export const siteConfig = {
  name: "Diego Rodolico",
  title: "Soporte Técnico & Desarrollo de Software",
  description:
    "Portfolio de Diego Rodolico, Desarrollador Fullstack y Soporte Técnico.",
  accentColor: "#1d4ed8",
  social: {
    email: "mailto:rodolicodiego@gmail.com",
    linkedin: "https://www.linkedin.com/in/diego-rodolico/",
    whatsapp: "https://wa.me/5491166762487",
    github: "https://github.com/DiegoRodolico",
  },
  aboutMe:
    "Soy técnico de soporte IT y Desarrollador Fullstack, estudiante de la Licenciatura en Informática (UNAHUR). Me muevo entre resolver incidentes del día a día y construir herramientas que ayudan con tal fin. Trabajando en desarrollos de punta a punta brindando soluciones robustas por medio de automatizaciones efectivas.",
  skills: [
    "Linux",
    "Debian",
    "Python",
    "MicroPython",
    "MySQL",
    "PostgreSQL",
    "Java",
    "Spring",
    "Node.js",
    "Git",
    "Prisma",
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
      name: "Contracultura Bar - Sistema de Gestión con Data Analytics",
      description:
        "Sistema de gestión de bar con módulo de analítica de datos desarrollado con Python, Django y pandas. Dashboard de KPIs en tiempo real (facturación total, ticket promedio, producto estrella), 5 reportes visuales interactivos con Chart.js (tendencia diaria, pedidos por tipo, top productos, facturación por hora, revenue por categoría), análisis por ventana de tiempo (7/30/90 días) y control de stock con niveles de severidad. Procesamiento de datos históricos para la toma de decisiones de negocio.",
      link: "https://github.com/DiegoRodolico/contracultura_bar_web",
      gallerySlug: "contracultura",
      skills: ["Python", "Django", "Pandas", "NumPy", "Chart.js", "SQLite", "Bootstrap"],
    },
    {
      name: "GameHub Solidario - Torneos de Gaming con Impacto Social",
      description:
        "Sitio web frontend para una comunidad de gaming que organiza torneos de videojuegos para recaudar donaciones para comedores y ONGs. Landing con torneos en curso, rankings y galería; panel de administración con login para crear, editar y eliminar torneos; y formulario de colaboración con lógica de formularios dinámicos. Desarrollado con HTML, CSS y JavaScript puro.",
      link: "https://github.com/DiegoRodolico/pagina",
      gallerySlug: "gamehub",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Iorio vs los Reptiloides: La Estación de Poder",
      description:
        "Juego 2D de plataformas y acción en pixel art, desarrollado en equipo como trabajo final de Programación con Objetos I usando Wollok y Wollok Game. Implementa dos niveles, desplazamiento lateral con cámara, salto y animaciones, enemigos con patrullaje y colisiones, sistema de vidas, objetos y armas, y un jefe final con barra de vida. El diseño aplica POO con clases para enemigos y jefe, y objetos que encapsulan estados de movimiento, orientación y apariencia.",
      gallerySlug: "iorio",
      skills: ["Wollok", "Wollok Game"],
    },

  ],
  experience: [
    {
      company: "Clamaco Constructora S.A.",
      title: "Soporte Técnico IT",
      dateRange: "2026 - Presente",
      bullets: [
        "Atiendo tickets de hardware, software, impresoras y conectividad, y diagnostico incidentes complejos de sistemas y equipamiento informático.",
        "Brindo soporte presencial, documento cada caso y escalo las incidencias a segundo nivel cuando corresponde.",
        "Instalo y configuro software, y colaboro en el control del inventario de equipos.",
        "Colaboro en tareas de programación y desarrollo para automatizar herramientas y procesos internos.",
        "Participo en proyectos de migración tecnológica y documento procedimientos técnicos.",
      ],
    },
    {
      company: "Contracultura Bar & Café",
      title: "Encargado y Data Analytics Developer",
      dateRange: "2020 - 2026",
      bullets: [
        "Desarrollé e implementé sistema de gestión integral con módulo de analítica de datos utilizando Python, Django, pandas y Chart.js, aplicado a la toma de decisiones de negocio.",
        "Construí dashboard de KPIs en tiempo real: facturación total, ticket promedio, producto estrella, ocupación de mesas y alertas de stock crítico con niveles de severidad.",
        "Desarrollé 5 reportes visuales interactivos para análisis de ventas por período, tipo de pedido, producto, hora del día y categoría, con filtros por ventana de tiempo (7/30/90 días).",
      ],
    },
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
