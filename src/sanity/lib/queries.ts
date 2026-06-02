import { defineQuery } from "next-sanity";

// =====================================================
// Site Settings (globals)
// =====================================================
export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0]{
    firmTagline,
    headerCtaLabel,
    phone,
    email,
    hours,
    barAdmissions,
    ctaHeading,
    ctaSubtitle,
    ctaPrimaryLabel,
    ctaSecondaryLabel,
    footerPracticeHeading,
    footerPracticeLinks,
    footerFirmHeading,
    footerReachUsHeading,
    footerServiceArea,
    footerDisclaimer,
    copyrightSuffix
  }`,
);

export type SiteSettings = {
  firmTagline: string | null;
  headerCtaLabel: string | null;
  phone: string | null;
  email: string | null;
  hours: string | null;
  barAdmissions: string | null;
  ctaHeading: string | null;
  ctaSubtitle: string | null;
  ctaPrimaryLabel: string | null;
  ctaSecondaryLabel: string | null;
  footerPracticeHeading: string | null;
  footerPracticeLinks: string[] | null;
  footerFirmHeading: string | null;
  footerReachUsHeading: string | null;
  footerServiceArea: string | null;
  footerDisclaimer: string | null;
  copyrightSuffix: string | null;
} | null;

// =====================================================
// Page singletons
// =====================================================
export const HOME_PAGE_QUERY = defineQuery(
  `*[_type == "homePage"][0]{
    hero,
    heroPrimaryLabel,
    heroSecondaryLabel,
    featureEyebrow,
    featureHeading,
    featureBody,
    pullQuote,
    approachEyebrow,
    approachHeading,
    approachSteps[]{ _key, numeral, title, body },
    editorialEyebrow,
    editorialHeading,
    editorialLede,
    editorialPrimaryLabel,
    editorialSecondaryLabel
  }`,
);

export type Hero = { eyebrow: string | null; heading: string | null; subtitle: string | null } | null;

export type HomePage = {
  hero: Hero;
  heroPrimaryLabel: string | null;
  heroSecondaryLabel: string | null;
  featureEyebrow: string | null;
  featureHeading: string | null;
  featureBody: string | null;
  pullQuote: string | null;
  approachEyebrow: string | null;
  approachHeading: string | null;
  approachSteps:
    | { _key: string; numeral: string; title: string; body: string }[]
    | null;
  editorialEyebrow: string | null;
  editorialHeading: string | null;
  editorialLede: string | null;
  editorialPrimaryLabel: string | null;
  editorialSecondaryLabel: string | null;
} | null;

export const ABOUT_PAGE_QUERY = defineQuery(
  `*[_type == "aboutPage"][0]{
    hero,
    practiceEyebrow,
    practiceHeading,
    practiceLede,
    practiceBody,
    valuesEyebrow,
    valuesHeading,
    values[]{ _key, label, title, body },
    approachEyebrow,
    approachHeading,
    phases[]{ _key, number, title, subhead, body }
  }`,
);

export type AboutPage = {
  hero: Hero;
  practiceEyebrow: string | null;
  practiceHeading: string | null;
  practiceLede: string | null;
  practiceBody: string | null;
  valuesEyebrow: string | null;
  valuesHeading: string | null;
  values:
    | { _key: string; label: string; title: string; body: string }[]
    | null;
  approachEyebrow: string | null;
  approachHeading: string | null;
  phases:
    | {
        _key: string;
        number: string;
        title: string;
        subhead: string | null;
        body: string;
      }[]
    | null;
} | null;

export const PRACTICE_PAGE_QUERY = defineQuery(
  `*[_type == "practicePage"][0]{
    hero,
    whatWeDoEyebrow,
    whatWeDoHeading,
    whatWeDoBody,
    reasonsEyebrow,
    reasonsHeading,
    reasonsBody,
    reasons
  }`,
);

export type PracticePage = {
  hero: Hero;
  whatWeDoEyebrow: string | null;
  whatWeDoHeading: string | null;
  whatWeDoBody: string | null;
  reasonsEyebrow: string | null;
  reasonsHeading: string | null;
  reasonsBody: string | null;
  reasons: string[] | null;
} | null;

export const CONTACT_PAGE_QUERY = defineQuery(
  `*[_type == "contactPage"][0]{
    hero,
    sectionEyebrow,
    sectionHeading,
    sectionLede,
    sectionBody,
    labelBar,
    labelPhone,
    labelEmail,
    labelHours
  }`,
);

export type ContactPage = {
  hero: Hero;
  sectionEyebrow: string | null;
  sectionHeading: string | null;
  sectionLede: string | null;
  sectionBody: string | null;
  labelBar: string | null;
  labelPhone: string | null;
  labelEmail: string | null;
  labelHours: string | null;
} | null;

// =====================================================
// Practice areas (collection)
// =====================================================
export const PRACTICE_AREAS_QUERY = defineQuery(
  `*[_type == "practiceArea"] | order(order asc){
    _id, title, body, order
  }`,
);

export type PracticeArea = {
  _id: string;
  title: string;
  body: string;
  order: number;
};
