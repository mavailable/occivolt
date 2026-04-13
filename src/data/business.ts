export const business = {
  name: "Occi'Volt Électricité",
  legalName: "Occi'Volt Électricité",
  shortName: "Occi'Volt",
  lang: "fr",
  country: "FR",
  tagline: "Votre électricien à Castelnaudary et dans tout le Lauragais",
  description: "Électricien pour particuliers à Castelnaudary et dans le Lauragais. Installation, rénovation, dépannage, mise en conformité. Devis gratuit, intervention rapide.",
  founder: "Tony",
  foundingDate: "2025-01",
  phone: "+33663627871",
  phoneDisplay: "06 63 62 78 71",
  email: "occivolt@gmail.com",
  url: "https://occivolt.pages.dev",
  address: {
    street: "Verdun-en-Lauragais",
    city: "Castelnaudary",
    postalCode: "11400",
    region: "Occitanie",
    department: "Aude",
    country: "FR",
  },
  geo: {
    latitude: 43.366,
    longitude: 2.059,
  },
  hours: [
    { day: "Lundi", open: "7h30", close: "17h00" },
    { day: "Mardi", open: "7h30", close: "17h00" },
    { day: "Mercredi", open: "7h30", close: "17h00" },
    { day: "Jeudi", open: "7h30", close: "17h00" },
    { day: "Vendredi", open: "7h30", close: "17h00" },
    { day: "Samedi", open: "Fermé", close: "Fermé" },
    { day: "Dimanche", open: "Fermé", close: "Fermé" },
  ],
  zone: {
    depannage: "30 km",
    chantiers: "50 km",
  },
  social: {
    instagram: "",
    facebook: "",
    googleBusiness: "https://www.google.com/search?q=Occi%27Volt+Electricit%C3%A9&si=AL3DRZGNtcdgKOqVhotcr-UG2kkYpwR2WO4qu3O00NmpwBmLneGp3eod73vuzkQQ6E33AxetHFQMkHfKSQ9y3si6gevohW4uBP1eA7FY80_QnWUh5NScwvo2StiPOikfrQvGkBhN-Xts",
  },
  seo: {
    defaultTitle: "Occi'Volt — Électricien à Castelnaudary | Devis gratuit",
    defaultDescription: "Électricien pour particuliers à Castelnaudary et dans le Lauragais. Installation, rénovation, dépannage, mise en conformité. Devis gratuit, intervention rapide.",
    ogImage: "/images/og-image.jpg",
  },
  rating: {
    value: "5.0",
    count: 2,
    platform: "Google",
  },
  schemaType: "Electrician",
} as const;

// ============================================================
// Data SEO technique (non editable par le client — doctrine wf-00-cms §7)
// Extrait du pages/index.astro pre-C1 pour centralisation dans schemas.ts.
// Modification = Marc uniquement via wf-11 (nouveaux horaires, nouvelle zone,
// nouveau moyen de paiement).
// ============================================================

// Web3Forms API key — cascade: CMS content → env var → cle Marc (defaut agence)
const WEB3FORMS_DEFAULT = '9667fcf8-c7da-4b7a-8432-0ec25215c75e';
export const web3formsDefault = WEB3FORMS_DEFAULT;
export const web3formsKey = import.meta.env.WEB3FORMS_KEY || WEB3FORMS_DEFAULT;

export const schemaData = {
  openingHours: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:00',
    },
  ],
  // areaServed avec GeoCircle (rayon 50km autour de Verdun-en-Lauragais)
  areaServed: [
    { '@type': 'City', name: 'Castelnaudary' },
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: '50000',
    },
  ],
  priceRange: '€€',
  paymentAccepted: [] as string[],
  sameAs: [business.social.googleBusiness].filter(Boolean),
} as const;
