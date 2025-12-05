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
      {/* soft background shapes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-40" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-indigo-200 blur-3xl opacity-40" />
      </div>

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-6 py-12 md:px-10 md:py-16 text-white shadow-2xl"
      >
        <div className="absolute inset-y-0 right-0 opacity-20 pointer-events-none">
          <div className="h-full w-72 md:w-96 bg-[radial-gradient(circle_at_top,_#ffffff66,_transparent_60%)]" />
        </div>

        <div className="relative max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            <Sparkles className="h-3 w-3" />
            Trusted investment partner
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            WealthMax Consultancy
          </h1>

          <p className="text-sm md:text-base text-blue-50 leading-relaxed">
            WealthMax is a dedicated team of professionals with niche experience in managing
            mutual funds, portfolio management schemes, life and general insurance, fixed
            deposits, bonds, and recovery of unclaimed investments.
          </p>

          {/* BUTTONS -> sections */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow hover:bg-blue-50 transition"
            >
              Book a free consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              View our services
            </Link>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-4 text-[11px] md:text-sm">
            <div>
              <dt className="text-blue-100">Years of experience</dt>
              <dd className="font-semibold text-white">10+ years</dd>
            </div>
            <div>
              <dt className="text-blue-100">Families assisted</dt>
              <dd className="font-semibold text-white">500+ clients</dd>
            </div>
            <div>
              <dt className="text-blue-100">Assets advised</dt>
              <dd className="font-semibold text-white">Multiple crores</dd>
            </div>
          </dl>
        </div>
      </motion.section>

      {/* HIGHLIGHTS */}
      <motion.section
        variants={fadeUp}
        className="grid gap-6 md:grid-cols-3"
      >
        <div className="flex items-start gap-3 rounded-2xl bg-white/90 backdrop-blur shadow-sm border border-slate-100 px-4 py-4">
          <div className="rounded-xl bg-sky-50 p-2">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">
              Regulatory‑aware guidance
            </h3>
            <p className="text-xs text-slate-600">
              Help with IEPF, transmission, and recovery of unclaimed investments with proper documentation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white/90 backdrop-blur shadow-sm border border-slate-100 px-4 py-4">
          <div className="rounded-xl bg-emerald-50 p-2">
            <LineChart className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">
              Goal‑based planning
            </h3>
            <p className="text-xs text-slate-600">
              Portfolios aligned to major life goals instead of ad‑hoc product selection.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white/90 backdrop-blur shadow-sm border border-slate-100 px-4 py-4">
          <div className="rounded-xl bg-indigo-50 p-2">
            <Users className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">
              White‑glove support
            </h3>
            <p className="text-xs text-slate-600">
              High‑touch assistance for families managing multiple folios, nominees, and legacy holdings.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ABOUT SNIPPET */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl bg-white/90 backdrop-blur shadow-sm border border-slate-100 px-6 py-8 md:px-8 md:py-10 space-y-4"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          Built for real‑life investors
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
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
        className="rounded-3xl bg-white/95 backdrop-blur shadow-sm border border-slate-100 px-6 py-8 md:px-8 md:py-10 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 tracking-[0.18em] uppercase">
              Why families choose us
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              A partner for both clean‑up and long‑term planning
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl">
              Most investors come to WealthMax with scattered folios, missing documents, or
              unclaimed dividends. We help them first stabilise and recover, then design a
              portfolio that stays aligned with their life goals.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-2xl bg-slate-900 text-slate-50 px-5 py-4 shadow-lg">
            <div className="flex flex-col text-xs text-slate-300">
              <span>Average client rating</span>
              <span className="text-2xl font-semibold text-amber-400">4.9 / 5</span>
            </div>
            <div className="h-10 w-px bg-slate-700" />
            <div className="text-xs text-slate-300">
              <p>Multi‑year relationships</p>
              <p className="font-semibold text-slate-50">3+ years on average</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 space-y-2">
            <p className="font-semibold text-slate-900">Legacy & documentation</p>
            <p className="text-slate-600">
              Guidance on nominees, joint holdings, and paperwork so your investments can smoothly
              pass to the next generation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 space-y-2">
            <p className="font-semibold text-slate-900">Risk‑aligned portfolios</p>
            <p className="text-slate-600">
              Asset mix matched to your comfort level instead of chasing the highest returns at
              any cost.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 space-y-2">
            <p className="font-semibold text-slate-900">Ongoing check‑ins</p>
            <p className="text-slate-600">
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
        className="rounded-2xl bg-white/90 backdrop-blur shadow-sm border border-slate-200 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h3 className="text-base md:text-lg font-semibold text-slate-900">
            Ready to organise and grow your investments?
          </h3>
          <p className="text-xs md:text-sm text-slate-600">
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
