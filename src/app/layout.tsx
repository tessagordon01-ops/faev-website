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
  appleWebApp: {
    capable: true,
    title: "Faev",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
