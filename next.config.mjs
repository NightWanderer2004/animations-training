/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
      MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
   },
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
