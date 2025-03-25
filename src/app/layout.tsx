import type { Metadata, Viewport } from 'next';
import { Inter as FontSans, Be_Vietnam_Pro } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap'
});

const fontBEVNPro = Be_Vietnam_Pro({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-bevnpro',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'GDVNPS',
	description: 'GDVNPS Community - Geometry Dash Vietnam Private Server',
	authors: [{ name: 'GDVNPS Community', url: 'https://gdvnps.site/' }],
	colorScheme: 'dark',
	keywords:
		'GDVNPS, GDPS, GDVNPS 2.2, GD, Geometry Dash, Dash, VNGDPS, GD 2.2, Geometry Dash 2.2, GDVN, Geometry Dash Việt Nam, GDPS Discord, GDPS Hub, GDPS Communtity',
	openGraph: {
		type: 'website',
		siteName: 'GDVNPS',
		locale: 'vi_VN',
		images: [
			{
				url: 'https://gdvnps.site/og_image.webp',
				width: 541,
				height: 400,
				alt: "GDVNPS's logo"
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		site: '@gdvnps',
		creator: '@gdvnps_community',
		images: 'https://gdvnps.site/og_image.webp'
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png'
	},
	manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: '#f97316'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi" dir="ltr">
			<body className={`${fontSans.variable} ${fontBEVNPro.variable} antialiased`}>
				<NextTopLoader color="#f97316" />
				{children}
			</body>
		</html>
	);
}
