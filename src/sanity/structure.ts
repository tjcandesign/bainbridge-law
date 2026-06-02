import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  HomeIcon,
  UserIcon,
  TagIcon,
  EnvelopeIcon,
  DocumentsIcon,
} from "@sanity/icons";

// Each "page" type is a singleton — Studio opens the existing doc directly
// rather than showing a list with a "Create new" action.
const singletonChild = (S: Parameters<StructureResolver>[0], type: string) =>
  S.documentTypeList(type)
    .title(type)
    .child((id) => S.document().documentId(id).schemaType(type));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(singletonChild(S, "siteSettings")),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(singletonChild(S, "homePage")),
      S.listItem()
        .title("About Page")
        .icon(UserIcon)
        .child(singletonChild(S, "aboutPage")),
      S.listItem()
        .title("Practice Page")
        .icon(TagIcon)
        .child(singletonChild(S, "practicePage")),
      S.listItem()
        .title("Contact Page")
        .icon(EnvelopeIcon)
        .child(singletonChild(S, "contactPage")),
      S.divider(),
      S.listItem()
        .title("Practice Areas")
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList("practiceArea")
            .title("Practice Areas")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
    ]);
