/**
 * Schema.org helpers — doctrine C1 wf-00-cms §7 + schemas centralises.
 *
 * Pattern : chaque helper construit un bloc Schema.org a partir de :
 *  - business (identite + geo + rating — centralise dans business.ts)
 *  - schemaData (openingHours, areaServed, priceRange — non editable client)
 *  - getServices/getFaq/getTestimonials (lectures CMS sync via content.ts)
 *
 * Specifique occivolt :
 *  - @type Electrician (depuis business.schemaType)
 *  - legalName + logo dans Electrician (champs specifiques occivolt)
 *  - areaServed avec GeoCircle 50km (depuis schemaData)
 *  - aggregateRating lu depuis business.rating (source documentee via
 *    `platform: "Google"` — Tony a un GBP actif). Reviews individuelles
 *    OMISES : les testimonials de la collection n'ont pas de champ `rating`
 *    ni `date` ni `source` structures. A enrichir via wf-reviews-gbp pour
 *    pouvoir lister les reviews individuellement en Schema.org.
 *  - publisher Organization dans WebSite schema
 */

import { business, schemaData } from '@data/business';
import { getServices, getFaq } from '@data/content';

export interface Breadcrumb {
  name: string;
  url: string;
}

// ============================================================
// getLocalBusinessSchema — Electrician (type depuis business.schemaType)
// ============================================================

export function getLocalBusinessSchema(): object {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': business.schemaType,
    name: business.name,
    legalName: business.legalName,
    image: `${business.url}/images/og-image.jpg`,
    logo: `${business.url}/images/logo-occivolt.webp`,
    description: business.description,
    url: business.url,
    telephone: business.phone,
    email: business.email,
  };

  // Adresse structuree (immuable, depuis business.ts)
  schema.address = {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressRegion: business.address.region,
    addressCountry: business.address.country,
  };

  // Geo (immuable, depuis business.ts)
  schema.geo = {
    '@type': 'GeoCoordinates',
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  };

  // Founder (immuable)
  schema.founder = {
    '@type': 'Person',
    name: business.founder,
    jobTitle: 'Électricien, Fondateur',
  };
  schema.foundingDate = business.foundingDate;

  // schemaData (non editable client)
  if (schemaData.openingHours.length > 0) {
    schema.openingHoursSpecification = schemaData.openingHours;
  }
  if (schemaData.areaServed.length > 0) {
    schema.areaServed = schemaData.areaServed;
  }
  if (schemaData.priceRange) {
    schema.priceRange = schemaData.priceRange;
  }
  if (schemaData.paymentAccepted.length > 0) {
    schema.paymentAccepted = schemaData.paymentAccepted;
  }
  if (schemaData.sameAs.length > 0) {
    schema.sameAs = schemaData.sameAs;
  }

  // Services depuis CMS (lecture sync via content.ts)
  const services = getServices();
  if (services.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: "Services d'électricité",
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
      })),
    };
  }

  // AggregateRating depuis business.rating (source documentee : platform "Google")
  // Doctrine C1 etendue : accepte si business.rating a un champ `platform`
  // documentant la source verifiable (GBP, TrustPilot, etc.).
  //
  // Reviews individuelles OMISES : les testimonials de la collection ne contiennent
  // pas de champ `rating`/`date`/`source` structure. Pour lister des reviews
  // individuellement dans le Schema.org, faire un `wf-reviews-gbp` sur la fiche
  // GBP d'Occi'Volt pour importer les donnees structurees.
  if (business.rating && business.rating.platform) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: '5',
    };
  }

  return schema;
}

// ============================================================
// getWebsiteSchema — WebSite (avec publisher Organization)
// ============================================================

export function getWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.url,
    inLanguage: business.lang,
    description: business.description,
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${business.url}/images/logo-occivolt.webp`,
      },
    },
  };
}

// ============================================================
// getFAQPageSchema — FAQPage (null si pas de faq)
// Note : strip HTML de faq.answer car certaines reponses peuvent contenir
// <br>, <small> ou autres tags pour le rendu visuel (ex: fine print
// disclaimer). Google Rich Results veut du plain text pour acceptedAnswer.
// ============================================================

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getFAQPageSchema(): object | null {
  const faqs = getFaq();
  if (faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.answer),
      },
    })),
  };
}

// ============================================================
// getBreadcrumbSchema — BreadcrumbList (pur)
// ============================================================

export function getBreadcrumbSchema(items: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${business.url}${item.url}`,
    })),
  };
}

// ============================================================
// getSpeakableSchema — Speakable (pur, selecteurs CSS standards)
// Necessite title/description/url pour etre un WebPage valide Schema.org
// ============================================================

export function getSpeakableSchema(
  title: string,
  description: string,
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: business.lang,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.intro-text', '.faq-answer'],
    },
  };
}
