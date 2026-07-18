/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'cdn.prod.website-files.com', 'themexriver.com'],
  },
  // Remove experimental features that might cause SSR issues
  // experimental: {
  //   optimizeCss: true,
  //   forceSwcTransforms: true,
  // },
  // Add proper error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig