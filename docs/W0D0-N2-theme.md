# W0D0-N2 — Tema do App Grande

## Tema escolhido

RPG Backlog Xbox (2020+) — catálogo de RPGs disponíveis no Xbox + tracker pessoal de progresso.
Inclui também uma lista de futuros lançamentos com “interesse”.

## Pitch (1–2 frases)

Um app para eu organizar meus RPGs: descobrir/registrar jogos, marcar progresso (comecei/zerado/dropado),
guardar onde parei e dar nota pessoal. Também acompanha próximos RPGs e meu interesse neles.

## Features (7)

1. Catálogo com cards (capa, título, ano, subgênero, tags, Metascore opcional).
2. Busca por texto + filtros (subgênero/tags) + ordenação (lançamento, Metascore, minha nota).
3. Página de detalhes do jogo (info + painel “Meu progresso”).
4. Tracker: status (não iniciado | jogando | zerado | dropado) + datas opcionais (início/fim).
5. Nota pessoal (0–10) + observações (texto livre) + “onde parei” (quest/área/horas).
6. Seção “Futuros” (lançamentos) com interesse (sim | talvez | não).
7. Modo Admin (single-user): CRUD de jogos (adicionar/editar/remover) e editar os futuros.

## Personas / Fluxos (3)

### Persona 1: Eu (jogador) — atualização rápida

1. Abro o catálogo
2. Busco um jogo
3. Abro detalhes
4. Marco “jogando”
5. Preencho “onde parei” e salvo

### Persona 2: Eu (jogador) — finalizei um jogo

1. Abro “Minha lista”
2. Filtro por “jogando”
3. Abro o jogo
4. Marco “zerado”
5. Dou nota e escrevo observações

### Persona 3: Eu (admin single-user) — manter o catálogo

1. Abro /admin
2. Adiciono novo jogo (título, data, subgênero, tags, plataforma)
3. Ajusto capa/descrição depois
4. Edito/removo quando necessário

## Páginas / Rotas previstas

- / (Catálogo)
- /games/:id (Detalhe + Meu progresso)
- /my (Minha lista: jogando/zerado/dropado)
- /upcoming (Futuros + Interesse)
- /admin (Admin: lista + ações)
- /admin/games/new (Novo jogo)
- /admin/games/:id/edit (Editar jogo)

## Restrições de UX (obrigatórias)

- Loading: skeleton na lista ao mudar filtros/ordem (simulado com timeout).
- Error: tela/alerta “Falha ao carregar” (simulado via flag).
- Empty state: “Nenhum RPG encontrado” quando busca/filtro não retorna nada.
- Responsivo: grid 1 coluna (mobile) → 2/3/4 (desktop).
- A11y mínima: foco visível, labels em inputs, navegação por teclado (lista, filtros e formulário).
