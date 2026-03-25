import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'occivolt/occivolt' },
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
      slugField: 'slug',
      path: 'src/content/services/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Identifiant' } }),
        title: fields.text({ label: 'Titre du service', validation: { isRequired: true } }),
        number: fields.text({ label: 'Numéro (ex: 01, 02)', validation: { isRequired: true } }),
        badge: fields.text({ label: 'Badge (optionnel, ex: Bientôt)' }),
        description: fields.text({ label: 'Description', validation: { isRequired: true }, multiline: true }),
        photo: fields.text({ label: 'Photo (chemin)', validation: { isRequired: true } }),
        photoAlt: fields.text({ label: 'Texte alternatif photo', validation: { isRequired: true } }),
        icon: fields.text({ label: 'Icône SVG (path d)', validation: { isRequired: true }, multiline: true }),
      },
    }),
    testimonials: collection({
      label: 'Témoignages',
      slugField: 'slug',
      path: 'src/content/testimonials/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Identifiant' } }),
        name: fields.text({ label: 'Nom du client', validation: { isRequired: true } }),
        quote: fields.text({ label: 'Témoignage', validation: { isRequired: true }, multiline: true }),
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
        order: fields.integer({ label: 'Ordre d\'affichage', validation: { isRequired: true, min: 1 } }),
      },
    }),
    gallery: collection({
      label: 'Galerie',
      slugField: 'slug',
      path: 'src/content/gallery/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Identifiant' } }),
        label: fields.text({ label: 'Titre de la photo', validation: { isRequired: true } }),
        src: fields.text({ label: 'Chemin image (ex: /images/galerie/xxx.webp)', validation: { isRequired: true } }),
        alt: fields.text({ label: 'Texte alternatif', validation: { isRequired: true }, multiline: true }),
        tag: fields.text({ label: 'Tag (ex: Rénovation)', validation: { isRequired: true } }),
        featured: fields.checkbox({ label: 'Photo mise en avant (grande)', defaultValue: false }),
        order: fields.integer({ label: 'Ordre d\'affichage', validation: { isRequired: true, min: 1 } }),
      },
    }),
    faq: collection({
      label: 'FAQ',
      slugField: 'slug',
      path: 'src/content/faq/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Identifiant' } }),
        question: fields.text({ label: 'Question', validation: { isRequired: true } }),
        answer: fields.text({ label: 'Réponse', validation: { isRequired: true }, multiline: true }),
        order: fields.integer({ label: 'Ordre d\'affichage', validation: { isRequired: true, min: 1 } }),
      },
    }),
  },
  singletons: {
    'site-info': singleton({
      label: 'Informations du site',
      path: 'src/content/site-info/index',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nom commercial', validation: { isRequired: true } }),
        tagline: fields.text({ label: 'Slogan' }),
        phone: fields.text({ label: 'Téléphone (affiché)', validation: { isRequired: true } }),
        email: fields.text({ label: 'Email', validation: { isRequired: true } }),
        street: fields.text({ label: 'Adresse' }),
        city: fields.text({ label: 'Ville' }),
        postalCode: fields.text({ label: 'Code postal' }),
        hours: fields.text({ label: 'Horaires (texte libre)', multiline: true }),
      },
    }),
  },
});
