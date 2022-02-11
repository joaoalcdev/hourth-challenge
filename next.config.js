/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  images: {
    // domains: ['assets.vercel.com'],
    // formats: ['image/svg', 'image/webp', 'image/png', 'image/jpeg', 'image/jpg']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: true
}
