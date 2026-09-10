export type LinkItem = { label: string; href: string; kind: "case" | "code" | "demo" | "social" | "cv" };

export type ProjectCase = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  status: "Em desenvolvimento" | "Demonstração";
  summary: string;
  role: string;
  collaboration: string;
  context: string[];
  contributions: string[];
  decisions: { problem: string; decision: string; tradeoff: string }[];
  technologies: string[];
  evidence: string[];
  limitations: string[];
  learnings: string[];
  links: LinkItem[];
};

export type Experience = {
  id: string;
  organization: string;
  context: string;
  location: string;
  roles: { title: string; contract: string; period: string }[];
  contributions: string[];
  technologies: string[];
  logo?: string;
};

export type AcademicEntry = {
  id: string;
  kind: string;
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  contributionMode: "individual" | "equipe";
  contributions: string[];
  href?: string;
};

