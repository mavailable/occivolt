// Content collections — schemas Astro Zod
// Miroir fidele de cms.config.ts et src/content/*.json
// Tous les champs sont .optional() par tolerance du CMS
// (le client peut sauvegarder un JSON partiel sans casser le build).

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const siteInfo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/site-info' }),
  schema: z.object({
    name: z.string().optional(),
    tagline: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    street: z.string().optional(),
    city: z.string().optional(),
    postalCode: z.string().optional(),
    hours: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/services' }),
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    number: z.string().optional(),
    badge: z.string().optional(),
    description: z.string(),
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/testimonials' }),
  schema: z.object({
    slug: z.string().optional(),
    name: z.string(),
    quote: z.string(),
    context: z.string().optional(),
    initials: z.string().optional(),
    color: z.string().optional(),
    order: z.number().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/gallery' }),
  schema: z.object({
    slug: z.string().optional(),
    label: z.string().optional(),
    src: z.string().optional(),
    alt: z.string().optional(),
    tag: z.string().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/faq' }),
  schema: z.object({
    slug: z.string().optional(),
    question: z.string(),
    answer: z.string(),
    order: z.number().optional(),
  }),
});

const seo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/seo' }),
  schema: z.object({
    global: z.object({
      siteName: z.string().optional(),
      separator: z.string().optional(),
      defaultOgImage: z.string().optional(),
    }).optional(),
    pages: z.record(z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
      noindex: z.boolean().optional(),
    })).optional(),
  }),
});

export const collections = {
  'site-info': siteInfo,
  services,
  testimonials,
  gallery,
  faq,
  seo,
};
