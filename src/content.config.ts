import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/articles',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'fr']),
    slug: z.string(),
    translationKey: z.string(),
    category: z.enum([
      'ai-tools',
      'ai-automation',
      'ai-content-creation',
      'ai-for-business',
      'ai-guides-news',
    ]),
    type: z.enum(['review', 'comparison', 'tutorial', 'guide']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('NeuralScope Editorial Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
