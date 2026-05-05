import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: z.object({
    key: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    venue_full: z.string().optional(),
    year: z.number(),
    selected: z.boolean().default(false),
    preview: z.string().optional(),
    pdf: z.string().optional(),
    arxiv: z.string().url().optional(),
    doi: z.string().optional(),
    website: z.string().optional(),
    video: z.string().url().optional(),
    poster: z.string().optional(),
    code: z.string().url().optional(),
    award: z.string().optional(),
    status: z
      .enum(["published", "in_submission", "in_progress", "under_review"])
      .default("published"),
    importance: z.number().default(100),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
  }),
});

export const collections = { publications, news };
