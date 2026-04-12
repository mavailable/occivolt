import type { CmsConfig } from './cms.types';

// ============================================================
// Configuration CMS — Occi'Volt Electricite
// ============================================================

const cmsConfig: CmsConfig = {
  repo: 'mavailable/occivolt',
  branch: 'main',
  siteName: "Occi'Volt",

  singletons: {
    'site-info': {
      label: 'Informations generales',
      description: 'Nom, telephone, email, adresse, horaires',
      path: 'src/content/site-info/index.json',
      fields: {
        name: { type: 'text', label: 'Nom commercial' },
        tagline: { type: 'text', label: 'Slogan' },
        phone: { type: 'text', label: 'Telephone' },
        email: { type: 'text', label: 'Email' },
        street: { type: 'text', label: 'Adresse' },
        city: { type: 'text', label: 'Ville' },
        postalCode: { type: 'text', label: 'Code postal' },
        hours: { type: 'text', label: 'Horaires', multiline: true },
      },
    },
  },

  collections: {
    services: {
      label: 'Services',
      description: 'Prestations proposees',
      path: 'src/content/services',
      slugField: 'slug',
      labelField: 'title',
      fields: {
        slug: { type: 'text', label: 'Identifiant (slug)' },
        title: { type: 'text', label: 'Titre du service' },
        number: { type: 'text', label: 'Numero (ex: 01, 02)' },
        badge: { type: 'text', label: 'Badge (optionnel, ex: Bientot)' },
        description: { type: 'text', label: 'Description', multiline: true },
        photo: { type: 'text', label: 'Photo (chemin)' },
        photoAlt: { type: 'text', label: 'Texte alternatif photo' },
        icon: { type: 'text', label: 'Icone SVG (path d)', multiline: true },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },

    testimonials: {
      label: 'Temoignages',
      description: 'Avis et retours clients',
      path: 'src/content/testimonials',
      slugField: 'slug',
      labelField: 'name',
      fields: {
        slug: { type: 'text', label: 'Identifiant' },
        name: { type: 'text', label: 'Nom du client' },
        quote: { type: 'text', label: 'Temoignage', multiline: true },
        context: { type: 'text', label: 'Contexte (ex: Depannage electrique)' },
        initials: { type: 'text', label: 'Initiale' },
        color: {
          type: 'select',
          label: 'Couleur avatar',
          options: [
            { label: 'Vert (primary)', value: 'bg-primary-600' },
            { label: 'Jaune (accent)', value: 'bg-accent-500' },
            { label: 'Anthracite (secondary)', value: 'bg-secondary-700' },
          ],
          defaultValue: 'bg-primary-600',
        },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },

    gallery: {
      label: 'Galerie',
      description: 'Photos de realisations',
      path: 'src/content/gallery',
      slugField: 'slug',
      labelField: 'label',
      fields: {
        slug: { type: 'text', label: 'Identifiant' },
        label: { type: 'text', label: 'Titre de la photo' },
        src: { type: 'text', label: 'Chemin image (ex: /images/galerie/xxx.webp)' },
        alt: { type: 'text', label: 'Texte alternatif', multiline: true },
        tag: { type: 'text', label: 'Tag (ex: Renovation)' },
        featured: { type: 'select', label: 'Photo mise en avant', options: [{ label: 'Oui', value: 'true' }, { label: 'Non', value: 'false' }], defaultValue: 'false' },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },

    faq: {
      label: 'FAQ',
      description: 'Questions frequentes',
      path: 'src/content/faq',
      slugField: 'slug',
      labelField: 'question',
      fields: {
        slug: { type: 'text', label: 'Identifiant' },
        question: { type: 'text', label: 'Question' },
        answer: { type: 'text', label: 'Reponse', multiline: true },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },
  },
};

export default cmsConfig;
