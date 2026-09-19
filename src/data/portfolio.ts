import type { PortfolioContent, Project, ProjectBase } from "./types";

const skills = [
  ["HTML & CSS", "TypeScript", "Golang", "Python", "Java", "C", "bash", "SQL"],
  ["Astro", "React", "TailwindCSS"],
  ["Docker", "Git", "Shell", "Github", "CI/CD"],
];

export const projects: ProjectBase[] = [
  {
    title: "noports",
    tech: ["Go"],
    link: "https://github.com/PPabloMunoz/noports",
    description_es:
      "Un proxy de desarrollo local que proporciona a tus servidores locales URL HTTPS estables, con generación automática de certificados y terminación TLS.",
    description_en:
      "A local dev proxy that gives your local servers stable HTTPS URLs — with automatic certificate generation and TLS termination.",
  },
  {
    title: "GoShort",
    tech: ["Go", "Gin", "SQLite"],
    link: "https://github.com/PPabloMunoz/GoShort",
    description_es:
      "Un acortador de URLs simple, ligero y self-host construido con Go, Gin y SQLite.",
    description_en:
      "A simple, lightweight, self-hosted URL shortener built with Go, Gin, and SQLite.",
  },
  {
    title: "go-do",
    tech: ["Go", "Bubbletea"],
    link: "https://github.com/PPabloMunoz/go-do",
    description_es:
      "Una aplicación de lista de tareas minimalista para terminal, construida con Go y el framework Bubble Tea. Totalmente manejada por teclado, con persistencia de datos y soporte para deshacer.",
    description_en:
      "A minimal, keyboard-driven todo list application for the terminal built with Go and the Bubble Tea framework. Features data persistence and undo support.",
  },
];

export function getProjects(lang: "es" | "en"): Project[] {
  return projects.map((p) => ({
    title: p.title,
    tech: p.tech,
    link: p.link,
    description: lang === "es" ? p.description_es : p.description_en,
  }));
}

export const content: PortfolioContent = {
  es: {
    hero: {
      bioParagraphs: [
        "Estudiante de Ingeniería Informática y desarrollador **Full-Stack** especializado en **arquitecturas de alto rendimiento**. Conecto la programación de sistemas de bajo nivel en C con servicios distribuidos escalables en Go y TypeScript.",
        "Mi compromiso reside en la ingeniería de soluciones **backend** robustas que priorizan la fiabilidad del sistema, el mantenimiento del código y una experiencia de usuario óptima. Mi enfoque asegura que el rigor académico se traduzca en **productos listos para producción** que cumplen con los estándares actuales de la industria.",
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
      footer: "Más proyectos en camino...",
    },
    footer: {
      createdWith: "Creado con Astro y Tailwind",
    },
  },
  en: {
    hero: {
      bioParagraphs: [
        "Computer Engineering student and **Full-Stack Developer** specializing in **high-performance architecture**. I bridge the gap between low-level systems programming in C and scalable distributed services using Go and TypeScript.",
        "I am committed to engineering robust **backend solutions** that prioritize system reliability, code maintainability, and optimal user experiences. My approach ensures that academic rigor is translated into **production-ready products** that meet modern industry standards.",
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
      footer: "More projects incoming...",
    },
    footer: {
      createdWith: "Built with Astro & Tailwind",
    },
  },
};
