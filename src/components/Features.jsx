import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, BarChart3, Users, Bell, Shield, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Smart Screening',
    desc: 'Instantly ranks candidates with transparent rationale and bias guards.',
    icon: Sparkles,
    color: 'from-sky-400/80 to-blue-500/80',
  },
  {
    title: 'Auto Scheduling',
    desc: 'Time zones, calendars, and reminders—handled end‑to‑end.',
    icon: Clock,
    color: 'from-teal-400/80 to-cyan-500/80',
  },
  {
    title: 'Performance Insights',
    desc: 'Real-time dashboards and predictive nudges that improve outcomes.',
    icon: BarChart3,
    color: 'from-purple-400/80 to-indigo-500/80',
  },
  {
    title: 'Lifecycle Management',
    desc: 'Onboarding to offboarding—automations that feel human.',
    icon: Users,
    color: 'from-amber-400/80 to-orange-500/80',
  },
  {
    title: 'Live Notifications',
    desc: 'Stay in the loop with context-rich updates everywhere you work.',
    icon: Bell,
    color: 'from-emerald-400/80 to-teal-500/80',
  },
  {
    title: 'Built-in Compliance',
    desc: 'Auditable actions, secure storage, and regional policy packs.',
    icon: Shield,
    color: 'from-slate-400/80 to-slate-600/80',
  },
];

const AvatarDetail = ({ name, accent, title, body, reverse }) => (
  <div className={`grid items-center gap-8 md:grid-cols-2 ${reverse ? 'md:[&>div:first-child]::order-last' : ''}`}>
    <div className={`rounded-2xl p-1 ring-1 ring-black/5 bg-gradient-to-br ${accent}`}>
      <div className="rounded-[14px] bg-white/80 p-6 backdrop-blur-sm">
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-white to-sky-50 shadow-inner" />
      </div>
    </div>
    <div>
      <div className={`inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 ring-1 ring-slate-200`}>
        {name}
      </div>
      <h3 className="mt-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{body}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-white to-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Core Features</h2>
          <p className="mt-3 text-slate-600">
            Subtle interactions, playful icons, and precise automation working together.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, color }, i) => (
            <motion.div
              key={title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600">{desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-900">
                Learn more <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Avatar detail cards */}
        <div className="mt-20 space-y-14">
          <AvatarDetail
            name="Ava • Recruiter Bot"
            accent="from-sky-100 to-blue-100"
            title="Candidate Magic"
            body="Glowing candidate cards, fair ranking, and delightful outreach—all in Ava's calm, confident style."
          />
          <AvatarDetail
            name="Hugo • Scheduler Bot"
            accent="from-teal-100 to-cyan-100"
            title="Schedules That Schedule Themselves"
            body="Calendar chaos dissolves. Hugo aligns time zones, sends reminders, and reschedules with a smile."
            reverse
          />
          <AvatarDetail
            name="Mira • Insights Bot"
            accent="from-purple-100 to-fuchsia-100"
            title="Stories Hidden in Data"
            body="Mira reveals patterns and nudges progress with graceful, readable dashboards."
          />
        </div>

        {/* Workflow timeline */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900">Workflow Timeline</h3>
            <p className="mt-2 text-slate-600">A playful 4‑step path from job post to insights.</p>
          </div>
          <div className="relative mx-auto mt-10 max-w-4xl">
            <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-sky-200 to-purple-200 sm:block" />
            <div className="space-y-10">
              {[
                { t: 'Job Post', d: 'Create or import roles with branded touchpoints.' },
                { t: 'AI Screening', d: 'Shortlists appear with rationale and fit signals.' },
                { t: 'Auto Scheduling', d: 'Calendars align, invites fly, reminders land.' },
                { t: 'Insight Reports', d: 'See outcomes, velocity, and engagement health.' },
              ].map((step, i) => (
                <motion.div
                  key={step.t}
                  initial={{ x: i % 2 ? 30 : -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  className="relative grid gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 sm:ml-16"
                >
                  <div className="pointer-events-none absolute -left-16 top-5 hidden h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-purple-500 text-white shadow-md sm:flex items-center justify-center">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-slate-900">{step.t}</h4>
                  </div>
                  <p className="text-slate-600">{step.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* About + Vision/Mission */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
            <h3 className="text-2xl font-bold text-slate-900">Human-Centered HR Automation</h3>
            <p className="mt-2 text-slate-600">
              A diverse team collaborating with a holographic AI helper—cozy, creative, and kind. Hire HR blends tech precision with artistic warmth to make HR joyful again.
            </p>
            <div className="mt-5 h-36 w-full rounded-xl bg-gradient-to-br from-sky-50 to-purple-50" />
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 p-6 ring-1 ring-sky-100">
              <h4 className="text-lg font-bold text-slate-900">Vision</h4>
              <p className="mt-1 text-slate-600">To empower every company with AI that understands people.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 ring-1 ring-purple-100">
              <h4 className="text-lg font-bold text-slate-900">Mission</h4>
              <p className="mt-1 text-slate-600">To automate the tedious so HR can focus on humans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
