"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Faev" width={100} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#for-groups"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            For Groups
          </Link>
          <Link
            href="/property-manager"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            I'm a Property Manager
          </Link>
          <motion.a
            href="https://forms.gle/HPdyjnAsUog9wiS67"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Request Access
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              className="w-full h-0.5 bg-black block origin-left"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-full h-0.5 bg-black block"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="w-full h-0.5 bg-black block origin-left"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link
                href="#for-groups"
                className="text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Groups
              </Link>
              <Link
                href="/property-manager"
                className="text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                I'm a Property Manager
              </Link>
              <a
                href="https://forms.gle/HPdyjnAsUog9wiS67"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full text-base font-medium mt-2 text-center"
              >
                Request Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
