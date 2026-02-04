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

export const metadata: Metadata = {
  title: "Faev | Find Your Perfect Roommate Group",
  description: "Connect with roommate groups and complete your apartment search together. The modern way to find your next home.",
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
