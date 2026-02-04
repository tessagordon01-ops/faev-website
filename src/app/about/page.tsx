"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Faev" width={100} height={40} className="h-10 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 hover:text-black transition-colors"
          >
            &larr; Back to Home
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="py-20 px-6">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600">
              We wanted to fix roommate hunting for everyone.
            </p>
          </motion.div>
        </section>

        {/* Founders Photo */}
        <section className="py-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/founders.jpg"
                alt="Tessa and Lili, founders of Faev"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg"
            >
              <p className="text-gray-600 mb-6">
                Finding roommates and apartments shouldn't be this hard. We built Faev because we've been through the frustration ourselves — endless scrolling, sketchy listings, and people who ghost after the first message.
              </p>
              <p className="text-gray-600 mb-6">
                Faev helps you find your people first, then find a place together. Everyone on the platform is verified with ID and face matching, so you know who you're actually talking to.
              </p>
              <p className="text-gray-600">
                We're launching soon in NYC and LA.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.a
              href="https://forms.gle/HPdyjnAsUog9wiS67"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Request Access
            </motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Faev" width={80} height={32} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Faev. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
