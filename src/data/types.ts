export type SkillCategory = {
  name: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export type HeroSection = {
  bioParagraphs: string[];
};

export type SkillsSection = {
  intro: string;
  categories: SkillCategory[];
};

export type ProjectsSection = {
  title: string;
  items: Project[];
  footer: string;
};

export type FooterSection = {
  createdWith: string;
};

export type LanguageContent = {
  hero: HeroSection;
  skills: SkillsSection;
  projects: ProjectsSection;
  footer: FooterSection;
};

export type PortfolioContent = {
  es: LanguageContent;
  en: LanguageContent;
};
