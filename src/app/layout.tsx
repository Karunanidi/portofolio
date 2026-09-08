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
  title: "Trisna Nur Arief — I Build Mobile Apps",
  description:
    "The story of Trisna Nur Arief, a mobile developer from South Tangerang, Indonesia. Scroll the story: from IT support at a five-star hotel to shipping Flutter & Android apps used by thousands — Ayo Lari for Telkomsel's Cooltura Run 5K, IoT-powered fleet systems at Fleetify.id.",
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
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Trisna Nur Arief — I Build Mobile Apps",
    description:
      "From first commit to Play Store release. A scroll-told story of shipping Flutter & Android apps for thousands of users.",
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
