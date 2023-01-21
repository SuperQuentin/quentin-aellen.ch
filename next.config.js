/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'fr-CH'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'fr-CH',
  },
  images: {
    domains: ['unsplash.com', 'source.unsplash.com'],
    remotePatterns: [{
      protocol: "https",
      hostname: "s3.*.amazonaws.com"
    }]
  }
}

module.exports = nextConfig
