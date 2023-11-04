/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["github.com", "lh3.googleusercontent.com"],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
