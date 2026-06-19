import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matrix Dopers — Websites, SaaS & AI Solutions | Predators",
  description:
    "Premium website development, SaaS platforms, and AI-powered solutions by Matrix Dopers — a division of Predators. Built in Haldwani, Uttarakhand.",
  keywords: [
    "web development",
    "SaaS development",
    "AI integration",
    "website agency",
    "Haldwani",
    "Uttarakhand",
    "Matrix Dopers",
    "Predators",
  ],
  openGraph: {
    title: "Matrix Dopers — Websites, SaaS & AI Solutions",
    description:
      "Modern digital experiences that look premium, perform fast, and convert visitors into customers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
