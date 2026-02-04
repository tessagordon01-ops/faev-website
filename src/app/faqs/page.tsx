"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "What is Faev?",
    answer: "Faev helps you find roommates you actually like, then find a place together. Instead of apartment hunting alone or with people you barely know, you find your group first — then search together.",
  },
  {
    question: "How does it work?",
    answer: "There are three ways to use Faev:\n\n1. Fill an Open Room — Have to resign your lease but one roommate is dropping out? Share your listing and we'll find someone who is actually a good fit. Found a listing online you're ready to sign on? Faev can find someone who fits your vibe that you can sign with.\n\n2. Find Roommates First — Looking alone? Find people who want the same neighborhoods and have similar budgets, then search together.\n\n3. Join a Group — Some groups are already looking and just need one more person. Jump in and start touring apartments this week.",
  },
  {
    question: "How does verification work?",
    answer: "Everyone on Faev verifies their identity with a government ID and a face match through our KYC partner. All communication happens in the app.",
  },
  {
    question: "Do you help us get the apartment?",
    answer: "We help you find your group and connect you with apartments or brokers — then we get out of the way. We make the intro, but the lease is between you and the landlord or property manager.",
  },
  {
    question: "What cities is Faev available in?",
    answer: "We're launching soon in NYC and LA.",
  },
  {
    question: "Is Faev free?",
    answer: "Yep. Free to use, no strings attached.",
  },
  {
    question: "How much does Faev cost for brokers or property managers?",
    answer: "Reach out to us for pricing!",
  },
  {
    question: "Do you do subleases?",
    answer: "No, subleases are not part of Faev. We focus on helping groups find long-term apartments together.",
  },
  {
    question: "How do I get started?",
    answer: "Request access through our waitlist and we'll let you know when you can join.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium pr-4">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-2xl"
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
        <p className="pb-6 text-gray-600">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQsPage() {
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
              FAQs
            </h1>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </motion.div>
        </section>

        {/* FAQ List */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a
              href="mailto:hello@faev.app"
              className="text-black font-medium underline underline-offset-4 hover:no-underline"
            >
              Reach out to us
            </a>
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
