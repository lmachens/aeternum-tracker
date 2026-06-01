/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: "export",
  images: {
    // GitHub Pages has no image optimization server, so serve images as-is.
    unoptimized: true,
  },
};

module.exports = nextConfig;
