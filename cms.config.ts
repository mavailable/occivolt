/**
 * CMS maison - Configuration Occi'Volt
 *
 * Declare les singletons et collections editables via /admin.
 * Doit rester en sync avec content.config.ts (schemas Zod).
 */

export default {
  singletons: {
    hero: {
      label: 'Hero (bandeau principal)',
      path: 'src/content/hero/index.json',
      fields: {
        badge: { type: 'text', label: 'Badge au-dessus du titre' },
        title: { type: 'text', label: 'Titre principal (debut)' },
        titleHighlight: { type: 'text', label: 'Mot en surbrillance' },
        titleEnd: { type: 'text', label: 'Titre principal (fin)' },
        description: { type: 'textarea', label: 'Description sous le titre' },
        ctaLabel: { type: 'text', label: 'Texte du bouton principal' },
        ctaLink: { type: 'text', label: 'Lien du bouton' },
        trustBadges: { type: 'list', label: 'Badges de confiance', itemType: 'text' },
        backgroundImage: { type: 'image', label: 'Image de fond' },
        sideImage: { type: 'image', label: 'Photo laterale' },
        sideImageAlt: { type: 'text', label: 'Texte alternatif photo laterale' },
      },
    },
    about: {
      label: 'A propos',
      path: 'src/content/about/index.json',
      fields: {
        sectionLabel: { type: 'text', label: 'Label section' },
        title: { type: 'text', label: 'Titre' },
        titleHighlight: { type: 'text', label: 'Partie en couleur du titre' },
        paragraphs: { type: 'list', label: 'Paragraphes', itemType: 'rich-text' },
        keyPoints: {
          type: 'list',
          label: 'Points cles',
          itemType: 'object',
          fields: {
            label: { type: 'text', label: 'Label' },
            desc: { type: 'text', label: 'Description' },
            icon: { type: 'text', label: 'Icone (lightning, location, check, currency)' },
          },
        },
        ctaLabel: { type: 'text', label: 'Texte du bouton' },
        ctaLink: { type: 'text', label: 'Lien du bouton' },
        image: { type: 'image', label: 'Photo principale' },
        imageAlt: { type: 'text', label: 'Texte alternatif' },
        floatingCard: {
          type: 'object',
          label: 'Carte flottante',
          fields: {
            value: { type: 'text', label: 'Valeur (ex: 100%)' },
            label: { type: 'text', label: 'Label (ex: Conforme NF C 15-100)' },
          },
        },
      },
    },
    cta: {
      label: 'Appel a l\'action',
      path: 'src/content/cta/index.json',
      fields: {
        badge: { type: 'text', label: 'Badge' },
        title: { type: 'text', label: 'Titre' },
        subtitle: { type: 'textarea', label: 'Sous-titre' },
        ctaLabel: { type: 'text', label: 'Texte du bouton' },
        ctaLink: { type: 'text', label: 'Lien du bouton' },
        trustBadges: { type: 'list', label: 'Badges de confiance', itemType: 'text' },
      },
    },
    'social-proof': {
      label: 'Preuve sociale (chiffres cles)',
      path: 'src/content/social-proof/index.json',
      fields: {
        stats: {
          type: 'list',
          label: 'Statistiques',
          itemType: 'object',
          fields: {
            value: { type: 'text', label: 'Valeur' },
            suffix: { type: 'text', label: 'Suffixe (ex: /5, +, km, %)' },
            label: { type: 'text', label: 'Label court' },
            sublabel: { type: 'text', label: 'Sous-label' },
            type: { type: 'select', label: 'Type', options: ['rating', 'text'] },
            accentColor: { type: 'select', label: 'Couleur accent', options: ['accent', 'primary'] },
          },
        },
      },
    },
    contact: {
      label: 'Section Contact',
      path: 'src/content/contact/index.json',
      fields: {
        sectionLabel: { type: 'text', label: 'Label section' },
        title: { type: 'text', label: 'Titre (debut)' },
        titleHighlight: { type: 'text', label: 'Titre (partie en couleur)' },
        subtitle: { type: 'textarea', label: 'Sous-titre' },
        sidebarTitle: { type: 'text', label: 'Titre sidebar' },
        zoneLabel: { type: 'text', label: 'Label zone' },
        zoneValue: { type: 'text', label: 'Zone principale' },
        zoneDetail: { type: 'text', label: 'Detail zone' },
        hoursLabel: { type: 'text', label: 'Label horaires' },
        satisfactionLabel: { type: 'text', label: 'Label satisfaction' },
      },
    },
    'site-info': {
      label: 'Informations du site',
      path: 'src/content/site-info/index.json',
      fields: {
        name: { type: 'text', label: 'Nom de l\'entreprise' },
        tagline: { type: 'text', label: 'Slogan' },
        phone: { type: 'text', label: 'Telephone' },
        email: { type: 'text', label: 'Email' },
        street: { type: 'text', label: 'Adresse' },
        city: { type: 'text', label: 'Ville' },
        postalCode: { type: 'text', label: 'Code postal' },
        hours: { type: 'textarea', label: 'Horaires' },
      },
    },
  },
  collections: {
    services: {
      label: 'Services',
      path: 'src/content/services/',
      format: { data: 'json' },
      fields: {
        slug: { type: 'text', label: 'Slug', readonly: true },
        title: { type: 'text', label: 'Titre du service' },
        description: { type: 'textarea', label: 'Description' },
        number: { type: 'text', label: 'Numero (01, 02...)' },
        badge: { type: 'text', label: 'Badge optionnel' },
        photo: { type: 'image', label: 'Photo' },
        photoAlt: { type: 'text', label: 'Texte alternatif photo' },
        icon: { type: 'text', label: 'SVG icon path (technique)' },
      },
    },
    faq: {
      label: 'Questions frequentes',
      path: 'src/content/faq/',
      format: { data: 'json' },
      fields: {
        slug: { type: 'text', label: 'Slug', readonly: true },
        question: { type: 'text', label: 'Question' },
        answer: { type: 'rich-text', label: 'Reponse' },
        order: { type: 'number', label: 'Ordre d\'affichage' },
      },
    },
    testimonials: {
      label: 'Temoignages',
      path: 'src/content/testimonials/',
      format: { data: 'json' },
      fields: {
        slug: { type: 'text', label: 'Slug', readonly: true },
        name: { type: 'text', label: 'Nom du client' },
        quote: { type: 'textarea', label: 'Temoignage' },
        context: { type: 'text', label: 'Contexte (type de travaux)' },
        initials: { type: 'text', label: 'Initiales' },
        color: { type: 'text', label: 'Classe Tailwind couleur avatar' },
        order: { type: 'number', label: 'Ordre d\'affichage' },
      },
    },
    gallery: {
      label: 'Galerie photos',
      path: 'src/content/gallery/',
      format: { data: 'json' },
      fields: {
        slug: { type: 'text', label: 'Slug', readonly: true },
        label: { type: 'text', label: 'Legende' },
        src: { type: 'image', label: 'Image' },
        alt: { type: 'text', label: 'Texte alternatif' },
        tag: { type: 'text', label: 'Tag/categorie' },
        featured: { type: 'boolean', label: 'Photo mise en avant' },
        order: { type: 'number', label: 'Ordre d\'affichage' },
      },
    },
  },
};
