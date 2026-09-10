# Alinhamento Editorial entre LinkedIn, GitHub e Portfólio

> Documento complementar a `ANALISE_PORTFOLIO_REFERENCIA.md`  
> Perfis analisados: [GitHub @invencaosts](https://github.com/invencaosts) e LinkedIn público associado  
> Data da análise: 9 de setembro de 2026

## 1. Objetivo

Este documento define como transformar as informações públicas do LinkedIn e do GitHub em uma linguagem profissional consistente para o portfólio. Ele funciona como especificação editorial para uma implementação futura, depois de aprovação.

O foco é responder:

- qual deve ser o título profissional principal;
- como apresentar atuação, domínios e tecnologias;
- como reescrever Hero e Sobre;
- como estruturar experiências profissionais;
- quais projetos devem ocupar os espaços mais importantes;
- quais afirmações precisam ser confirmadas ou removidas;
- como manter LinkedIn, GitHub, currículo e portfólio coerentes.

Nenhuma recomendação deste documento autoriza alteração automática do código ou dos perfis externos.

### Legenda

- **[Observado]**: dado diretamente observável em código, metadado ou interface pública.
- **[Declarado no README]**: afirmação publicada pelo próprio autor, ainda não validada por fonte independente.
- **[Informado]**: informação fornecida diretamente pelo proprietário do portfólio.
- **[Inferência]**: leitura editorial baseada nas evidências disponíveis.
- **[Proposta]**: texto ou estrutura recomendada, ainda sujeito a aprovação.
- **[Confirmar]**: dado conflitante, inacessível ou insuficientemente comprovado.

---

## 2. Limites da pesquisa

O GitHub estava publicamente acessível, incluindo perfil, README de apresentação, metadados e READMEs dos repositórios. O LinkedIn bloqueou a inspeção automatizada direta com resposta HTTP 999. Resultados públicos indexados confirmaram o nome, a associação à WM Saúde e atividade recente sobre desenvolvimento, Linux, Docker, segurança e IA, mas não permitiram auditar integralmente as seções Sobre, Experiência, Formação e Competências.

Portanto:

- o GitHub é a principal fonte pública de conteúdo desta análise;
- o título “Desenvolvedor Full Stack” no LinkedIn é tratado como **[Informado]**;
- nenhum texto inacessível do LinkedIn foi inventado;
- os textos propostos devem ser conferidos manualmente contra o LinkedIn antes da implementação.

---

## 3. Fontes e URLs canônicas

| Plataforma | URL encontrada | Diagnóstico |
|---|---|---|
| GitHub | [github.com/invencaosts](https://github.com/invencaosts) | URL canônica e consistente no projeto |
| README do perfil | [github.com/invencaosts/invencaosts](https://github.com/invencaosts/invencaosts) | Fonte pública mais completa da narrativa profissional |
| LinkedIn curto | [linkedin.com/in/invencaosts](https://www.linkedin.com/in/invencaosts) | Divulgado pelo GitHub e pelo AboutBento; melhor candidato a canônico |
| LinkedIn longo | [linkedin.com/in/guilherme-da-invencao-santos-556497282](https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/) | Usado em Contact, Footer e JSON-LD; também indexado com o mesmo nome |

### Decisão recomendada

**[Confirmar]** Abrir manualmente o LinkedIn e verificar qual endereço aparece em “editar perfil público”. Se `/in/invencaosts` for o endereço configurado, adotá-lo em todas as superfícies.

Hoje existem duas URLs diferentes no código, o que afeta consistência e manutenção:

- `AboutBento.tsx` usa `/in/invencaosts`;
- `Contact.tsx`, `Footer.tsx` e `layout.tsx` usam a URL longa.

---

## 4. Diagnóstico da identidade profissional atual

### 4.1 Como cada superfície apresenta o perfil

| Superfície | Formulação observada | Efeito |
|---|---|---|
| LinkedIn | “Desenvolvedor Full Stack” **[Informado]** | Direto, buscável e reconhecido por recrutadores |
| Bio do GitHub | “Desenvolvedor Full Stack” + TypeScript, React, Next.js, Node.js, AdonisJS, Java, SQL e PostgreSQL | Identidade clara, mas muito orientada a lista de ferramentas |
| README do GitHub | “Desenvolvedor de Software Full Stack” para saúde, ERP e Web GIS | Melhor equilíbrio entre função, domínio e entrega |
| Hero do portfólio | Arquiteto de Sistemas; Engenheiro de Software; Desenvolvedor Full Stack; Pesquisador de Cibersegurança; combinação | Comunica amplitude, mas não define uma identidade principal |
| Sobre do portfólio | Engenheiro de Software em sistemas críticos, ERP, Saúde, arquitetura e segurança | Direção boa, porém genérica e mais categórica que as provas públicas |
| Footer/SEO/JSON-LD | Engenheiro de Software & Arquiteto de Sistemas | Conflita com LinkedIn/GitHub e eleva “Arquiteto” a cargo principal |

### 4.2 Problema central

O portfólio tenta comunicar quatro identidades no mesmo nível:

```text
Engenheiro de Software
+ Arquiteto de Sistemas
+ Desenvolvedor Full Stack
+ Pesquisador de Cibersegurança
```

Isso gera três problemas:

1. o recrutador não sabe qual título usar para classificar o perfil;
2. títulos de alta responsabilidade, como Arquiteto, parecem reivindicações separadas da experiência demonstrada;
3. a pesquisa em segurança compete com a atuação principal em vez de funcionar como diferencial.

### 4.3 Identidade unificada recomendada

**[Proposta] Cargo de posicionamento:**

> **Desenvolvedor Full Stack**

**[Proposta] Especialização imediatamente associada:**

> Sistemas para saúde, gestão e geodados.

**[Proposta] Forma expandida:**

> **Desenvolvedor Full Stack | Sistemas para Saúde, Gestão e Geodados**

### 4.4 Por que não usar quatro títulos rotativos

- “Desenvolvedor Full Stack” é consistente entre LinkedIn informado, GitHub e README.
- “Desenvolvedor de Software Júnior” é o cargo confirmado da WM Saúde e deve ser usado dentro de Experiência.
- “Arquitetura” deve aparecer como competência e decisão demonstrada nos cases, não necessariamente como cargo.
- “Estudos independentes em cibersegurança” devem aparecer como eixo complementar, sustentado pelo aprendizado e pelo projeto de demonstração.

### Recomendação final de título

Até confirmação de uma mudança deliberada no LinkedIn:

```text
Título principal: Desenvolvedor Full Stack
Cargo atual na experiência: Desenvolvedor de Software Júnior
Especialidades: arquitetura backend, dados, automações e sistemas críticos
Eixo complementar: estudos independentes em cibersegurança
```

---

## 5. Linguagem profissional a transportar para o portfólio

### 5.1 Características positivas observadas

O README do GitHub e os trechos associados ao perfil em resultados indexados sugerem uma linguagem:

- direta e explicativa;
- orientada ao contexto do sistema;
- capaz de relacionar tecnologia com rotina profissional;
- interessada em explicar por que uma decisão importa;
- confortável em transitar entre produto, software, infraestrutura e segurança;
- mais concreta quando cita sistemas, módulos e domínios reais.

**[Inferência limitada]** Resultados do LinkedIn podem misturar autoria, compartilhamentos e conteúdo recomendado. Sem URLs inequívocas de posts autorais, o portfólio deve usar essa leitura apenas como direção provisória e não atribuir frases ou opiniões específicas ao perfil. A forma de raciocinar presente no README pode ser transportada; frases completas não devem ser copiadas.

### 5.2 Vocabulário central recomendado

Usar de forma recorrente:

- desenvolver e evoluir;
- aplicações web ponta a ponta;
- APIs e integrações;
- modelagem e integridade de dados;
- automação de processos;
- saúde pública e gestão hospitalar;
- ERP e gestão empresarial;
- Web GIS e geodados;
- sistemas educacionais em tempo real;
- operação com Linux e Docker;
- segurança aplicada.

### 5.3 Vocabulário que exige prova ou reformulação

| Expressão atual | Problema | Reformulação recomendada |
|---|---|---|
| “Arquiteto de Sistemas” | Não aparece como cargo verificável nas fontes acessíveis | “Experiência com decisões de arquitetura” ou demonstrar em case |
| “Pesquisador de Cibersegurança” | O GitHub sustenta pesquisa/demonstração aplicada, não necessariamente cargo | “Pesquisa aplicada em cibersegurança” |
| “Alta disponibilidade” | Não há SLA ou métrica pública | “Manutenção e operação de sistemas” |
| “Arquitetura escalável” | Falta escala/benchmark público | Citar decisão concreta: filas, PostGIS, RBAC, WebSockets etc. |
| “Performance em alto nível” | Genérico e não mensurável | Informar otimização específica e resultado, quando disponível |
| “Boas práticas validadas” | Não explica validação | Citar testes, CI, revisão, auditoria ou padrão concreto |
| “05 anos em engenharia” | Não coincide claramente com a cronologia pública | Confirmar critério ou remover |
| “8.7k horas de infra ativa” | Sem sistema, período ou fonte | Remover ou contextualizar com fonte |
| “Linhas de código em produção” | Estimativa por tamanho em disco; baixo valor | Remover |
| “Pentest” no SEO | Nenhuma evidência pública encontrada | Remover ou adicionar evidência legítima |

---

## 6. Textos-base propostos

Todos os textos desta seção são propostas editoriais, não transcrições das plataformas.

### 6.1 Hero recomendado

```text
GUILHERME DA INVENÇÃO

Desenvolvedor Full Stack

Desenvolvo e evoluo aplicações web ponta a ponta — de interfaces e APIs
a dados, automações e infraestrutura — para saúde, gestão e geodados.

[Ver projetos] [Ver experiência] [Baixar currículo]
```

Metadados complementares:

```text
Aracaju — SE
Disponibilidade a confirmar
TypeScript · React · Next.js · Node.js · AdonisJS · PostgreSQL
```

### 6.2 Hero alternativo, se o posicionamento for migrado

```text
GUILHERME DA INVENÇÃO

Engenheiro de Software Full Stack

Construo aplicações, APIs e integrações para sistemas de saúde,
gestão empresarial e plataformas orientadas a geodados.
```

### 6.3 Sobre — versão curta

> Desenvolvedor Full Stack com experiência na construção, manutenção e evolução de sistemas para saúde pública, gestão empresarial e Web GIS. Trabalho ponta a ponta com TypeScript, React, Next.js, Node.js, AdonisJS e PostgreSQL, conectando interfaces, regras de negócio, APIs, automações e ambientes Linux/Docker. Também desenvolvo estudos e demonstrações aplicadas em cibersegurança.

### 6.4 Sobre — versão expandida

> Minha atuação combina produto e engenharia: transformo fluxos operacionais em aplicações web e APIs, com atenção à modelagem de dados, integrações e manutenção contínua. Já atuei em sistemas de saúde, ERP, automações e uma plataforma de monitoramento geoespacial.
>
> No dia a dia, uso principalmente TypeScript, React, Next.js, Node.js, AdonisJS e PostgreSQL. Docker, Linux, APIs REST, WebSockets e n8n complementam a entrega e a operação. Em paralelo, exploro segurança aplicada, especialmente em demonstrações e estudos sobre riscos em software e inteligência artificial.

### 6.5 Texto curto para SEO

> Guilherme da Invenção é Desenvolvedor Full Stack em Aracaju, com atuação em TypeScript, React, Next.js, Node.js, AdonisJS e PostgreSQL aplicada a sistemas de saúde, gestão e geodados.

### 6.6 Headline sugerida para alinhamento futuro do LinkedIn

Opção recomendada:

> Desenvolvedor Full Stack | TypeScript, React, Next.js, Node.js e AdonisJS | PostgreSQL, Docker e APIs | Health Tech e Web GIS

Cargo na experiência profissional: **Desenvolvedor de Software Júnior na WM Saúde**. Não alterar o LinkedIn automaticamente; o usuário informou que fará essa atualização.

---

## 7. Experiências profissionais: conteúdo e linguagem

### 7.1 Estrutura editorial padrão

```text
Organização
Cargo formal · período confirmado · tipo de vínculo
Contexto do sistema/domínio
Contribuições específicas
Resultado ou capacidade entregue
Tecnologias e práticas
Link ou nota de confidencialidade
```

### 7.2 WM Saúde

**Título de seção proposto:**

> **WM Saúde — Evolução de um ecossistema municipal de saúde**

**Cargo confirmado:** Desenvolvedor de Software Júnior · mar. 2026 — presente  
**Progressão:** Desenvolvedor de Software (estágio) · dez. 2025 — fev. 2026

**Conteúdo disponível no GitHub:** ecossistema e-smart; Medbooking, Medstock e SmartSamu; módulos de farmácia pública, vigilância sanitária e procedimentos/atendimentos; automação n8n; APIs; Docker/Linux; sincronização de bases.

**[Confirmar antes de publicar]:** autorização para nomear os módulos, papel de “desenvolvedor principal”, tecnologias por módulo, quantidade de municípios/unidades/usuários, resultados, escopo de decisão e informações confidenciais.

**Direção de redação:** mostrar progressão dentro de uma organização, domínio de saúde e responsabilidade ponta a ponta. Evitar três bullets genéricos sobre “manutenção, arquitetura e segurança”.

### 7.3 Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira / IFS + bolsa CNPq

**Título de seção proposto:**

> **Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira — Plataforma Web GIS para monitoramento territorial**

**Nome editorial curto:** Observatório de Grilagem de Terras  
**Vínculo confirmado:** bolsa CNPq em projeto acadêmico ativo do IFS; não é experiência empregatícia.

**Direção de redação:** separar corretamente:

- CNPq como financiador/instituição, se esse for o caso;
- nome do projeto ou organização executora;
- tipo de vínculo;
- contribuição individual;
- situação atual.

**[Confirmar]:** contribuição individual detalhada, convite para capítulo, coautoria efetiva, deploy e uso real.

### 7.4 BST Networks

**Conteúdo declarado no README:** Desenvolvedor Full Stack, fev. 2025 — mai. 2025; ERP end-to-end; TypeScript/JavaScript, APIs REST, SQL Server e Scrum.

**[Proposta]:** adicionar à experiência se for um vínculo que se deseja tornar público. É relevante porque demonstra atuação em ERP e sustenta o título Full Stack antes da WM Saúde.

**[Confirmar]:** tipo de contrato, produto, contribuições, motivo do período curto e resultados publicáveis.

### 7.5 Freelancer

**Conteúdo declarado:** jan. 2024 — presente; projetos web com TypeScript/JavaScript, React e Node.js.

**[Proposta]:** incluir apenas se houver pelo menos dois casos, tipos de cliente ou resultados que tornem a experiência concreta. Caso contrário, pode ficar no LinkedIn/CV e não ocupar um card principal.

### 7.6 Ordem proposta

```text
WM Saúde
↓
BST Networks
↓
Freelancer
```

A ordem profissional prioriza atuação atual, histórico de ERP e trabalho independente. O Observatório aparece separadamente em projetos/pesquisa acadêmica.

---

## 8. Expertise e tecnologias

O portfólio atual chama uma lista plana de “Hierarquia de Tecnologias”, mas mistura ferramenta, área e setor. A nova taxonomia deve ser:

### 8.1 Stack principal

- TypeScript;
- React e Next.js;
- Node.js e AdonisJS;
- SQL e PostgreSQL.

Essas tecnologias são recorrentes na bio, no README e nos projetos públicos recentes.

### 8.2 Entrega e operação

- APIs REST;
- WebSockets/Socket.io;
- Docker;
- Linux;
- Git;
- n8n e integrações.

### 8.3 Domínios de experiência

- saúde pública e gestão hospitalar;
- ERP e gestão empresarial;
- Web GIS e dados geoespaciais;
- plataformas educacionais em tempo real.

### 8.4 Tecnologias complementares

- Java;
- Python;
- PHP/Laravel;
- C#/.NET;
- MongoDB, MySQL e SQL Server.

### 8.5 Segurança

Usar o rótulo:

> **Segurança aplicada e pesquisa técnica**

Associar a:

- demo de detecção de ameaças com IA;
- conteúdo técnico público;
- práticas concretas de autenticação, RBAC, auditoria e integridade presentes em projetos.

Evitar “especialista”, “pentester” ou “pesquisador” como cargo sem formação, vínculo ou produção que sustentem esse nível.

---

## 9. Seleção dos principais projetos para o portfólio

### 9.1 Critérios de seleção

Os projetos foram avaliados por:

1. relevância para o posicionamento Full Stack;
2. contexto real e problema compreensível;
3. profundidade técnica pública;
4. documentação disponível;
5. coerência com experiências e domínios;
6. possibilidade de demonstrar contribuição individual;
7. presença de resultado, estado e limites;
8. originalidade do repositório;
9. potencial de conversa em entrevista.

Stars, volume de código e data de atualização não foram usados como critérios principais.

### 9.2 Ranking recomendado

| Prioridade | Projeto | Papel na narrativa | Decisão |
|---:|---|---|---|
| 1 | QuizLab IF (`quizlab-app` + `quizlab-api`) | Produto full stack em tempo real, educação, Next.js + AdonisJS e histórico público mais consistente | Case principal |
| 2 | Observatório Grilagem de Terras / `geoserver` | Arquitetura full stack, geodados, RBAC, filas, auditoria e domínio complexo | Case principal condicionado à confirmação de autoria/maturidade |
| 3 | Demo de Detecção de Ameaças com IA | Segurança aplicada, Python, IA local e apresentação técnica | Case principal/diferencial |
| 4 | Finhub | Produto full stack, estado de interface e finanças | Projeto secundário |
| 5 | Automações n8n | Automação e integração | Evidência complementar |
| 6 | Portfólio | Design/engenharia web e transparência da evolução | Bastidores/arquivo, não case central |

### 9.3 Case 1 — QuizLab IF

**Por que deve liderar:** demonstra um produto completo com frontend e backend, interação em tempo real, contexto institucional e histórico público mais substancial. Os dois repositórios devem ser uma única unidade editorial.

**Título proposto:**

> **QuizLab IF — Plataforma de quizzes gamificados em tempo real**

**Resumo proposto:**

> Aplicação educacional para professores e alunos da Rede Federal, com criação de quizzes, salas ao vivo, autenticação, pontuação e ranking.

**Tecnologias declaradas:** Next.js, TypeScript, Tailwind, shadcn/ui, AdonisJS 6, PostgreSQL, Lucid ORM, Socket.io, Node.js e PM2/Linux.

**Evidências:** [frontend](https://github.com/invencaosts/quizlab-app) e [API](https://github.com/invencaosts/quizlab-api).

**Falta coletar:** origem institucional, equipe, papel individual, estágio do projeto, usuários/testes, deploy, screenshots e decisões de tempo real.

### 9.4 Case 2 — Observatório Grilagem de Terras

**Por que deve entrar:** é o repositório público mais denso em problema, arquitetura, domínio e decisões. O README descreve mapa, importação de Shapefile/GeoJSON/KML/CSV, validação, auditoria, RBAC, PostGIS, BullMQ, MinIO e relatórios.

**Título proposto:**

> **Plataforma Web GIS para monitoramento de casos de grilagem de terras**

**Resumo proposto:**

> Plataforma colaborativa para importar, visualizar e validar dados geoespaciais, com controle de acesso, auditoria e processamento assíncrono sobre PostgreSQL/PostGIS.

**Tecnologias declaradas:** Next.js 16, React 19, NestJS 11, Prisma, PostgreSQL/PostGIS, BullMQ, Redis, MinIO, MapLibre, Docker e TypeScript.

**Evidência:** [repositório](https://github.com/invencaosts/geoserver), estrutura documentada e backlog explícito.

**Limite obrigatório:** não apresentar como “em produção”. O README consultado informa deploy pendente e testes, 2FA, rate limiting, LGPD e integrações externas no backlog. O histórico público curto e commits com coautoria assistida exigem confirmar autoria, continuidade com o projeto CNPq, uso real e maturidade antes de promovê-lo como case principal definitivo.

**Falta coletar:** relação com a experiência iniciada em 2025, autoria individual, duração, equipe, stakeholders, dataset, screenshots, decisão arquitetural principal, resultado e situação atual.

### 9.5 Case 3 — Demo de Detecção de Ameaças com IA

**Por que deve entrar:** é a melhor evidência pública para a narrativa de segurança. Também demonstra capacidade de criar uma experiência de apresentação com serviços separados.

**Título proposto:**

> **Demonstração de SOC com detecção de ameaças assistida por IA**

**Resumo proposto:**

> Ambiente de demonstração com API, dashboard e painel de controle que simula logs e usa um modelo Qwen local para classificar padrões e acionar alertas.

**Tecnologias observadas:** Python, LM Studio e Qwen; três serviços descritos no README.

**Evidência:** [repositório](https://github.com/invencaosts/demo_palestra_cybersecurity).

**Limite obrigatório:** chamar de demonstração/simulação, não SOC de produção. “Sem regras hardcoded” é uma afirmação do README e deve ser validada tecnicamente antes de virar destaque.

**Falta coletar:** evento/palestra, público, modelo/prompt, ameaças simuladas, critérios de avaliação, vídeo ou screenshots e aprendizados.

### 9.6 Projeto secundário — Finhub

**Papel:** demonstrar aplicação de produto mais convencional e complementar os cases complexos.

**Conteúdo público:** aplicação de finanças; Next.js/Tailwind/Zustand no frontend e AdonisJS/PostgreSQL no backend.

**Conteúdo já documentado:** o README apresenta visão geral, funcionalidades e stack. Ainda faltam testes/evidências, deploy público, imagens, papel individual, resultados e diferencial verificável. Até preencher esses campos, deve ficar no arquivo secundário.

### 9.7 Evidência complementar — codes_n8n

**Papel:** comprovar automação, não liderar a narrativa.

O repositório contém fluxos JSON de n8n, mas um case exige explicar:

- processo original;
- gatilho e integrações;
- tratamento de erro;
- ganho de tempo/confiabilidade;
- remoção de credenciais e dados sensíveis.

### 9.8 Bastidores — portfólio

O próprio portfólio pode aparecer como:

> **Construindo meu sistema de apresentação profissional**

É útil para mostrar Next.js, TypeScript, SEO, integração GitHub, acessibilidade e evolução visual. Entretanto, não deve ocupar uma das três posições principais quando existem projetos de domínio mais forte.

### 9.9 Projetos que ainda não devem ser destaque

| Projeto/grupo | Motivo atual | Condição para promoção |
|---|---|---|
| Sirius (`api`, `web`, `app`) | READMEs insuficientes; parte do conteúdo é boilerplate | Documentar problema, arquitetura, papel e resultado |
| Tô na Vaga (`api`, `web`, extensão) | Metadados insuficientes na análise pública | Unificar como produto e documentar fluxo/impacto |
| Synfonia | Repositórios marcados como fork | Explicar contribuição original e apontar commits/PRs |
| Trancadura | Projeto acadêmico coletivo de hardware + web | Apresentar no MOREA e distinguir a contribuição individual da produção da equipe |
| NASA Wallpaper e Pegasus | Forks; autoria individual pouco clara | Citar contribuição específica ou manter fora |
| Calculadora, CEP, clima e redirect | Projetos didáticos simples | Arquivo de aprendizagem, não projetos principais |
| AcessoJavaPOO | Propósito explicitamente didático | Arquivo de aprendizagem |
| Meu MEI / Controle Pet / Raízes Lagarto | Potencial, mas documentação/estado insuficientes | Atualizar README, demo, stack, decisões e resultados |

### 9.10 Ordem recomendada na Home

```text
01 — QuizLab IF
     produto full stack + tempo real + educação

02 — Observatório Grilagem de Terras
     profundidade arquitetural + contexto institucional
     (condicionado à validação de autoria e maturidade)

03 — Demo de Detecção de Ameaças com IA
     segurança aplicada + comunicação técnica

Ver arquivo completo no GitHub
```

Essa tríade comunica amplitude sem parecer aleatória:

- geodados e arquitetura;
- produto web full stack;
- segurança e IA aplicada.

---

## 10. Modelo editorial dos cards e cases

### Card resumido da Home

```text
Categoria / contexto
Nome do projeto
Resultado ou propósito em uma frase
Minha contribuição em uma frase
3–5 tecnologias essenciais
Status real
[Ver estudo de caso] [Código] [Demo, se existir]
```

### Página ou expansão do case

```text
Resumo executivo
Contexto e problema
Público/usuário
Meu papel e colaboração
Restrições
Decisões e trade-offs
Arquitetura
Implementação
Resultado e evidências
Estado atual e limitações
Aprendizados
Código, demo, documentação e imagens
```

### Regra de autoria

Sempre distinguir:

- “desenvolvi” — contribuição individual comprovada;
- “participei” — trabalho compartilhado;
- “a equipe construiu” — resultado coletivo;
- “o projeto prevê” — funcionalidade planejada;
- “o README declara” — informação ainda não confirmada.

---

## 11. GitHub: melhorias editoriais recomendadas

### 11.1 Perfil

Bio proposta:

> Full Stack Developer · TypeScript, Next.js, Node.js, AdonisJS & PostgreSQL · Health Tech · Web GIS

Ou, mantendo português:

> Desenvolvedor Full Stack · TypeScript, Next.js, Node.js, AdonisJS e PostgreSQL · Saúde e Web GIS

### 11.2 README do perfil

Pontos fortes atuais:

- domínios concretos;
- experiências e sistemas nomeados;
- stack compatível com os repositórios;
- links principais visíveis.

Correções necessárias:

- confirmar “Bacharelado em Tecnologia da Informação (2024–2028)”, pois o nome do curso precisa coincidir com o registro acadêmico e LinkedIn;
- resolver data do CNPq;
- revisar “desenvolvedor principal” em WM/CNPq;
- reduzir catálogo de tecnologias complementares no primeiro parágrafo;
- adicionar projetos fixados coerentes com o ranking;
- trocar frases genéricas por links diretos para cases/repositórios;
- evitar citação motivacional genérica no fechamento se ela não contribuir para a identidade.

### 11.3 READMEs dos projetos

Todo projeto destacado deve ter:

- propósito em até três linhas;
- status honesto;
- screenshot ou GIF;
- arquitetura resumida;
- instruções reproduzíveis;
- variáveis sem segredos;
- testes e limitações;
- papel/autoria;
- roadmap separado do que já existe;
- licença quando apropriado.

---

## 12. LinkedIn: alinhamento recomendado

Como o conteúdo integral não foi acessível, esta seção é um checklist de alinhamento, não uma auditoria completa.

### Cabeçalho

- usar o mesmo título principal do portfólio;
- incluir 3–5 tecnologias centrais;
- incluir dois domínios, não todos;
- manter WM Saúde como contexto atual se desejado;
- usar a URL canônica confirmada.

### Sobre

Estrutura recomendada:

1. função e tipo de problema resolvido;
2. domínios de atuação;
3. stack principal;
4. duas evidências profissionais;
5. eixo complementar de segurança;
6. tipo de oportunidade desejada.

### Experiência

- cargos e datas idênticos ao portfólio/CV;
- progressão WM agrupada pela empresa;
- CNPq descrito pelo vínculo correto;
- BST e freelancer confirmados;
- bullets orientados a contribuição e resultado;
- mídias ou links para cases quando permitido.

### Destaques

Fixar, nesta ordem:

1. portfólio;
2. Observatório/Geoserver;
3. QuizLab;
4. publicação ou demo de segurança;
5. currículo, se público.

### Conteúdo

Continuar a voz observada nos resultados indexados: explicar decisões e implicações técnicas. Conectar posts a artefatos reais do GitHub e evitar transformar opinião em afirmação de especialidade sem evidência.

---

## 13. Matriz de consistência obrigatória

| Informação | LinkedIn | GitHub | Portfólio | Decisão futura |
|---|---|---|---|---|
| Título principal | Full Stack **[confirmado]** | Full Stack | Quatro títulos | Unificar como Desenvolvedor Full Stack |
| Cargo WM | Desenvolvedor de Software Júnior | Conteúdo antigo divergente | Conteúdo antigo divergente | Usar o cargo confirmado desde mar. 2026 |
| CNPq | Bolsa ativa do IFS | Projeto presente | Conteúdo antigo divergente | Pesquisa/projeto acadêmico, nunca emprego |
| BST Networks | Confirmado | Presente no README | Ausente | Adicionar à experiência |
| Freelancer | Confirmado | Presente no README | Ausente | Adicionar de forma compacta |
| Formação | IFS 2024–2028 e técnico SENAI concluído | Bacharelado em TI 2024–2028 | Ausente | Publicar com status correto |
| Segurança | Estudo independente | Demo técnica | Cargo de pesquisador | Apresentar como estudo independente + demo |
| LinkedIn URL | Confirmada | `/in/invencaosts` | Duas URLs | Canonicalizar URL curta |
| Projetos | Três cases confirmados | Repositórios públicos | Lista dinâmica | Curar QuizLab, Observatório e Demo SOC |
| Disponibilidade | Remoto Brasil; híbrido/presencial Aracaju ou Lagarto; CLT/PJ | `hireable` não definido | “Disponível/100% online” | Publicar modalidades confirmadas |

---

## 14. Informações que precisam ser fornecidas ou confirmadas

### Posicionamento já confirmado

- Desenvolvedor Full Stack, buscando vagas Júnior no mercado nacional;
- CLT ou PJ; remoto no Brasil; híbrido/presencial em Aracaju ou Lagarto.

### LinkedIn

- atualizar o cargo da WM para Desenvolvedor de Software Júnior;
- recomendações e destaques relevantes, se existirem futuramente.

### Experiência

- impactos quantitativos publicáveis da BST;
- escopo real na WM Saúde;
- significado de “desenvolvedor principal”;
- casos e resultados do trabalho freelancer;
- tecnologias usadas em cada experiência;
- confidencialidade e autorização de logos/sistemas.

### Formação e pesquisa

- nome oficial do bacharelado/campus e sigla correta de LACI/LACID;
- orientadores, programas e artefatos divulgáveis;
- capítulo de livro: convite, aceite, publicação ou status;
- certificações verificáveis.

### Projetos

- equipe e papel individual;
- estado atual;
- usuários e resultados;
- screenshots/demos;
- decisões e trade-offs;
- autorização para dados institucionais;
- qual projeto representa melhor a vaga desejada.

---

## 15. Plano de aplicação após aprovação

### Etapa 1 — Validar fatos

Usar os fatos já confirmados e manter defaults conservadores para métricas, autorizações e detalhes ainda ausentes.

### Etapa 2 — Fechar posicionamento

Aplicar **Desenvolvedor Full Stack** ao Hero, SEO, JSON-LD e Footer. Dentro da WM Saúde, usar o cargo formal **Desenvolvedor de Software Júnior**.

### Etapa 3 — Curar experiências

Agrupar progressão WM, corrigir CNPq e decidir sobre BST/freelancer. Preencher contexto, contribuição, impacto e stack.

### Etapa 4 — Preparar os três cases

Prioridade:

1. QuizLab;
2. Observatório, após validação;
3. Demo SOC/IA.

Atualizar READMEs, coletar imagens e confirmar limites antes de escrever cards definitivos.

### Etapa 5 — Reorganizar expertise

Substituir lista plana por stack principal, entrega/operação, domínios e tecnologias complementares.

### Etapa 6 — Implementar no portfólio

Somente após nova aprovação:

- estabilizar Hero;
- adicionar CTAs;
- reescrever Sobre;
- reorganizar Experiência;
- criar Projetos selecionados;
- manter GitHub recente como arquivo secundário;
- ajustar SEO/JSON-LD/Footer;
- corrigir links sociais;
- revisar acessibilidade, responsividade e consistência.

### Etapa 7 — Sincronizar perfis

Atualizar LinkedIn, GitHub e CV a partir da versão aprovada, evitando divergência futura.

---

## 16. Critérios de aprovação editorial

O alinhamento estará pronto para implementação quando:

- houver exatamente um título profissional principal;
- o cargo formal da experiência não for confundido com o posicionamento geral;
- arquitetura e segurança forem sustentadas por cases concretos;
- LinkedIn, GitHub, CV e portfólio tiverem datas compatíveis;
- a URL do LinkedIn for única;
- formação e vínculo CNPq estiverem confirmados;
- os três projetos principais tiverem papel, estado, resultado e links;
- o Observatório não for descrito como produção se o deploy continuar pendente;
- a demo de segurança for descrita como demonstração;
- forks não forem apresentados como autoria integral;
- tecnologias forem agrupadas por função e vinculadas a evidências;
- números sem fonte tiverem sido removidos ou documentados;
- nenhuma informação confidencial de saúde, cliente ou infraestrutura for exposta.

---

## 17. Decisões recomendadas em resumo

| Tema | Decisão recomendada | Confiança |
|---|---|---|
| Título | Desenvolvedor Full Stack | Confirmado |
| Subtítulo | Sistemas para saúde, gestão e geodados | Alta |
| Cargo WM | Desenvolvedor de Software Júnior, dentro da experiência | Confirmado |
| Arquitetura | Competência demonstrada, não cargo principal | Alta |
| Cibersegurança | Estudos independentes e demo técnica como diferencial | Confirmado |
| Projeto #1 | QuizLab IF como produto único | Alta |
| Projeto #2 | Observatório / geoserver, condicionado à validação | Média |
| Projeto #3 | Demo de SOC/IA, claramente rotulada como demo | Alta |
| GitHub dinâmico | Arquivo secundário | Alta |
| Finhub | Projeto secundário | Média |
| n8n | Evidência complementar de automação | Média |
| Sirius/Tô na Vaga | Aguardar documentação | Alta |
| Formação | Publicar IFS em andamento e técnico SENAI concluído | Confirmado; detalhar nome do curso |
| LinkedIn curto | `https://linkedin.com/in/invencaosts/` | Confirmado |

---

## Fontes

### Fontes públicas

1. GitHub. “[Perfil de Guilherme da Invenção Santos — @invencaosts](https://github.com/invencaosts).” Acesso em 9 set. 2026.
2. Guilherme da Invenção Santos. “[README do perfil](https://github.com/invencaosts/invencaosts).” Acesso em 9 set. 2026.
3. Guilherme da Invenção Santos. “[Observatório Grilagem de Terras](https://github.com/invencaosts/geoserver).” Acesso em 9 set. 2026.
4. Guilherme da Invenção Santos. “[QuizLab IF — Frontend](https://github.com/invencaosts/quizlab-app).” Acesso em 9 set. 2026.
5. Guilherme da Invenção Santos. “[QuizLab IF — API](https://github.com/invencaosts/quizlab-api).” Acesso em 9 set. 2026.
6. Guilherme da Invenção Santos. “[Demo de Detecção de Ameaças com IA](https://github.com/invencaosts/demo_palestra_cybersecurity).” Acesso em 9 set. 2026.
7. Guilherme da Invenção Santos. “[Finhub](https://github.com/invencaosts/finhub).” Acesso em 9 set. 2026.
8. Guilherme da Invenção Santos. “[Automações n8n](https://github.com/invencaosts/codes_n8n).” Acesso em 9 set. 2026.
9. Guilherme da Invenção Santos. “[Portfólio](https://github.com/invencaosts/portifolio).” Acesso em 9 set. 2026.
10. LinkedIn. “[Perfil indexado — URL longa](https://br.linkedin.com/in/guilherme-da-invencao-santos-556497282).” Resultado público consultado em 9 set. 2026; conteúdo integral indisponível por bloqueio automatizado.
11. LinkedIn. “[Perfil público — URL curta proposta](https://www.linkedin.com/in/invencaosts).” Acesso automatizado bloqueado em 9 set. 2026.

### Código local

12. `invencaodev/src/componentsV4/Hero.tsx:21-40` — títulos rotativos.
13. `invencaodev/src/componentsV4/AboutBento.tsx:7-15, 33-42, 96-120` — stack, métricas, resumo e LinkedIn curto.
14. `invencaodev/src/componentsV4/Experience.tsx:15-48` — experiências e datas atuais.
15. `invencaodev/src/componentsV4/ProjectCarousel.tsx:11-57` — apresentação dos projetos.
16. `invencaodev/src/lib/github.ts:15-89` — seleção dinâmica, fallback e métricas.
17. `invencaodev/src/componentsV4/Contact.tsx`, `Footer.tsx` — canais e LinkedIn longo.
18. `invencaodev/src/app/layout.tsx:23-138` — título, descrição, keywords e JSON-LD.
