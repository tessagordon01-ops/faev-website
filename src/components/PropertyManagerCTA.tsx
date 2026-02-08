"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PropertyManagerCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-14 sm:py-32 px-4 sm:px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="hidden sm:grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6">
              For Property Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              I&apos;m a property
              <br />
              manager or broker.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-md">
              We have groups of verified renters looking for apartments right now. If you&apos;ve got a place, we can help you fill it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Get Connected to Leads
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.span>
              </Link>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-lg font-semibold">Verified renters</p>
                <p className="text-sm text-gray-400">ID + face match</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Ready to sign</p>
                <p className="text-sm text-gray-400">Groups, not randoms</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Pricing</p>
                <p className="text-sm text-gray-400">Message us for details</p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-square relative max-w-md mx-auto">
              <Image
                src="/nyc-brownstones.jpg"
                alt="NYC brownstones"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="hidden sm:block absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="User" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&h=80&fit=crop&crop=face&fp-z=2" alt="User" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="User" fill className="object-cover" />
                  </div>
                </div>
                <span className="text-sm text-gray-500">+2 more</span>
              </div>
              <p className="font-semibold">Group of 5 verified renters</p>
              <p className="text-sm text-gray-500">Ready to sign • $4,500/mo budget</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-4">
              For Property Professionals
            </span>
            <h2 className="text-2xl font-bold mb-4">
              I&apos;m a property
              <br />
              manager or broker.
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              We have groups of verified renters looking for apartments right now. If you&apos;ve got a place, we can help you fill it.
            </p>
          </motion.div>

          {/* Mobile Image with floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6"
          >
            <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
              <Image
                src="/nyc-brownstones.jpg"
                alt="NYC brownstones"
                fill
                className="object-cover"
              />

              {/* Floating card inside image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute top-3 left-3 right-3 bg-white text-black p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="User" fill className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&h=80&fit=crop&crop=face&fp-z=2" alt="User" fill className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="User" fill className="object-cover" />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">+2 more</span>
                </div>
                <p className="font-semibold text-sm">Group of 5 verified renters</p>
                <p className="text-xs text-gray-500">Ready to sign • $4,500/mo budget</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <Link href="/signup" className="block">
              <span className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium w-full">
                Get Connected to Leads
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Mobile Benefits - Horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex-shrink-0 w-[40vw] snap-center bg-white/10 rounded-xl p-4"
            >
              <p className="font-semibold text-sm">Verified renters</p>
              <p className="text-xs text-gray-400">ID + face match</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex-shrink-0 w-[40vw] snap-center bg-white/10 rounded-xl p-4"
            >
              <p className="font-semibold text-sm">Ready to sign</p>
              <p className="text-xs text-gray-400">Groups, not randoms</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex-shrink-0 w-[40vw] snap-center bg-white/10 rounded-xl p-4"
            >
              <p className="font-semibold text-sm">Pricing</p>
              <p className="text-xs text-gray-400">Message us for details</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
