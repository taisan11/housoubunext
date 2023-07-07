/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// バンドルアナライザ
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const plugins = [
  withBundleAnalyzer
];


module.exports = withPlugins(plugins, nextConfig)