/** @type {import('next').NextConfig} */

import withLinaria from "next-with-linaria";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
};

export default withLinaria(nextConfig);
