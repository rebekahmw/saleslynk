/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
		OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    COMPANIES_HOUSE_API_KEY: process.env.COMPANIES_HOUSE_API_KEY,
	}
}

module.exports = nextConfig
