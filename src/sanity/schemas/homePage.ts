import { defineType, defineField, defineArrayMember } from "sanity";
import { HomeIcon } from "@sanity/icons";
import { heroObject } from "./_shared";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "feature", title: '"What We Do" Section' },
    { name: "approach", title: '"How We Work" Section' },
    { name: "editorial", title: '"Bainbridge Law" Editorial Section' },
  ],
  fields: [
    // Hero
    defineField({
      ...heroObject,
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryLabel",
      title: "Hero Primary Button Label",
      type: "string",
      group: "hero",
      initialValue: "Schedule Consultation",
    }),
    defineField({
      name: "heroSecondaryLabel",
      title: "Hero Secondary Button Label",
      type: "string",
      group: "hero",
      initialValue: "Our Practice",
    }),

    // Feature / What We Do
    defineField({
      name: "featureEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "feature",
      initialValue: "What We Do",
    }),
    defineField({
      name: "featureHeading",
      title: "Heading",
      type: "string",
      group: "feature",
    }),
    defineField({
      name: "featureBody",
      title: "Body",
      description:
        "Long-form copy. Separate paragraphs with a blank line. Renders as the cream-section body text.",
      type: "text",
      rows: 6,
      group: "feature",
    }),
    defineField({
      name: "pullQuote",
      title: "Pull Quote",
      description: "The italic centered quote inside the gold-rule frame.",
      type: "text",
      rows: 4,
      group: "feature",
    }),

    // Approach / How We Work
    defineField({
      name: "approachEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "approach",
      initialValue: "How We Work",
    }),
    defineField({
      name: "approachHeading",
      title: "Heading",
      type: "string",
      group: "approach",
    }),
    defineField({
      name: "approachSteps",
      title: "Steps",
      description: "Three steps with Roman-numeral markers (I, II, III).",
      type: "array",
      group: "approach",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "numeral",
              title: "Numeral",
              description: 'e.g. "I.", "II.", "III."',
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
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "numeral" },
          },
        }),
      ],
    }),

    // Editorial / "Quiet counsel..."
    defineField({
      name: "editorialEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "editorial",
      initialValue: "Bainbridge Law",
    }),
    defineField({
      name: "editorialHeading",
      title: "Heading",
      type: "string",
      group: "editorial",
    }),
    defineField({
      name: "editorialLede",
      title: "Lede",
      type: "text",
      rows: 4,
      group: "editorial",
    }),
    defineField({
      name: "editorialPrimaryLabel",
      title: "Primary Button Label",
      type: "string",
      group: "editorial",
      initialValue: "About the firm",
    }),
    defineField({
      name: "editorialSecondaryLabel",
      title: "Secondary Button Label",
      type: "string",
      group: "editorial",
      initialValue: "Practice areas",
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
