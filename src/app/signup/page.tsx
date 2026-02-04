"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cities = ["New York City", "Los Angeles"];
const timelines = ["ASAP", "1–2 months", "3–6 months", "Just browsing"];
const lookingFor = [
  "Find roommates to apartment hunt with",
  "Join a roommate group (open seat)",
  "Fill an open seat in my group",
  "I already have a group, we need listings/brokers",
];

const nycNeighborhoods = [
  "Manhattan - Upper East Side",
  "Manhattan - Upper West Side",
  "Manhattan - Midtown",
  "Manhattan - Chelsea",
  "Manhattan - East Village",
  "Manhattan - West Village",
  "Manhattan - SoHo/Tribeca",
  "Manhattan - Lower East Side",
  "Manhattan - Financial District",
  "Brooklyn - Williamsburg",
  "Brooklyn - Bushwick",
  "Brooklyn - Greenpoint",
  "Brooklyn - Park Slope",
  "Brooklyn - DUMBO",
  "Brooklyn - Brooklyn Heights",
  "Brooklyn - Bed-Stuy",
  "Queens - Astoria",
  "Queens - Long Island City",
  "Jersey City",
  "Hoboken",
];

const laNeighborhoods = [
  "West Hollywood",
  "Silver Lake",
  "Los Feliz",
  "Echo Park",
  "Santa Monica",
  "Venice",
  "Mar Vista",
  "Culver City",
  "Beverly Grove",
  "Fairfax",
  "Koreatown",
  "Downtown LA",
  "Highland Park",
  "Eagle Rock",
  "Pasadena",
  "Burbank",
  "Studio City",
  "Sherman Oaks",
  "Brentwood",
  "Westwood",
];

const vibeOptions = [
  "Clean & tidy",
  "Relaxed about mess",
  "Early bird",
  "Night owl",
  "Homebody",
  "Very social",
  "Work from home",
  "Work in office",
  "Guests often",
  "Guests rarely",
  "Pet friendly",
  "No pets",
  "420 friendly",
  "Substance free",
  "Likes to host",
  "Quiet space",
];

const budgetRanges = [
  "Under $1,500",
  "$1,500 - $2,000",
  "$2,000 - $2,500",
  "$2,500 - $3,000",
  "$3,000 - $3,500",
  "$3,500+",
];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: "",
    otherCity: "",
    timeline: "",
    lookingFor: [] as string[],
    email: "",
    instagram: "",
    budget: "",
    neighborhoods: [] as string[],
    vibes: [] as string[],
    vibeText: "",
    dealbreakers: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referralLink, setReferralLink] = useState("");

  const handleLookingForToggle = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      lookingFor: prev.lookingFor.includes(option)
        ? prev.lookingFor.filter((o) => o !== option)
        : [...prev.lookingFor, option],
    }));
  };

  const handleNeighborhoodToggle = (neighborhood: string) => {
    setFormData((prev) => ({
      ...prev,
      neighborhoods: prev.neighborhoods.includes(neighborhood)
        ? prev.neighborhoods.filter((n) => n !== neighborhood)
        : [...prev.neighborhoods, neighborhood],
    }));
  };

  const handleVibeToggle = (vibe: string) => {
    if (formData.vibes.includes(vibe)) {
      setFormData((prev) => ({
        ...prev,
        vibes: prev.vibes.filter((v) => v !== vibe),
      }));
    } else if (formData.vibes.length < 5) {
      setFormData((prev) => ({
        ...prev,
        vibes: [...prev.vibes, vibe],
      }));
    }
  };

  const canProceedStep1 =
    (formData.city || formData.otherCity) &&
    formData.timeline &&
    formData.lookingFor.length > 0;

  const canProceedStep2 = formData.email;

  const handleSubmit = async () => {
    // Prevent double click
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: formData.city === "Other" ? formData.otherCity : formData.city,
          timeline: formData.timeline,
          lookingFor: formData.lookingFor,
          email: formData.email,
          instagram: formData.instagram,
          budget: formData.budget,
          neighborhoods: formData.neighborhoods,
          vibes: formData.vibes,
          vibeText: formData.vibeText,
          dealbreakers: formData.dealbreakers,
          referredBy: new URLSearchParams(window.location.search).get("ref") || "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setReferralLink(result.referralLink);
      } else {
        // Fallback referral link
        const refCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        setReferralLink(`${window.location.origin}/signup?ref=${refCode}`);
      }
    } catch (error) {
      // Fallback on error
      const refCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      setReferralLink(`${window.location.origin}/signup?ref=${refCode}`);
    }

    setStep(3);
    setIsSubmitting(false);
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
  };

  const getNeighborhoods = () => {
    if (formData.city === "New York City") return nycNeighborhoods;
    if (formData.city === "Los Angeles") return laNeighborhoods;
    return [];
  };

  return (
    <>
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

      <main className="min-h-screen bg-white pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          {/* Progress indicator */}
          {step < 3 && (
            <div className="flex gap-2 mb-8">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    s <= step ? "bg-black" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 1: Intent + City */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl font-bold mb-2">Let's get started</h1>
                <p className="text-gray-600 mb-8">Tell us about your move</p>

                {/* City */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">
                    Where are you moving / looking?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => setFormData({ ...formData, city, otherCity: "" })}
                        className={`px-4 py-2 rounded-full border-2 transition-all ${
                          formData.city === city
                            ? "border-black bg-black text-white"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                    <button
                      onClick={() => setFormData({ ...formData, city: "Other" })}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        formData.city === "Other"
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      Other
                    </button>
                  </div>
                  {formData.city === "Other" && (
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={formData.otherCity}
                      onChange={(e) =>
                        setFormData({ ...formData, otherCity: e.target.value })
                      }
                      className="mt-3 w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    />
                  )}
                </div>

                {/* Timeline */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Timeline</label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline}
                        onClick={() => setFormData({ ...formData, timeline })}
                        className={`px-4 py-2 rounded-full border-2 transition-all ${
                          formData.timeline === timeline
                            ? "border-black bg-black text-white"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Looking for */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-3">
                    What are you looking for? (select all that apply)
                  </label>
                  <div className="space-y-2">
                    {lookingFor.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleLookingForToggle(option)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                          formData.lookingFor.includes(option)
                            ? "border-black bg-black text-white"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className={`w-full py-4 rounded-full font-medium transition-all ${
                    canProceedStep1
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* Step 2: Contact + Preferences */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-400 hover:text-black mb-4 text-sm"
                >
                  &larr; Back
                </button>
                <h1 className="text-3xl font-bold mb-2">Almost there</h1>
                <p className="text-gray-600 mb-8">Tell us a bit about yourself</p>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                {/* Instagram */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Instagram <span className="text-gray-400 font-normal">(helps us verify you faster)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                    <input
                      type="text"
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      placeholder="username"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">
                    Budget range <span className="text-gray-400 font-normal">(per person/month)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`px-4 py-2 rounded-full border-2 transition-all text-sm ${
                          formData.budget === range
                            ? "border-black bg-black text-white"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Neighborhoods */}
                {(formData.city === "New York City" || formData.city === "Los Angeles") && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-3">
                      Preferred areas <span className="text-gray-400 font-normal">(select up to 5)</span>
                    </label>
                    <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1">
                      {getNeighborhoods().map((n) => (
                        <button
                          key={n}
                          onClick={() => handleNeighborhoodToggle(n)}
                          disabled={formData.neighborhoods.length >= 5 && !formData.neighborhoods.includes(n)}
                          className={`px-3 py-1.5 rounded-full border-2 transition-all text-sm ${
                            formData.neighborhoods.includes(n)
                              ? "border-black bg-black text-white"
                              : formData.neighborhoods.length >= 5
                              ? "border-gray-100 text-gray-300 cursor-not-allowed"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Vibe */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">
                    Roommate vibe <span className="text-gray-400 font-normal">(pick up to 5)</span>
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {vibeOptions.map((vibe) => (
                      <button
                        key={vibe}
                        onClick={() => handleVibeToggle(vibe)}
                        disabled={formData.vibes.length >= 5 && !formData.vibes.includes(vibe)}
                        className={`px-3 py-1.5 rounded-full border-2 transition-all text-sm ${
                          formData.vibes.includes(vibe)
                            ? "border-black bg-black text-white"
                            : formData.vibes.length >= 5
                            ? "border-gray-100 text-gray-300 cursor-not-allowed"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {vibe}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={formData.vibeText}
                    onChange={(e) => setFormData({ ...formData, vibeText: e.target.value })}
                    placeholder="Anything else? (optional)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Dealbreakers */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">
                    Dealbreakers <span className="text-gray-400 font-normal">(optional, lifestyle only)</span>
                  </label>
                  <textarea
                    value={formData.dealbreakers}
                    onChange={(e) => setFormData({ ...formData, dealbreakers: e.target.value })}
                    placeholder="e.g., No smoking indoors, need quiet after 10pm..."
                    rows={2}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!canProceedStep2 || isSubmitting}
                  className={`w-full py-4 rounded-full font-medium transition-all ${
                    canProceedStep2 && !isSubmitting
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Join the waitlist"}
                </button>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold mb-3">You're on the list!</h1>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Thanks — you're on the early access list. Want to move faster? Invite a roommate.
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <p className="text-sm font-medium mb-3">Share your referral link</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm"
                    />
                    <button
                      onClick={copyReferralLink}
                      className="px-4 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Each friend who signs up moves you up the waitlist
                  </p>
                </div>

                <div className="flex gap-3 justify-center">
                  <a
                    href={`https://twitter.com/intent/tweet?text=I%20just%20joined%20Faev%20to%20find%20roommates%20the%20smart%20way.%20Join%20me!&url=${encodeURIComponent(referralLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={`sms:?body=I%20just%20joined%20Faev%20to%20find%20roommates%20the%20smart%20way.%20Join%20me!%20${referralLink}`}
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                </div>

                <Link
                  href="/"
                  className="inline-block mt-8 text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Back to home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
