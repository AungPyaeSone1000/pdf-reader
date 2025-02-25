import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const userSystemEnum = pgEnum("user_system_enum", ["user", "system"]);

export const tabs = pgTable("tabs", {
  id: serial("id").primaryKey(),
  pdfName: text("pdfName").notNull(),
  pdfUrl: text("pdfUrl").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  userId: varchar("userId", { length: 255 }).notNull(),
  fileKey: text("fileKey").notNull(),
});

export const Answers = pgTable("Answers", {
  id: serial("id").primaryKey(),
  tabsId: integer("tabsId")
    .references(() => tabs.id)
    .notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  role: userSystemEnum("role").notNull(),
});
