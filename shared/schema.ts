import { sql } from "drizzle-orm";
import { pgTable, text, varchar, real, integer, timestamp, boolean, point, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const infrastructureAssets = pgTable("infrastructure_assets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'hydrogen-plant', 'storage-facility', 'pipeline', 'distribution-hub'
  status: text("status").notNull().default('planned'), // 'operational', 'under-construction', 'planned'
  capacity: real("capacity"), // MW for plants, tons for storage, km for pipelines
  capacityUnit: text("capacity_unit").default('MW'),
  location: text("location").notNull(), // PostGIS point string for lat/lng
  region: text("region").notNull(),
  owner: text("owner"),
  yearBuilt: integer("year_built"),
  efficiency: real("efficiency"), // percentage
  estimatedCost: real("estimated_cost"), // in millions USD
  coordinates: jsonb("coordinates").notNull(), // {lat, lng}
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const renewableSources = pgTable("renewable_sources", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'wind', 'solar', 'hydro'
  capacity: real("capacity").notNull(), // MW
  location: text("location").notNull(),
  coordinates: jsonb("coordinates").notNull(),
  region: text("region").notNull(),
  operational: boolean("operational").default(true),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const demandCenters = pgTable("demand_centers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'industrial', 'transportation', 'residential'
  estimatedDemand: real("estimated_demand").notNull(), // tons H2 per year
  location: text("location").notNull(),
  coordinates: jsonb("coordinates").notNull(),
  region: text("region").notNull(),
  priority: text("priority").default('medium'), // 'high', 'medium', 'low'
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const mlRecommendations = pgTable("ml_recommendations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  siteName: text("site_name").notNull(),
  location: text("location").notNull(),
  coordinates: jsonb("coordinates").notNull(),
  matchScore: real("match_score").notNull(), // 0-100 percentage
  estimatedCost: real("estimated_cost").notNull(), // millions USD
  reasoning: text("reasoning").notNull(),
  proximityScore: real("proximity_score"),
  demandScore: real("demand_score"),
  regulatoryScore: real("regulatory_score"),
  costScore: real("cost_score"),
  metadata: jsonb("metadata"), // additional analysis data
  createdAt: timestamp("created_at").default(sql`now()`),
});

// Relations
export const infrastructureAssetsRelations = relations(infrastructureAssets, ({ many }) => ({
  recommendations: many(mlRecommendations),
}));

export const mlRecommendationsRelations = relations(mlRecommendations, ({ one }) => ({
  nearestAsset: one(infrastructureAssets),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertInfrastructureAssetSchema = createInsertSchema(infrastructureAssets).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertRenewableSourceSchema = createInsertSchema(renewableSources).omit({
  id: true,
  createdAt: true,
});

export const insertDemandCenterSchema = createInsertSchema(demandCenters).omit({
  id: true,
  createdAt: true,
});

export const insertMLRecommendationSchema = createInsertSchema(mlRecommendations).omit({
  id: true,
  createdAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type InfrastructureAsset = typeof infrastructureAssets.$inferSelect;
export type InsertInfrastructureAsset = z.infer<typeof insertInfrastructureAssetSchema>;

export type RenewableSource = typeof renewableSources.$inferSelect;
export type InsertRenewableSource = z.infer<typeof insertRenewableSourceSchema>;

export type DemandCenter = typeof demandCenters.$inferSelect;
export type InsertDemandCenter = z.infer<typeof insertDemandCenterSchema>;

export type MLRecommendation = typeof mlRecommendations.$inferSelect;
export type InsertMLRecommendation = z.infer<typeof insertMLRecommendationSchema>;
