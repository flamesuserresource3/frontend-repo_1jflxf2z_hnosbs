import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'Great for trying the squad on a small team.',
    highlight: false,
    bg: 'bg-white',
    ring: 'ring-sky-100',
    extras: ['Basic automations', 'Community support', 'Up to 3 team members'],
    mascot: '🪄',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    desc: 'Everything you need to scale with confidence.',
    highlight: true,
    bg: 'bg-gradient-to-br from-sky-500 to-indigo-500 text-white',
    ring: 'ring-transparent',
    extras: ['All Starter features', 'Advanced insights', 'Unlimited automations'],
    mascot: '✨',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Security, controls, and VIP support.',
    highlight: false,
    bg: 'bg-white',
    ring: 'ring-slate-200',
    extras: ['SSO & SCIM', 'Regional data residency', 'Dedicated success manager'],
    mascot: '🏢',
  },
];

const Testimonial = ({ quote, name, role, avatar }) => (
  <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-sky-200 to-purple-200" />
      <div>
        <p className="text-slate-700">“{quote}”</p>
        <p className="mt-2 text-sm font-medium text-slate-900">{name}</p>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Pricing</h2>
          <p className="mt-3 text-slate-600">Friendly plans that glow with value.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06 }}
              className={`relative rounded-2xl p-5 shadow-xl ring-1 ${p.ring} ${p.bg}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 shadow">
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-bold ${p.highlight ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                <div className="text-2xl">{p.mascot}</div>
              </div>
              <p className={`mt-1 text-sm ${p.highlight ? 'text-white/90' : 'text-slate-600'}`}>{p.desc}</p>
              <div className={`mt-4 text-3xl font-extrabold ${p.highlight ? 'text-white' : 'text-slate-900'}`}>{p.price}</div>

              <ul className="mt-4 space-y-2">
                {p.extras.map((e) => (
                  <li key={e} className={`flex items-center gap-2 ${p.highlight ? 'text-white/90' : 'text-slate-700'}`}>
                    <Check className="h-4 w-4" />
                    {e}
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium shadow ${
                p.highlight
                  ? 'bg-white text-sky-700 hover:bg-white/90'
                  : 'bg-gradient-to-tr from-sky-500 to-teal-400 text-white hover:brightness-105'
              }`}>
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>

        {/* Team + Testimonials */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 p-6 ring-1 ring-sky-100">
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-sky-600" />
              <h3 className="text-lg font-bold text-slate-900">Our Team</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl bg-white p-3 shadow ring-1 ring-slate-200">
                  <div className="h-24 w-full rounded-lg bg-gradient-to-br from-sky-200 to-purple-200" />
                  <div className="mt-2 text-sm font-medium text-slate-900">Alex Doe</div>
                  <div className="text-xs text-slate-500">Design Lead</div>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/40" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 ring-1 ring-purple-100">
            <div className="mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">What People Say</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Testimonial quote="We hired faster with happier candidates." name="Priya K." role="Head of People" />
              <Testimonial quote="Scheduling magic. Our team loves Hugo!" name="Marco L." role="Recruiting Ops" />
              <Testimonial quote="Mira’s insights changed our reviews." name="Sara T." role="HRBP" />
              <Testimonial quote="Compliance made simple with Nora." name="Evan R." role="COO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
