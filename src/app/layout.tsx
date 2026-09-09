import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Trisna Nur Arief | Android and Flutter Developer",
  description:
    "Portfolio of Trisna Nur Arief, an Android and Flutter developer working on fleet operations software, Ayo Lari for 5,000+ participants, and the independent Mahirka learning product.",
  keywords: [
    "Trisna Nur Arief",
    "Mobile Developer",
    "Flutter Developer",
    "Android Developer",
    "Firebase",
    "Fleetify",
    "Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Trisna Nur Arief" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Trisna Nur Arief | Android and Flutter Developer",
    description:
      "Android and Flutter work across fleet operations, Ayo Lari, and the independent Mahirka learning product.",
    siteName: "Trisna Nur Arief",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
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
        {children}
      </body>
    </html>
  );
}
