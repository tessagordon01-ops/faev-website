"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PropertyManagerCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6">
              For Property Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              I'm a property
              <br />
              manager or broker.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-md">
              We have groups of verified renters looking for apartments right now. If you've got a place, we can help you fill it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/property-manager">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Learn More
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
      </div>
    </section>
  );
}
