import type { AcademicEntry } from '@/types/portfolio';

export const academics = [
  {
    id: 'observatorio',
    kind: 'Bolsa e projeto acadêmico',
    title: 'Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira',
    institution: 'IFS · bolsa CNPq',
    period: 'Jun/2025 — atual',
    status: 'Em andamento',
    description:
      'Plataforma Web GIS para visualização e gestão de dados relacionados à grilagem de terras.',
    contributionMode: 'equipe',
    contributions: ['Desenvolvimento web, APIs e dados geoespaciais.'],
    href: '/projetos/observatorio-grilagem-terras',
  },
  {
    id: 'morea',
    kind: 'Pesquisa aplicada',
    title: 'MOREA · Trancadura',
    institution: 'IFS — Campus Lagarto',
    period: 'Mai/2025 — atual',
    status: 'Em andamento',
    description:
      'MOREA é o grupo de pesquisa do IFS — Campus Lagarto responsável pela iniciativa. Trancadura é a solução modular de controle de acesso desenvolvida pelo grupo, que integra hardware de baixo custo e plataforma web, desenvolvida coletivamente.',
    contributionMode: 'equipe',
    contributions: [
      'Autenticação, histórico, gestão de usuários, laboratórios e dispositivos, formulários e integração com API.',
    ],
    href: 'https://github.com/invencaosts/trancadura-web-react',
  },
  {
    id: 'lacid',
    kind: 'Estudo independente',
    title: 'LACID',
    institution: 'Iniciativa de estudo independente',
    period: 'Jan/2026 — atual',
    status: 'Em andamento',
    description:
      'Aprofundamento independente em cibersegurança; não é apresentado como vínculo institucional de pesquisa.',
    contributionMode: 'equipe',
    contributions: ['Estudo e aprofundamento técnico em cibersegurança.'],
    technologies: ['Cibersegurança'],
    href: 'https://www.lacid.com.br/',
  },
] satisfies AcademicEntry[];

export const education = [
  {
    institution: 'Instituto Federal de Sergipe (IFS)',
    credential: 'Bacharelado em andamento',
    period: 'Out/2024 — previsão Out/2028',
    status: 'Em andamento',
  },
  {
    institution: 'SENAI CETCC-SE',
    credential: 'Técnico em Análise e Desenvolvimento de Sistemas',
    period: 'Fev/2021 — Dez/2023',
    status: 'Concluído',
  },
] as const;
