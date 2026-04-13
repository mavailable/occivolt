import type { CmsConfig } from './cms.types';

// ============================================================
// Configuration CMS — Occi'Volt Electricite
// ============================================================

const cmsConfig: CmsConfig = {
  repo: 'mavailable/occivolt',
  branch: 'main',
  siteName: "Occi'Volt",

  singletons: {
    hero: {
      label: 'Hero (bandeau principal)',
      description: 'Titre, description et visuels du haut de page',
      path: 'src/content/hero/index.json',
      fields: {
        badge: { type: 'text', label: 'Badge au-dessus du titre' },
        title: { type: 'text', label: 'Titre principal (debut)' },
        titleHighlight: { type: 'text', label: 'Mot en surbrillance' },
        titleEnd: { type: 'text', label: 'Titre principal (fin)' },
        description: { type: 'text', label: 'Description sous le titre', multiline: true },
        ctaLabel: { type: 'text', label: 'Texte du bouton principal' },
        ctaLink: { type: 'text', label: 'Lien du bouton' },
        backgroundImage: { type: 'text', label: 'Image de fond (chemin)' },
        sideImage: { type: 'text', label: 'Photo laterale (chemin)' },
        sideImageAlt: { type: 'text', label: 'Texte alternatif photo laterale' },
      },
    },

    about: {
      label: 'A propos',
      description: 'Section presentation de l\'entreprise',
      path: 'src/content/about/index.json',
      fields: {
        sectionLabel: { type: 'text', label: 'Label section' },
        title: { type: 'text', label: 'Titre' },
        titleHighlight: { type: 'text', label: 'Partie en couleur du titre' },
        paragraphs: {
          type: 'array',
          label: 'Paragraphes de presentation',
          item: { type: 'text', label: 'Paragraphe', multiline: true },
        },
        keyPoints: {
          type: 'array',
          label: 'Points forts',
          itemLabel: 'label',
          item: {
            type: 'object',
            label: 'Point fort',
            fields: {
              label: { type: 'text', label: 'Titre' },
              desc: { type: 'text', label: 'Description' },
              icon: { type: 'text', label: 'Icone (lightning, location, check, currency)' },
            },
          },
        },
        floatingCard: {
          type: 'object',
          label: 'Badge flottant',
          fields: {
            value: { type: 'text', label: 'Valeur' },
            label: { type: 'text', label: 'Label' },
          },
        },
        ctaLabel: { type: 'text', label: 'Texte du bouton' },
        ctaLink: { type: 'text', label: 'Lien du bouton' },
        image: { type: 'image', label: 'Photo principale' },
        imageAlt: { type: 'text', label: 'Texte alternatif photo' },
      },
    },

    cta: {
      label: 'Appel a l\'action (bas de page)',
      description: 'Bandeau CTA final',
      path: 'src/content/cta/index.json',
      fields: {
        badge: { type: 'text', label: 'Badge' },
        title: { type: 'text', label: 'Titre' },
        subtitle: { type: 'text', label: 'Sous-titre', multiline: true },
        ctaLabel: { type: 'text', label: 'Texte du bouton' },
        ctaLink: { type: 'text', label: 'Lien du bouton' },
      },
    },

    'social-proof': {
      label: 'Chiffres cles',
      description: 'Statistiques de preuve sociale',
      path: 'src/content/social-proof/index.json',
      fields: {
        stats: {
          type: 'array',
          label: 'Statistiques',
          itemLabel: 'sublabel',
          item: {
            type: 'object',
            label: 'Statistique',
            fields: {
              value: { type: 'text', label: 'Valeur' },
              suffix: { type: 'text', label: 'Suffixe (/5, +, km, %)' },
              label: { type: 'text', label: 'Label principal' },
              sublabel: { type: 'text', label: 'Sous-label' },
            },
          },
        },
      },
    },

    contact: {
      label: 'Section Contact',
      description: 'Formulaire de contact + textes de la section',
      path: 'src/content/contact/index.json',
      fields: {
        sectionLabel: { type: 'text', label: 'Label section' },
        title: { type: 'text', label: 'Titre (debut)' },
        titleHighlight: { type: 'text', label: 'Titre (partie en couleur)' },
        subtitle: { type: 'text', label: 'Sous-titre', multiline: true },
        sidebarTitle: { type: 'text', label: 'Titre sidebar' },
        zoneLabel: { type: 'text', label: 'Label zone' },
        zoneValue: { type: 'text', label: 'Zone principale' },
        zoneDetail: { type: 'text', label: 'Detail zone' },
        hoursLabel: { type: 'text', label: 'Label horaires' },
        satisfactionLabel: { type: 'text', label: 'Label satisfaction' },
        web3formsKey: { type: 'text', label: 'Cle Web3Forms (formulaire)', description: 'Collez votre cle pour recevoir vos formulaires directement. Guide : marcm.fr/aide/web3forms' },
      },
    },

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

    seo: {
      label: 'SEO / Referencement',
      description: 'Nom du site et image de partage reseaux sociaux',
      path: 'src/content/seo/index.json',
      fields: {
        global: {
          type: 'object',
          label: 'Parametres globaux',
          fields: {
            siteName: { type: 'text', label: 'Nom du site (onglets navigateur)' },
            separator: { type: 'text', label: 'Separateur titre (ex: —)' },
            defaultOgImage: { type: 'image', label: 'Image de partage par defaut' },
          },
        },
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
