import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  real,
  uuid,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ---- Better Auth (tabelas padrão: user, session, account, verification) ----
// Usamos nomes no plural e usePlural no adapter

export const usersTable = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const sessionsTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const accountsTable = pgTable("account", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verificationTable = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

// ---- Gasafotos: media, tags, albums, album_media ----

export const mediaTypeEnum = pgEnum("media_type", ["photo", "video"]);

export const mediaTable = pgTable("media", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  type: mediaTypeEnum("type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  takenAt: timestamp("taken_at"),
  size: integer("size").notNull(),
  width: integer("width"),
  height: integer("height"),
  isFavorite: boolean("is_favorite").default(false).notNull(),
  deletedAt: timestamp("deleted_at"),
});

export const tagsTable = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  mediaId: uuid("media_id")
    .notNull()
    .references(() => mediaTable.id, { onDelete: "cascade" }),
  label: text("label").notNull(),
  confidence: real("confidence").notNull(),
});

export const albumsTable = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  coverMediaId: uuid("cover_media_id").references(() => mediaTable.id),
  isAuto: boolean("is_auto").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const albumMediaTable = pgTable("album_media", {
  albumId: uuid("album_id")
    .notNull()
    .references(() => albumsTable.id, { onDelete: "cascade" }),
  mediaId: uuid("media_id")
    .notNull()
    .references(() => mediaTable.id, { onDelete: "cascade" }),
});

// ---- Relations (Drizzle) ----

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  sessions: many(sessionsTable),
  accounts: many(accountsTable),
  media: many(mediaTable),
  albums: many(albumsTable),
}));

export const sessionsTableRelations = relations(sessionsTable, ({ one }) => ({
  user: one(usersTable),
}));

export const mediaTableRelations = relations(mediaTable, ({ one, many }) => ({
  user: one(usersTable),
  tags: many(tagsTable),
}));

export const albumsTableRelations = relations(albumsTable, ({ one }) => ({
  user: one(usersTable),
}));

// Schema object para o Better Auth adapter (mapeamento user/session/account/verification)
export const authSchema = {
  user: usersTable,
  session: sessionsTable,
  account: accountsTable,
  verification: verificationTable,
};
