import { defineCollection, z } from 'astro:content';

// --- Singletons ---

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    badge: z.string(),
    title: z.string(),
    titleHighlight: z.string(),
    titleEnd: z.string(),
    description: z.string(),
    ctaLabel: z.string(),
    ctaLink: z.string(),
    trustBadges: z.array(z.string()),
    backgroundImage: z.string(),
    sideImage: z.string(),
    sideImageAlt: z.string(),
  }),
});

const about = defineCollection({
  type: 'data',
  schema: z.object({
    sectionLabel: z.string(),
    title: z.string(),
    titleHighlight: z.string(),
    paragraphs: z.array(z.string()),
    keyPoints: z.array(z.object({
      label: z.string(),
      desc: z.string(),
      icon: z.string(),
    })),
    ctaLabel: z.string(),
    ctaLink: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    floatingCard: z.object({
      value: z.string(),
      label: z.string(),
    }),
  }),
});

const cta = defineCollection({
  type: 'data',
  schema: z.object({
    badge: z.string(),
    title: z.string(),
    subtitle: z.string(),
    ctaLabel: z.string(),
    ctaLink: z.string(),
    trustBadges: z.array(z.string()),
  }),
});

const socialProof = defineCollection({
  type: 'data',
  schema: z.object({
    stats: z.array(z.object({
      value: z.string(),
      suffix: z.string(),
      label: z.string(),
      sublabel: z.string(),
      type: z.enum(['rating', 'text']),
      accentColor: z.enum(['accent', 'primary']),
    })),
  }),
});

const contact = defineCollection({
  type: 'data',
  schema: z.object({
    sectionLabel: z.string(),
    title: z.string(),
    titleHighlight: z.string(),
    subtitle: z.string(),
    sidebarTitle: z.string(),
    zoneLabel: z.string(),
    zoneValue: z.string(),
    zoneDetail: z.string(),
    hoursLabel: z.string(),
    satisfactionLabel: z.string(),
  }),
});

const siteInfo = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    phone: z.string(),
    email: z.string(),
    street: z.string(),
    city: z.string(),
    postalCode: z.string(),
    hours: z.string(),
  }),
});

// --- Collections ---

const services = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    number: z.string().optional(),
    badge: z.string().optional(),
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().optional(),
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    question: z.string(),
    answer: z.string(),
    order: z.number().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    quote: z.string(),
    context: z.string().optional(),
    initials: z.string().optional(),
    color: z.string().optional(),
    order: z.number().optional(),
    rating: z.number().optional(),
    source: z.string().optional(),
    date: z.string().optional(),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    label: z.string(),
    src: z.string(),
    alt: z.string(),
    tag: z.string(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  hero,
  about,
  cta,
  'social-proof': socialProof,
  contact,
  'site-info': siteInfo,
  services,
  faq,
  testimonials,
  gallery,
};
