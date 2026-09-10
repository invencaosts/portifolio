# Análise do Portfólio de Referência

> Referência analisada: [jovinull.com.br](https://www.jovinull.com.br/)  
> Projeto comparado: portfólio local `invencaodev`  
> Data da análise: 9 de setembro de 2026

## 0. Método, escopo e legenda de evidência

Esta análise cobre as páginas públicas Home, Sobre, Experiência, Projetos, Pesquisa, Formação, Contato e a página temática AccessSim. A arquitetura publicada foi confrontada com o sitemap do site. O portfólio local foi examinado por sua composição ativa no App Router, componentes V4, conteúdo, integração com GitHub e metadados.

As afirmações de carreira, métricas, prêmios, vínculos e registros encontradas no site de referência são tratadas como **conteúdo publicado pelo autor**, não como validação independente. Quando há link para DOI, repositório ou credencial, o documento registra que existe uma evidência externa; não presume a autenticidade de tudo que não foi auditado em fonte terceira.

Legenda usada ao longo do documento:

- **[Fato observado]**: informação diretamente visível no site de referência ou no código ativo do portfólio local.
- **[Interpretação]**: leitura sobre a intenção provável, o efeito narrativo ou a experiência de recrutamento.
- **[Recomendação]**: decisão proposta para o portfólio local, sujeita à confirmação dos dados pessoais/profissionais.
- **[Não verificado]**: afirmação publicada cuja comprovação independente ficou fora do escopo.

Limitação visual: a análise de hierarquia combina conteúdo renderizado, estrutura semântica, classes de apresentação e presença de imagens, cards, badges e CTAs. Avaliações como “primeiro elemento percebido” são interpretações fundamentadas nessa composição, não dados de eye-tracking.

### Atualização factual fornecida pelo proprietário

Esta atualização prevalece sobre descrições históricas do portfólio local registradas adiante:

- cargo atual na WM Saúde: **Desenvolvedor de Software Júnior**;
- Observatório: produto **Observatório Grilagem de Terras Ariovaldo Umbelino de Oliveira**, em projeto acadêmico ativo do IFS com bolsa CNPq; não é emprego pelo CNPq;
- MOREA: participação desde maio de 2025;
- Trancadura: projeto coletivo que reúne hardware e plataforma web, sem autoria individual integral;
- LACI/LACID: estudo independente em cibersegurança desde janeiro de 2026; a grafia da sigla ainda precisa ser confirmada.

---

## 1. Resumo Executivo

O portfólio de referência funciona principalmente porque separa **triagem** de **aprofundamento**. A Home não tenta ser um currículo completo: apresenta promessa profissional, sinais rápidos de credibilidade, experiência recente, especialidades, um diferencial empreendedor, projetos selecionados, lastro acadêmico e contato. Páginas próprias permitem que recrutadores, líderes técnicos e gestores aprofundem apenas o eixo relevante.[^R1]

A sequência central é:

```text
Promessa profissional
↓
Sinais rápidos de validação
↓
Experiência atual e liderança
↓
Especialidades traduzidas
↓
Diferencial empreendedor
↓
Prova técnica por projetos
↓
Diferencial científico
↓
Contato
```

Essa ordem constrói uma cadeia de confiança: “quem é” → “por que prestar atenção” → “onde atuou” → “o que sabe resolver” → “qual é seu diferencial” → “como executa” → “qual é seu lastro acadêmico” → “como falar com ele”.

O portfólio local atual tem uma identidade visual forte e coerente, boa presença inicial, timeline profissional legível, contato completo, SEO e dados estruturados. Seu problema principal não é estético. É de **arquitetura da evidência**: projetos não são curados, experiência enfatiza tarefas em vez de impacto, pesquisa e formação não têm seções próprias, e o Hero não oferece rotas explícitas para projetos ou currículo.

A recomendação é preservar a identidade “terminal brutalista”, fotografia, tema claro/escuro, linguagem de sistema, timeline e contato, reorganizando o conteúdo em uma Home de decisão rápida e páginas ou blocos profundos de Projetos, Experiência e Pesquisa/Formação. Antes de implementar, é necessário confirmar quais evidências acadêmicas realmente existem, selecionar três a cinco projetos e obter resultados verificáveis de cada experiência.

### Resposta direta à pergunta central

**Qual informação colocar?** Posicionamento focado, experiências com contribuição e impacto, projetos curados como casos, pesquisa/formação verificáveis, stack conectada a evidências e contatos/CV.

**Em qual lugar?** Promessa e CTAs no Hero; experiência logo depois; projetos principais na primeira metade; pesquisa/formação depois das provas profissionais; contato no fechamento; detalhes extensos em páginas próprias ou camadas expansíveis.

**Por quê?** Porque essa ordem atende primeiro à triagem, depois à validação técnica e, por último, à diferenciação e conversão, sem obrigar cada visitante a ler tudo.

---

## 2. Arquitetura Geral

### 2.1 Árvore real do portfólio de referência

```text
PORTFÓLIO FELIPE JOVINO — site multipágina
│
├── Navegação global fixa
│   ├── Home
│   ├── Sobre
│   ├── Experiência
│   ├── Projetos
│   ├── Pesquisa
│   ├── Formação
│   └── Contato
│
├── Home (/)
│   ├── Hero / proposta profissional
│   │   ├── disponibilidade
│   │   ├── três papéis profissionais
│   │   ├── síntese de atuação
│   │   ├── Ver projetos
│   │   ├── Falar comigo
│   │   ├── Baixar CV
│   │   ├── foto
│   │   └── tecnologias-chave
│   ├── Métricas rápidas
│   ├── Prévia de experiência
│   ├── Especialidades
│   ├── Case/destaque AccessSim
│   ├── Projetos em destaque
│   ├── Prévia de pesquisa e academia
│   └── CTA final
│
├── Sobre (/sobre)
│   ├── Manifesto e trajetória
│   ├── Métricas de impacto
│   ├── Capítulo 1 — origem e hardware
│   ├── Capítulo 2 — IFS/LABIC
│   ├── Capítulo 3 — WM Saúde/AccessSim
│   ├── Arsenal tecnológico
│   ├── Atividade open source
│   ├── Certificações em destaque
│   ├── Easter egg cultural
│   ├── Galeria de bastidores/premiações
│   └── Próximo passo — mestrado
│
├── Experiência (/experiencia)
│   ├── Hero/resumo e quatro métricas
│   ├── WM Saúde
│   ├── AccessSim
│   ├── WF3 Solutions
│   ├── Canal Masters Tech
│   └── IFS/LABIC
│
├── Projetos (/projetos)
│   ├── Hero de engenharia
│   ├── Filtros e contagens por categoria
│   └── 26 cards de projeto
│       ├── categoria/status
│       ├── título técnico
│       ├── nome
│       ├── descrição
│       ├── tecnologias/padrões
│       ├── imagem
│       └── link quando disponível
│
├── Pesquisa (/pesquisa)
│   ├── Hero de pesquisa e inovação
│   ├── Mestrado UFS/PROCC
│   ├── Métricas de produção científica
│   ├── Seis publicações
│   └── Quatro registros de software no INPI
│
├── Formação (/formacao)
│   ├── Métricas de educação continuada
│   ├── Sete credenciais em destaque
│   ├── Trajetória acadêmica formal
│   ├── Ensino e mentoria
│   ├── Catálogo de cursos
│   ├── Eventos/congressos
│   └── Outras plataformas
│
├── Contato (/contato)
│   ├── disponibilidade/proposta de conversa
│   ├── e-mail e WhatsApp
│   ├── LinkedIn, GitHub e YouTube
│   ├── expectativa de resposta
│   └── formulário
│
├── Página temática (/accesssim)
│   └── aprofundamento do case AccessSim
│
└── Rodapé global
    ├── síntese de posicionamento
    ├── navegação repetida
    └── conexões profissionais
```

**[Fato observado]** A página AccessSim é acessível por links internos, mas não integra a navegação principal. A rota Formação aparece no menu, embora não tenha aparecido no sitemap consultado; AccessSim também ficou fora dele. Além disso, o sitemap servido por `jovinull.com.br` publica os destinos no host `felipejovino.dev`, criando uma inconsistência de domínio.[^R8] Na inspeção do HTML de Projetos, canonical/alternate/Open Graph também apontavam para a raiz desse outro host, e não para a rota específica. Isso pode prejudicar descoberta, consolidação de sinais e compartilhamento correto.

**[Interpretação]** A arquitetura é de “hub e aprofundamento”: a Home distribui atenção e as páginas internas resolvem intenções específicas. Isso é mais importante que o visual usado para representá-la.

### 2.2 Densidade por página

| Página | Densidade aproximada | Papel na decisão |
|---|---:|---|
| Home | Média/alta; 8 grandes blocos | Triagem, narrativa e roteamento |
| Sobre | Muito alta; 11 blocos narrativos/probatórios | Contexto biográfico e progressão |
| Experiência | Média; 5 experiências detalhadas | Validar atuação institucional/profissional |
| Projetos | Muito alta; 26 cards | Validar amplitude e complexidade técnica |
| Pesquisa | Alta; mestrado, 6 trabalhos e 4 registros | Comprovar diferenciação científica |
| Formação | Muito alta; 100+ itens declarados e destaques | Arquivo de credenciais e ensino |
| Contato | Baixa/média | Conversão sem distração |

### 2.3 Dissecação página por página e seção por seção

As matrizes seguintes condensam, para cada seção real, posição/adjacência, informação/volume, destaque, finalidade/sinal e relação narrativa. “Destaque” é uma interpretação da composição visual; “volume” é uma estimativa editorial, não contagem de palavras.

#### Home

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal ao recrutador e razão da posição |
|---|---|---|---|---|
| Hero | 1ª; cabeçalho → métricas | Status, três papéis, síntese, foto, stack e 3 CTAs; curto | Primário | Identificar e rotear. Abre porque fornece a chave de leitura do restante.[^R1] |
| Métricas | 2ª; Hero → Experiência | 4+ “patentes”, 10+ anos em código, 1º no mestrado e soluções em produção; quatro itens | Secundário/alto | Criar confiança rápida. Antecipa provas desenvolvidas nas páginas internas. “Patentes” é terminologia imprecisa para registros de programa de computador. |
| Experiência | 3ª; métricas → Especialidades | Quatro prévias com organização, cargo, resumo e tags; médio | Alto | Validar atuação atual cedo e encaminhar à trajetória completa. |
| Especialidades | 4ª; Experiência → AccessSim | Seis capacidades com descrição; médio | Secundário | Traduzir histórico amplo em problemas reconhecíveis antes do case âncora. |
| AccessSim | 5ª; Especialidades → Projetos | Narrativa, fomento/equipe, quatro indicadores e 2 links; alto/longo | Primário | Eleger diferencial empreendedor e conectar liderança, produto e pesquisa. |
| Projetos destacados | 6ª; AccessSim → Pesquisa | Nove cards, embora a introdução diga “três”; alto | Primário | Demonstrar execução e amplitude antes da credencial acadêmica. |
| Pesquisa & Academia | 7ª; Projetos → CTA | Mestrado, publicações, registros e link; curto/médio | Secundário/alto | Dar lastro científico à prática sem liderar a narrativa. |
| CTA final | 8ª; Pesquisa → rodapé | Convite, conversa e LinkedIn; curto | Alto | Converter depois de acumular evidência. |

#### Sobre

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Manifesto | 1ª; cabeçalho → métricas | Tese “aprender não é linear”, identidade e síntese; curto | Primário | Dar significado à trajetória antes dos fatos.[^R2] |
| Métricas de impacto | 2ª; manifesto → capítulos | Anos, registros INPI, mestrado e promoção; quatro cards | Alto | Condensar marcos que os capítulos explicam. |
| Origem | 3ª; métricas → IFS | Hardware autodidata, resiliência e Lagarto; médio + imagem | Médio | Mostrar ponto de partida e mentalidade builder. |
| IFS/LABIC | 4ª; Origem → WM/AccessSim | Graduação, laboratório, pesquisa, monitoria e prêmios; médio + imagem | Alto | Conectar curiosidade a formação e ciência aplicada. |
| WM/AccessSim | 5ª; IFS → arsenal | Progressão, coordenação, CTO, equipe e fomento; longo + imagem | Primário | Entregar o ápice atual da narrativa cronológica. |
| Arsenal tecnológico | 6ª; capítulos → GitHub | Linguagens, frontend, backend e infra/hardware; lista extensa | Secundário | Traduzir os capítulos em ferramentas utilizáveis. |
| Open source | 7ª; arsenal → credenciais | Atividade/contribuições do GitHub; visual de dados | Médio | Sinalizar constância, embora volume não prove qualidade. |
| Credenciais | 8ª; GitHub → easter egg | Oracle e HackerRank; dois destaques | Médio | Acrescentar verificação formal seletiva. |
| Cultura/easter egg | 9ª; credenciais → galeria | XGH e comentário cultural; curto | Complementar | Humanizar; relação fraca com decisão de contratação. |
| Bastidores | 10ª; easter egg → mestrado | Nove fotos/marcos de laboratório, eventos e premiações | Alto visual, complementar informativo | Dar prova social/contexto; chega tarde porque é evidência auxiliar. |
| Mestrado/próximo nível | 11ª; galeria → rodapé | UFS/PROCC 2026–2028; curto | Alto | Fechar a história apontando continuidade futura. |

#### Experiência

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Hero/métricas | 1ª; cabeçalho → cards | Síntese + 5 empresas, 3 atuações, 5+ anos e 10+ stacks | Primário | Enquadrar progressão antes dos registros.[^R3] |
| WM Saúde | 2ª; resumo → AccessSim | Dois cargos, datas, escopo, impacto, stack e logo; médio | Primário | Liderar com papel profissional atual e promoção. |
| AccessSim | 3ª; WM → WF3 | CTO, startup, programas, equipe, impacto, stack e CTA; longo | Primário | Sustentar o segundo papel do Hero e aprofundar o case âncora. |
| WF3 | 4ª; AccessSim → Masters Tech | Fundação, discovery/operação, governança e stack; curto/médio | Secundário | Reforçar ownership de produto. |
| Masters Tech | 5ª; WF3 → IFS | Conteúdo, ensino, produção e link; curto | Complementar | Evidenciar comunicação/mentoria. |
| IFS/LABIC | 6ª; Masters Tech → rodapé | Três papéis, pesquisa aplicada, impacto e stack; médio | Secundário | Fechar na origem cronológica/técnica da trajetória. |

#### Projetos

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Hero | 1ª; cabeçalho → filtros | Tese sobre sistemas e stacks; curto | Primário | Definir amplitude e critério técnico.[^R4] |
| Filtros | 2ª; Hero → catálogo | Todos + oito categorias e contagens | Alto funcional | Reduzir carga e permitir leitura por especialidade. |
| Catálogo | 3ª; filtros → rodapé | 26 cards com cover, resumo e tags; muito alto | Primário | Demonstrar amplitude; perde profundidade individual pelo volume. |

#### Pesquisa

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Hero | 1ª; cabeçalho → mestrado | Mestrado, seis artigos, dois prêmios e quatro registros; curto | Primário | Sintetizar credenciais antes dos detalhes.[^R5] |
| Mestrado | 2ª; Hero → métricas científicas | Linha, colocação, instituição, período e modalidade | Alto | Ancorar institucionalmente a identidade de pesquisador. |
| Produção científica | 3ª; mestrado → publicações | Quatro métricas | Secundário/alto | Antecipar volume, reconhecimento e autoria. |
| Publicações | 4ª; métricas → INPI | Seis cards longos com autoria, veículo, resumo, método/resultado e links variáveis | Primário | Transformar alegação em produção examinável. |
| Registros INPI | 5ª; artigos → rodapé | Quatro softwares, números, datas, titularidade, stack e certificados | Primário | Fazer ponte entre pesquisa e produto; “registro” não equivale a patente. |

#### Formação

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Hero/métricas | 1ª; cabeçalho → credenciais | 100+, 13 instituições, 500h+ e 2020–2026 | Primário | Enquadrar aprendizado contínuo.[^R6] |
| Credenciais em destaque | 2ª; métricas → trajetória formal | Sete credenciais com emissor, descrição e prova variável | Primário | Priorizar selos reconhecíveis antes do catálogo. |
| Formação formal | 3ª; credenciais → ensino | Graduação, POSCOMP e mestrado | Alto | Confirmar base acadêmica e progressão. |
| Ensino/mentoria | 4ª; formação → catálogo | Seis atividades, horas/períodos e descrições | Alto | Demonstrar domínio pela capacidade de ensinar. |
| Catálogo por instituição | 5ª; ensino → eventos | Cursos agrupados; muito longo | Complementar | Arquivar amplitude; posição tardia evita competir com formação formal. |
| Eventos/congressos | 6ª; catálogo → outras plataformas | Sete participações | Complementar | Sinalizar comunidade e exposição acadêmica. |
| Outras plataformas | 7ª; eventos → rodapé | Quatro cursos variados | Baixo | Completar inventário, com baixo valor marginal. |

#### Contato e elementos globais

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Navegação | Antes de toda página | Sete rotas + tema | Alto funcional | Dar acesso por intenção e manter orientação. |
| Convite de contato | 1ª em Contato; cabeçalho → canais | Disponibilidade e temas de conversa; curto | Primário | Definir por que entrar em contato.[^R7] |
| Canais/redes | 2ª; convite → prazo/formulário | E-mail, WhatsApp, LinkedIn, GitHub e YouTube | Alto | Oferecer caminhos com baixo atrito. |
| Prazo de resposta | Junto aos canais; antes do formulário | Menos de 24h em dias úteis | Secundário | Reduzir incerteza de retorno. |
| Formulário | Último bloco; canais → rodapé | Nome, e-mail, assunto e mensagem | Primário | Capturar contexto sem exigir outro aplicativo. |
| Rodapé | Final de todas as páginas | Posicionamento, navegação e conexões | Secundário funcional | Evitar beco sem saída e repetir próximos passos. |

#### AccessSim

| Seção | Posição, antes e depois | Informação e volume | Destaque percebido | Objetivo, sinal e relação |
|---|---|---|---|---|
| Hero/proposta | 1ª; cabeçalho → números | IA/acessibilidade e NBR 9050; alto | Primário | Tratar a iniciativa como produto/case, não só emprego.[^R9] |
| Fomento e evolução empresarial | 2ª; Hero → programas/equipe | Captação declarada, transição societária e marcos; longo | Primário | Produzir validação de negócio/inovação. |
| Centelha e Catalisa | Intermediária; evolução → liderança | Programas, colocações e recursos declarados | Alto | Apoiar credibilidade externa; permanece autopublicado até validação independente. |
| Equipe/liderança/Cepedi | Depois dos programas → galeria/cliente | Composição de equipe, mentoria e total declarado de 11 pessoas | Alto | Evidenciar liderança e alcance coletivo. |
| Galeria/primeiro cliente | Próxima ao final → CTA | Bastidores e validação de mercado publicada | Alto visual | Converter abstração em sinais concretos. |
| CTA | Final → rodapé | Link para Experiência/continuidade | Alto | Reconectar o case à trajetória profissional. |

**Crítica específica:** AccessSim aparece em Home, Experiência, Projetos, Sobre e página própria. O aprofundamento é justificável, mas cada ocorrência precisa cumprir função distinta para não parecer repetição promocional.

---

## 3. Fluxo de Navegação

### 3.1 Navegação global

**[Fato observado]** O cabeçalho fixo oferece Home, Sobre, Experiência, Projetos, Pesquisa, Formação e Contato. O rodapé repete os destinos e adiciona GitHub, LinkedIn, YouTube e e-mail. Em telas menores, a navegação é colapsada.[^R1]

**[Interpretação]** Isso suporta dois comportamentos:

1. leitura linear da Home por quem está conhecendo o candidato;
2. salto direto para a prova procurada por quem já tem uma pergunta (“tem experiência?”, “publicou?”, “qual é o GitHub?”).

### 3.2 Transições da Home e raciocínio provável

| Transição | Observação factual | Raciocínio provável |
|---|---|---|
| Hero → métricas | O título e a descrição são seguidos por quatro indicadores | Converter promessa em sinais rápidos de validação antes de exigir leitura longa |
| Métricas → experiência | O primeiro grande bloco de prova é atuação atual | Experiência profissional é a evidência mais forte para o posicionamento de liderança |
| Experiência → especialidades | Depois de mostrar onde atuou, o site organiza o que constrói | Traduzir histórico amplo em categorias que uma vaga consegue reconhecer |
| Especialidades → AccessSim | Uma especialidade abstrata dá lugar a um case empreendedor concreto | Elevar o maior diferencial estratégico, com equipe, captação e produto |
| AccessSim → projetos | O case de negócio é seguido por amplitude de execução técnica | Mostrar que liderança e narrativa são sustentadas por artefatos construídos |
| Projetos → pesquisa | A prova de engenharia antecede a prova científica | Posicionar academia como amplificador da prática, não substituto dela |
| Pesquisa → contato | Depois das provas, surge o convite para conversa | Converter interesse quando a confiança já foi formada |

### 3.3 CTAs

O Hero oferece três ações com intenções diferentes:

- **Ver projetos**: para quem quer validar execução;
- **Falar comigo**: para quem já decidiu iniciar contato;
- **Baixar CV**: para triagem/processo formal.

Há CTAs contextuais para trajetória, projetos, AccessSim, pesquisa, canais externos e um CTA final. **[Interpretação]** A repetição é funcional porque acontece em momentos distintos de intenção, não como repetição decorativa.

---

## 4. Hero / Apresentação

### 4.1 Referência

| Aspecto | Análise |
|---|---|
| Posição | Primeiro bloco da Home, sob a navegação global |
| Antes | Apenas cabeçalho |
| Depois | Tecnologias/métricas rápidas |
| Conteúdo | Disponibilidade, “Coordenador de TI. CTO & Pesquisador AI.”, descrição, três CTAs, foto e chips técnicos |
| Destaque | Primário: H1 e foto; secundário: descrição e CTAs; complementar: status e chips |
| Quantidade | Uma viewport ou mais; texto curto, alta densidade de sinais |
| Objetivo | Responder identidade, nível, áreas de atuação e próxima ação |
| Sinal ao recrutador | Perfil de liderança técnica, deeptech, IA e software, disponível para conversa |
| Motivo da posição | Sem posicionamento inicial, as provas posteriores seriam difíceis de interpretar |
| Relação | Define os três eixos que experiência, projetos e pesquisa tentam comprovar |

**Ordem perceptiva provável:** (1) título profissional; (2) foto e CTAs; (3) descrição, status e tecnologias.

### 4.2 Crítica

O título triplo funciona porque há páginas que sustentam os três papéis. Ainda assim, combina muitos focos e pode diluir a adequação a uma vaga específica. A linguagem também usa superlativos e abrangência elevada; estrutura e clareza são reutilizáveis, mas a redação deve permanecer precisa e proporcional às evidências.

### 4.3 Comparação com o Hero local

**[Fato observado]** O Hero local exibe nome, títulos rotativos, foto, disponibilidade, localização e fuso. Seu nome é o elemento mais forte, seguido da foto e dos títulos. Não há CTA interno para projetos/experiência, download de CV ou link social no Hero. O posicionamento alterna entre Arquiteto de Sistemas, Engenheiro de Software, Full Stack e Pesquisador de Cibersegurança.[^L2]

**[Recomendação]** Preservar o visual e a fotografia, mas fazer o Hero responder em uma frase: função principal + contexto em que atua + diferencial comprovável. Adicionar “Ver projetos”, “Ver experiência” e “Baixar CV” ou “Entrar em contato”. Reduzir a rotação a no máximo duas formulações coerentes ou substituí-la por um título estável, para evitar que a identidade profissional pareça mudar durante a leitura.

---

## 5. Experiência Profissional

### 5.1 Estrutura real da referência

```text
Resumo da trajetória
↓
Métricas agregadas
↓
Empresa / contexto
↓
Período e badge de status
↓
Cargo(s)
↓
Responsabilidades e escopo
↓
Impacto (quando destacado)
↓
Tecnologias / práticas
↓
CTA contextual (quando existe)
```

Essa é uma estrutura **empresa/contexto → papel → responsabilidade → impacto → stack**, e não um case completo “problema → decisão → resultado”.

### 5.2 Experiências apresentadas

| Ordem | Organização / papel | Conteúdo principal | Destaque | Leitura provável |
|---:|---|---|---|---|
| 1 | WM Saúde — Coordenador de TI; antes Desenvolvedor Júnior | Squads, roadmaps, modernização, GitFlow, CI/CD, arquitetura, segurança e stakeholders; impacto qualitativo | Muito alto, primeiro card e logo | Evidência principal de liderança profissional atual |
| 2 | AccessSim — CTO & Co-Founder | Startup, fomento declarado, IA, NBR 9050, equipe, app e backend; CTA próprio | Muito alto e mais extenso | Diferencial empreendedor/deeptech |
| 3 | WF3 Solutions — Co-Founder | Produtos em saúde/governo/educação; discovery à operação, RBAC, auditoria, LGPD | Alto | Amplitude de produto e governança |
| 4 | Masters Tech — Youtuber Educacional | Ensino, roteiro e produção de conteúdo; link do canal | Médio | Comunicação e formação de pessoas |
| 5 | IFS/LABIC — pesquisador/bolsista/instrutor | IA, eletrônica, embarcados, backend/mobile e pesquisa aplicada | Médio | Origem técnica e científica da trajetória |

**[Fato observado]** A ordem privilegia relevância atual e coerência com o Hero, não apenas cronologia. As experiências têm logos, datas, cargos, descrição e tags; as três primeiras usam explicitamente “Impacto”.[^R3]

### 5.3 Eficiência e limitações

Pontos eficientes:

- empresa e cargo são localizados rapidamente;
- evolução dentro da mesma empresa é visível;
- “Impacto” cria separação semântica entre fazer e gerar resultado;
- tags conectam atuação a tecnologia e práticas;
- maior profundidade é reservada às experiências mais estratégicas.

Limitações:

- impactos são majoritariamente qualitativos;
- há pouca escala operacional: volume, usuários, latência, disponibilidade, frequência de entrega ou redução percentual;
- em alguns cards, a contribuição individual e o trabalho da equipe podem se misturar;
- existe sobreposição entre experiência, Sobre e o case AccessSim.

### 5.4 Portfólio local

**[Fato observado]** A timeline local apresenta período → empresa → cargo → três responsabilidades → logo. Há três entradas: WM Saúde como Engenheiro de Software, estágio anterior na mesma empresa e CNPq. Não aparecem tecnologias por experiência, resultados, links, tamanho da equipe, escopo ou distinção explicada entre emprego e pesquisa.[^L4]

**[Recomendação]** Unificar progressão na WM Saúde em um único card de empresa com subcargos, como faz a referência. Reestruturar cada entrada para:

```text
Organização + contexto
Cargo + período + tipo de vínculo
Problema/escopo
2–4 contribuições específicas
Impacto verificável ou evidência qualitativa precisa
Tecnologias/práticas realmente usadas
Link público, quando permitido
```

Se a atuação CNPq for pesquisa aplicada, sinalizar isso no badge e criar ligação com a seção de Pesquisa. A sobreposição temporal deve ser explicada como vínculos simultâneos, bolsa, contrato parcial ou outra situação verdadeira; não deve ficar para o recrutador inferir.

---

## 6. Projetos

### 6.1 Catálogo real

A página declara 26 itens e filtros cuja soma também é 26: Backend/API (3), Games (2), Gráficos & Sistemas (2), Full Stack (5), IA & Dados (4), IoT & Embarcados (2), Educação (1) e Open Source (7).[^R4]

| # | Categoria | Projeto |
|---:|---|---|
| 1 | Full Stack | Saberly |
| 2 | Gráficos & Sistemas | StinkOS |
| 3 | IA & Dados | EigenHand |
| 4 | IoT & Embarcados | Bixim |
| 5 | Full Stack | StormCore & NimbusHub |
| 6 | Backend/API | CerneBR · Gateway Nacional |
| 7 | Games | Iron March |
| 8 | Games | Idle Mine: Redux |
| 9 | Backend/API | StoreStash |
| 10 | Gráficos & Sistemas | StdoutSpace |
| 11 | Full Stack | Gestão em Saúde (WM) |
| 12 | IA & Dados | CaptionEase |
| 13 | Educação | MastersTech — Educação Tech |
| 14 | Full Stack | WF3 Solutions |
| 15 | IA & Dados | AccessSim |
| 16 | Full Stack | Glicemy |
| 17 | Backend/API | Governança, CI/CD & RBAC (WM) |
| 18 | IoT & Embarcados | Pesquisa Aplicada (LABIC/IFS) |
| 19 | IA & Dados | TalkSmith |
| 20 | Open Source | Omaloon |
| 21 | Open Source | Mindustry Anti-Grief Client |
| 22 | Open Source | New Horizon Mod |
| 23 | Open Source | Mindustry |
| 24 | Open Source | Rinha de Backend 2026 |
| 25 | Open Source | Aquarion |
| 26 | Open Source | CLA Candidate API |

### 6.2 Estrutura real dos cards

```text
Imagem / cover com categoria
↓
Status opcional (“Ativo”)
↓
Título técnico / problema resumido
↓
Nome do projeto
↓
Descrição curta
↓
Chips de tecnologias, bibliotecas ou padrões
↓
Link externo, quando existe
```

**[Interpretação]** Em termos perceptivos, a imagem e o nome tendem a formar o primeiro nível; categoria/título técnico e descrição, o segundo; tags e link, o terceiro. Alguns cards elevam a complexidade por termos concretos: StinkOS cita bootloader, kernel, TCP/IP e scheduler; CerneBR cita hedged execution, cache e circuit breaker; StoreStash cita testes, análise estática e CI.[^R4]

### 6.3 Leitura individual dos 26 projetos

Todos seguem a ordem visual/DOM acima. A coluna “ausências” registra campos não observados no card, não necessariamente inexistentes no repositório.

| # | Projeto | O que o card comunica, após a cover/categoria | Stack/links observados | Ausências relevantes no card |
|---:|---|---|---|---|
| 1 | Saberly | LMS estilo Udemy; carrinho, wishlist, Stripe, blog e chat | Laravel, PHP, Tailwind, Vite, AJAX, Stripe; GitHub | Papel, resultado, período, demo |
| 2 | StinkOS | SO x86 do zero; bootloader, kernel, TCP/IP, scheduler e Doom | C, Assembly x86, Multiboot; GitHub | Papel, benchmark, período |
| 3 | EigenHand | Landmarks de mão em NumPy puro; projeto de mestrado | Python, NumPy, álgebra linear, ML/CV; GitHub | Resultado quantitativo e papel |
| 4 | Bixim | Engine de pet virtual para ESP32 e PC com HAL | C++, ESP32, PlatformIO, SSD1306; GitHub | Resultado, demo e período |
| 5 | StormCore & NimbusHub | Estação meteorológica + dashboard em tempo real via MQTT | ESP32, C++, MQTT, Next.js, TypeScript, React; link de hardware | Papel, escala e resultado |
| 6 | CerneBR | Gateway contra instabilidade de APIs públicas; status Ativo | Java 25, Spring Boot 4, Virtual Threads, Redis, Docker, Resilience4j; site | Métricas, papel e código visível no card |
| 7 | Iron March | Roguelike C++20/ECS com procedural, IA, save e áudio | C++20, CMake, EnTT, cereal, miniaudio | Link externo, resultado, papel |
| 8 | Idle Mine: Redux | Modernização Vue tipada com números infinitos e save compatível | Vue 3, TypeScript, Pinia, Vite, break_infinity | Link externo, resultado, papel |
| 9 | StoreStash | Estoque Laravel com transações, API, testes, análise estática e CI | Laravel 13, PHP 8.3, PHPUnit, Larastan; Codeberg | Métricas, papel, demo |
| 10 | StdoutSpace | Renderização espacial em terminal, lente gravitacional e buffer aditivo | C++17, CMake, POSIX, ANSI; Codeberg | Benchmark, papel e demo |
| 11 | Gestão em Saúde (WM) | Produtos críticos de saúde, governança e segurança | AdonisJS, Next.js, PostgreSQL, TypeScript, Tailwind | Link, papel individual, resultado, imagens de produto |
| 12 | CaptionEase | Automação de legendas/acessibilidade; registro no INPI | Python, ML, FastAPI, React | Link no card, contribuição e métricas |
| 13 | MastersTech | Canal/plataforma educacional; status Ativo | Ensino, edição, conteúdo e web | Métricas de audiência, papel detalhado, link no card observado |
| 14 | WF3 Solutions | Portais e integrações com RBAC, auditoria e LGPD | TypeScript, Next.js, Node.js, PostgreSQL, Docker | Resultados, papel específico, link |
| 15 | AccessSim | App mobile + IA para conformidade de acessibilidade | Python, FastAPI, React Native, ML, visão | Métricas técnicas, papel no card e link contextual |
| 16 | Glicemy | Monitoramento de saúde com registro de software | Next.js, Node.js, PostgreSQL, Saúde Digital | Link, papel, resultado clínico verificável |
| 17 | Governança, CI/CD & RBAC (WM) | Pipelines, padrões, GitFlow e validação de acesso | GitHub Actions, CI/CD, AdonisJS Bouncer, VineJS | Métricas, link, escopo individual |
| 18 | Pesquisa Aplicada (LABIC/IFS) | Agregado de ML + embarcados para coleta/inferência | Python, scikit-learn, ESP32, C++, MQTT, IoT | Projetos individuais, método, resultados e links |
| 19 | TalkSmith | Chatbot PT-BR local com TF-IDF/BM25 | Python, NLP, spaCy, NLTK, Tkinter | Métricas de qualidade, link e papel |
| 20 | Omaloon | Refatoração de pressão, gráficos e dependências em mod | Java, Mindustry API, refactoring; repositório externo | PRs/links individuais, impacto mensurado |
| 21 | Mindustry Anti-Grief Client | Localização completa para pt-BR | Java, i18n, properties; repositório externo | Escopo quantitativo/PR e resultado |
| 22 | New Horizon Mod | Correções de framebuffer/pixelate e compatibilidade | Java, gráficos, framebuffer; repositório externo | PRs específicos e impacto |
| 23 | Mindustry | PRs incorporados à engine oficial | Java, LibGDX, Arc Engine; repositório oficial | Lista de PRs, contribuição/resultado por PR |
| 24 | Rinha de Backend 2026 | Submissão de alta performance em Zig | Zig, Docker, PostgreSQL, tuning; repositório da competição | Benchmark/colocação e decisões |
| 25 | Aquarion | Refatorações em geração procedural planetária | Java, procedural generation, clean code; repositório externo | PRs específicos e efeito |
| 26 | CLA Candidate API | Autenticação/registro para comunidade | TypeScript, full stack, auth; repositório externo | PRs específicos, testes e resultado |

**Síntese individual:** os dez primeiros projetos comunicam profundidade técnica com maior concretude; os projetos 11–18 conectam trabalho, produto e pesquisa, mas expõem menos prova externa; os itens 20–26 sinalizam participação open source, porém o card deveria apontar diretamente para PRs/commits para evidenciar a contribuição individual.

### 6.4 O que a apresentação prioriza

| Critério | Prioridade observada | Comentário |
|---|---|---|
| Complexidade técnica | Alta | Componentes e padrões são nomeados com especificidade |
| Tecnologia | Alta | Chips aparecem em todos os cards |
| Contexto/problema | Média | Há um resumo, geralmente de uma a três frases |
| Screenshots/covers | Alta visualmente | Cada item possui imagem própria ou Open Graph |
| Código/demo | Média | Há links em parte do catálogo, não em todos |
| Resultado/impacto | Baixa/média | Poucos resultados de usuário ou negócio |
| Responsabilidade individual | Baixa | Raramente separa “eu” de “nós” |
| Storytelling/processo | Baixa | Não existem cases internos individuais sistemáticos |
| Trade-offs | Baixa | Decisões são sugeridas pela stack, pouco explicadas |

### 6.5 Eficiência por público

- **Recrutador:** filtros e imagens ajudam; 26 itens ainda geram carga cognitiva e faltam resultados compreensíveis.
- **Tech Lead:** o vocabulário concreto e os links de código produzem bons sinais de profundidade.
- **Engineering Manager:** projetos de produto ajudam, mas impacto, responsabilidade e colaboração deveriam ser mais explícitos.

### 6.6 Crítica editorial

Na Home, o texto introdutório fala em “Três projetos”, mas nove cards são exibidos. Essa incongruência reduz a sensação de revisão editorial. O catálogo também mistura projeto pessoal, projeto profissional, iniciativa empresarial, agregado de pesquisa e contribuição open source no mesmo nível, ainda que use categorias.

### 6.7 Projetos no portfólio local

**[Fato observado]** Os projetos são os 20 repositórios públicos não-fork mais recentemente atualizados, carregados via GitHub. Cada card mostra índice, nome, descrição de até duas linhas e link. Sem `GITHUB_TOKEN`, a lista fica vazia e o componente inteiro desaparece. Não há curadoria, tecnologias, imagem, demo, problema, contribuição, impacto, data ou papel.[^L3][^L5]

**[Recomendação]** Separar:

1. **Projetos selecionados (3–5)**, com conteúdo manual e ordem estratégica;
2. **Arquivo GitHub**, dinâmico e secundário, para amplitude/atividade.

Estrutura recomendada para cada case principal:

```text
Nome + frase de resultado
Contexto / problema
Papel e contribuição individual
Decisão técnica principal + trade-off
Arquitetura/stack essencial
Resultado ou evidência verificável
Screenshot/diagrama pequeno
Demo + código + documentação
Status, período e colaboração
```

Se não houver métrica, usar resultado qualitativo preciso (“automatizou a etapa X”, “reduziu consulta de A para B”, “implantado para equipe Y”) e não inventar percentuais.

---

## 7. Projetos de Pesquisa

### 7.1 Como a referência diferencia pesquisa de projetos comuns

Pesquisa possui rota, linguagem e unidade de evidência próprias. Um projeto comum é um artefato técnico; uma pesquisa é apresentada por instituição, autoria, veículo, data, método, resultado e identificador externo. Essa separação evita tratar artigo como “mais um repositório”.[^R5]

### 7.2 Ordem real

```text
Hero: Pesquisa & Inovação
↓
Mestrado e linha de Computação Inteligente
↓
Indicadores de produção científica
↓
Seis publicações
↓
Quatro registros de software no INPI
```

### 7.3 Informações apresentadas

**Mestrado:** instituição UFS/PROCC, linha, período, modalidade stricto sensu e colocação publicada no edital.

**Publicações:** tipo, título, veículo/evento, volume/páginas/data quando pertinente, autoria, número de autores, resumo, método ou achados em alguns casos, tags e DOI/link nos dois primeiros trabalhos.

**Produção listada:** estudo sobre acesso à formação em IA; reconhecimento de sinais em Libras; metodologia de pensamento computacional; simulador de robôs em Unity; ensaio sobre ética da IA; ensaio sobre YouTube e educação aberta.

**Registros de software:** Glicemy, Glicemy API, CaptionEase e SignForest, com número, data, escopo, titular, quantidade de autores, tecnologias e imagem de certificado. A interface usa “Ver certificado oficial”, porém não foi observado link direto ao INPI em todos os cards.

### 7.4 Por que funciona na narrativa

**[Interpretação]** A Home apresenta primeiro trabalho e engenharia, depois usa pesquisa como lastro. Na página própria, a densidade é justificada porque o visitante já escolheu aprofundar. DOI, autoria, método e resultado transformam “pesquisador” de rótulo em evidência examinável. O registro de software cria uma ponte entre academia e produto.

### 7.5 Aplicação ao portfólio local

**[Fato observado]** O portfólio local usa “Pesquisador de Cibersegurança” no Hero e menciona pesquisa no resumo, mas não apresenta tema, instituição, orientador, período, método, publicação, repositório, resultado ou vínculo. A experiência CNPq pode ser evidência de pesquisa aplicada, mas isso não está explicitamente arquitetado.[^L2][^L4]

**[Recomendação condicionada]** Só criar uma seção “Pesquisa” se houver material factual suficiente. Para cada item, coletar:

- título e pergunta/problema;
- instituição/programa e tipo de vínculo;
- período e status;
- orientador/equipe, se público e relevante;
- sua contribuição;
- método, ferramentas e conjunto de dados, quando aplicável;
- resultado, publicação, apresentação ou artefato;
- link para artigo, DOI, relatório, repositório ou certificado.

Se ainda não houver publicação, chamar de **Pesquisa aplicada em andamento** ou **Iniciação/projeto de pesquisa**, não de “publicações”.

---

## 8. Educação

### 8.1 Posição e destaque na referência

A Formação aparece depois de Pesquisa no menu e quase no final da jornada conceitual. Recebe uma página extensa, mas pouco protagonismo na Home. Isso é coerente com um perfil que já dispõe de experiência, projetos e produção científica: educação funciona como validação e arquivo, não como argumento inicial.[^R6]

### 8.2 Ordem e conteúdo

1. métricas declaradas: 100+ certificados, 13 instituições, 500+ horas e continuidade entre 2020–2026;
2. sete credenciais em destaque, incluindo Oracle, Huawei, HackerRank, Microsoft Azure, Sebrae e microeletrônica;
3. trajetória formal: Sistemas de Informação, POSCOMP e mestrado;
4. ensino e mentoria;
5. catálogo por instituição/plataforma;
6. eventos e congressos;
7. outras formações.

### 8.3 Hierarquia

- **Primária:** credenciais selecionadas e formação formal;
- **Secundária:** ensino/mentoria, porque comprova domínio e comunicação;
- **Complementar:** catálogo longo de cursos e eventos.

### 8.4 Crítica

O catálogo integral sinaliza aprendizagem contínua, mas tem baixo valor marginal na triagem e aumenta muito a página. A escolha adequada para outro perfil é exibir apenas credenciais relevantes e manter o restante recolhível, filtrável ou no CV/LinkedIn.

### 8.5 Portfólio local

Não há Educação, certificações ou formação na composição ativa. **[Recomendação]** Adicionar um bloco compacto depois de Pesquisa — ou combinar “Pesquisa & Formação” se houver poucos itens — contendo curso, instituição, período/status e 1–3 destaques relevantes. Certificações só devem entrar se forem recentes e alinhadas ao posicionamento.

---

## 9. Outras Seções Encontradas

### 9.1 Sobre / trajetória

A página Sobre conta progressão em três capítulos: origem autodidata/hardware; IFS/LABIC; liderança profissional/deeptech. Métricas, imagens, arsenal técnico, GitHub, credenciais, galeria e mestrado complementam a história.[^R2]

**Função:** explicar continuidade entre áreas que poderiam parecer dispersas. **Limitação:** sobrepõe conteúdo de Experiência, Pesquisa e Formação e pode cansar leitores rápidos.

### 9.2 Especialidades

Na Home, seis especialidades traduzem stacks em tipos de problema: web, embarcados/IoT, IA aplicada, full stack, mentoria/educação e pesquisa. Isso orienta o visitante antes do catálogo técnico.

### 9.3 AccessSim como case temático

AccessSim recebe um callout grande na Home, presença em Experiência/Projetos e página própria. **[Interpretação]** É o “projeto âncora”: reúne liderança, pesquisa, captação, acessibilidade, produto e equipe. A técnica é reutilizável — eleger um case âncora —, mas o conteúdo e a repetição são específicos.

### 9.4 Galeria e cultura

A página Sobre inclui fotos de laboratório, premiações, eventos e um “certificado XGH” humorístico. São sinais humanos e de comunidade, mas não essenciais à avaliação. Devem existir apenas se forem autênticos e não deslocarem evidência mais importante.

### 9.5 Contato

A página apresenta e-mail, WhatsApp, redes, prazo de resposta e formulário com nome, e-mail, assunto e mensagem.[^R7] O rodapé mantém os canais acessíveis em todas as rotas.

---

## 10. Hierarquia das Informações

### 10.1 Hierarquia global da referência

| Nível | Informações | Recursos usados | Efeito provável |
|---|---|---|---|
| Primário | Cargo/proposta, experiência atual, case AccessSim, projetos destacados, títulos de páginas | H1/H2 grandes, blocos largos, foto, covers, logos | Define identidade e provas principais |
| Secundário | Métricas, especialidades, impacto, descrições de projeto, produção científica | Cards, badges, subtítulos, grids | Permite scan e comparação |
| Complementar | Datas, stacks, autores, DOIs, links, catálogo de cursos, redes | Chips, texto menor, ícones, links | Dá verificabilidade e profundidade |

### 10.2 Ordem perceptiva por área

- **Hero:** título → foto/CTAs → descrição/chips.
- **Experiência:** logo/nome da empresa → cargo/período → impacto → tags.
- **Projetos:** cover/nome → frase técnica/descrição → stack/link.
- **Pesquisa:** título/selo do trabalho → veículo e resumo → autoria/método/DOI.
- **Formação:** credencial/instituição → curso → período/ID/detalhes.
- **Contato:** convite → canais → formulário/prazo de resposta.

### 10.3 Hierarquia local atual

No projeto local, estética e identidade recebem mais peso que evidência. O nome e a fotografia dominam o Hero; métricas grandes dominam o AboutBento; os projetos aparecem dentro de um carrossel subordinado ao Sobre; experiência só vem depois. **[Interpretação]** Um recrutador pode recordar o estilo e o posicionamento antes de encontrar prova concreta.

---

## 11. Estratégia de Apresentação dos Projetos

A referência usa duas camadas:

1. seleção visual na Home para provocar aprofundamento;
2. catálogo filtrável para demonstrar amplitude.

Ela é forte em escopo técnico e fraca em estudo de caso. A principal lição não é usar cards ou screenshots, e sim **curar a primeira impressão e permitir expansão**.

### Modelo ideal adaptado

Para os três projetos principais do portfólio local, a sequência deve responder:

1. **O que é e qual resultado entrega?**
2. **Qual problema/contexto motivou?**
3. **Qual foi sua responsabilidade?**
4. **Qual decisão técnica foi importante e por quê?**
5. **Qual evidência prova que funciona?**
6. **Onde examinar demo, código ou documentação?**

Tecnologias entram depois de contexto/contribuição, como evidência de decisão, não como lista solta. Screenshot deve explicar produto; diagrama deve explicar arquitetura; nenhum deles deve existir apenas para preencher card.

---

## 12. Análise sob a Perspectiva de Recrutamento

As observações abaixo distinguem conteúdo visível de efeitos inferidos. Os tempos são cenários heurísticos, não medições de usuários.

### 12.1 Recrutador de tecnologia

**Em 5 segundos — observado:** título multifunção, disponibilidade, foto, CTAs e tecnologias.  
**Efeito provável:** entende que é um perfil de liderança/IA/software e que há currículo/contato acessíveis.

**Em 15 segundos — observado:** métricas, empresas atuais e início das especialidades.  
**Efeito provável:** decide se a senioridade e o domínio combinam com a vaga.

**Motivos para continuar:** empresas reconhecíveis, progressão, projetos destacados, CV e evidências acadêmicas.  
**Risco:** amplitude excessiva e números autopublicados podem exigir validação posterior.

### 12.2 Tech Lead

**Em 5 segundos — observado:** amplitude entre web, IA, Rust e embarcados.  
**Efeito provável:** curiosidade técnica, junto de dúvida sobre profundidade em cada eixo.

**Em 15 segundos — observado:** stacks, projetos e termos de arquitetura/CI/CD/RBAC.  
**Efeito provável:** busca rapidamente código e projetos como StinkOS, CerneBR, StoreStash e EigenHand.

**Evidências fortes:** repositórios externos, componentes técnicos específicos, testes/CI, publicações com método e resultados.  
**Lacunas:** trade-offs, qualidade do código não auditada, contribuição individual e métricas de produção.

### 12.3 Engineering Manager

**Em 5 segundos — observado:** Coordenador/CTO, disponibilidade e proposta de produto.  
**Efeito provável:** avalia potencial de liderança e adequação de escopo.

**Em 15 segundos — observado:** WM Saúde, AccessSim, WF3, captação declarada, squads e mentoria.  
**Efeito provável:** procura sinais de ownership, comunicação, governança e resultados.

**Evidências fortes:** progressão, contexto regulado, equipe, stakeholders, programas de fomento e ensino.  
**Lacunas:** tamanho/estrutura das equipes, indicadores antes/depois, decisões difíceis, falhas/aprendizados e clareza do que foi individual/coletivo.

### 12.4 Onde cada evidência é encontrada

| Pergunta | Resposta no site |
|---|---|
| Experiência real | Prévia da Home e página Experiência |
| Capacidade técnica | Projetos, links de código, stacks por experiência e pesquisa |
| Diferencial acadêmico | Pesquisa e Formação |
| Liderança | WM Saúde, AccessSim, WF3 e narrativa Sobre |
| Comunicação/mentoria | Masters Tech, ensino e publicações |
| Confiança | Datas, instituições, logos, links, DOI, autoria, CV e contato direto |

---

## 13. Pontos Fortes

1. **Home orientada à decisão:** não despeja todo o currículo, mas oferece caminhos.
2. **Boa ordem de prova:** experiência vem antes do catálogo e academia complementa prática.
3. **Progressive disclosure:** prévias na Home e páginas profundas.
4. **Posicionamento sustentado:** os papéis do Hero reaparecem como evidência.
5. **Experiência legível:** empresa, progressão, impacto e stack são separáveis no scan.
6. **Pesquisa verificável:** autoria, veículo, método, resultado e DOI superam títulos soltos.
7. **Taxonomia de projetos:** filtros reduzem parte da carga de um catálogo grande.
8. **Especificidade técnica:** nomes de padrões e componentes ajudam avaliação técnica.
9. **CTAs para intenções distintas:** projetos, contato, currículo e páginas de detalhe.
10. **Navegação redundante útil:** cabeçalho e rodapé evitam becos sem saída.
11. **Logos e imagens como orientação:** elementos visuais ajudam reconhecimento e memória.
12. **Case âncora:** AccessSim conecta liderança, negócio, ciência e execução.

---

## 14. Pontos Fracos ou Limitações

1. **Catálogo excessivo:** 26 projetos têm valor de arquivo, mas pouca curadoria inicial.
2. **Poucos cases profundos:** quase nenhum projeto explica papel, trade-off e resultado em conjunto.
3. **Impactos profissionais qualitativos:** faltam medidas antes/depois e escala operacional.
4. **Sobreposição:** Sobre, Experiência, Pesquisa, Formação e AccessSim repetem evidências.
5. **Amplitude de posicionamento:** muitos papéis/stacks podem diluir foco.
6. **Superlativos:** expressões promocionais podem reduzir precisão percebida.
7. **Inconsistência editorial:** “três projetos” versus nove cards na Home.
8. **Inconsistência de descoberta/canonicalização:** Formação e AccessSim ausentes do sitemap observado; o arquivo troca `jovinull.com.br` por `felipejovino.dev`, e metadados de páginas internas apontam para a raiz do outro host.
9. **Links desiguais:** nem todo projeto/registro oferece prova externa direta.
10. **Catálogo de cursos muito longo:** baixo valor marginal para triagem.
11. **Métricas autopublicadas:** números de anos, soluções e impacto precisam de contexto.
12. **Mistura de tipos de projeto:** profissional, pessoal, pesquisa e open source dividem o mesmo nível visual.

---

## 15. Padrões que Podemos Reutilizar

### 15.1 Deve ser reaproveitado

- Home como resumo decisório, não currículo integral.
- Hero com função, diferencial, disponibilidade e CTAs distintos.
- Experiência cedo quando há atuação profissional relevante.
- Prévia + aprofundamento para experiência, projetos e pesquisa.
- Experiência separando responsabilidade de impacto.
- Três a cinco projetos selecionados antes do arquivo completo.
- Pesquisa diferenciada de projeto comum por método, instituição e publicação.
- Stack vinculada a projetos/experiências.
- Navegação direta e rodapé com conexões.
- Métricas somente quando claras, verdadeiras e contextualizadas.

### 15.2 Deve ser adaptado

- Case âncora: escolher o projeto local com maior interseção entre impacto e profundidade.
- Arquitetura multipágina: pode começar como seções/rotas simples conforme volume de conteúdo.
- Filtros: só justificáveis se houver mais de 8–10 projetos úteis.
- Página Sobre: reduzir narrativa se experiência e pesquisa já explicarem progressão.
- Certificações: selecionar por aderência, não por quantidade.
- Logos e screenshots: usar quando autorizados e informativos.
- Título profissional: calibrar ao alvo real de vaga.

### 15.3 Não precisa ser copiado

- Paleta, grid, gradientes, tipografia ou cards da referência.
- Frases, superlativos, metáforas e identidade verbal.
- Estrutura visual de cada card.
- Quantidade de projetos/certificados.
- Easter egg XGH e galeria pessoal.
- Triplo título Coordenador/CTO/Pesquisador.
- AccessSim, registros de programa de computador, programas e métricas específicos do autor.

---

## 16. Comparação com Meu Portfólio Atual

### 16.1 Arquitetura ativa local

```text
PORTFÓLIO INVENCAODEV — single-page
│
├── Navbar fixa
│   ├── Início
│   ├── Sobre
│   ├── Experiência
│   └── Contato
├── Hero
├── LogStrip
├── AboutBento
│   ├── resumo operacional
│   ├── métricas
│   ├── identidade / GitHub / LinkedIn
│   ├── stack
│   └── carrossel dinâmico do GitHub
├── Experience
├── Contact
└── Footer
```

Essa ordem está definida na página ativa.[^L1]

### 16.2 Comparação direta

| Dimensão | Referência | Portfólio local | Diagnóstico |
|---|---|---|---|
| Arquitetura | Multipágina com Home-resumo | Single-page | Local é simples, mas não comporta profundidade futura |
| Hero | Proposta + descrição + 3 CTAs + chips | Nome + títulos + status + foto | Visual forte; ação e prova insuficientes |
| Experiência | Cedo, prévia + página | Depois de Sobre/projetos | Deve subir e ganhar impacto/stack |
| Projetos | Curados na Home + catálogo filtrável | Repositórios recentes automáticos | Falta estratégia e contexto |
| Pesquisa | Página própria, evidência acadêmica | Apenas alegação textual | Maior lacuna de confiança |
| Formação | Página própria e destaques | Ausente | Lacuna factual |
| Tecnologias | Agrupadas e ligadas a evidências | Badges gerais | Boa visibilidade, pouca comprovação contextual |
| Métricas | Sinais de carreira/produto | GitHub + valores fixos/estimados | Mistura dados reais e estimativas de baixo valor |
| Contato | Hero, página e rodapé | Navbar, seção e rodapé | Local é forte; falta CTA no Hero |
| Identidade | Produto tech contemporâneo | Terminal brutalista consistente | Preservar a identidade local |

### 16.3 Elementos bons a preservar

- marca `<invencaodev />`;
- visual terminal brutalista e cor primária;
- tipografia e linguagem de sistema;
- foto e status de disponibilidade;
- responsividade, menu mobile e tema claro/escuro;
- timeline como componente-base;
- formulário e múltiplos canais;
- SEO e JSON-LD;
- componentes separados por responsabilidade;
- integração GitHub como arquivo secundário.

### 16.4 Problemas específicos a corrigir futuramente

- não há link de Projetos na Navbar ativa;
- não há CV no fluxo V4;
- o LinkedIn do AboutBento difere do contato/metadados;
- projetos desaparecem sem token;
- ordem por atualização do GitHub não equivale a relevância;
- a métrica de linhas é estimada a partir de tamanho em disco e tem unidade incoerente: o código divide por 1.000.000 e acrescenta `k`, fazendo 1.500.000 virar `1.5k`; `8.7k` horas de uptime também não tem sistema, janela ou fonte visível;
- experiência lista tarefas e repete linguagem genérica;
- períodos sobrepostos não são contextualizados;
- pesquisa/formação são afirmadas, mas não demonstradas.

---

## 17. Arquitetura Recomendada para Meu Portfólio

### 17.1 Visão proposta

```text
MEU PORTFÓLIO
│
├── Navegação global
│   ├── Início
│   ├── Experiência
│   ├── Projetos
│   ├── Pesquisa & Formação
│   └── Contato
│
├── 01 — Hero
│   ├── nome
│   ├── função principal
│   ├── proposta de valor comprovável
│   ├── disponibilidade/localização
│   ├── Ver projetos
│   ├── Ver experiência
│   └── Baixar CV / Contato
│
├── 02 — Evidências rápidas
│   ├── anos de experiência, se confirmado
│   ├── contextos profissionais
│   ├── projetos selecionados/produção
│   └── pesquisa/formação verificável
│
├── 03 — Experiência profissional
│   ├── WM Saúde
│   │   ├── progressão de cargos
│   │   ├── escopo
│   │   ├── contribuição
│   │   ├── impacto
│   │   └── stack
│   ├── BST Networks
│   └── Freelancer
│
├── 04 — Projetos selecionados
│   ├── Case 1 — principal
│   ├── Case 2 — complementar
│   └── Case 3 — profundidade/diferencial
│
├── 05 — Competências comprovadas
│   ├── arquitetura/backend
│   ├── dados/infra
│   ├── segurança
│   └── frontend/produto
│
├── 06 — Pesquisa & Formação
│   ├── Observatório Ariovaldo Umbelino de Oliveira · IFS + bolsa CNPq
│   ├── MOREA · desde mai. 2025
│   │   └── Trancadura · hardware + web · autoria coletiva
│   ├── estudos independentes em cibersegurança · desde jan. 2026
│   ├── formação acadêmica
│   ├── publicações/apresentações, se existirem
│   └── certificações selecionadas
│
├── 07 — Arquivo técnico / GitHub
│   └── repositórios dinâmicos recentes
│
├── 08 — Sobre, em versão curta
│   ├── trajetória
│   ├── modo de trabalhar
│   └── objetivos profissionais
│
├── 09 — Contato
│   ├── convite
│   ├── formulário
│   ├── e-mail / LinkedIn / GitHub / WhatsApp
│   └── expectativa de resposta
│
└── Rodapé
```

### 17.2 Especificação por seção

| Seção | O que colocar | Onde e relação | Por que | Prioridade | Origem |
|---|---|---|---|---|---|
| Hero | Função principal, contexto, diferencial, foto, status e 3 CTAs | Topo; aponta a Experiência/Projetos/CV | Orienta leitura e reduz ambiguidade | Alta | Adaptação da referência |
| Evidências rápidas | 3–4 fatos verificáveis e compreensíveis | Imediatamente após Hero | Sustentar promessa antes de texto longo | Alta | Direta, com adaptação crítica |
| Experiência | Empresa, progressão, vínculo, escopo, contribuição, impacto e stack | Antes de projetos | É a evidência profissional mais forte disponível | Alta | Direta |
| Projetos selecionados | 3 cases manuais com contexto, decisão e resultado | Após experiência | Validar execução técnica detalhada | Alta | Direta + recomendação adicional |
| Competências comprovadas | Capacidades agrupadas, cada uma ligada a uma prova | Depois dos cases | Evitar “skill wall” sem evidência | Média | Adaptação |
| Pesquisa & Formação | Dados acadêmicos e pesquisa com links | Depois da prova profissional/técnica | Diferenciar sem deslocar experiência | Alta se houver dados; média caso contrário | Direta/adaptada |
| Arquivo GitHub | Repositórios dinâmicos e link do perfil | Depois dos cases/pesquisa | Mostrar amplitude sem controlar a narrativa | Baixa | Recomendação adicional |
| Sobre curto | 1–3 parágrafos sobre trajetória e forma de trabalhar | Perto do final ou rota própria | Humanizar sem repetir currículo | Média | Adaptação crítica |
| Contato | Convite, canais, formulário e resposta esperada | Fechamento; CTA também no Hero | Converter interesse em conversa | Alta | Direta |

### 17.3 Single-page ou multipágina?

**Recomendação inicial:** manter a Home como single-page enxuta, mas criar estrutura pronta para rotas de detalhe. Projetos e Pesquisa/Formação só precisam virar páginas próprias quando o conteúdo justificar. Isso preserva simplicidade e evita copiar mecanicamente a referência.

Fase inicial possível:

- `/` — todas as prévias e contato;
- `/projetos/[slug]` — somente 3–5 cases;
- `/curriculo.pdf` — CV.

Fase posterior, se houver material:

- `/experiencia`;
- `/pesquisa`;
- `/formacao`.

Gates sugeridos para evitar páginas vazias:

- criar `/projetos` quando houver pelo menos seis itens documentados;
- criar `/projetos/[slug]` quando dois ou mais projetos sustentarem um case completo;
- criar `/pesquisa` quando houver pelo menos dois artefatos substanciais;
- criar `/formacao` quando houver mais de cinco credenciais relevantes;
- criar `/experiencia` quando houver quatro ou mais organizações ou quando o conteúdo completo exceder confortavelmente a Home;
- não criar `/sobre` extensa enquanto Hero, Experiência e Contato já cobrirem posicionamento, trajetória e informações pessoais úteis.

---

## 18. Informações que Estão Faltando no Meu Portfólio

### 18.1 Dados já confirmados após a análise inicial

- posicionamento como Desenvolvedor Full Stack e busca por vagas Júnior no mercado nacional;
- modalidades remota, híbrida ou presencial, CLT/PJ, com presença em Aracaju ou Lagarto;
- currículo público e LinkedIn canônico;
- WM Saúde como experiência e CNPq como bolsa acadêmica ativa do IFS;
- seleção de QuizLab IF, Observatório e Demo SOC com IA como os três cases principais;
- MOREA/Trancadura e estudos independentes em cibersegurança.

### 18.2 Necessárias para aprofundar o conteúdo

1. nome oficial do bacharelado e do campus;
2. para cada projeto: resultados verificáveis, composição da equipe, decisões e mídias autorizadas;
3. para cada experiência: impactos ou resultados divulgáveis;
4. tecnologias realmente usadas em cada experiência;
5. autorização para citar nomes, logos, sistemas, screenshots e métricas;
6. sigla e denominação corretas de LACI/LACID.

### 18.3 Desejáveis

- tamanho e composição das equipes;
- métricas antes/depois;
- volume de dados/usuários/requisições quando divulgável;
- disponibilidade, desempenho ou tempo economizado;
- decisões de arquitetura e trade-offs;
- depoimento ou recomendação autorizada;
- imagens de produto sem informação confidencial;
- links para demo/documentação;
- idiomas, disponibilidade geográfica e modelo de trabalho.

### 18.3 O que remover ou reformular se não houver comprovação

- “Pesquisador de Cibersegurança” sem seção/evidência;
- números estimados apresentados ao lado de números reais;
- “linhas de código” como métrica de valor;
- uptime genérico sem sistema, janela e fonte;
- anos de experiência sem critério claro;
- títulos de senioridade/arquitetura que não se conectem a escopo demonstrável.

---

## 19. Plano de Reorganização

Este plano é especificação; não autoriza implementação.

### Fase 1 — Inventário e verdade factual

- confirmar posicionamento e vaga alvo;
- reunir CV, formação, pesquisa, datas e vínculos;
- corrigir URL de LinkedIn;
- classificar cada afirmação como pública, confidencial ou não publicável;
- substituir métricas estimadas por evidências úteis.

**Saída:** matriz de conteúdo validada.

### Fase 2 — Curadoria de evidências

- escolher três projetos principais por relevância, profundidade e diversidade;
- documentar problema, papel, decisão, impacto e links;
- agrupar progressão na WM Saúde;
- definir a natureza do vínculo CNPq;
- selecionar no máximo três credenciais acadêmicas/certificações para a Home.

**Saída:** briefs de experiência, projeto e pesquisa.

### Fase 3 — Arquitetura e redação

- estabilizar o título do Hero;
- escrever proposta de valor curta;
- definir ordem final das seções;
- escrever microcopy de CTAs;
- criar resumos de Home e versões profundas sem duplicação;
- marcar claramente o que é impacto, responsabilidade e tecnologia.

**Saída:** wireframe de conteúdo independente de estética.

### Fase 4 — Design de informação

- mapear a nova arquitetura para o sistema visual V4;
- reaproveitar bordas, tipografia, grid, cor, foto e estados;
- converter LogStrip em navegação/sinais factuais ou reduzir seu peso;
- adaptar timeline para progressão por empresa;
- desenhar cards de case e blocos de pesquisa;
- assegurar hierarquia mobile e acessibilidade.

**Saída:** especificação visual sem código ou protótipo aprovado.

### Fase 5 — Implementação futura, somente após aprovação

- ajustar navegação e Hero;
- criar conteúdo curado independente da API do GitHub;
- implementar cases e pesquisa/formação;
- manter GitHub como camada secundária resiliente;
- revisar SEO/JSON-LD;
- testar responsividade, acessibilidade, links, formulário e ausência de token;
- revisar fatos e consistência editorial antes da publicação.

---

## 20. Conclusão

O valor estratégico do portfólio de referência está menos nos cards, cores ou animações e mais em uma disciplina de comunicação: apresentar uma promessa clara, provar primeiro com experiência, aprofundar com projetos, diferenciar com pesquisa/formação e oferecer ação em cada ponto relevante.

O portfólio local já possui o que seria mais caro reconstruir: identidade própria, consistência visual, uma presença inicial memorável, componentes organizados e bom fechamento de contato. O trabalho recomendado é tornar a evidência tão forte quanto a estética.

A reorganização ideal deve fazer cada seção responder a uma pergunta:

- **Hero:** quem sou e por que sou relevante?
- **Evidências:** por que acreditar rapidamente?
- **Experiência:** onde assumi responsabilidade real e qual foi o impacto?
- **Projetos:** como penso, decido e executo tecnicamente?
- **Pesquisa/Formação:** qual é meu lastro e meu diferencial?
- **Contato:** qual é o próximo passo?

Assim, a resposta final para “qual informação colocar, em qual lugar e por quê?” deixa de depender de copiar outro portfólio: torna-se uma arquitetura própria, guiada por evidência, prioridade e intenção do visitante.

---

## 21. Matriz final de decisão de conteúdo

| Informação | Local principal | Forma recomendada | Razão |
|---|---|---|---|
| Nome e função | Hero | H1 estável | Identificação imediata |
| Proposta de valor | Hero | Uma frase | Interpretar todas as provas seguintes |
| Disponibilidade/localização | Hero | Badge/metadado | Reduzir incerteza logística |
| CV | Hero + Navbar/Footer | CTA/download | Atender fluxo formal de recrutamento |
| Empresa/cargo atual | Experiência + resumo curto | Card/timeline | Prova profissional prioritária |
| Progressão | Mesmo card da empresa | Subcargos e datas | Mostrar evolução sem duplicar organização |
| Impacto | Cada experiência/projeto | Bloco rotulado | Separar atividade de resultado |
| Stack | Dentro da evidência | Tags contextuais | Demonstrar uso, não alegação |
| Projetos principais | Após experiência | 3–5 cases | Profundidade e curadoria |
| GitHub completo | Camada secundária | Arquivo/carrossel | Amplitude sem dominar narrativa |
| Pesquisa | Depois de projetos | Cards com método/resultado/link | Diferencial verificável |
| Formação | Junto/depois da pesquisa | Timeline compacta | Validar requisito acadêmico |
| Certificações | Formação | Apenas as relevantes | Evitar ruído quantitativo |
| Sobre pessoal | Próximo ao final/rota própria | Texto curto e factual | Humanizar sem atrasar provas |
| Contato | Hero e encerramento | CTA + canais + formulário | Converter em qualquer nível de intenção |

---

## 22. Critérios de aprovação antes da implementação

O conteúdo e a arquitetura estarão prontos para virar código quando:

- nome, cargo principal, diferencial e um CTA forem identificáveis na primeira tela;
- empresa/função atual, evidência profissional e acesso a projetos/CV puderem ser localizados em leitura rápida;
- datas, cargos e vínculos forem consistentes entre site, CV e LinkedIn;
- cada experiência tiver contexto, contribuição, impacto e stack;
- cada projeto principal tiver problema, papel, decisão, resultado e evidência;
- nenhum conteúdo essencial depender de token, carrossel, animação ou hover;
- “Pesquisador de Cibersegurança” estiver comprovado ou tiver sido reformulado;
- formação formal estiver documentada;
- toda métrica tiver definição, fonte e utilidade;
- as seções de Experiência, Projetos e Pesquisa cumprirem papéis diferentes sem duplicar texto;
- a identidade terminal brutalista permanecer reconhecível sem prejudicar contraste, leitura, teclado e redução de movimento;
- um recrutador conseguir responder “quem é, onde atuou e que prova devo abrir?”;
- um Tech Lead conseguir responder “o que decidiu, construiu e quais trade-offs enfrentou?”;
- um Engineering Manager conseguir responder “qual responsabilidade assumiu e qual impacto produziu?”.

---

## Fontes

### Portfólio de referência

[^R1]: Felipe Jovino, “[Home — Coordenador de TI, CTO & Pesquisador AI](https://www.jovinull.com.br/),” acesso em 9 set. 2026.
[^R2]: Felipe Jovino, “[Sobre — Manifesto e trajetória](https://www.jovinull.com.br/sobre),” acesso em 9 set. 2026.
[^R3]: Felipe Jovino, “[Experiência — Trajetória profissional](https://www.jovinull.com.br/experiencia),” acesso em 9 set. 2026.
[^R4]: Felipe Jovino, “[Projetos — Projetos & Engenharia](https://www.jovinull.com.br/projetos),” acesso em 9 set. 2026.
[^R5]: Felipe Jovino, “[Pesquisa — Pesquisa & Inovação](https://www.jovinull.com.br/pesquisa),” acesso em 9 set. 2026.
[^R6]: Felipe Jovino, “[Formação — Formação & Certificações](https://www.jovinull.com.br/formacao),” acesso em 9 set. 2026.
[^R7]: Felipe Jovino, “[Contato](https://www.jovinull.com.br/contato),” acesso em 9 set. 2026.
[^R8]: Felipe Jovino, “[Sitemap XML](https://www.jovinull.com.br/sitemap.xml),” acesso em 9 set. 2026.
[^R9]: Felipe Jovino, “[AccessSim](https://www.jovinull.com.br/accesssim),” acesso em 9 set. 2026.

1. Felipe Jovino. “[Home — Coordenador de TI, CTO & Pesquisador AI](https://www.jovinull.com.br/).” Acesso em 9 set. 2026.
2. Felipe Jovino. “[Sobre — Manifesto e trajetória](https://www.jovinull.com.br/sobre).” Acesso em 9 set. 2026.
3. Felipe Jovino. “[Experiência — Trajetória profissional](https://www.jovinull.com.br/experiencia).” Acesso em 9 set. 2026.
4. Felipe Jovino. “[Projetos — Projetos & Engenharia](https://www.jovinull.com.br/projetos).” Acesso em 9 set. 2026.
5. Felipe Jovino. “[Pesquisa — Pesquisa & Inovação](https://www.jovinull.com.br/pesquisa).” Acesso em 9 set. 2026.
6. Felipe Jovino. “[Formação — Formação & Certificações](https://www.jovinull.com.br/formacao).” Acesso em 9 set. 2026.
7. Felipe Jovino. “[Contato](https://www.jovinull.com.br/contato).” Acesso em 9 set. 2026.
8. Felipe Jovino. “[Sitemap XML](https://www.jovinull.com.br/sitemap.xml).” Acesso em 9 set. 2026.
9. Felipe Jovino. “[AccessSim](https://www.jovinull.com.br/accesssim).” Acesso em 9 set. 2026.
10. Sociedade Brasileira de Computação. “[Abordagens de Aprendizado de Máquina para o Reconhecimento de Sinais em Libras](https://sol.sbc.org.br/index.php/erbase/article/view/39317).” Link fornecido pelo portfólio de referência.
11. Revista de Sistemas e Computação. “[Acesso à formação em Inteligência Artificial para pessoas de baixa renda: um estudo de caso em Sergipe](https://doi.org/10.36558/rsc.v13i3.8504).” DOI fornecido pelo portfólio de referência.

### Projeto local analisado

[^L1]: `invencaodev/src/app/page.tsx:1-31`, composição e ordem da Home ativa.
[^L2]: `invencaodev/src/componentsV4/Hero.tsx:8-78`, conteúdo e hierarquia do Hero.
[^L3]: `invencaodev/src/componentsV4/AboutBento.tsx:4-126`, resumo, métricas, stack e integração de projetos.
[^L4]: `invencaodev/src/componentsV4/Experience.tsx:15-136`, dados e timeline profissional.
[^L5]: `invencaodev/src/componentsV4/ProjectCarousel.tsx:11-65` e `invencaodev/src/lib/github.ts:15-89`, cards e estratégia de seleção via GitHub.
[^L6]: `invencaodev/src/componentsV4/Navbar.tsx:13-124`, navegação ativa e CTA.
[^L7]: `invencaodev/src/componentsV4/Contact.tsx:14-206` e `Footer.tsx:4-48`, canais e fechamento.
[^L8]: `invencaodev/src/app/layout.tsx:23-138` e `globals.css:48-149`, metadados, JSON-LD e sistema visual.
