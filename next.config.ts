// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**', // Allows ALL external domains (quick for development)
//       },
//     ],
//     // OR for production, list specific ones:
//     // domains: ['www.homewatchcaregivers.com', 'images.unsplash.com', 'images.pexels.com'],
//   },
// };

// export default nextConfig;










import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "standalone", // for Netlify SSR
};

export default nextConfig;
