/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["codecommerze.com", "www.mashvisor.com", "mrwallpaper.com"],
    },
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
};

export default nextConfig;
