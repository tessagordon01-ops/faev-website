"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const flows = [
  {
    id: "fill-seat",
    tag: "Have an apartment",
    title: "Fill an Open Room",
    description: "Got a room opening up? Share your listing and we'll help you find someone who's actually a good fit. We only show it to people looking for exactly what you have.",
    forWho: ["You have a place already", "Need to find a new roommate", "Want someone who fits in"],
    image: "/swap-image.jpg",
    cta: "Post Your Listing",
  },
  {
    id: "find-people",
    tag: "Starting solo",
    title: "Find Roommates First",
    description: "Looking for an apartment by yourself is exhausting. Find people who want the same neighborhoods, have similar budgets, and won't drive you crazy. Then look together.",
    forWho: ["You're looking alone right now", "Don't have a place yet", "Want to search with others"],
    image: "/find-roommates-new.jpg",
    cta: "Find Roommates",
  },
  {
    id: "join-group",
    tag: "Want to move fast",
    title: "Join a Group",
    description: "Some groups are already looking and just need one more person. Jump in and start touring apartments this week instead of spending a month finding people first.",
    forWho: ["Don't want to organize everything", "Want to move quickly", "Fine joining an existing crew"],
    image: "/join-group-nyc.jpg",
    cta: "See Open Groups",
  },
];

export default function UserFlows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <section id="how-it-works" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Three ways to start
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you have a place, have people, or have neither — there's a way in.
          </p>
        </motion.div>

        {/* Flow selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {flows.map((flow, index) => (
            <motion.button
              key={flow.id}
              onClick={() => setActiveFlow(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeFlow === index
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {flow.title}
            </motion.button>
          ))}
        </div>

        {/* Active flow content */}
        <motion.div
          key={activeFlow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
              <Image
                src={flows[activeFlow].image}
                alt={flows[activeFlow].title}
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {flows[activeFlow].tag}
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {flows[activeFlow].title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {flows[activeFlow].description}
            </p>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                This is for you if:
              </p>
              <ul className="space-y-3">
                {flows[activeFlow].forWho.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.a
              href="https://forms.gle/HPdyjnAsUog9wiS67"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {flows[activeFlow].cta}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
