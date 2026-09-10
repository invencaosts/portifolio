import type { Experience } from '@/types/portfolio';

export const experiences = [
  {
    id: 'wm-saude',
    organization: 'WM Saúde — Gestão e Tecnologia',
    context: 'Desenvolvimento e evolução de sistemas para saúde municipal.',
    location: 'Aracaju, SE · Presencial',
    roles: [
      {
        title: 'Desenvolvedor de Software Júnior',
        contract: 'Tempo integral',
        period: 'Mar/2026 — atual',
      },
      { title: 'Desenvolvedor de Software', contract: 'Estágio', period: 'Dez/2025 — Fev/2026' },
    ],
    contributions: [
      'Desenvolvimento de interfaces, regras de negócio e APIs para fluxos de saúde municipal.',
      'Modelagem, integração e sincronização de dados com PostgreSQL e MySQL.',
      'Automações com n8n, integrações REST e rotinas de deploy com Docker e Linux.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'AdonisJS',
      'PHP',
      'PostgreSQL',
      'MySQL',
      'n8n',
      'Docker',
    ],
    logo: '/images/wm_sade_logo.jpeg',
  },
  {
    id: 'bst-networks',
    organization: 'BST Networks — Brasil Service Telecom',
    context: 'Desenvolvimento ponta a ponta de software de gestão empresarial (ERP).',
    location: 'Remoto',
    roles: [
      { title: 'Desenvolvedor de Software', contract: 'Freelance', period: 'Fev/2025 — Mai/2025' },
    ],
    contributions: [
      'Construção de interfaces e integração de APIs REST.',
      'Persistência e consultas em SQL Server dentro do fluxo de entrega com Scrum.',
    ],
    technologies: ['TypeScript', 'JavaScript', 'C#', '.NET', 'API REST', 'SQL Server', 'Scrum'],
    logo: '/images/bst_logo.jpeg',
  },
  {
    id: 'freelancer',
    organization: 'Atuação autônoma',
    context:
      'Desenvolvimento e manutenção de aplicações web para diferentes necessidades de clientes.',
    location: 'Remoto',
    roles: [
      { title: 'Desenvolvedor Freelancer', contract: 'Autônomo', period: 'Jan/2024 — atual' },
    ],
    contributions: [
      'Aplicações web e mobile, APIs, integração com bancos, automações e consultoria.',
    ],
    technologies: [
      'TypeScript',
      'JavaScript',
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'Java',
      'Kotlin',
      'MySQL',
      'PostgreSQL',
      'Git',
    ],
  },
] satisfies Experience[];
