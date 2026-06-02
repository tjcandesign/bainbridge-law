import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const practiceArea = defineType({
  name: "practiceArea",
  title: "Practice Area",
  type: "document",
  icon: TagIcon,
  description:
    "Each card shown on the Practice page. Reorder by changing the Order number.",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      description:
        "Lower numbers appear first. Use 10, 20, 30 so you can slot new items between later without renumbering everything.",
      type: "number",
      initialValue: 10,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Order (ascending)",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", order: "order" },
    prepare: ({ title, order }) => ({
      title: title || "(untitled)",
      subtitle: typeof order === "number" ? `#${order}` : "no order",
    }),
  },
});
