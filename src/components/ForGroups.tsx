"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: "01",
    title: "Stop scrolling through places you can't afford",
    description: "We only show you apartments that actually match what you're looking for — your budget, your timing, your must-haves.",
  },
  {
    number: "02",
    title: "Find people before you find a place",
    description: "The apartment search usually falls apart because the group falls apart. Find roommates who want the same things you do first.",
  },
  {
    number: "03",
    title: "Search together without the chaos",
    description: "Share listings, schedule tours, and make decisions in one place. No more scattered group chats.",
  },
];

export default function ForGroups() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="for-groups" className="py-32 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Why this works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Apartment hunting
            <br />
            <span className="text-gray-400">shouldn't be this hard.</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block text-sm font-semibold text-white bg-black px-3 py-1 rounded-full mb-6">
                {feature.number}
              </span>
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
