/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	experimental: {
		reactCompiler: true,
		typedRoutes: false,
		cssChunking: 'loose',
		turbo: {
			resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.css', '.scss'],
		},
		optimizePackageImports: ['swiper', 'swiper/react', 'swiper/css', 'swiper/swiper-bundle'],
	},
}

export default nextConfig
