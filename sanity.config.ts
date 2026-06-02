import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qnaco2kw";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-02-01";

export default defineConfig({
  name: "default",
  title: "Bainbridge Law",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    // Site Settings is a singleton — hide the "Create new" action for it.
    templates: (templates) =>
      templates.filter(({ schemaType }) => schemaType !== "siteSettings"),
  },
  document: {
    // Remove duplicate / delete actions for the singleton.
    actions: (input, context) =>
      context.schemaType === "siteSettings"
        ? input.filter(
            ({ action }) =>
              action !== "duplicate" && action !== "delete" && action !== "unpublish",
          )
        : input,
  },
});
