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
  title: "Daylock - Your Day. Locked. One Room at a Time.",
  description: "No to-do lists. No motivation hacks. Just structure, discipline, and proof. Join the waitlist for early access.",
  keywords: ["productivity", "discipline", "focus", "time management", "accountability"],
  openGraph: {
    title: "Daylock - Your Day. Locked.",
    description: "No to-do lists. No motivation hacks. Just structure, discipline, and proof.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daylock - Your Day. Locked.",
    description: "No to-do lists. No motivation hacks. Just structure, discipline, and proof.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
