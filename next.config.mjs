/** @type {import('next').NextConfig} */

import withLinaria from "next-with-linaria";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withLinaria(nextConfig);
