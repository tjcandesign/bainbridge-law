import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  // Singleton — only ever one document of this type.
  fields: [
    defineField({
      name: "firmTagline",
      title: "Firm Tagline",
      description: "Small label shown above the firm name (e.g. \"Attorneys at Law\").",
      type: "string",
      initialValue: "Attorneys at Law",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "(202) 516-6855",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
      initialValue: "office@bainbridge.law",
    }),
    defineField({
      name: "hours",
      title: "Office Hours",
      type: "text",
      rows: 2,
      initialValue: "Mon–Fri 9:00–5:00\nBy appointment otherwise",
    }),
    defineField({
      name: "barAdmissions",
      title: "Bar Admissions",
      description: "One per line. Shown in the Contact page block.",
      type: "text",
      rows: 2,
      initialValue: "District of Columbia\nMaryland",
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA Band — Heading",
      description: "The dark CTA band that appears at the bottom of every page.",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "Ready to discuss your matter.",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "CTA Band — Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Whether you are negotiating a purchase, structuring a new entity, or reviewing a contract, expect a thoughtful conversation and a clear next step.",
    }),
    defineField({
      name: "footerDisclaimer",
      title: "Footer Disclaimer",
      description: "Attorney advertising / disclaimer text shown in the footer.",
      type: "text",
      rows: 3,
      initialValue:
        "Attorney advertising. Prior results do not guarantee a similar outcome.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
