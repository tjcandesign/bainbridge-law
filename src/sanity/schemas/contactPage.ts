import { defineType, defineField } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";
import { heroObject } from "./_shared";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "section", title: '"How To Reach Us" Section' },
    { name: "labels", title: "Contact Block Labels" },
  ],
  fields: [
    defineField({ ...heroObject, group: "hero" }),

    defineField({
      name: "sectionEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "section",
      initialValue: "How To Reach Us",
    }),
    defineField({
      name: "sectionHeading",
      title: "Heading",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "sectionLede",
      title: "Lede",
      type: "text",
      rows: 3,
      group: "section",
    }),
    defineField({
      name: "sectionBody",
      title: "Body",
      type: "text",
      rows: 4,
      group: "section",
    }),

    // Contact block labels (the small UPPERCASE labels above each value)
    defineField({
      name: "labelBar",
      title: "Bar Admissions Label",
      type: "string",
      group: "labels",
      initialValue: "Bar Admissions",
    }),
    defineField({
      name: "labelPhone",
      title: "Phone Label",
      type: "string",
      group: "labels",
      initialValue: "Phone",
    }),
    defineField({
      name: "labelEmail",
      title: "Email Label",
      type: "string",
      group: "labels",
      initialValue: "Email",
    }),
    defineField({
      name: "labelHours",
      title: "Hours Label",
      type: "string",
      group: "labels",
      initialValue: "Hours",
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
