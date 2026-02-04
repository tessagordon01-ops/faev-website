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
            <div className="relative">
              {/* Labels above photo */}
              <div className="flex justify-between mb-2 px-4 md:px-12">
                {/* Tessa label - left */}
                <div className="flex flex-col items-start">
                  <span className="font-[var(--font-script)] text-2xl md:text-3xl text-gray-800">Tessa</span>
                  <svg className="w-16 h-20 md:w-20 md:h-24 text-gray-800 ml-6" viewBox="0 0 80 100" fill="none">
                    <path d="M10 5 Q60 20, 50 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M42 65 L50 75 L40 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>

                {/* Lili label - right */}
                <div className="flex flex-col items-end">
                  <span className="font-[var(--font-script)] text-2xl md:text-3xl text-gray-800">Lili</span>
                  <svg className="w-16 h-20 md:w-20 md:h-24 text-gray-800 mr-6" viewBox="0 0 80 100" fill="none">
                    <path d="M70 5 Q20 20, 30 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M38 65 L30 75 L40 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </div>

              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/founders.jpg"
                  alt="Tessa and Lili, founders of Faev"
                  fill
                  className="object-cover"
                />
              </div>
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
                Faev began with a real post-grad problem. After graduating in 2023, Tessa assumed finding a roommate would feel as easy as it did in college. Instead, she found herself back in her childhood bedroom, scrolling through online housing groups that mixed real people with bots and scammers. Something that should have been simple felt chaotic and unsafe.
              </p>
              <p className="text-gray-600 mb-6">
                That experience sparked the idea for something better. When Tessa met Lili, they realized they shared the same frustration and the same vision. They wanted a calmer, safer, more thoughtful way for young people to move, find housing, and build community in new cities. A platform that welcomes everyone and focuses on real compatibility.
              </p>
              <p className="text-gray-600 mb-6">
                Together they created Faev, an AI-powered moving concierge that helps people find verified roommates, subleases, and new friends. Instead of browsing unmoderated feeds, users get connected with real, verified people by our AI that matches based on lifestyle and the things that matter.
              </p>
              <p className="text-gray-600 mb-6">
                Faev supports anyone navigating a move or a new chapter, whether across the country or across town. It's a way to build your circle, feel less alone, and start your next phase with confidence and connection. Launching in LA and NYC first.
              </p>
              <p className="text-gray-600 text-sm italic">
                Faev is open to people of all genders and backgrounds. We do not permit discriminatory listings or preferences, and we expect every user to follow Fair Housing requirements.
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
