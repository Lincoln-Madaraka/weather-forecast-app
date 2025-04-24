import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // ✅ Enables static export
  trailingSlash: true       // ✅ Optional: avoids 404s on Netlify with folders
};

export default nextConfig;

