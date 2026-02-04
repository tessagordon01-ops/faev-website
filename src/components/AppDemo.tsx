"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const demoScreens = [
  {
    id: 1,
    title: "Browse curated listings",
    description: "See apartments matched to your group's needs with compatibility scores",
    image: "/demo-1.png",
  },
  {
    id: 2,
    title: "Find your roommates",
    description: "Get matched with verified people based on lifestyle, budget, and preferences",
    image: "/demo-2.png",
  },
  {
    id: 3,
    title: "Chat with brokers",
    description: "Message verified brokers directly about listings you're interested in",
    image: "/demo-3.png",
  },
  {
    id: 4,
    title: "Create your group",
    description: "Start a housing group and invite friends with a shareable code",
    image: "/demo-4.png",
  },
  {
    id: 5,
    title: "Watch friends join",
    description: "See your group come together in real-time as friends join",
    image: "/demo-5.png",
  },
  {
    id: 6,
    title: "Join existing groups",
    description: "Enter a group code to join friends who are already searching",
    image: "/demo-6.png",
  },
];

export default function AppDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoScreens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="app-demo" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Here's how Faev works
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Screen selector */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              {demoScreens.map((screen, index) => (
                <motion.button
                  key={screen.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all ${
                    activeIndex === index
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-bold ${
                      activeIndex === index ? "text-white/50" : "text-gray-300"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-semibold">{screen.title}</h3>
                      <p className={`text-sm ${
                        activeIndex === index ? "text-white/70" : "text-gray-500"
                      }`}>
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Demo screen display */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={demoScreens[activeIndex].image}
                    alt={demoScreens[activeIndex].title}
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {demoScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? "bg-black w-6" : "bg-black/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
