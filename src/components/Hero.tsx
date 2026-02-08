"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[calc(100dvh)] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-20 pb-6 sm:pb-12 relative overflow-hidden">
      {/* Background floating images - only visible on large screens (1024px+) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {/* Top left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-24 left-[3%] lg:w-36 lg:h-44 xl:w-48 xl:h-60 rounded-2xl overflow-hidden shadow-lg"
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
          className="absolute bottom-24 left-[8%] lg:w-32 lg:h-40 xl:w-44 xl:h-56 rounded-2xl overflow-hidden shadow-lg"
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
          className="absolute top-28 right-[3%] lg:w-32 lg:h-40 xl:w-44 xl:h-56 rounded-2xl overflow-hidden shadow-lg"
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
          className="absolute bottom-20 right-[8%] lg:w-36 lg:h-44 xl:w-48 xl:h-60 rounded-2xl overflow-hidden shadow-lg"
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
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-black/5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Launching soon in NYC & LA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2rem] leading-[1.1] sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-6"
        >
          Find the right roommates.
          <br />
          <span className="text-gray-400">Then the right place.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-[280px] sm:max-w-md lg:max-w-2xl mx-auto mb-5 sm:mb-10"
        >
          A group-first way to find roommates and places that actually work.
        </motion.p>

        {/* Mobile image collage - shows before buttons on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5 lg:hidden"
        >
          <div className="flex gap-1.5 sm:gap-2 justify-center px-2">
            <div className="relative w-20 h-26 sm:w-32 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-md -rotate-3">
              <Image
                src="/hero-kitchen.jpg"
                alt="Friends in kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-20 h-26 sm:w-32 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-md translate-y-2">
              <Image
                src="/hero-1.jpg"
                alt="Friends gathering"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-20 h-26 sm:w-32 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-md rotate-3">
              <Image
                src="/hero-2.jpg"
                alt="Friends dancing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-6 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium w-full sm:w-auto transition-colors text-center max-w-xs"
          >
            Get Started
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02, backgroundColor: "#f5f5f5" }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-black text-black px-6 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium w-full sm:w-auto transition-colors text-center max-w-xs"
          >
            See How It Works
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
}
