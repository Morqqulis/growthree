import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '0.9375rem',
				// screens: {
				//    sm: '640px',
				//    md: '768px',
				//    lg: '1024px',
				//    xl: '1280px'
				// }
			},
			colors: {
				cgray: '#aeb4a6',
				cgreen: '#94de1d',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
	mode: 'jit',
}
export default config
