import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trisna Nur Arief — Mobile Developer (Flutter & Android)",
  description:
    "Portfolio of Trisna Nur Arief, a mobile developer from South Tangerang, Indonesia. Building cross-platform apps with Flutter & native Android — from the Ayo Lari fitness app for Telkomsel's Cooltura Run 5K (5,000+ participants) to IoT-powered fleet management systems at Fleetify.id.",
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
    title: "Trisna Nur Arief — Mobile Developer (Flutter & Android)",
    description:
      "I craft polished mobile apps with Flutter & native Android — from fitness tracking to IoT-powered fleet management.",
    siteName: "Trisna Nur Arief Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-zinc-100`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
