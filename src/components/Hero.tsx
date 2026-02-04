"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background floating images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-24 left-[3%] w-40 h-52 sm:w-44 sm:h-56 md:w-48 md:h-60 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/hero-1.jpg"
            alt="Friends gathering"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bottom left - offset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-24 left-[8%] w-36 h-48 sm:w-40 sm:h-52 md:w-44 md:h-56 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/hero-3.jpg"
            alt="Roommates hanging out"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Top right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-28 right-[3%] w-36 h-48 sm:w-40 sm:h-52 md:w-44 md:h-56 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/hero-2.jpg"
            alt="Friends dancing"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bottom right - offset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-20 right-[8%] w-40 h-52 sm:w-44 sm:h-56 md:w-48 md:h-60 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/hero-kitchen.jpg"
            alt="Friends having fun"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-black/5 rounded-full text-sm font-medium mb-6">
            Launching soon in NYC & LA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Find your people.
          <br />
          <span className="text-gray-400">Find your place.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Find roommates you actually like — and a place that works for all of you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://forms.gle/HPdyjnAsUog9wiS67"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium w-full sm:w-auto transition-colors text-center"
          >
            Request Access
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02, backgroundColor: "#f5f5f5" }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-medium w-full sm:w-auto transition-colors text-center"
          >
            See How It Works
          </motion.a>
        </motion.div>

      </div>

    </section>
  );
}
