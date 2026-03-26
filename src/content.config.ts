import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['Live', 'Archived', 'In Progress']),
    role: z.string(),
    tech_stack: z.array(z.string()),
    public_visibility: z.boolean(),
    has_private_notes: z.boolean(),
    links: z.array(z.string()).optional(),
    dates: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };
