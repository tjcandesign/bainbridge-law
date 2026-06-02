import { defineField } from "sanity";

// Reusable "hero" object — eyebrow / heading / subtitle.
// Each page singleton embeds one of these.
export const heroObject = {
  name: "hero",
  title: "Hero",
  type: "object",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      description: "Small uppercase label above the heading.",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
  ],
};

// Helper: a collapsible "section" object containing common fields.
export const sectionHeaderFields = [
  defineField({
    name: "eyebrow",
    title: "Eyebrow",
    description: "Small uppercase label above the section heading.",
    type: "string",
  }),
  defineField({
    name: "heading",
    title: "Heading",
    type: "string",
    validation: (rule) => rule.required(),
  }),
];
