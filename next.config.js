/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withPlugins = require('next-compose-plugins');
// バンドルアナライザ
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [
  withBundleAnalyzer
];


module.exports = withPlugins(plugins, nextConfig)