import { defineType, defineField, defineArrayMember } from "sanity";
import { UserIcon } from "@sanity/icons";
import { heroObject } from "./_shared";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "practice", title: '"The Practice" Section' },
    { name: "values", title: '"Our Values" Section' },
    { name: "approach", title: '"Our Approach" Section' },
  ],
  fields: [
    defineField({ ...heroObject, group: "hero" }),

    // Practice section
    defineField({
      name: "practiceEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "practice",
      initialValue: "The Practice",
    }),
    defineField({
      name: "practiceHeading",
      title: "Heading",
      type: "string",
      group: "practice",
    }),
    defineField({
      name: "practiceLede",
      title: "Lede",
      description: "Larger italic intro line.",
      type: "text",
      rows: 3,
      group: "practice",
    }),
    defineField({
      name: "practiceBody",
      title: "Body",
      description: "Long-form copy. Separate paragraphs with a blank line.",
      type: "text",
      rows: 8,
      group: "practice",
    }),

    // Values section
    defineField({
      name: "valuesEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "values",
      initialValue: "Our Values",
    }),
    defineField({
      name: "valuesHeading",
      title: "Heading",
      type: "string",
      group: "values",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      group: "values",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              description: 'e.g. "Value 01"',
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: "title", subtitle: "label" } },
        }),
      ],
    }),

    // Approach section
    defineField({
      name: "approachEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "approach",
      initialValue: "Our Approach",
    }),
    defineField({
      name: "approachHeading",
      title: "Heading",
      type: "string",
      group: "approach",
    }),
    defineField({
      name: "phases",
      title: "Phases",
      description: "Numbered phases (01, 02, 03) shown as the From-first-call-to-final-signature list.",
      type: "array",
      group: "approach",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              description: 'Two-digit string e.g. "01".',
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "subhead",
              title: "Subhead",
              type: "string",
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "number" },
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
