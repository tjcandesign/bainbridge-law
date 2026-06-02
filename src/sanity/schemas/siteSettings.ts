import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

// Globals used across every page: header CTA, footer details, CTA band copy,
// contact info, attorney advertising disclaimer.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "general", title: "General" },
    { name: "contact", title: "Contact" },
    { name: "ctaBand", title: "CTA Band" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "firmTagline",
      title: "Firm Tagline",
      description:
        'Small label shown beneath the footer wordmark (e.g. "Attorneys at Law").',
      type: "string",
      group: "general",
      initialValue: "Attorneys at Law",
    }),
    defineField({
      name: "headerCtaLabel",
      title: "Header CTA Button Label",
      description: 'The gold button in the top navigation.',
      type: "string",
      group: "general",
      initialValue: "Schedule Consultation",
    }),

    // Contact
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required(),
      initialValue: "(202) 516-6855",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required().email(),
      initialValue: "office@bainbridge.law",
    }),
    defineField({
      name: "hours",
      title: "Office Hours",
      type: "text",
      rows: 2,
      group: "contact",
      initialValue: "Mon–Fri 9:00–5:00\nBy appointment otherwise",
    }),
    defineField({
      name: "barAdmissions",
      title: "Bar Admissions",
      description: "One per line.",
      type: "text",
      rows: 2,
      group: "contact",
      initialValue: "District of Columbia\nMaryland",
    }),

    // CTA Band
    defineField({
      name: "ctaHeading",
      title: "Heading",
      type: "string",
      group: "ctaBand",
      validation: (rule) => rule.required(),
      initialValue: "Ready to discuss your matter.",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      group: "ctaBand",
      initialValue:
        "Whether you are negotiating a purchase, structuring a new entity, or reviewing a contract, expect a thoughtful conversation and a clear next step.",
    }),
    defineField({
      name: "ctaPrimaryLabel",
      title: "Primary Button Label",
      type: "string",
      group: "ctaBand",
      initialValue: "Schedule Consultation",
    }),
    defineField({
      name: "ctaSecondaryLabel",
      title: "Secondary Button Label",
      type: "string",
      group: "ctaBand",
      initialValue: "Practice Areas",
    }),

    // Footer
    defineField({
      name: "footerPracticeHeading",
      title: "Practice Column Heading",
      type: "string",
      group: "footer",
      initialValue: "Practice",
    }),
    defineField({
      name: "footerPracticeLinks",
      title: "Practice Column Items",
      description: "Plain text labels shown under the Practice column.",
      type: "array",
      of: [{ type: "string" }],
      group: "footer",
      initialValue: ["Real Estate", "Contracts", "Business Formation"],
    }),
    defineField({
      name: "footerFirmHeading",
      title: "Firm Column Heading",
      type: "string",
      group: "footer",
      initialValue: "Firm",
    }),
    defineField({
      name: "footerReachUsHeading",
      title: "Reach-Us Column Heading",
      type: "string",
      group: "footer",
      initialValue: "Reach Us",
    }),
    defineField({
      name: "footerServiceArea",
      title: "Service Area Text",
      description: "Shown above phone/email in the footer (e.g. \"District of Columbia / Maryland\").",
      type: "text",
      rows: 2,
      group: "footer",
      initialValue: "District of Columbia\nMaryland",
    }),
    defineField({
      name: "footerDisclaimer",
      title: "Disclaimer",
      type: "text",
      rows: 3,
      group: "footer",
      initialValue:
        "Attorney advertising. Prior results do not guarantee a similar outcome.",
    }),
    defineField({
      name: "copyrightSuffix",
      title: "Copyright Suffix",
      description: 'Shown after the year (e.g. "Bainbridge Law, PLLC.")',
      type: "string",
      group: "footer",
      initialValue: "Bainbridge Law, PLLC.",
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
