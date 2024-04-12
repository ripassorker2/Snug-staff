/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "codecommerze.com",
            "www.mashvisor.com",
            "mrwallpaper.com",
            "www.bankrate.com",
        ],
    },
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        CLIENT_ID: process.env.NEXT_AUTH_CLIENT_ID,
        CLIENT_SECRET: process.env.NEXT_AUTH_CLIENT_SECRET,
        GOOGLE_CLIENT_ID: process.env.NEXT_GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    },
};

export default nextConfig;
