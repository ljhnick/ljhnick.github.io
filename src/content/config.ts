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

// A resume section. Give it a `title`, then ONE of:
//   text:    a paragraph (supports **bold**)
//   entries: rows with org/title/date/detail (experience, education, …)
//   items:   a list of lines, e.g. publications (supports **bold**)
const section = z.object({
  title: z.string(),
  text: z.string().optional(),
  entries: z
    .array(
      z.object({
        org: z.string(),
        title: z.string().optional(),
        date: z.string().optional(),
        detail: z.string().optional(), // single line under the entry
        bullets: z.array(z.string()).optional(), // or a bulleted list (supports **bold**)
      }),
    )
    .optional(),
  items: z.array(z.string()).optional(),
  // optional trailing link, e.g. "See all publications →"
  link: z.object({ label: z.string(), href: z.string() }).optional(),
});

const resume = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    contacts: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
    sections: z.array(section),
  }),
});

export const collections = { publications, news, resume };
