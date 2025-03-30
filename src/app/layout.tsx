import "~/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Navbar from "./_components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fontBEVNPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-bevnpro",
  display: "swap",
});

// Default Metadata and Viewport
export const metadata: Metadata = {
  title: "GDVNPS",
  description: "GDVNPS Community - Geometry Dash Vietnam Private Server",
  authors: [{ name: "GDVNPS Community", url: "https://gdvnps.site/" }],
  keywords:
    "GDVNPS, GDPS, GDVNPS 2.2, GD, Geometry Dash, Dash, VNGDPS, GD 2.2, Geometry Dash 2.2, GDVN, Geometry Dash Việt Nam, GDPS Discord, GDPS Hub, GDPS Communtity",
  openGraph: {
    type: "website",
    siteName: "GDVNPS",
    locale: "vi_VN",
    images: [
      {
        url: "https://gdvnps.site/og_image.webp",
        width: 541,
        height: 400,
        alt: "GDVNPS's logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gdvnps",
    creator: "@gdvnps_community",
    images: "https://gdvnps.site/og_image.webp",
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "ịmage/png",
      sizes: "16x16",
      url: "favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      dir="ltr"
      className={`${inter.variable} ${fontBEVNPro.variable}`}
    >
      <body className="min-h-screen max-w-screen overflow-x-hidden bg-(--main-bg-col) font-(family:--font-main) break-words antialiased">
        <NextTopLoader color="#f97316" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
