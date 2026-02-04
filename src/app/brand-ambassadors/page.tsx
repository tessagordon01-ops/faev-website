"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const rewards = [
  { points: 100, reward: "$25 self-care gift card" },
  { points: 200, reward: "$50 drinks reward via Venmo" },
  { points: 300, reward: "$75 workout class gift card" },
  { points: 400, reward: "$100 spa day gift card" },
  { points: 500, reward: "$150 Venmo for Girls' Night Out" },
];

const pointsSystem = [
  { platform: "TikTok Video", points: 50 },
  { platform: "TikTok Static Post", points: 20 },
  { platform: "TikTok Story", points: 10 },
  { platform: "Instagram Reel", points: 50 },
  { platform: "Instagram Static Post", points: 20 },
  { platform: "Instagram Story", points: 10 },
];

const faqs = [
  {
    question: "Who can apply?",
    answer: "Anyone! The program seeks female-identifying individuals who are active on social media, passionate about housing/connection, excited to promote in LA and/or NYC, and available October-December 2025. Suggested qualifications include 500+ Instagram followers or 1,000+ TikTok followers with public accounts.",
  },
  {
    question: "What happens after I apply?",
    answer: "1. Application review within 3 business days\n2. Welcome email if accepted\n3. Addition to private ambassador group chat\n4. Receipt of content guide and start information",
  },
  {
    question: "What kind of content will I post?",
    answer: "Examples include moving tips, roommate searching advice, GRWM storytimes, aesthetic routines, and first-apartment moments. Ambassadors may pitch creative ideas.",
  },
  {
    question: "Will I get free merch?",
    answer: "Merch in waves — not everyone will receive it right away. Even without merch, you can still create content and win rewards.",
  },
  {
    question: "Do I have to live in LA or NYC?",
    answer: "No, but ambassadors should support those relocating to or living in these cities.",
  },
  {
    question: "How will I receive my prizes?",
    answer: "Prizes will be distributed either via Venmo or through the 'On Me' gift card platform. Ambassadors cannot choose distribution methods.",
  },
  {
    question: "What happens if my content doesn't meet guidelines?",
    answer: "Non-compliant content earns no points. Ambassadors may revise and resubmit.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium pr-4">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-xl"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-600 whitespace-pre-line">{faq.answer}</p>
      </motion.div>
    </div>
  );
}

export default function BrandAmbassadorsPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Faev" width={100} height={40} className="h-10 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 hover:text-black transition-colors"
          >
            &larr; Back to Home
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="py-20 px-6">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Brand Ambassador Program
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              If you are interested in applying for the Faev brand ambassador program, please visit the link below!
            </p>
            <motion.a
              href="https://forms.gle/o2FMRnhWwnb6XVui7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </section>

        {/* Points System */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">How the point system works</h2>
            <p className="text-gray-600 text-center mb-8">
              Points earned per approved post. Unlimited posts monthly. A shared tracker monitors progress.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pointsSystem.map((item) => (
                <div
                  key={item.platform}
                  className="bg-white p-4 rounded-xl flex justify-between items-center"
                >
                  <span>{item.platform}</span>
                  <span className="font-bold">{item.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">What can I win each month?</h2>
            <p className="text-gray-600 text-center mb-8">
              Points accumulate and unlock rewards. Only one prize redeems per threshold reached. Points deduct upon redemption.
            </p>
            <div className="space-y-3">
              {rewards.map((item) => (
                <div
                  key={item.points}
                  className="bg-gray-50 p-4 rounded-xl flex justify-between items-center"
                >
                  <span className="font-medium">{item.points} points</span>
                  <span className="text-gray-600">{item.reward}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to join?</h2>
            <motion.a
              href="https://forms.gle/o2FMRnhWwnb6XVui7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Faev" width={80} height={32} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Faev. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
