/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'www.ignant.com',
         },
      ],
   },
}

export default nextConfig
