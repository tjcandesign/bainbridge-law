import type { StructureResolver } from "sanity/structure";
import { CogIcon, DocumentIcon, TagIcon } from "@sanity/icons";

// Custom Studio structure:
//  - Site Settings as a singleton at the top
//  - Pages and Practice Areas as regular document lists below
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),
      S.divider(),
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(
          S.documentTypeList("page")
            .title("Pages")
            .filter('_type == "page"'),
        ),
      S.listItem()
        .title("Practice Areas")
        .icon(TagIcon)
        .child(
          S.documentTypeList("practiceArea")
            .title("Practice Areas")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
    ]);
