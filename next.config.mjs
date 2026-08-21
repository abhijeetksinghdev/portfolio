/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',      // Forces Next.js to generate static HTML/CSS/JS
  productionBrowserSourceMaps: false, // Completely disables the broken .js.map files
  images: {
    unoptimized: true,   // Required by Next.js for static exports
  },
};

export default nextConfig;
