import localFont from 'next/font/local'

const primaryFont = localFont({
	src: [
		{
			path: './files/Montserrat-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './files/Montserrat-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './files/Montserrat-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './files/Montserrat-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	display: 'swap',
})

export { primaryFont }
