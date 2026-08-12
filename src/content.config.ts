import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    id: z.string(),
    guest: z.string(),
    role: z.string(),
    cats: z.array(z.string()),
    url: z.string().url(),
    quote: z.string(),
    concepts: z.array(z.string()),
    date: z.string().optional(), // ISO date, optional until real dates are added per episode
    order: z.number(), // temporary processing-order index; replace with real dates once known
    spotify: z.string().url().optional(), // Spotify episode link, ha van
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    cat: z.string(),
    eps: z.array(z.object({ ep: z.string(), t: z.string() })),
  }),
});

export const collections = { episodes, concepts };
