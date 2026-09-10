# Plano de Implementação do Portfólio

> Documento derivado de `ANALISE_PORTFOLIO_REFERENCIA.md` e `ALINHAMENTO_EDITORIAL_LINKEDIN_GITHUB.md`  
> Status: pronto para revisão; nenhuma implementação autorizada ou realizada  
> Idioma inicial: português do Brasil

## 1. Objetivo

Reorganizar o portfólio para atrair vagas de **Desenvolvedor Full Stack Júnior** no mercado brasileiro, preservando a identidade terminal brutalista e tornando experiência, projetos, formação e pesquisa rapidamente verificáveis.

O resultado deverá permitir que um recrutador identifique, em poucos segundos:

- função pretendida;
- nível profissional;
- disponibilidade e modalidades aceitas;
- experiência atual;
- três projetos relevantes;
- stack principal;
- formação e atuação acadêmica;
- currículo e contato.

Este documento descreve conteúdo, arquitetura, componentes, dados, rotas, fases, testes e critérios de aceite. Ele não implementa mudanças.

---

## 2. Decisões confirmadas

| Tema | Decisão |
|---|---|
| Posicionamento principal | Desenvolvedor Full Stack |
| Vagas-alvo | Júnior |
| Mercado | Nacional |
| Contratação | CLT ou PJ |
| Remoto | Todo o Brasil |
| Híbrido/presencial | Aracaju ou Lagarto |
| LinkedIn canônico | `https://linkedin.com/in/invencaosts/` |
| Currículo | Público; inicialmente pelo Google Drive |
| Cargo WM | Desenvolvedor de Software Júnior |
| CNPq | Bolsa em projeto acadêmico ativo; não emprego/freelance |
| MOREA | Participação desde maio de 2025 |
| Trancadura | Projeto integrado de hardware + web, desenvolvido coletivamente |
| LACI/LACID | Estudo independente em cibersegurança desde janeiro de 2026; sigla por confirmar |
| Projetos principais | QuizLab IF, Observatório de Grilagem de Terras e Demo de SOC com IA |
| Arquitetura | Home executiva + três páginas de case + currículo |
| Certificações | Não haverá seção, pois não existem certificações a apresentar |
| Política editorial | Conservadora; sem métricas, autoria ou maturidade não comprovadas |
| Identidade visual | Preservar terminal brutalista, marca, foto, temas, vermelho e timeline |

### Formulações obrigatórias

- **Cargo de posicionamento:** Desenvolvedor Full Stack.
- **Cargo atual:** Desenvolvedor de Software Júnior na WM Saúde.
- **Observatório:** produto “Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira”, desenvolvido no contexto de projeto acadêmico ativo com bolsa CNPq.
- **MOREA:** participação acadêmica desde maio de 2025.
- **LACI/LACID:** estudo independente em cibersegurança desde janeiro de 2026; publicar a sigla somente após confirmação.
- **Trancadura:** hardware e plataforma web desenvolvidos em equipe.
- **Demo SOC:** demonstração técnica, não sistema de produção.

---

## 3. Arquitetura final

```text
/
├── Navegação global
├── Hero
├── Evidências rápidas
├── Experiência profissional
├── Projetos selecionados
├── Pesquisa, projetos acadêmicos e formação
├── Competências comprovadas
├── Sobre
├── Arquivo GitHub
├── Contato
└── Rodapé

/projetos/quizlab-if
/projetos/observatorio-grilagem-terras
/projetos/demo-soc-ia

Currículo externo inicialmente:
└── Google Drive
```

Não criar na primeira versão:

- página separada de Experiência;
- página separada de Pesquisa;
- página separada de Formação;
- página Sobre extensa;
- catálogo multipágina de todos os repositórios;
- seção de certificações.

### Navegação

```text
Início
Experiência
Projetos
Pesquisa & Formação
Contato
Currículo ↗
```

Nas páginas internas, as âncoras usarão `/#experiencia`, `/#projetos`, `/#pesquisa-formacao` e `/#contato`.

---

## 4. Especificação da Home

### 4.1 Hero

**Conteúdo proposto:**

```text
GUILHERME DA INVENÇÃO

Desenvolvedor Full Stack

Desenvolvo aplicações web ponta a ponta para saúde, gestão e geodados,
conectando interfaces, APIs, automações e bancos de dados.

[Ver projetos] [Ver experiência] [Visualizar currículo]
```

**Disponibilidade:**

```text
Buscando oportunidades Júnior
Remoto em todo o Brasil
Híbrido ou presencial em Aracaju e Lagarto
CLT ou PJ
```

**Manter:** prompt `whoami`, nome, fotografia, moldura REC, localização, tipografia e paleta.

**Remover:** rotação entre Arquiteto, Engenheiro, Full Stack e Pesquisador.

**Critério de aceite:** título, nível, proposta de valor, disponibilidade e CTA devem estar compreensíveis na primeira viewport em desktop e mobile.

### 4.2 Evidências rápidas

Substituir o conteúdo promocional do `LogStrip` por fatos:

```text
STATUS: BUSCANDO_OPORTUNIDADES_JUNIOR
ATUAÇÃO: SAÚDE_PÚBLICA_E_ERP
PROJETO: WEB_GIS_COM_BOLSA_CNPQ
PESQUISA: MOREA_DESDE_2025
COMUNIDADE: LACID_DESDE_2026
STACK: TYPESCRIPT_REACT_NODE_POSTGRESQL
```

O movimento visual pode permanecer, mas todo conteúdo deve ser acessível com redução de movimento e não depender da animação para leitura.

Remover:

- cinco anos de engenharia;
- 8,7 mil horas de infraestrutura;
- linhas de código;
- contribuições de fallback;
- “boas práticas validadas” e equivalentes sem evidência.

### 4.3 Experiência profissional

Ordem:

1. WM Saúde;
2. BST Networks;
3. atuação freelancer.

#### WM Saúde

```text
WM Saúde — Gestão e Tecnologia

Desenvolvedor de Software Júnior
mar. 2026 — atual · tempo integral · presencial · Aracaju

Desenvolvedor de Software — Estágio
dez. 2025 — fev. 2026
```

Conteúdo permitido como base:

- desenvolvimento e evolução de sistemas para saúde municipal;
- interfaces e regras de negócio com TypeScript/React;
- APIs com Node.js/AdonisJS;
- PostgreSQL e SQL Server;
- automações com n8n;
- integrações REST;
- deploys Docker/Linux;
- sincronização e integridade de dados;
- progressão do estágio para o cargo júnior.

Nomes como e-smart, Medbooking, Medstock e SmartSamu ficam em configuração editorial desabilitada até confirmação de autorização.

#### BST Networks

```text
Desenvolvedor de Software · freelance
fev. 2025 — mai. 2025 · remoto
```

Conteúdo:

- desenvolvimento ponta a ponta de ERP;
- interfaces e APIs REST;
- TypeScript/JavaScript;
- SQL Server;
- Scrum.

#### Freelancer

```text
Desenvolvedor Freelancer
jan. 2024 — atual
```

Manter compacto até existirem cases autorizados: aplicações web, APIs, React, Node.js, MySQL/PostgreSQL e deploys Linux.

#### CNPq

Não entra como emprego. A bolsa será apresentada na seção acadêmica; o resultado técnico será aprofundado no case do Observatório.

### 4.4 Projetos selecionados

Cards estáticos e manuais, sem dependência da API do GitHub:

1. QuizLab IF;
2. Observatório de Grilagem de Terras;
3. Demo de SOC com IA.

Cada card contém:

```text
Categoria/contexto
Nome
Propósito
Contribuição individual
Estado real
3–5 tecnologias
Ver case
Código
Demo, quando existir
```

Conteúdo essencial não pode ficar escondido em hover ou carrossel.

### 4.5 Pesquisa, projetos acadêmicos e formação

```text
Pesquisa e projetos acadêmicos
├── Observatório de Grilagem de Terras
│   ├── bolsa CNPq
│   ├── projeto acadêmico ativo
│   ├── Web GIS e geodados
│   └── link para o case
├── MOREA · desde mai. 2025
│   └── Trancadura · hardware + plataforma web
└── LACID · desde jan. 2026
    └── formação/comunidade em Dados e IA

Formação
├── IFS · bacharelado em andamento
└── SENAI CETCC-SE · Técnico em ADS concluído
```

#### Observatório

Formulação segura:

> Projeto acadêmico ativo com bolsa CNPq voltado ao desenvolvimento de uma plataforma Web GIS para visualização e gestão de dados relacionados à grilagem de terras.

O nome completo usado pelo produto e confirmado no repositório é **Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira**. Usar “Observatório de Grilagem de Terras” em cards e navegação. Não apresentar esse título como nome institucional do CNPq/IFS nem apresentar o CNPq como empregador.

#### MOREA e Trancadura

Formulação segura:

> Participo do MOREA desde maio de 2025 e contribuí, em equipe, para a Trancadura: uma solução modular de controle de acesso que integra hardware de baixo custo e plataforma web.

Contribuições individuais públicas no software podem mencionar autenticação, login/logout, histórico, usuários, membros, laboratórios, dispositivos, formulários, integração com API/Axios e refatorações. Hardware deve ser descrito como construção coletiva.

Não atribuir individualmente:

- criação integral do hardware;
- artigo ou prêmio de 2024;
- resultado produzido por outros membros.

#### LACI/LACID

Formulação segura:

> Desde janeiro de 2026, mantenho estudos independentes voltados ao aprofundamento em cibersegurança.

Não apresentar essa atividade como laboratório, pesquisa institucional ou vínculo acadêmico formal. Confirmar com o proprietário se a sigla pública correta é LACI ou LACID antes da publicação.

#### Formação

Exibir:

- bacharelado no IFS, em andamento;
- Técnico em Análise e Desenvolvimento de Sistemas no SENAI CETCC-SE, concluído em 2023.

Não criar certificações artificiais nem usar uma contagem de cursos.

### 4.6 Competências comprovadas

| Capacidade | Tecnologias | Evidências |
|---|---|---|
| Desenvolvimento Full Stack | TypeScript, React, Next.js, Node.js, AdonisJS | QuizLab, WM e BST |
| APIs e dados | REST, PostgreSQL, SQL Server, PostGIS | WM e Observatório |
| Geodados | PostGIS, MapLibre e importação geoespacial | Observatório |
| Automação e operação | n8n, Docker, Linux e Git | WM |
| Segurança aplicada | RBAC, auditoria, Python e IA local | Demo SOC e Observatório |
| Sistemas integrados | hardware, controle de acesso e aplicação web | Trancadura/MOREA |

Java, C#, .NET, PHP, Laravel, MongoDB e MySQL serão complementares, não o primeiro nível visual.

### 4.7 Sobre

Texto-base:

> Sou Desenvolvedor Full Stack com experiência em sistemas para saúde pública, gestão empresarial e geodados. Atuo entre interfaces, regras de negócio, APIs, bancos de dados, automações e operação com Linux e Docker. Em paralelo, participo de iniciativas acadêmicas e aprofundo meus estudos independentes em cibersegurança.

### 4.8 Arquivo GitHub

A integração dinâmica passa a ser secundária:

- mostrar repositórios recentes adicionais;
- projetos principais permanecem estáticos;
- sem token, exibir link para o GitHub;
- não exibir estatísticas inventadas;
- informar data de atualização quando dados forem carregados;
- excluir forks por padrão;
- não chamar “mais recente” de “destaque”.

### 4.9 Contato

Texto-base:

> Estou buscando oportunidades como Desenvolvedor Full Stack Júnior, em regime CLT ou PJ. Tenho disponibilidade para trabalho remoto em todo o Brasil e para oportunidades híbridas ou presenciais em Aracaju e Lagarto.

Preservar formulário, e-mail, GitHub, LinkedIn e WhatsApp, condicionado à confirmação de que o telefone continuará público.

---

## 5. Páginas de case

### 5.1 Estrutura comum

```text
Breadcrumb
Categoria e estado
Título e resumo
Papel, período e colaboração
CTAs
Contexto e problema
Público
Minha contribuição
Arquitetura
Decisões e trade-offs
Implementação
Resultado ou evidências
Estado atual e limitações
Aprendizados
Stack
Código, demo e documentação
Próximo projeto
Contato
```

### 5.2 QuizLab IF

**Título:** QuizLab IF — Plataforma de quizzes gamificados em tempo real.

**Papel narrativo:** principal prova de produto full stack.

**Stack-base:** Next.js, TypeScript, Tailwind, AdonisJS, PostgreSQL e Socket.io.

**Obrigatório antes de publicar:** período, equipe, contribuição individual, estado, deploy, screenshots, resultado e decisão de arquitetura em tempo real.

Não afirmar uso institucional, quantidade de usuários ou produção sem confirmação.

### 5.3 Observatório de Grilagem de Terras

**Título:** Observatório de Grilagem de Terras — Plataforma Web GIS para monitoramento territorial.

**Papel narrativo:** geodados, arquitetura e pesquisa aplicada.

**Estado:** projeto acadêmico em desenvolvimento com bolsa CNPq.

**Stack declarada no repositório:** Next.js, React, NestJS, PostgreSQL/PostGIS, Prisma, MapLibre, BullMQ, Redis, MinIO e Docker.

**Obrigatório antes de publicar:** relação exata entre bolsa e repositório, contribuição individual, equipe, período, situação do deploy, screenshots, dataset e decisões técnicas.

Não afirmar produção, impacto territorial real ou autoria exclusiva.

### 5.4 Demo de SOC com IA

**Título:** Demonstração de SOC com detecção de ameaças assistida por IA.

**Papel narrativo:** segurança aplicada, Python, IA local e comunicação técnica.

**Stack-base:** Python, LM Studio e Qwen.

**Estado:** demonstração/simulação.

**Obrigatório antes de publicar:** contexto da apresentação, ameaças simuladas, contribuição, arquitetura, critérios de avaliação, screenshots/vídeo e aprendizados.

Não afirmar capacidade de produção, precisão, ausência de falsos positivos ou detecção comprovada.

---

## 6. Modelo de conteúdo tipado

Criar dados fora dos componentes:

```ts
type Period = {
  start: string;
  end?: string;
  current?: boolean;
};

type LinkItem = {
  label: string;
  href: string;
  kind: "case" | "code" | "demo" | "article" | "institution" | "social";
};

type Experience = {
  id: string;
  organization: string;
  context: string;
  location?: string;
  arrangement: "remoto" | "híbrido" | "presencial";
  roles: {
    title: string;
    contract: string;
    period: Period;
  }[];
  contributions: string[];
  outcomes: string[];
  technologies: string[];
  links?: LinkItem[];
  logo?: string;
};

type ProjectCase = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: "em-desenvolvimento" | "demonstração" | "concluído";
  period?: Period;
  role: string;
  collaboration: string;
  context: string[];
  contributions: string[];
  decisions: {
    problem: string;
    decision: string;
    tradeoff: string;
  }[];
  technologies: string[];
  outcomes: string[];
  limitations: string[];
  learnings: string[];
  media: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  links: LinkItem[];
  seo: {
    title: string;
    description: string;
  };
};

type AcademicEntry = {
  id: string;
  kind: "bolsa" | "pesquisa-aplicada" | "liga-acadêmica";
  title: string;
  institution: string;
  sponsor?: string;
  period: Period;
  status: string;
  role: string;
  contributionMode: "individual" | "equipe";
  contributions: string[];
  outputs?: LinkItem[];
};

type Capability = {
  title: string;
  description: string;
  technologies: string[];
  evidenceIds: string[];
};
```

Usar `satisfies` nos arquivos estáticos. `evidenceIds` conectará competência, experiência, case e pesquisa sem duplicar textos.

---

## 7. Arquivos e componentes

### Modificar

- `src/app/layout.tsx` — metadata, JSON-LD e identidade profissional;
- `src/app/page.tsx` — nova ordem;
- `src/app/globals.css` — foco, reduced motion e responsividade;
- `src/componentsV4/Navbar.tsx` — destinos e currículo;
- `src/componentsV4/Hero.tsx` — título estável, proposta e CTAs;
- `src/componentsV4/LogStrip.tsx` — evidências reais;
- `src/componentsV4/Experience.tsx` — progressão e conteúdo;
- `src/componentsV4/Contact.tsx` — disponibilidade e LinkedIn;
- `src/componentsV4/Footer.tsx` — título e navegação;
- `src/lib/github.ts` — remover métricas artificiais e melhorar fallback;
- `public/manifest.webmanifest`, se existir — descrição coerente;
- `package.json` — scripts de validação, conforme ferramentas escolhidas.

### Criar

```text
src/types/portfolio.ts
src/content/profile.ts
src/content/experiences.ts
src/content/projects.ts
src/content/academics.ts
src/content/education.ts
src/content/capabilities.ts

src/componentsV4/SiteShell.tsx
src/componentsV4/EvidenceStrip.tsx
src/componentsV4/FeaturedProjects.tsx
src/componentsV4/ProjectCard.tsx
src/componentsV4/ProjectCaseLayout.tsx
src/componentsV4/ResearchEducation.tsx
src/componentsV4/Capabilities.tsx
src/componentsV4/About.tsx
src/componentsV4/GitHubArchive.tsx
src/componentsV4/JsonLd.tsx

src/app/projetos/[slug]/page.tsx
src/app/not-found.tsx
src/app/sitemap.ts
src/app/robots.ts

public/projects/quizlab/
public/projects/observatorio/
public/projects/demo-soc/
```

`AboutBento` e `ProjectCarousel` serão aposentados somente depois da substituição validada. V1–V3 não serão apagados incidentalmente.

### Currículo

Primeira implementação: link externo fornecido pelo usuário:

`https://drive.google.com/file/d/1gBIbL8Y0F-pwjPgwWJljONb7qLe9loSA/view?usp=sharing`

Fase opcional: hospedar PDF versionado em `public/curriculo-guilherme-da-invencao.pdf`, após sincronizar o cargo da WM e demais dados.

---

## 8. SEO e dados estruturados

### Metadata global

```text
Título: Guilherme da Invenção | Desenvolvedor Full Stack

Descrição: Desenvolvedor Full Stack Júnior em Aracaju, com experiência
em TypeScript, React, Next.js, Node.js, AdonisJS e PostgreSQL aplicada
a sistemas de saúde, gestão e geodados.
```

Remover:

- Arquiteto de Sistemas como cargo;
- Engenheiro de Software como identidade principal;
- Pesquisador de Cibersegurança como cargo;
- pentest;
- alta disponibilidade, escalabilidade e performance sem contexto.

### JSON-LD Person

- `jobTitle`: Desenvolvedor Full Stack;
- `worksFor`: WM Saúde;
- `sameAs`: GitHub e LinkedIn curto;
- `knowsAbout`: apenas competências demonstradas;
- IFS em formação/afiliação apropriada;
- CNPq não deve aparecer como empregador.

### Cases

Cada case terá:

- `generateStaticParams`;
- `generateMetadata`;
- canonical próprio;
- Open Graph próprio;
- `SoftwareSourceCode` ou `CreativeWork`;
- `BreadcrumbList`;
- descrição, status, repositório e linguagens derivados do conteúdo tipado.

### Sitemap

Incluir Home e três cases. Datas devem vir do conteúdo, não de `new Date()` a cada geração.

---

## 9. Acessibilidade e performance

- um `h1` por página;
- headings sequenciais;
- conteúdo essencial fora de hover;
- navegação completa por teclado;
- foco visível;
- menu fecha com Escape e devolve foco;
- `aria-expanded`, `aria-current` e labels corretos;
- alt e legendas em mídia técnica;
- contraste WCAG AA;
- `prefers-reduced-motion` desativa marquee, scanner, pulse e cursor;
- âncoras com `scroll-margin-top`;
- formulário com labels, autocomplete e erros;
- aviso de envio por serviço externo;
- sem scroll horizontal em 360 px;
- Server Components por padrão;
- imagens otimizadas e dimensionadas;
- GitHub com cache e falha controlada.

---

## 10. Fases de implementação

### Fase 0 — Congelamento editorial

- confirmar os dados pendentes da seção 14;
- atualizar cargo no LinkedIn;
- sincronizar currículo;
- classificar conteúdo da WM como permitido/restrito;
- coletar screenshots sem dados sensíveis;
- preencher fichas dos três cases.

**Saída:** conteúdo aprovado e publicável.

### Fase 1 — Conteúdo tipado e shell

- criar tipos e arquivos de conteúdo;
- criar shell compartilhado;
- ajustar links da Navbar/Footer para Home e páginas internas;
- preservar aparência atual.

### Fase 2 — Hero e triagem

- substituir títulos rotativos;
- inserir proposta, nível, disponibilidade e CTAs;
- transformar LogStrip em evidências;
- remover métricas sem fonte.

### Fase 3 — Experiência

- agrupar WM em um card com progressão;
- adicionar BST e freelancer;
- remover CNPq da taxonomia de emprego;
- associar tecnologias a contribuições.

### Fase 4 — Projetos e cases

- criar cards manuais;
- criar rota dinâmica;
- implementar QuizLab, Observatório e Demo SOC;
- adicionar navegação entre cases e 404.

### Fase 5 — Academia, competências e Sobre

- implementar Observatório/CNPq, MOREA/Trancadura, LACID e formação;
- explicitar autoria coletiva;
- conectar competências a evidências;
- adicionar Sobre curto.

### Fase 6 — GitHub, currículo e contato

- criar arquivo secundário resiliente;
- adicionar currículo externo;
- canonicalizar LinkedIn;
- atualizar disponibilidade e contato.

### Fase 7 — SEO, acessibilidade e performance

- metadata, JSON-LD, sitemap, robots e Open Graph;
- teclado, contraste e reduced motion;
- imagens e bundle.

### Fase 8 — QA e publicação

- revisão factual;
- testes automatizados/manuais;
- preview;
- aprovação final;
- publicação;
- sincronização de LinkedIn, GitHub e currículo.

---

## 11. Estratégia de testes

Scripts desejados:

```text
typecheck
lint
test
test:e2e
build
```

Cobertura:

- integridade dos arquivos de conteúdo;
- slugs únicos;
- links válidos;
- case exige contribuição, estado, decisão, limitação e evidência;
- Home sempre mostra os três projetos sem token;
- falha do GitHub não quebra a página;
- cases corretos e 404 para slug inválido;
- Navbar funciona na Home e nos cases;
- currículo abre corretamente;
- tema persiste;
- menu mobile por teclado;
- formulário validado sem envio real em teste;
- canonical, Open Graph e JSON-LD;
- sitemap completo;
- viewports 360, 768, 1024 e 1440 px;
- ausência de overflow;
- axe sem violações críticas/sérias;
- Lighthouse de produção: acessibilidade e SEO ≥ 95, performance ≥ 90 e CLS ≤ 0,1.

---

## 12. Ordem dos commits

1. `chore(content): centraliza dados canônicos do portfólio`
2. `refactor(layout): cria shell V4 compartilhado entre rotas`
3. `feat(home): reposiciona hero e evidências de triagem`
4. `feat(experience): agrupa progressão na WM e revisa vínculos`
5. `feat(projects): adiciona seleção manual de projetos`
6. `feat(cases): cria páginas dos três estudos de caso`
7. `feat(academics): adiciona CNPq MOREA Trancadura e LACID`
8. `refactor(skills): vincula competências a evidências`
9. `refactor(github): implementa arquivo secundário resiliente`
10. `feat(contact): adiciona currículo e disponibilidade`
11. `fix(seo): alinha metadata json-ld sitemap robots e og`
12. `fix(a11y): melhora teclado contraste e redução de movimento`
13. `test(portfolio): cobre conteúdo rotas fallback e navegação`
14. `chore(cleanup): remove componentes e dependências sem uso`

Cada commit deverá manter build e lint funcionando. Nenhum commit deve misturar atualização editorial com limpeza destrutiva não relacionada.

---

## 13. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Expor informação confidencial da WM | Usar nomes genéricos até autorização |
| Inflar autoria da Trancadura | Usar “desenvolvido em equipe” e listar contribuição individual |
| CNPq parecer emprego | Manter na seção acadêmica e informar bolsa |
| LACID parecer pesquisa formal em segurança | Separar Liga de estudo independente |
| Observatório parecer produção | Mostrar estado e limitações |
| Demo SOC parecer solução real | Rotular demonstração/simulação em todos os pontos |
| Cases sem profundidade | Bloquear publicação até preencher ficha mínima |
| GitHub controlar narrativa | Conteúdo principal estático |
| CV divergir do site | Revisar antes de ativar CTA destacado |
| Stack excessiva | Destacar apenas tecnologias associadas a evidências |
| Duplicar Observatório | Academia explica vínculo; case explica engenharia |
| Animação prejudicar leitura | Reduced motion e conteúdo estático equivalente |

---

## 14. Pendências residuais e defaults seguros

Essas pendências não bloqueiam a estrutura, mas bloqueiam textos ou mídias específicos.

| Pendência | Default enquanto não respondida |
|---|---|
| Nome oficial do bacharelado/campus/período | Mostrar apenas “Bacharelado no IFS — em andamento” |
| Nome oficial da unidade SENAI | “SENAI CETCC-SE” conforme LinkedIn |
| Papel formal no MOREA | “Participante/contribuidor desde mai. 2025” |
| Estado/deploy da Trancadura | “Projeto acadêmico desenvolvido em equipe” |
| Sigla correta: LACI ou LACID | Omitir a sigla e usar “estudos independentes em cibersegurança” |
| Modalidade/editais da bolsa | “Bolsa CNPq em projeto acadêmico” |
| Capítulo de livro | Não publicar até informar status verificável |
| Nomes dos módulos da WM | Omitir até autorização |
| Cases freelancer | Manter experiência compacta sem cases |
| PDF local | Usar link do Google Drive |
| Telefone público | Manter configuração atual somente se reconfirmado antes do deploy |
| Imagens dos cases | Usar placeholders da identidade até receber mídia autorizada |

### Informações ainda desejáveis para os três cases

Para cada projeto:

```text
Período:
Equipe:
Minha contribuição:
Estado atual:
Resultado:
Decisão técnica principal:
Trade-off:
Screenshots/demo:
Informações proibidas:
```

Sem essas respostas, a estrutura pode ser implementada, mas o case não deve ser publicado como concluído.

---

## 15. Critérios gerais de aceite

O trabalho estará concluído quando:

- houver um único posicionamento principal;
- nível Júnior e disponibilidade estiverem claros;
- a Home oferecer acesso a projetos, experiência e currículo;
- WM estiver agrupada com progressão correta;
- CNPq não aparecer como emprego;
- Trancadura tiver autoria coletiva explícita;
- LACID e estudo independente de segurança estiverem separados;
- os três projetos tiverem páginas próprias e status honesto;
- tecnologias estiverem conectadas a evidências;
- conteúdo principal funcionar sem GitHub/token;
- LinkedIn curto for usado em todo o site;
- métricas artificiais tiverem sido removidas;
- identidade terminal permanecer reconhecível;
- acessibilidade, responsividade, SEO e testes atingirem os critérios definidos;
- nenhuma informação confidencial ou autoria indevida for publicada;
- LinkedIn, currículo, GitHub e portfólio estiverem editorialmente coerentes.

---

## 16. Fora de escopo nesta implementação

- alterar automaticamente LinkedIn ou GitHub;
- inventar resultados, métricas ou depoimentos;
- publicar capítulo ainda não confirmado;
- criar certificações;
- reescrever projetos privados sem autorização;
- apagar componentes históricos V1–V3 sem uma tarefa específica;
- reformular completamente a identidade visual;
- criar CMS ou painel administrativo;
- traduzir o site para inglês;
- criar blog;
- publicar a implementação sem preview e aprovação.

---

## 17. Próxima decisão

Após a aprovação deste plano, a implementação deve começar pela Fase 0 e pelo conteúdo tipado. Antes de publicar os cases, será necessária uma rodada curta de coleta das informações listadas na seção 14.

A implementação poderá ocorrer incrementalmente, mantendo o site funcional a cada commit e preservando as configurações e alterações existentes.
