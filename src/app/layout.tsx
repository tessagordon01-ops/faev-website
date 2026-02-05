import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  weight: "700",
  subsets: ["latin"],
});

const siteUrl = "https://faev.app";

export const metadata: Metadata = {
  title: "Faev | The First Roommate Discovery Platform Built With Groups In Mind",
  description:
    "Faev helps people find roommates, fill open seats, and apartment-hunt together — without the chaos of public housing groups, cold outreach, or unsafe listings.\n\nWhether you’re moving solo or already have a group, Faev helps you form the right match before you find the place.",
  openGraph: {
    title: "Faev | The First Roommate Discovery Platform Built With Groups In Mind",
    description:
      "Faev helps people find roommates, fill open seats, and apartment-hunt together — without the chaos of public housing groups, cold outreach, or unsafe listings.\n\nWhether you’re moving solo or already have a group, Faev helps you form the right match before you find the place.",
    url: siteUrl,
    siteName: "Faev",
    type: "website",
    images: [{ url: `${siteUrl}/logo.png`, width: 400, height: 160, alt: "Faev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faev | The First Roommate Discovery Platform Built With Groups In Mind",
    description:
      "Faev helps people find roommates, fill open seats, and apartment-hunt together — without the chaos of public housing groups, cold outreach, or unsafe listings.\n\nWhether you’re moving solo or already have a group, Faev helps you form the right match before you find the place.",
    images: [`${siteUrl}/logo.png`],
  },
  icons: {
    icon: [
      { url: `${siteUrl}/icon.png`, type: "image/png", sizes: "32x32" },
      { url: `${siteUrl}/icon.png`, type: "image/png", sizes: "192x192" },
      { url: `${siteUrl}/icon.png`, type: "image/png", sizes: "512x512" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Faev",
    statusBarStyle: "default",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Faev",
      alternateName: "Faev | Find Your Perfect Roommate Group",
      url: "https://faev.app",
      description:
        "Faev helps people find roommates, fill open seats, and apartment-hunt together — without the chaos of public housing groups, cold outreach, or unsafe listings.",
    },
    {
      "@type": "SiteNavigationElement",
      name: "For Property Managers",
      description: "Partner with Faev to connect with verified roommate groups ready to sign",
      url: "https://faev.app/property-manager",
    },
    {
      "@type": "SiteNavigationElement",
      name: "How It Works",
      description: "Learn how Faev helps you find roommates and apartments",
      url: "https://faev.app/#how-it-works",
    },
    {
      "@type": "SiteNavigationElement",
      name: "For Groups",
      description: "Why apartment hunting with Faev works better",
      url: "https://faev.app/#for-groups",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
