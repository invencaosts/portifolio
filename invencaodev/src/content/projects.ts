import type { ProjectCase } from '@/types/portfolio';

export const projects = [
  {
    slug: 'quizlab-if',
    title: 'QuizLab IF — Plataforma de quizzes gamificados em tempo real',
    shortTitle: 'QuizLab IF',
    category: 'Full Stack · Educação',
    status: 'Em desenvolvimento',
    summary:
      'Aplicação educacional com criação de quizzes, salas ao vivo, autenticação, pontuação e ranking.',
    role: 'Desenvolvedor Full Stack Principal',
    collaboration: 'Frontend e API apresentados como um único produto.',
    context: [
      'O projeto busca tornar atividades de revisão mais interativas para professores e estudantes da Rede Federal.',
      'Está em desenvolvimento em paralelo ao curso de Engenharia, com foco atual na criação de quizzes e, futuramente, jogos mais interativos que ajudem na identificação de canteiros de obras e no ensino do manuseio do sistema de energia.',
    ],
    narrative:
      'Construí o frontend em Next.js porque queria uma aplicação rápida e responsiva, já que a maioria dos estudantes acessa pelo celular, além de aproveitar as rotas dinâmicas para cada sala de quiz. A API ficou separada, em AdonisJS, pela estrutura pronta de autenticação, validação e ORM, o que acelerou a modelagem de usuários, quizzes, perguntas e pontuação. Pra sincronizar os participantes em tempo real — todo mundo vendo a mesma pergunta, no mesmo instante, com o placar atualizando ao vivo — usei Socket.io por cima da API REST; isso significa que, além das chamadas tradicionais, também precisei tratar conexão, desconexão e reconexão de cada sala sem perder o estado do jogo. O projeto segue em desenvolvimento junto com o curso de Engenharia, e o plano é ir além dos quizzes: criar jogos mais interativos que ajudem, por exemplo, a identificar canteiros de obras irregulares e a ensinar o manuseio correto de sistemas de energia.',
    technologies: [
      { name: 'Next.js', use: 'Frontend das salas de quiz, com rotas dinâmicas por sessão.' },
      { name: 'TypeScript', use: 'Tipagem compartilhada entre frontend e API.' },
      { name: 'AdonisJS', use: 'API REST, autenticação e ORM para usuários e quizzes.' },
      { name: 'PostgreSQL', use: 'Persistência de usuários, quizzes, perguntas e pontuação.' },
      { name: 'Socket.io', use: 'Sincronização em tempo real entre os participantes da sala.' },
    ],
    links: [
      { label: 'Frontend', href: 'https://github.com/invencaosts/quizlab-app', kind: 'code' },
      { label: 'API', href: 'https://github.com/invencaosts/quizlab-api', kind: 'code' },
    ],
  },
  {
    slug: 'observatorio-grilagem-terras',
    title:
      'Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira — Plataforma Web GIS para monitoramento territorial',
    shortTitle: 'Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira',
    category: 'Web GIS · Bolsa CNPq',
    status: 'Em desenvolvimento',
    summary:
      'Plataforma acadêmica para importar, visualizar e validar dados geoespaciais relacionados à grilagem de terras.',
    role: 'Bolsista e Principal Desenvolvedor',
    collaboration: 'Projeto acadêmico ativo com bolsa CNPq.',
    context: ['O sistema organiza camadas e casos geoespaciais para apoiar análise territorial.'],
    narrative:
      'Sou bolsista e o principal desenvolvedor desse projeto acadêmico financiado por bolsa CNPq, que dá suporte a pesquisadores que estudam grilagem de terras. Construí a interface em Next.js e a API em NestJS, que cuida da parte mais pesada: validar e importar arquivos geoespaciais (shapefiles, GeoJSON) e persistir tudo com PostGIS sobre o PostgreSQL — escolhi PostGIS justamente pela robustez em consultas espaciais complexas, que é o núcleo do sistema. Os mapas são renderizados com MapLibre, por ser leve e open-source. Como processar um arquivo espacial grande de forma síncrona travaria a aplicação, separei essa etapa em fila com BullMQ, guardando os arquivos originais em MinIO (compatível com S3) antes do processamento — assim a importação não bloqueia o resto do sistema e dá pra reprocessar se algo falhar no meio do caminho. Tudo roda em containers Docker, o que facilita reproduzir o ambiente entre mim e o restante da equipe acadêmica. O projeto ainda está em desenvolvimento: o deploy de produção não foi concluído, e integrações externas e reforços de segurança seguem no backlog.',
    technologies: [
      { name: 'Next.js', use: 'Interface web de importação e visualização de camadas.' },
      { name: 'NestJS', use: 'API, autenticação e orquestração da importação de arquivos.' },
      { name: 'PostGIS', use: 'Persistência e consultas geoespaciais sobre PostgreSQL.' },
      { name: 'MapLibre', use: 'Renderização dos mapas na interface.' },
      { name: 'BullMQ', use: 'Fila de processamento assíncrono dos arquivos espaciais.' },
      { name: 'MinIO', use: 'Armazenamento de objetos para os arquivos originais.' },
      { name: 'Docker', use: 'Padronização do ambiente entre desenvolvimento e equipe.' },
    ],
    links: [{ label: 'Código', href: 'https://github.com/invencaosts/geoserver', kind: 'code' }],
  },
  {
    slug: 'demo-soc-ia',
    title: 'Demonstração de SOC com detecção de ameaças assistida por IA',
    shortTitle: 'Demo SOC com IA',
    category: 'Segurança aplicada · IA',
    status: 'Demonstração',
    summary:
      'Simulação técnica com API, dashboard, geração de logs e um modelo local para classificar padrões e acionar alertas.',
    role: 'Palestrante de Cibersegurança',
    collaboration: 'Projeto de estudo independente em cibersegurança.',
    context: [
      'Criada para tornar observável, em uma apresentação, o fluxo entre eventos, análise e alerta.',
    ],
    narrative:
      'Construí essa demonstração para uma palestra de cibersegurança, com o objetivo de tornar visível, na prática, o fluxo entre evento, análise e alerta dentro de um SOC (Security Operations Center). Separei em três serviços: uma API que gera e recebe os logs simulados, um dashboard que exibe esses eventos e um painel de controle que aciona a análise. Para classificar os padrões e simular a detecção de ameaças, integrei um modelo de linguagem (Qwen) rodando localmente via LM Studio — optei por rodar localmente pra não depender de um serviço externo de IA durante a apresentação, e também pra mostrar que dá pra ter uma camada de análise sem custo de API. Fiz tudo em Python, por ser rápido de prototipar e ter boas bibliotecas para integração com modelos de linguagem. É importante deixar claro que é uma simulação com fins didáticos: não representa um SOC de produção nem carrega alegação de precisão ou taxa de falsos positivos.',
    technologies: [
      { name: 'Python', use: 'Construção dos três serviços: API, dashboard e painel de controle.' },
      { name: 'Qwen', use: 'Modelo local usado para classificar eventos e simular a detecção.' },
      { name: 'LM Studio', use: 'Execução do modelo localmente, sem depender de serviço externo.' },
      { name: 'REST API', use: 'Comunicação entre os serviços da demonstração.' },
    ],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/invencaosts/demo_palestra_cybersecurity',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'morea-trancadura',
    title: 'MOREA · Trancadura — Sistema modular de controle de acesso com hardware e plataforma web',
    shortTitle: 'MOREA · Trancadura',
    category: 'IoT · Controle de Acesso',
    status: 'Em desenvolvimento',
    summary:
      'Solução modular de controle de acesso que integra hardware de baixo custo e plataforma web, desenvolvida coletivamente pelo grupo MOREA.',
    role: 'Desenvolvedor',
    collaboration:
      'Projeto de pesquisa aplicada desenvolvido em equipe pelo grupo MOREA (IFS — Campus Lagarto).',
    context: [
      'MOREA é o grupo de pesquisa do IFS — Campus Lagarto responsável pelo projeto; Trancadura é a solução de controle de acesso desenvolvida pelo grupo.',
      'O sistema integra um dispositivo físico de trava (hardware de baixo custo) com uma plataforma web de gestão.',
    ],
    narrative:
      'Minha contribuição no projeto abrange autenticação, histórico de acessos, gestão de usuários, laboratórios e dispositivos, formulários e integração com a API que comunica com o hardware da trancadura. Por ser um projeto de pesquisa aplicada desenvolvido coletivamente, o código e as decisões de arquitetura são compartilhados com o restante da equipe do MOREA.',
    technologies: [
      { name: 'React', use: 'Interface web de gestão de usuários, laboratórios e dispositivos.' },
      { name: 'API REST', use: 'Integração entre a plataforma web e o hardware da trancadura.' },
    ],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/invencaosts/trancadura-web-react',
        kind: 'code',
      },
    ],
  },
] satisfies ProjectCase[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
