import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**"
            },
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    }
};

export default withNextIntl(nextConfig);
