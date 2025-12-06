"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-3xl px-6 py-12 md:px-10 md:py-16 shadow-2xl bg-slate-900/60 dark:bg-slate-900/60 border border-slate-800 backdrop-blur-sm"
    >
      {/* animated background blobs */}
      <div className="absolute inset-0 -z-20 animated-hero-gradient" />

      <div className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4 text-white dark:text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 dark:bg-cyan-400/15 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase backdrop-blur-sm border border-cyan-400/30 text-white">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Trusted investment partner
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            WealthMax Consultancy
          </h1>

          <p className="text-sm md:text-base text-gray-100 dark:text-gray-100 max-w-xl leading-relaxed">
            We help families recover, protect and grow wealth with pragmatic advice,
            clear documentation processes and long-term portfolio planning.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:from-cyan-400 hover:to-cyan-300 transition"
            >
              Book a free consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-white bg-slate-800/40 hover:bg-slate-800/60 hover:border-cyan-400/60 transition"
            >
              View our services
            </Link>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-3 text-[11px] md:text-sm">
            <div>
              <dt className="text-gray-300 dark:text-gray-300">Years</dt>
              <dd className="font-semibold text-white dark:text-white">10+ yrs</dd>
            </div>
            <div>
              <dt className="text-gray-300 dark:text-gray-300">Happy clients</dt>
              <dd className="font-semibold text-white dark:text-white">500+</dd>
            </div>
            <div>
              <dt className="text-gray-300 dark:text-gray-300">AUM advised</dt>
              <dd className="font-semibold text-white dark:text-white">Multiple crores</dd>
            </div>
          </dl>
        </div>

        {/* Illustration / Chart */}
        <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md">
              <svg viewBox="0 0 600 400" className="w-full h-auto hero-svg text-cyan-300">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#43c7d0" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="14" result="b" />
                    <feBlend in="SourceGraphic" in2="b" />
                  </filter>
                </defs>

                <rect className="hero-rect" x="0" y="0" width="600" height="400" rx="24" fill="url(#g1)" />

                {/* axes - use currentColor with different opacities via CSS */}
                <line x1="40" y1="340" x2="560" y2="340" strokeWidth="1" />
                <line x1="40" y1="340" x2="40" y2="40" strokeWidth="1" />

                {/* filled area + animated path */}
                <path d="M40 320 L110 260 L180 210 L250 180 L320 150 L390 120 L460 100 L520 80 L560 80 L560 340 L40 340 Z"
                  fill="url(#g1)" opacity="0.12" filter="url(#soft)" />

                <path d="M40 320 L110 260 L180 210 L250 180 L320 150 L390 120 L460 100 L520 80"
                  fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                  className="chart-path" />

                {/* markers */}
                <g fill="currentColor" opacity="0.95">
                  <circle cx="40" cy="320" r="4" />
                  <circle cx="110" cy="260" r="4" />
                  <circle cx="180" cy="210" r="4" />
                  <circle cx="250" cy="180" r="4" />
                  <circle cx="320" cy="150" r="4" />
                  <circle cx="390" cy="120" r="4" />
                  <circle cx="460" cy="100" r="4" />
                  <circle cx="520" cy="80" r="4" />
                </g>

                {/* labels - use currentColor so dark mode adapts */}
                <g className="chart-labels" fontSize="11" fontFamily="Arial, Helvetica, sans-serif" opacity="0.95">
                  <text x="46" y="336" fill="currentColor" fillOpacity="0.85">Jan</text>
                  <text x="180" y="336" fill="currentColor" fillOpacity="0.75">Mar</text>
                  <text x="320" y="336" fill="currentColor" fillOpacity="0.75">Jun</text>
                  <text x="520" y="336" fill="currentColor" fillOpacity="0.75">Dec</text>
                </g>
              </svg>
            </div>
        </div>
      </div>
    </motion.section>
  );
}
