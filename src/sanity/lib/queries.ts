import { defineQuery } from "next-sanity";

export const PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug == $slug][0]{
    heroEyebrow,
    heroHeading,
    heroSubtitle
  }`,
);

export const PRACTICE_AREAS_QUERY = defineQuery(
  `*[_type == "practiceArea"] | order(order asc){
    _id,
    title,
    body,
    order
  }`,
);

export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0]{
    firmTagline,
    phone,
    email,
    hours,
    barAdmissions,
    serviceArea,
    ctaHeading,
    ctaSubtitle,
    footerDisclaimer
  }`,
);

// Shared types
export type PageContent = {
  heroEyebrow: string | null;
  heroHeading: string | null;
  heroSubtitle: string | null;
} | null;

export type PracticeArea = {
  _id: string;
  title: string;
  body: string;
  order: number;
};

export type SiteSettings = {
  firmTagline: string | null;
  phone: string | null;
  email: string | null;
  hours: string | null;
  barAdmissions: string | null;
  serviceArea: string | null;
  ctaHeading: string | null;
  ctaSubtitle: string | null;
  footerDisclaimer: string | null;
} | null;
