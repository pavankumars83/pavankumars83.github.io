import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saahvan.com"),
  title: {
    default: "Saahvan Solutions — Engineering Certainty. Maximizing Velocity.",
    template: "%s | Saahvan Solutions",
  },
  description:
    "Saahvan Solutions Private Limited is a global enterprise IT consulting and technology firm specializing in Enterprise Architecture, AI & Automation, Cloud Transformation, and Digital Transformation.",
  keywords: [
    "enterprise IT consulting",
    "AI automation",
    "cloud transformation",
    "digital transformation",
    "enterprise architecture",
    "software engineering",
    "data engineering",
    "cybersecurity",
  ],
  authors: [{ name: "Saahvan Solutions Private Limited" }],
  creator: "Saahvan Solutions",
  publisher: "Saahvan Solutions Private Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saahvan.com",
    siteName: "Saahvan Solutions",
    title: "Saahvan Solutions — Engineering Certainty. Maximizing Velocity.",
    description:
      "Global enterprise IT consulting firm specializing in AI, cloud, data engineering, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saahvan Solutions",
    description:
      "Global enterprise IT consulting firm specializing in AI, cloud, data engineering, and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
