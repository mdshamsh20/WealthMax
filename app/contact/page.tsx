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
        <div className="space-y-4 rounded-3xl bg-white shadow-sm border border-slate-100 px-5 py-6 text-sm md:text-base text-slate-700">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-blue-600" />
            <p>
              <span className="font-semibold">Phone:</span> +91‑XXXXXXXXXX
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-600" />
            <p>
              <span className="font-semibold">Email:</span> info@wealthmax.co.in
            </p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-blue-600 mt-[3px]" />
            <p>
              <span className="font-semibold">Address:</span> Noida, Uttar Pradesh, India
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" />
            <p>Office timings: Monday to Saturday, 10:00 AM – 6:00 PM (IST).</p>
          </div>

          <div className="mt-3 rounded-2xl bg-blue-50 border border-blue-100 px-3 py-3 text-xs text-blue-900">
            Prefer email? Share a brief summary of your situation and include folio or client IDs if
            available. Our team will review and revert with next steps.
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-white rounded-3xl border border-slate-100 px-5 py-6 space-y-4 shadow-sm"
        >
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800">Name</label>
            <input
              required
              type="text"
              className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800">Email</label>
            <input
              required
              type="email"
              className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800">Subject</label>
            <input
              type="text"
              placeholder="Transmission, unclaimed dividends, planning, or other"
              className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Share details like type of investment, approximate value, and time period."
              className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Send message
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {status && (
            <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 mt-1">
              {status}
            </p>
          )}
        </form>
      </motion.section>

      {/* MINI FAQ STRIP */}
      <motion.section
        variants={fadeUp}
        className="max-w-4xl mx-auto rounded-2xl bg-white shadow-sm border border-slate-100 px-5 py-5 text-xs md:text-sm text-slate-700 space-y-2"
      >
        <p className="font-semibold text-slate-900">What to include in your first message</p>
        <ul className="list-disc pl-5 space-y-1">
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
