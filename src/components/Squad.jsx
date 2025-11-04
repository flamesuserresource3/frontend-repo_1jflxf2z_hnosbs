import React from 'react';
import { motion } from 'framer-motion';

const avatars = [
  {
    name: 'Ava',
    role: 'Recruiter Bot',
    color: 'from-sky-400 via-sky-500 to-blue-600',
    accent: 'text-sky-600',
    bg: 'bg-gradient-to-br from-sky-50 to-blue-50',
    description: 'Confident and kind—finds great people fast with glowing candidate cards.',
    emoji: '📋',
  },
  {
    name: 'Hugo',
    role: 'Scheduler Bot',
    color: 'from-teal-400 via-cyan-400 to-sky-500',
    accent: 'text-teal-600',
    bg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
    description: 'Smiling pro at juggling calendars. Interviews land themselves.',
    emoji: '⏰',
  },
  {
    name: 'Mira',
    role: 'Insights Bot',
    color: 'from-purple-400 via-fuchsia-500 to-indigo-600',
    accent: 'text-purple-600',
    bg: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
    description: 'Calm and wise—turns data into stories with holographic clarity.',
    emoji: '🧠',
  },
  {
    name: 'Leo',
    role: 'Engagement Bot',
    color: 'from-yellow-400 via-amber-400 to-orange-400',
    accent: 'text-amber-600',
    bg: 'bg-gradient-to-br from-yellow-50 to-amber-50',
    description: 'Expressive and warm—keeps morale high with emojis and chat.',
    emoji: '💬',
  },
  {
    name: 'Nora',
    role: 'Compliance Bot',
    color: 'from-emerald-400 via-green-400 to-teal-500',
    accent: 'text-emerald-600',
    bg: 'bg-gradient-to-br from-emerald-50 to-green-50',
    description: 'Neat and composed—policies and files always in order.',
    emoji: '🗂️',
  },
];

export default function Squad() {
  return (
    <section id="squad" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Meet Your HR Squad</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Five playful AI teammates—each with personality and purpose. Hover to say hi.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {avatars.map((a, idx) => (
            <motion.div
              key={a.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06, type: 'spring', stiffness: 120 }}
              className={`${a.bg} group relative overflow-hidden rounded-2xl p-5 shadow-lg ring-1 ring-black/5`}
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${a.color} opacity-40 blur-2xl`} />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{a.name}</h3>
                  <p className={`text-sm font-medium ${a.accent}`}>{a.role}</p>
                </div>
                <motion.div
                  className="text-3xl"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 2 }}
                >
                  {a.emoji}
                </motion.div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">{a.description}</p>

              <motion.div
                whileHover={{ y: -6 }}
                className={`mt-5 h-28 w-full rounded-xl bg-gradient-to-br ${a.color} p-0.5`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white/80 backdrop-blur-sm">
                  <motion.div
                    className="h-10 w-10 rounded-full bg-white/80 shadow-md"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="ml-3 h-3 w-24 rounded-full bg-white/70"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
