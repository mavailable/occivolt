import { config, fields, collection, singleton } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: 'mavailable/occivolt',
      }
    : { kind: 'local' },
  ui: {
    brand: { name: "Occi'Volt" },
    navigation: {
      'Contenu': ['services', 'testimonials', 'gallery', 'faq'],
      'Configuration': ['site-info'],
    },
  },
  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du service' } }),
        number: fields.text({ label: 'Numéro (ex: 01, 02)', validation: { isRequired: true } }),
        badge: fields.text({ label: 'Badge (optionnel, ex: Bientôt)', description: 'Laisser vide si pas de badge' }),
        photo: fields.text({ label: 'Photo (chemin)', validation: { isRequired: true } }),
        photoAlt: fields.text({ label: 'Texte alternatif photo', validation: { isRequired: true } }),
        icon: fields.text({ label: 'Icône SVG (path d)', validation: { isRequired: true }, multiline: true }),
        description: fields.markdoc({ label: 'Description du service' }),
      },
    }),
    testimonials: collection({
      label: 'Témoignages',
      slugField: 'name',
      path: 'src/content/testimonials/*',
      format: { contentField: 'quote' },
      schema: {
        name: fields.slug({ name: { label: 'Nom du client' } }),
        context: fields.text({ label: 'Contexte (ex: Dépannage électrique)', validation: { isRequired: true } }),
        initials: fields.text({ label: 'Initiale', validation: { isRequired: true } }),
        color: fields.select({
          label: 'Couleur avatar',
          options: [
            { label: 'Vert (primary)', value: 'bg-primary-600' },
            { label: 'Jaune (accent)', value: 'bg-accent-500' },
            { label: 'Anthracite (secondary)', value: 'bg-secondary-700' },
          ],
          defaultValue: 'bg-primary-600',
        }),
        quote: fields.markdoc({ label: 'Témoignage' }),
      },
    }),
    gallery: collection({
      label: 'Galerie',
      slugField: 'label',
      path: 'src/content/gallery/*',
      schema: {
        label: fields.slug({ name: { label: 'Titre de la photo' } }),
        src: fields.text({ label: 'Chemin image (ex: /images/galerie/xxx.webp)', validation: { isRequired: true } }),
        alt: fields.text({ label: 'Texte alternatif', validation: { isRequired: true }, multiline: true }),
        tag: fields.text({ label: 'Tag (ex: Rénovation)', validation: { isRequired: true } }),
        featured: fields.checkbox({ label: 'Photo mise en avant (grande)', defaultValue: false }),
      },
    }),
    faq: collection({
      label: 'FAQ',
      slugField: 'question',
      path: 'src/content/faq/*',
      format: { contentField: 'answer' },
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        order: fields.integer({ label: 'Ordre d\'affichage', validation: { isRequired: true, min: 1 } }),
        answer: fields.markdoc({ label: 'Réponse' }),
      },
    }),
  },
  singletons: {
    'site-info': singleton({
      label: 'Informations du site',
      path: 'src/content/site-info/index',
      schema: {
        name: fields.text({ label: 'Nom commercial', validation: { isRequired: true } }),
        tagline: fields.text({ label: 'Slogan' }),
        phone: fields.text({ label: 'Téléphone (affiché)', validation: { isRequired: true } }),
        email: fields.text({ label: 'Email', validation: { isRequired: true } }),
        street: fields.text({ label: 'Adresse' }),
        city: fields.text({ label: 'Ville' }),
        postalCode: fields.text({ label: 'Code postal' }),
        hours: fields.text({ label: 'Horaires (texte libre)', multiline: true }),
        heroTitle: fields.text({ label: 'Titre Hero', multiline: true }),
        heroSubtitle: fields.text({ label: 'Sous-titre Hero' }),
      },
    }),
  },
});
