import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { page } from "./page";
import { practiceArea } from "./practiceArea";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  practiceArea,
];
