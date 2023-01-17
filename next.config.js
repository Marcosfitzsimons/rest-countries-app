/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
