import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  description:
    "Hero copy for each page. The slug determines which page on the site this document drives.",
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      description: "Used only inside the Studio for finding the document.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page",
      description:
        "Which page on the site does this drive? Choose one — must be unique.",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "About", value: "about" },
          { title: "Practice", value: "practice" },
          { title: "Contact", value: "contact" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      description: "Small uppercase label above the title.",
      type: "string",
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug" },
    prepare: ({ title, slug }) => ({
      title: title || "(untitled)",
      subtitle: slug ? `/${slug === "home" ? "" : slug}` : "no slug",
    }),
  },
});
