'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, ShieldCheck, LineChart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
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
            About WealthMax
          </span>
          <h1 className="text-2xl md:text-4xl font-bold">Who We Are</h1>
          <p className="text-xs md:text-sm text-blue-50 leading-relaxed">
            WealthMax Consultancy is a dedicated team of professionals focused on bringing clarity,
            confidence, and control to your financial life.
          </p>
        </div>
      </motion.section>

      {/* IMAGE + TEXT GRID */}
      <motion.section
        variants={fadeUp}
        className="grid gap-8 md:grid-cols-[1.2fr,1fr] items-start"
      >
        <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
          <p>
            Our expertise covers mutual funds, portfolio management schemes, life and general
            insurance, fixed deposits, bonds, and the recovery of unclaimed investments. We help
            investors deal with blocked or forgotten assets and complex transmission issues so that
            hard‑earned wealth does not get lost in paperwork.
          </p>
          <p>
            Every client engagement is driven by transparency, integrity, and a strong focus on
            long‑term relationships. We take the time to understand your family structure, existing
            holdings, and risk comfort before suggesting any course of action.
          </p>
          <p>
            Whether you are consolidating scattered investments, reclaiming unclaimed dividends, or
            building a diversified portfolio, our role is to simplify the process and represent
            your best interests at every step.
          </p>
        </div>

        <div className="relative h-60 md:h-72 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/team.jpg"
            alt="WealthMax advisory team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-slate-950/70 text-slate-100 px-3 py-2 text-xs md:text-sm">
            <p className="font-semibold">A collaborative team you can talk to</p>
            <p className="text-slate-300">
              Advisors, operations, and documentation specialists working together on every case.
            </p>
          </div>
        </div>
      </motion.section>

      {/* HIGHLIGHT CARD */}
      <motion.section
        variants={fadeUp}
        className="rounded-3xl bg-blue-50 border border-blue-100 px-6 py-6 md:px-8 md:py-7 text-sm md:text-base text-blue-900 shadow-sm"
      >
        Our vision is to be the premier financial services firm for investors seeking professional
        support in managing and recovering their wealth with confidence.
      </motion.section>

      {/* VALUES STRIP WITH ICONS */}
      <motion.section
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-3 text-xs md:text-sm"
      >
        <div className="flex items-start gap-3 rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-4">
          <div className="rounded-xl bg-sky-50 p-2">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
          </div>
          <div>
            <p className="font-semibold text-slate-900">Integrity first</p>
            <p className="text-slate-600">
              Transparent processes and honest communication, even when it means asking you not to invest.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-4">
          <div className="rounded-xl bg-emerald-50 p-2">
            <LineChart className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <p className="font-semibold text-slate-900">Goal‑driven advice</p>
            <p className="text-slate-600">
              Portfolios built around education, retirement, and wealth‑creation milestones.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-4">
          <div className="rounded-xl bg-indigo-50 p-2">
            <Users className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <p className="font-semibold text-slate-900">Long‑term relationships</p>
            <p className="text-slate-600">
              Multi‑year partnerships with families who see us as their first call for financial decisions.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
