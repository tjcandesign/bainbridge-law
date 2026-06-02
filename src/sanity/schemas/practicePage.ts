import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";
import { heroObject } from "./_shared";

export const practicePage = defineType({
  name: "practicePage",
  title: "Practice Page",
  type: "document",
  icon: TagIcon,
  description:
    'The individual practice area cards are managed under "Practice Areas".',
  groups: [
    { name: "hero", title: "Hero" },
    { name: "whatWeDo", title: '"What We Do" Section' },
    { name: "reasons", title: '"Why Clients Choose Us" Section' },
  ],
  fields: [
    defineField({ ...heroObject, group: "hero" }),

    defineField({
      name: "whatWeDoEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "whatWeDo",
      initialValue: "What We Do",
    }),
    defineField({
      name: "whatWeDoHeading",
      title: "Heading",
      type: "string",
      group: "whatWeDo",
    }),
    defineField({
      name: "whatWeDoBody",
      title: "Intro Body",
      type: "text",
      rows: 4,
      group: "whatWeDo",
    }),

    defineField({
      name: "reasonsEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "reasons",
      initialValue: "Why Clients Choose Us",
    }),
    defineField({
      name: "reasonsHeading",
      title: "Heading",
      type: "string",
      group: "reasons",
    }),
    defineField({
      name: "reasonsBody",
      title: "Intro Body",
      type: "text",
      rows: 3,
      group: "reasons",
    }),
    defineField({
      name: "reasons",
      title: "Reasons",
      description: "Each one becomes a gold-checkmark list item.",
      type: "array",
      group: "reasons",
      of: [{ type: "string" }],
    }),
  ],
  preview: { prepare: () => ({ title: "Practice Page" }) },
});
