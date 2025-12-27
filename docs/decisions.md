# Decisions (Bootcamp React do Zero + Tailwind)

## 2025-12-27 — Base do repositório

- Monorepo simples: 1 repositório único para todo o bootcamp.
- App Vite ficará em `bootcamp/react/app/` (docs/status ficam fora do app).
- Estrutura de código: `src/features` (por feature) + `src/shared` (reuso) + `src/app` (bootstrap).
- Package manager oficial: pnpm.
- Versão alvo do Node (via `.nvmrc`): 24 (LTS).
- Fluxo Git:
  - Branch principal: `main`.
  - Trabalho sempre em branch: `feat/<slug>` (ex.: `feat/cp1-ui-kit`).
  - Tags anotadas por checkpoint: `cp1`, `cp2`, ... (tag só quando CP estiver PASS).
- Padrão de commits: Conventional Commits (ex.: `chore: ...`, `feat: ...`, `fix: ...`).
