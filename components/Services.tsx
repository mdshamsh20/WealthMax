// components/Services.tsx
'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileText,
  Building2,
} from 'lucide-react';
import { ComponentType, SVGProps } from 'react';

type Service = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  // same titles/descriptions as you already have
];

export default function Services() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.06, type: 'spring', stiffness: 120 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80
                     shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition" />
          <div className="p-6 flex flex-col gap-3 group">
            <div className="inline-flex items-center justify-center rounded-xl bg-blue-50 w-10 h-10 mb-1">
              <service.icon className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>
            <button className="mt-2 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
              Read more
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
