"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Ready to find
            <br />
            your people?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl mx-auto">
            Launching soon in NYC and LA. Join the waitlist to get early access.
          </p>

          <motion.a
            href="https://forms.gle/HPdyjnAsUog9wiS67"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-black text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Request Access
          </motion.a>

          <p className="text-sm text-gray-400 mt-6">
            Free to join. No strings attached.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
