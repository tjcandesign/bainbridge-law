import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { practicePage } from "./practicePage";
import { contactPage } from "./contactPage";
import { practiceArea } from "./practiceArea";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  homePage,
  aboutPage,
  practicePage,
  contactPage,
  practiceArea,
];

// Types treated as singletons in the Studio structure (Create New is hidden,
// they appear as a single editable item).
export const SINGLETON_TYPES = new Set<string>([
  "siteSettings",
  "homePage",
  "aboutPage",
  "practicePage",
  "contactPage",
]);
