/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/automotive',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
