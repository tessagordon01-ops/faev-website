"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Apartments that make sense",
    description: "We show you places that fit what your group actually wants and can afford.",
  },
  {
    title: "Brokers who help",
    description: "Talk to brokers we've vetted who won't waste your time.",
  },
  {
    title: "Everyone stays in the loop",
    description: "Share listings, compare options, make decisions without 47 group texts.",
  },
  {
    title: "We make the intro",
    description: "We connect you with the right people, then get out of the way.",
  },
];

export default function GroupHunting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              After you find your people
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Then we introduce you
              <br />
              <span className="text-gray-400">to the right place.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Faev connects verified roommate groups directly with verified brokers and property managers who are ready to rent. No endless listings, no cold outreach, no wasted tours.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-l-2 border-black pl-4"
                >
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden aspect-square relative bg-gray-100">
              <Image
                src="/subway-girl.jpg"
                alt="Woman on NYC subway platform"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating UI card - broker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="hidden md:block absolute -left-8 top-1/4 bg-white rounded-2xl shadow-2xl p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Broker" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Marcus</p>
                  <p className="text-xs text-gray-500">Broker</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">"Found a few places you might like. Free tomorrow to see them?"</p>
            </motion.div>

            {/* Floating UI card - listing info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="hidden md:block absolute -right-4 bottom-8 bg-black text-white rounded-2xl shadow-2xl p-4"
            >
              <p className="font-bold">$4,200/mo</p>
              <p className="text-sm text-gray-300">3 bed in Williamsburg</p>
              <div className="flex gap-1 mt-2">
                <span className="px-2 py-0.5 bg-white/20 rounded text-xs">Pets ok</span>
                <span className="px-2 py-0.5 bg-white/20 rounded text-xs">W/D</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
