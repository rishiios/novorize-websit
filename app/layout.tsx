import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexora Digital | Websites & Digital Marketing For Local Businesses",
  description: "Nexora Digital helps schools, clinics, restaurants and local businesses get more customers through websites, social media marketing and local SEO.",
  openGraph: {
    title: "Nexora Digital | Websites & Digital Marketing For Local Businesses",
    description: "Nexora Digital helps schools, clinics, restaurants and local businesses get more customers through websites, social media marketing and local SEO.",
    url: "https://patnasocialcult.in",
    siteName: "Nexora Digital",
    images: [
      {
        url: "https://patnasocialcult.in/social-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Digital | Websites & Digital Marketing For Local Businesses",
    description: "Nexora Digital helps schools, clinics, restaurants and local businesses get more customers through websites, social media marketing and local SEO.",
    images: ["https://patnasocialcult.in/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
