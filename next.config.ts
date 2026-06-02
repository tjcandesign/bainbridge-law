import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export disabled — embedded Sanity Studio at /studio needs server runtime.
  // Pages use ISR via the Sanity client's revalidate option (see src/sanity/client.ts).
  trailingSlash: true,
};

export default nextConfig;
