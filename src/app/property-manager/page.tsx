"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Stop chasing individuals",
    description: "No more coordinating five different people who \"might\" want to live together. Our groups are already committed.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Every renter is verified",
    description: "Government ID + face match on every person. Know exactly who you're renting to before they even tour.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Fill units faster",
    description: "These groups have already figured out who they want to live with. They're not browsing — they're ready to sign.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Zero upfront cost",
    description: "Free to list. You only pay when we successfully match you with a group that signs a lease.",
  },
];

const painPoints = [
  "Tired of no-shows and last-minute cancellations?",
  "Frustrated by groups that fall apart before signing?",
  "Wasting time on unqualified leads?",
];

export default function PropertyManagerPage() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    units: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', units: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Faev" width={100} height={40} className="h-8 sm:h-10 w-auto invert" />
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            &larr; Back to Home
          </Link>
        </nav>
      </header>

      <main className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/10 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              For Brokers & Property Managers
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
              Verified groups.
              <br />
              <span className="text-gray-500">Ready to sign.</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              We send you roommate groups who&apos;ve already found each other, passed verification, and are actively looking for a place. No tire-kickers. No flakes.
            </p>

            {/* Pain points */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
              {painPoints.map((point, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-xs sm:text-sm text-gray-500 bg-white/5 px-3 py-1.5 rounded-full"
                >
                  {point}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Get Qualified Leads
            </motion.a>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={benefitsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Why brokers
                <br />
                <span className="text-gray-500">love working with us.</span>
              </h2>
            </motion.div>

            {/* Desktop: Grid */}
            <div className="hidden sm:grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Horizontal scroll */}
            <div className="sm:hidden">
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex-shrink-0 w-[80vw] snap-center bg-white/5 border border-white/10 p-5 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              {/* Scroll indicator dots */}
              <div className="flex justify-center gap-2 mt-2">
                {benefits.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-white/30"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works for PMs */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16">
              Simple process.
              <br />
              <span className="text-gray-500">Serious renters.</span>
            </h2>

            <div className="space-y-8 sm:space-y-12">
              {[
                { step: "1", title: "Tell us what you have", desc: "Share your available listings — takes 2 minutes. Multi-unit? We can bulk import." },
                { step: "2", title: "We match you with groups", desc: "Our algorithm finds groups whose budget, timing, and preferences match your units." },
                { step: "3", title: "You close the deal", desc: "Schedule tours, review verified profiles, and sign leases with groups who are ready to move." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 sm:gap-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-lg text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">100%</p>
                <p className="text-xs sm:text-sm text-gray-400">ID Verified</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">3-5</p>
                <p className="text-xs sm:text-sm text-gray-400">People per group</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">$0</p>
                <p className="text-xs sm:text-sm text-gray-400">Until you close</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/5">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Start getting leads.
              </h2>
              <p className="text-sm sm:text-lg text-gray-400">
                Tell us about your listings and we&apos;ll start matching you with qualified groups.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Company / Brokerage</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Available Units</label>
                  <select
                    value={formData.units}
                    onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white text-sm sm:text-base [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">How many units?</option>
                    <option value="1-5">1-5 units</option>
                    <option value="6-20">6-20 units</option>
                    <option value="21-50">21-50 units</option>
                    <option value="50+">50+ units</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">Anything else we should know?</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  placeholder="Neighborhoods you cover, types of units, timeline, etc."
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors resize-none text-sm sm:text-base placeholder:text-gray-600"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Started'}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-4 text-sm sm:text-base">Thanks! We&apos;ll be in touch within 24 hours.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-4 text-sm sm:text-base">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Faev" width={80} height={32} className="h-6 sm:h-8 w-auto invert" />
            </Link>
            <p className="text-xs sm:text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Faev. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
