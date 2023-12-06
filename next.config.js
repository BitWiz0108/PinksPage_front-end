/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  publicRuntimeConfig: {
    site: {
      name: "PinksPage",
      url:
        process.env.NODE_ENV === "development"
          ? "https://pinkspage.netlify.app"
          : "https://pinkspage.io",
      title: "PinksPage",
      description:
        "",
      socialPreview: "/images/preview.jpg",
    },
  },
  images: {
    domains: [
      "pinkspage.netlify.app",
      "pinkspage.io",
      "www.pinkspage.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
