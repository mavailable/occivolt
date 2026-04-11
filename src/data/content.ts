/**
 * Content helpers — lecture sync des JSON flat files dans src/content/.
 *
 * Note doctrine : occivolt a ete construit avant wf-00-cms, le src/content/
 * contient des JSON mais aucun `content.config.ts` ni helper de lecture.
 * Ce `content.ts` est cree specifiquement pour la migration C1 SEO afin que
 * schemas.ts puisse lire les collections (services, faq, testimonials) comme
 * source unique de verite pour le Schema.org.
 *
 * Les composants FAQ.astro / Services.astro / Testimonials.astro utilisent
 * encore leurs versions hardcodees — unification a faire ulterieurement
 * (hors scope C1).
 */

import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

function readCollection<T>(collection: string): T[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8');
      return JSON.parse(raw) as T;
    });
}

// --- Types ---

export interface Service {
  slug: string;
  title: string;
  description: string;
  order?: number;
}

export interface FaqItem {
  slug: string;
  question: string;
  answer: string;
  order?: number;
}

export interface Testimonial {
  slug: string;
  name: string;
  quote: string;
  context?: string;
  order?: number;
  // Champs optionnels si import wf-reviews-gbp
  rating?: number;
  source?: string;
  date?: string;
}

// --- Getters (sort par `order` si present) ---

export function getServices(): Service[] {
  return readCollection<Service>('services').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getFaq(): FaqItem[] {
  return readCollection<FaqItem>('faq').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getTestimonials(): Testimonial[] {
  return readCollection<Testimonial>('testimonials').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}
