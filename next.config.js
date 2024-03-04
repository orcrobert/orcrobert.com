/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['next-themes']);

const nextConfig = {
  reactStrictMode: true,
  // Other Next.js configurations go here
};

module.exports = withPlugins([withTM()], nextConfig);
