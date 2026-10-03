import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Mono, Outfit } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { CONFIG } from '@/data/config';
import { siteMetadata, jsonLd } from '@/lib/metadata';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s | ${CONFIG.name}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: CONFIG.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.url,
    siteName: CONFIG.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    // Image comes from src/app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteMetadata.twitterHandle,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmMono.variable} ${outfit.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden bg-background text-text-primary">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
