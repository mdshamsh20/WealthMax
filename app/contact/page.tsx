'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you for contacting WealthMax. We will get back to you shortly.');
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-16"
    >
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-6 py-10 md:px-10 md:py-12 text-white shadow-2xl"
      >
        <div className="absolute inset-y-0 right-0 opacity-20 pointer-events-none">
          <div className="h-full w-72 md:w-96 bg-[radial-gradient(circle_at_top,_#ffffff66,_transparent_60%)]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Get in touch
          </span>
          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-xs md:text-sm text-blue-50 leading-relaxed">
            Have questions about transmission of investments, unclaimed dividends, or portfolio
            planning? Reach out and our team will be glad to help.
          </p>
        </div>
      </motion.section>

      {/* DETAILS + FORM */}
      <motion.section
        variants={fadeUp}
        className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
      >
        {/* Contact details card */}
        <div className="space-y-4 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm shadow-lg border border-cyan-500/30 px-6 py-8 text-sm md:text-base text-white">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-cyan-400" />
            <p>
              <span className="font-semibold text-white">Phone:</span> <span className="text-gray-200">+91‑XXXXXXXXXX</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-cyan-400" />
            <p>
              <span className="font-semibold text-white">Email:</span> <span className="text-gray-200">info@wealthmax.co.in</span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-cyan-400 mt-[3px]" />
            <p>
              <span className="font-semibold text-white">Address:</span> <span className="text-gray-200">Noida, Uttar Pradesh, India</span>
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Clock className="h-4 w-4 text-cyan-400" />
            <p className="text-sm">Office timings: Monday to Saturday, 10:00 AM – 6:00 PM (IST).</p>
          </div>

          <div className="mt-4 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 px-4 py-3 text-sm text-cyan-100">
            <p className="font-medium mb-2">💌 Prefer email?</p>
            <p>Share a brief summary of your situation and include folio or client IDs if available. Our team will review and revert with next steps.</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm dark:bg-slate-900/80 rounded-3xl border border-cyan-500/30 px-6 py-8 space-y-5 shadow-lg"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Name</label>
            <input
              required
              type="text"
              className="w-full rounded-xl border border-cyan-500/40 bg-slate-700/50 text-white px-4 py-3 text-sm placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Email</label>
            <input
              required
              type="email"
              className="w-full rounded-xl border border-cyan-500/40 bg-slate-700/50 text-white px-4 py-3 text-sm placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Subject</label>
            <input
              type="text"
              placeholder="Transmission, unclaimed dividends, planning, or other"
              className="w-full rounded-xl border border-cyan-500/40 bg-slate-700/50 text-white px-4 py-3 text-sm placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Share details like type of investment, approximate value, and time period."
              className="w-full rounded-xl border border-cyan-500/40 bg-slate-700/50 text-white px-4 py-3 text-sm placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:from-cyan-400 hover:to-cyan-300 transition duration-200"
          >
            Send message
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {status && (
            <p className="text-sm text-emerald-300 bg-emerald-500/20 border border-emerald-400/50 rounded-xl px-4 py-3 mt-2">
              ✓ {status}
            </p>
          )}
        </form>
      </motion.section>

      {/* MINI FAQ STRIP */}
      <motion.section
        variants={fadeUp}
        className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm shadow-lg border border-cyan-500/30 px-6 py-6 text-sm md:text-base text-white space-y-3"
      >
        <p className="font-semibold text-white text-base">📋 What to include in your first message</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>Type of investment: shares, mutual funds, deposits, insurance, or others.</li>
          <li>Whether the investor is currently in India or overseas (NRI).</li>
          <li>
            Any reference numbers you have: folio, client ID, demat account, policy or certificate numbers.
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
}
