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
  title: "Hoyst - Your Notion is Now Your Blog",
  description: "The headless engine for writers and developers who live in Notion. Hoyst turns your database into a blazing-fast, SEO-powered blog with a workflow so seamless, you'll forget it's there.",
  keywords: "Notion, blog, headless CMS, publishing, SEO, workflow, content management, writing, developers",
  authors: [{ name: "Hoyst" }],
  creator: "Hoyst",
  publisher: "Hoyst",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://hoyst.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hoyst - Your Notion is Now Your Blog",
    description: "Turn your Notion database into a blazing-fast, SEO-powered blog",
    url: 'https://hoyst.co',
    siteName: 'Hoyst',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoyst - Your Notion is Now Your Blog",
    description: "Turn your Notion database into a blazing-fast, SEO-powered blog",
    creator: '@hoyst',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Hoyst',
    description: 'The headless engine for writers and developers who live in Notion. Turn your database into a blazing-fast, SEO-powered blog.',
    url: 'https://hoyst.co',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free during beta with 50% off for life for early adopters'
    },
    author: {
      '@type': 'Organization',
      name: 'Hoyst'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
