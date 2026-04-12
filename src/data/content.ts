/**
 * Content helpers - lecture sync des JSON flat files dans src/content/.
 *
 * Doctrine CMS maison : src/content/*.json est la source unique de verite
 * pour tout le contenu editable du site. Les composants .astro lisent
 * exclusivement via ces helpers, jamais de hardcode.
 *
 * readJson()        - singletons (hero, about, cta, contact, social-proof, site-info)
 * readCollection()  - collections (services, faq, testimonials, gallery)
 */

import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

// --- Core readers ---

export function readJson<T>(singleton: string, file = 'index.json'): T {
  const filePath = path.join(CONTENT_DIR, singleton, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`[CMS] Missing singleton: ${filePath}`);
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function readCollection<T>(collection: string): (T & { _slug: string })[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8');
      return { _slug: f.replace('.json', ''), ...(JSON.parse(raw) as T) };
    });
}

// --- Types ---

export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  trustBadges: string[];
  backgroundImage: string;
  sideImage: string;
  sideImageAlt: string;
}

export interface AboutKeyPoint {
  label: string;
  desc: string;
  icon: string;
}

export interface AboutContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  keyPoints: AboutKeyPoint[];
  ctaLabel: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
  floatingCard: { value: string; label: string };
}

export interface GalleryItem {
  slug: string;
  label: string;
  src: string;
  alt: string;
  tag: string;
  featured?: boolean;
  order?: number;
}

export interface CtaContent {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  trustBadges: string[];
}

export interface SocialProofStat {
  value: string;
  suffix: string;
  label: string;
  sublabel: string;
  type: 'rating' | 'text';
  accentColor: 'accent' | 'primary';
}

export interface SocialProofContent {
  stats: SocialProofStat[];
}

export interface ContactContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  sidebarTitle: string;
  zoneLabel: string;
  zoneValue: string;
  zoneDetail: string;
  hoursLabel: string;
  satisfactionLabel: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  number?: string;
  badge?: string;
  photo?: string;
  photoAlt?: string;
  icon?: string;
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
  initials?: string;
  color?: string;
  order?: number;
  rating?: number;
  source?: string;
  date?: string;
}

// --- Singleton getters ---

export function getHero(): HeroContent {
  return readJson<HeroContent>('hero');
}

export function getAbout(): AboutContent {
  return readJson<AboutContent>('about');
}

export function getCta(): CtaContent {
  return readJson<CtaContent>('cta');
}

export function getSocialProof(): SocialProofContent {
  return readJson<SocialProofContent>('social-proof');
}

export function getContact(): ContactContent {
  return readJson<ContactContent>('contact');
}

// --- Collection getters (sort par `order` si present) ---

export function getServices() {
  return readCollection<Service>('services').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getGallery() {
  return readCollection<GalleryItem>('gallery').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getFaq() {
  return readCollection<FaqItem>('faq').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getTestimonials() {
  return readCollection<Testimonial>('testimonials').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}
