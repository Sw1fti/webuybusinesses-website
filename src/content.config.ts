import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Selling a Business',
      'Valuation',
      'Tax',
      'Succession',
      'Exit Options',
      'Legal',
    ]),
    date: z.coerce.date(),
    startHere: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { articles };
