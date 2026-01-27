const skills = [
  ["HTML & CSS", "TypeScript", "Golang", "Python", "Java", "C", "bash", "SQL"],
  ["Astro", "React", "TailwindCSS"],
  ["Docker", "Git", "Shell", "Github", "CI/CD"],
];

export const content = {
  es: {
    hero: {
      bioParagraphs: [
        "Estudiante de Ingeniería Informática y desarrollador Full-Stack especializado en arquitecturas de alto rendimiento. Conecto la programación de sistemas de bajo nivel en C con servicios distribuidos escalables en Go y TypeScript.",
        "Mi compromiso reside en la ingeniería de soluciones de backend robustas que priorizan la fiabilidad del sistema, el mantenimiento del código y una experiencia de usuario óptima. Mi enfoque asegura que el rigor académico se traduzca en productos listos para producción que cumplen con los estándares actuales de la industria.",
      ],
    },
    skills: {
      intro:
        "Me enfoco en resolver problemas, no solo en escribir código. Selecciono las herramientas más efectivas para cada tarea —ya sea a bajo o alto nivel— para construir sistemas eficientes, seguros y mantenibles.",
      categories: [
        { name: "Lenguajes", items: skills[0] },
        { name: "Web & Frameworks", items: skills[1] },
        { name: "Ops & Herramientas", items: skills[2] },
      ],
    },
    projects: {
      title: "proyectos",
      items: [
        {
          title: "flux-finances",
          description:
            "Una herramienta integral de gestión financiera diseñada para rastrear gastos, inversiones y planificación presupuestaria. Construida con un enfoque en rendimiento y visualización de datos.",
          tech: ["Tanstack Start", "React", "PostgreSQL", "Docker"],
          link: "https://github.com/PPabloMunoz/flux-finances",
        },
      ],
      footer: "Más proyectos en camino...",
    },
    footer: {
      createdWith: "Creado con Astro y Tailwind",
    },
  },
  en: {
    hero: {
      bioParagraphs: [
        "Computer Engineering student and Full-Stack Developer specializing in high-performance architecture. I bridge the gap between low-level systems programming in C and scalable distributed services using Go and TypeScript.",
        "I am committed to engineering robust backend solutions that prioritize system reliability, code maintainability, and optimal user experiences. My approach ensures that academic rigor is translated into production-ready products that meet modern industry standards.",
      ],
    },
    skills: {
      intro:
        "I focus on solving problems, not just writing code. I select the most effective tools for each task—whether low-level or high-level—to build efficient, secure, and maintainable systems.",
      categories: [
        { name: "Languages", items: skills[0] },
        { name: "Web & Frameworks", items: skills[1] },
        { name: "Ops & Tools", items: skills[2] },
      ],
    },
    projects: {
      title: "projects",
      items: [
        {
          title: "flux-finances",
          description:
            "A comprehensive financial management tool designed to track expenses, investments, and budget planning. Built with a focus on performance and data visualization.",
          tech: ["Tanstack Start", "React", "PostgreSQL", "Docker"],
          link: "https://github.com/PPabloMunoz/flux-finances",
        },
      ],
      footer: "More projects incoming...",
    },
    footer: {
      createdWith: "Built with Astro & Tailwind",
    },
  },
};
