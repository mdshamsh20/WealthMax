'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheck,
  LineChart,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Hero from '@/components/Hero';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12 }}
      className="space-y-20 pb-8 relative"
    >
      {/* soft background shapes + decorative grid */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-decor-grid -z-20" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
          className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-sky-300 dark:bg-sky-700 blur-3xl opacity-40 dark:opacity-18 float-anim"
        />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute top-40 right-6 h-80 w-80 rounded-full bg-indigo-300 dark:bg-indigo-800 blur-3xl opacity-36 dark:opacity-16 spin-slow"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 h-44 w-44 rounded-2xl bg-rose-200 dark:bg-rose-700 blur-3xl opacity-28 dark:opacity-12 float-anim-slow"
        />
      </div>

      {/* HERO */}
      <Hero />

      {/* HIGHLIGHTS */}
      <motion.section
        variants={fadeUp}
        className="grid gap-6 md:grid-cols-3"
      >
        <div className="flex items-start gap-3 rounded-2xl bg-slate-800/80 dark:bg-slate-800/80 backdrop-blur shadow-md border border-cyan-500/40 px-5 py-5">
          <div className="rounded-xl bg-cyan-500/20 dark:bg-cyan-500/20 p-2.5 border border-cyan-400/30">
            <ShieldCheck className="h-5 w-5 text-cyan-400 dark:text-cyan-300" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-white dark:text-white">
              Regulatory‑aware guidance
            </h3>
            <p className="text-xs text-gray-200 dark:text-gray-200">
              Help with IEPF, transmission, and recovery of unclaimed investments with proper documentation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-800/80 dark:bg-slate-800/80 backdrop-blur shadow-md border border-cyan-500/40 px-5 py-5">
          <div className="rounded-xl bg-cyan-500/20 dark:bg-cyan-500/20 p-2.5 border border-cyan-400/30">
            <LineChart className="h-5 w-5 text-cyan-400 dark:text-cyan-300" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-white dark:text-white">
              Goal‑based planning
            </h3>
            <p className="text-xs text-gray-200 dark:text-gray-200">
              Portfolios aligned to major life goals instead of ad‑hoc product selection.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-800/80 dark:bg-slate-800/80 backdrop-blur shadow-md border border-cyan-500/40 px-5 py-5">
          <div className="rounded-xl bg-cyan-500/20 dark:bg-cyan-500/20 p-2.5 border border-cyan-400/30">
            <Users className="h-5 w-5 text-cyan-400 dark:text-cyan-300" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-white dark:text-white">
              White‑glove support
            </h3>
            <p className="text-xs text-gray-200 dark:text-gray-200">
              High‑touch assistance for families managing multiple folios, nominees, and legacy holdings.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ABOUT SNIPPET */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur shadow-lg border border-cyan-500/40 px-6 py-8 md:px-8 md:py-10 space-y-4"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-white dark:text-white flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-cyan-400" />
          Built for real‑life investors
        </h2>
        <p className="text-sm md:text-base text-gray-100 dark:text-gray-100 leading-relaxed">
          Wealthmax is not just a financial services company; we are a team of passionate experts
          who understand the intricate nuances of the financial landscape. Our collective
          expertise spans mutual funds, portfolio management schemes, life and general insurance,
          fixed deposits, bonds, and recovery of unclaimed investments.
        </p>
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        id="services"
        variants={fadeUp}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Core services we provide
          </h2>
          <span className="text-xs md:text-sm text-slate-500">
            Transmission, recovery, protection, and growth of your wealth
          </span>
        </div>
        <Services />
      </motion.section>

      {/* NEW SECTION: WHY FAMILIES CHOOSE US */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl bg-white/95 dark:bg-slate-800/80 backdrop-blur shadow-sm border border-slate-100 dark:border-slate-700 px-6 py-8 md:px-8 md:py-10 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <p className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-[11px] font-semibold text-blue-700 dark:text-blue-300 tracking-[0.18em] uppercase">
              Why families choose us
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              A partner for both clean‑up and long‑term planning
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Most investors come to WealthMax with scattered folios, missing documents, or
              unclaimed dividends. We help them first stabilise and recover, then design a
              portfolio that stays aligned with their life goals.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-2xl bg-slate-900 dark:bg-slate-900/50 text-slate-50 dark:text-slate-200 px-5 py-4 shadow-lg">
            <div className="flex flex-col text-xs text-slate-300 dark:text-slate-300">
              <span>Average client rating</span>
              <span className="text-2xl font-semibold text-amber-400">4.9 / 5</span>
            </div>
            <div className="h-10 w-px bg-slate-700 dark:bg-slate-700" />
            <div className="text-xs text-slate-300 dark:text-slate-300">
              <p>Multi‑year relationships</p>
              <p className="font-semibold text-slate-50 dark:text-slate-100">3+ years on average</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-700/30 px-4 py-4 space-y-2">
            <p className="font-semibold text-slate-900 dark:text-slate-100">Legacy & documentation</p>
            <p className="text-slate-600 dark:text-slate-300">
              Guidance on nominees, joint holdings, and paperwork so your investments can smoothly
              pass to the next generation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-700/30 px-4 py-4 space-y-2">
            <p className="font-semibold text-slate-900 dark:text-slate-100">Risk‑aligned portfolios</p>
            <p className="text-slate-600 dark:text-slate-300">
              Asset mix matched to your comfort level instead of chasing the highest returns at
              any cost.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-700/30 px-4 py-4 space-y-2">
            <p className="font-semibold text-slate-900 dark:text-slate-100">Ongoing check‑ins</p>
            <p className="text-slate-600 dark:text-slate-300">
              Regular reviews to adjust for new goals, tax rules, or market changes while keeping
              you informed.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PROCESS SECTION */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-50 px-6 py-8 md:px-8 md:py-10 space-y-6 shadow-xl"
      >
        <h2 className="text-xl md:text-2xl font-semibold">
          A simple, transparent 3‑step process
        </h2>
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Step 1
            </p>
            <h3 className="font-semibold">Discovery call</h3>
            <p className="text-slate-200">
              Understand your current holdings, family structure, and priorities for safety and growth.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Step 2
            </p>
            <h3 className="font-semibold">Clean‑up & recovery</h3>
            <p className="text-slate-200">
              Support with documentation, transmission of shares, and claiming unclaimed dividends or assets.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Step 3
            </p>
            <h3 className="font-semibold">Ongoing guidance</h3>
            <p className="text-slate-200">
              Set up a diversified plan and review it regularly so your portfolio always follows your goals.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        variants={fadeUp}
        className="space-y-6 relative"
      >
        <div className="absolute inset-x-4 -top-4 bottom-4 rounded-[2rem] bg-white/80 backdrop-blur-sm -z-10 border border-slate-100 shadow-[0_40px_80px_rgba(15,23,42,0.08)]" />

        <div className="text-center space-y-2 pt-6">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-4 py-1 text-[11px] font-semibold text-amber-700 tracking-[0.18em] uppercase">
            Our clients
          </span>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-xs md:text-sm text-slate-500">
            Genuine feedback from investors who trust WealthMax with their portfolios.
          </p>
        </div>

        <Testimonials />
      </motion.section>

      {/* MINI CONTACT STRIP (anchor target) */}
      <motion.section
        id="contact"
        variants={fadeUp}
        className="rounded-2xl bg-white/90 dark:bg-slate-800/80 backdrop-blur shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
            Ready to organise and grow your investments?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
            Share a few details and the WealthMax team will reach out with next steps.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
        >
          Go to contact page
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.section>
    </motion.div>
  );
}
