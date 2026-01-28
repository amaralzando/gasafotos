# Referência Técnica — Gasafotos

## Schema Drizzle (exemplo)

```ts
// users (pode vir do Better Auth / NextAuth)
// media
export const mediaTable = pgTable("media", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull().references(() => usersTable.id),
  url: text("url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  type: pgEnum("media_type", ["photo", "video"]).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  takenAt: timestamp("taken_at"),
  size: integer("size").notNull(),
  width: integer("width"),
  height: integer("height"),
  isFavorite: boolean("is_favorite").default(false).notNull(),
  deletedAt: timestamp("deleted_at"),
});

// tags
export const tagsTable = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  mediaId: uuid("media_id").notNull().references(() => mediaTable.id),
  label: text("label").notNull(),
  confidence: real("confidence").notNull(),
});

// albums
export const albumsTable = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull().references(() => usersTable.id),
  name: text("name").notNull(),
  coverMediaId: uuid("cover_media_id").references(() => mediaTable.id),
  isAuto: boolean("is_auto").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// album_media (pivô)
export const albumMediaTable = pgTable("album_media", {
  albumId: uuid("album_id").notNull().references(() => albumsTable.id),
  mediaId: uuid("media_id").notNull().references(() => mediaTable.id),
});
```

## Padrão de Signed URL (S3/R2)

1. **Backend** recebe `contentType`, `filename` (ou `key`).
2. Gera `key` único: `{userId}/{uuid}.{ext}` (nunca expor prefixo interno).
3. Chama SDK do provider (R2/S3/Supabase) para `getSignedUrl("putObject", { Key, Expires: 300 })`.
4. Retorna ao frontend só a **URL assinada** e o **key** (ou id) para registrar depois.
5. **Frontend** faz `PUT` na URL com o arquivo; em seguida chama `POST /api/media` com `key` + metadados.
6. **Backend** persiste em `media` com `url` = URL pública ou path interno que o backend usa para servir.

## Endpoints sugeridos

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/media/upload-url | Retorna signed URL + key |
| POST | /api/media | Registra mídia após upload (key, taken_at, size, width, height, type) |
| GET | /api/media?cursor=&limit=50 | Lista mídia do usuário, ordenado por taken_at DESC |
| GET | /api/search?q= | Busca em tags + mídia do usuário |
| GET | /api/memories | Memórias (1/2/3 anos atrás) |
| PATCH | /api/media/:id | Atualizar (is_favorite, etc.) ou soft delete (deleted_at) |
| DELETE | /api/media/:id | Soft delete (deleted_at = now) |

Job de limpeza: buscar `deleted_at < now() - 30 days`, apagar arquivos no storage e linhas em `media` (e dependências).
