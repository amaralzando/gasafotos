---
name: gasafotos-prd
description: PRD da Plataforma de Fotos na Nuvem (estilo Google Fotos). Define stack, entidades, upload S3, busca por tags, álbuns automáticos, lixeira e memórias. Use ao implementar ou discutir o produto gasafotos.
---

# PRD — Plataforma de Fotos na Nuvem (Gasafotos)

Referência única de produto para implementação. Inspirado no Google Fotos.

---

## Stack Base

| Camada | Tecnologia |
|--------|------------|
| Frontend | Next.js (App Router), React, TypeScript, TailwindCSS, Shadcn/UI |
| Backend | Next.js Server Actions + Route Handlers, Node.js |
| Banco | PostgreSQL (Neon / Supabase), ORM Drizzle |
| Storage | S3 (Cloudflare R2 / Supabase Storage / AWS S3) |
| Auth | Better Auth / NextAuth / Clerk |

---

## Entidade: User

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | PK |
| name | text | Nome |
| email | text | E-mail |
| avatar_url | text | URL do avatar |
| created_at | timestamp | Criação |

---

## Entidade: Media (Fotos e Vídeos)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | PK |
| user_id | uuid | Dono (FK → users) |
| url | text | URL no storage |
| thumbnail_url | text | URL da miniatura |
| type | enum | `photo` \| `video` |
| created_at | timestamp | Data do upload |
| taken_at | timestamp | Data da foto (EXIF) |
| size | int | Tamanho em bytes |
| width | int | Largura |
| height | int | Altura |
| is_favorite | boolean | Favorita |
| deleted_at | timestamp nullable | Lixeira (soft delete) |

---

## Entidade: Tags Inteligentes

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | PK |
| media_id | uuid | FK → media |
| label | text | Ex: "dog", "beach", "food" |
| confidence | float | 0–1, confiança da tag |

Usadas na **busca inteligente** por metadados.

---

## Entidade: Albums

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | PK |
| user_id | uuid | Dono |
| name | text | Nome do álbum |
| cover_media_id | uuid nullable | FK → media |
| is_auto | boolean | Álbum automático (ex.: memórias) |
| created_at | timestamp | Criação |

**Tabela pivô:** `album_media` (album_id, media_id).

---

## Fluxo de Upload

1. **Frontend** pede URL assinada (endpoint ex.: `POST /api/media/upload-url`).
2. **Backend** gera signed URL para o bucket S3 (payload: `key`, `contentType`, talvez `maxSize`).
3. **Frontend** faz PUT do arquivo direto no storage com a URL assinada.
4. **Frontend** chama **Backend** para registrar a mídia (`POST /api/media` com `key`, metadados). Backend persiste em `media` (e opcionalmente dispara job de processamento).

**Segurança:** URLs assinadas com expiração curta; nunca expor caminho real do bucket. Todas as queries filtradas por `user_id`.

---

## Processamento Pós-Upload (Background)

Após salvar a mídia, job deve:

- Gerar **thumbnail** e salvar URL em `thumbnail_url`.
- Extrair **EXIF** (data, localização se existir) → preencher `taken_at` e outros campos.
- (Futuro) Rodar IA para gerar **tags** → inserir em tabela de tags com `confidence`.
- (Futuro) Detectar rostos.
- Classificação sugerida: Comida | Pessoa | Animal | Documento | Paisagem (pode ser enum ou tag).

---

## API de Galeria

- **GET /api/media?cursor=xxx&limit=50**
  - Paginação por **cursor**.
  - Ordenar por `taken_at DESC`.
  - Filtrar `user_id` e `deleted_at IS NULL`.
  - Retornar sempre **thumbnails** na listagem; usar lazy loading no frontend.

---

## API de Busca Inteligente

- **GET /api/search?q=dog**
- **GET /api/search?q=beach**
- **GET /api/search?q=food**

Buscar nas **tags** (`label` / texto) e retornar mídias do usuário. Manter filtro `user_id` e `deleted_at IS NULL`.

---

## Memórias Automáticas (“Memories”)

- **Job diário** (cron/scheduler):
  - Buscar fotos de **exatamente 1, 2, 3 anos atrás** (`taken_at` ou `created_at`).
  - Agrupar por data.
  - Criar “Memory collections” virtuais (ex.: álbuns com `is_auto = true` ou estrutura dedicada em memória/cache).
- Expor via endpoint ex.: **GET /api/memories** (opcional: por ano/dias).

---

## Lixeira

- “Excluir” = preencher **`deleted_at`** (soft delete).
- **Job periódico:** apagar permanentemente itens com `deleted_at` older than **30 dias** (e remover arquivos do storage).

---

## Compartilhamento (Fase Futura)

- Link público de álbum.
- Permissão de visualização (somente leitura).
- Não implementar na primeira versão; deixar preparado no modelo (ex.: campo `is_public` ou tabela `album_share`).

---

## Performance e Segurança

- Sempre usar **thumbnails** na galeria; full size só no viewer.
- **Lazy loading** de imagens e, se fizer sentido, infinite scroll com cursor.
- CDN no storage (Cloudflare R2 / Supabase já oferecem).
- Cache de consultas de mídia (ex.: React Query / SWR no front; cache server-side por rota se necessário).
- **Segurança:**
  - Todas as queries filtradas por `user_id`.
  - URLs assinadas com TTL curto.
  - Nunca expor caminho real do bucket nem chaves internas.

---

## Checklist de Implementação (DoD)

- [ ] Schema Drizzle: `users`, `media`, `tags`, `albums`, `album_media`.
- [ ] Auth (Better Auth / NextAuth / Clerk) + `user_id` em todas as operações.
- [ ] Upload: endpoint de signed URL + registro de mídia.
- [ ] Job/queue: thumbnail + EXIF; (futuro) tags por IA.
- [ ] GET /api/media com cursor e ordenação por `taken_at DESC`.
- [ ] GET /api/search?q= com filtro em tags e por usuário.
- [ ] Lixeira: soft delete + job de limpeza 30 dias.
- [ ] Memórias: job diário + endpoint de memórias.
- [ ] Galeria no front: thumbnails, lazy loading, paginação.

---

## Estrutura de Pastas Sugerida (Next.js)

```
src/
├── app/
│   ├── (auth)/          # login, signup
│   ├── (app)/           # galeria, álbuns, busca, upload
│   │   ├── gallery/
│   │   ├── albums/
│   │   ├── search/
│   │   └── memories/
│   └── api/
│       ├── media/       # upload-url, register, list, delete
│       ├── search/
│       └── memories/
├── db/
│   ├── index.ts
│   └── schema.ts       # users, media, tags, albums, album_media
├── lib/
│   ├── storage.ts      # signed URL (R2/S3/Supabase)
│   └── auth.ts
├── actions/            # Server Actions para mutate
└── jobs/               # thumb, EXIF, tags, lixeira, memórias
```

Para detalhes de schema Drizzle e exemplos de signed URL, ver [reference.md](reference.md) quando existir.
