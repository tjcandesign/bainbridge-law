// Embed the Sanity Studio at /studio.
// The actual <NextStudio /> render is in Studio.tsx — that file is a client
// component, which avoids SSR'ing Sanity's React-context tree (Sanity needs
// to run in the browser, not server-rendered).
import dynamic from "next/dynamic";

export { metadata, viewport } from "next-sanity/studio";

// Avoid prerendering this route at build time — Studio only runs client-side.
export const dynamicParams = true;
export const revalidate = 0;

const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
