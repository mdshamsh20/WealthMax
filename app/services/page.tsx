'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, FileText, ArrowRight, TrendingUp } from 'lucide-react';
import Services from '@/components/Services';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-16"
    >
      {/* HERO / INTRO */}
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-6 py-10 md:px-10 md:py-12 text-white shadow-2xl"
      >
        <div className="absolute inset-y-0 right-0 opacity-20 pointer-events-none">
          <div className="h-full w-72 md:w-96 bg-[radial-gradient(circle_at_top,_#ffffff66,_transparent_60%)]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Services
          </span>
          <h1 className="text-2xl md:text-4xl font-bold">
            Solutions for Every Stage of Your Investments
          </h1>
          <p className="text-xs md:text-sm text-blue-50 leading-relaxed">
            From complex transmission of shares to recovery of unclaimed dividends and long‑term
            wealth planning, WealthMax provides end‑to‑end support for your financial assets.
          </p>
        </div>
      </motion.section>

      {/* CATEGORY STRIP */}
      <motion.section
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-3 text-xs md:text-sm"
      >
        <div className="flex items-start gap-3 rounded-2xl bg-slate-800/80 backdrop-blur shadow-md border border-cyan-500/40 px-5 py-5">
          <div className="rounded-xl bg-cyan-500/20 p-3 border border-cyan-400/30">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <p className="font-semibold text-white">Transmission & recovery</p>
            <p className="text-gray-200">
              Transmission of investments, transfer of shares, and recovery of unclaimed dividends or deposits.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-800/80 backdrop-blur shadow-md border border-cyan-500/40 px-5 py-5">
          <div className="rounded-xl bg-cyan-500/20 p-3 border border-cyan-400/30">
            <FileText className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <p className="font-semibold text-white">Protection & insurance</p>
            <p className="text-gray-200">
              Adequate life insurance and general insurance advice tailored to your family&apos;s needs.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-800/80 backdrop-blur shadow-md border border-cyan-500/40 px-5 py-5">
            <div className="rounded-xl bg-cyan-500/20 p-3 border border-cyan-400/30">
            <TrendingUp className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <p className="font-semibold text-white">Growth & tax planning</p>
            <p className="text-gray-200">
              Mutual funds, fixed deposits, and tax‑efficient strategies for long‑term wealth creation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        variants={fadeUp}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-semibold text-slate-900">
            Detailed service offerings
          </h2>
          <p className="text-xs md:text-sm text-slate-500">
            Explore how we can help with each aspect of your portfolio.
          </p>
        </div>
        <Services />
      </motion.section>

      {/* CTA BLOCK */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl bg-slate-900 text-slate-50 px-6 py-8 md:px-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xl"
      >
        <div className="space-y-2 max-w-xl">
          <h3 className="text-lg md:text-xl font-semibold">
            Not sure which service you need?
          </h3>
          <p className="text-xs md:text-sm text-slate-300">
            Share your situation with us and we&apos;ll identify whether you need transmission
            support, unclaimed dividend recovery, protection planning, or a full wealth review.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-600 transition"
        >
          Talk to our team
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.section>
    </motion.div>
  );
}
