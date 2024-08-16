import DefaultLayout from '#layouts/DefaultLayout'
import { primaryFont } from '#settings/fonts/index'
import { homeMetadata } from '#settings/metadata'
import '#styles/index.scss'

export const metadata = homeMetadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={`group`} lang='en'>
			<body className={`${primaryFont.className}`}>
				<DefaultLayout full={true}>{children}</DefaultLayout>
			</body>
		</html>
	)
}
