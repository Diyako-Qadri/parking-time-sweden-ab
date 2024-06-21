import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Lägg till domänen för dina bilder
  },
};

export default withNextIntl(nextConfig);
