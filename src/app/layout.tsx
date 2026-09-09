import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PersonJsonLd from "@/components/seo/person-json-ld";
import { siteUrl, socialImagePath } from "@/lib/site-config";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Trisna Nur Arief | Mobile and Frontend Developer",
  description:
    "Trisna Nur Arief is a Mobile Application Developer building Android and iOS apps, plus responsive frontend interfaces, dashboards, and web companions.",
  keywords: [
    "Trisna Nur Arief",
    "Mobile Developer",
    "Mobile Application Developer",
    "Flutter Developer",
    "Android Developer",
    "iOS Developer",
    "Frontend Web Developer",
    "React Developer",
    "Next.js Developer",
    "Responsive Web UI",
    "Offline-First Architecture",
    "REST API Integration",
    "Firebase",
    "Fleetify",
    "Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Trisna Nur Arief" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Trisna Nur Arief | Mobile and Frontend Developer",
    description:
      "Mobile applications for Android and iOS, with responsive frontend interfaces, dashboards, and web companions.",
    siteName: "Trisna Nur Arief",
    type: "website",
    url: "/",
    locale: "en_ID",
    images: [
      {
        url: socialImagePath,
        width: 1200,
        height: 630,
        alt: "Trisna Nur Arief | Mobile and Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trisna Nur Arief | Mobile and Frontend Developer",
    description:
      "Mobile applications for Android and iOS, with responsive frontend interfaces, dashboards, and web companions.",
    images: [socialImagePath],
  },
};

export const viewport: Viewport = {
  themeColor: "#eef4ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${jbMono.variable} antialiased bg-[#050505] text-[#f2efe9]`}>
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
