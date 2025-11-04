import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const FloatingOrb = ({ className }) => (
  <div className={`pointer-events-none absolute blur-2xl opacity-70 ${className}`} />
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      {/* Decorative gradient orbs and waves */}
      <FloatingOrb className="-top-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-teal-300/30 to-cyan-400/30" />
      <FloatingOrb className="top-40 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-purple-300/30 to-fuchsia-400/30" />
      <FloatingOrb className="bottom-0 left-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-yellow-200/40 to-orange-300/30" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 md:pt-32">
        <div className="relative z-10 grid w-full items-center gap-10 md:grid-cols-2">
          {/* Text block */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-200">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium">Friendly AI avatars for joyful HR</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              AI That Runs Your HR Department
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Hire HR blends precision and creativity. A playful, premium platform where a squad of AI avatars handles hiring, scheduling, insights, engagement and compliance—so your team can focus on humans.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(56, 189, 248, 0.35)' }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 px-5 py-3 text-white shadow-lg shadow-sky-200/60 ring-1 ring-sky-300/40"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-5 py-3 text-sky-700 ring-1 ring-sky-200 backdrop-blur-sm hover:bg-white"
              >
                <Play className="h-4 w-4" />
                See How It Works
              </motion.a>
            </div>
          </div>

          {/* 3D Spline scene */}
          <div className="relative h-[420px] w-full rounded-2xl bg-white/60 p-1 ring-1 ring-sky-100 shadow-xl">
            <div className="absolute inset-0 rounded-2xl">
              <Spline
                scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Soft overlays for depth (don't block interaction) */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-400/20 to-teal-300/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
