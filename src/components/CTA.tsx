"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Ready to find
            <br />
            your people?
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 mb-6 sm:mb-10 max-w-xs sm:max-w-xl mx-auto">
            Launching soon in NYC and LA. Join the waitlist to get early access.
          </p>

          <motion.a
            href="/signup"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-black text-white px-8 py-3 sm:px-10 sm:py-5 rounded-full text-base sm:text-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </motion.a>

          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
            Free to join. No strings attached.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
