"use client";

// Embed the Sanity Studio at /studio.
//
// This page is intentionally a client component with `dynamic(..., { ssr: false })`
// because Sanity's runtime (used inside sanity.config.ts via `defineConfig`)
// calls React.createContext at module-load time. That throws under the
// server-side React runtime used during Next.js's prerender / data-collection
// pass. Loading the Studio purely client-side avoids that entirely.
import dynamic from "next/dynamic";

const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
