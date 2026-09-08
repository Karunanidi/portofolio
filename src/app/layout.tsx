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
  title: "Alex Carter — Full-Stack & Android Developer",
  description:
    "Portfolio of Alex Carter, a full-stack and Android mobile developer crafting responsive web platforms with React/Next.js and native Android apps with Kotlin & Jetpack Compose.",
  keywords: [
    "Full-Stack Developer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Alex Carter" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Alex Carter — Full-Stack & Android Developer",
    description:
      "I build end-to-end digital products — from responsive web platforms to polished native Android apps.",
    siteName: "Alex Carter Portfolio",
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
