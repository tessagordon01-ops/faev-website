"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
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
                For our complete privacy policy, please visit{" "}
                <a
                  href="https://faev.app/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline underline-offset-4 hover:no-underline"
                >
                  faev.app/privacy-policy
                </a>
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Cookies</h2>
              <p className="text-gray-600 mb-6">
                This website uses cookies. We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Contact</h2>
              <p className="text-gray-600">
                If you have any questions about our privacy practices, please contact us at{" "}
                <a
                  href="mailto:hello@faev.app"
                  className="text-black underline underline-offset-4 hover:no-underline"
                >
                  hello@faev.app
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8 px-6 mt-20">
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
