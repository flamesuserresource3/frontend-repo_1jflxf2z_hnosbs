import React from 'react';
import Hero from './components/Hero.jsx';
import Squad from './components/Squad.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Squad />
      <Features />
      <Pricing />

      {/* Footer */}
      <footer className="mt-10 bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 px-3 py-2 text-white shadow">
                <div className="h-2.5 w-2.5 rounded-full bg-white" />
                <span className="text-sm font-bold">Hire HR</span>
              </div>
              <p className="mt-3 max-w-sm text-slate-300">
                Friendly AI avatars that run your HR—human, imaginative, and future‑ready.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Product</div>
                <ul className="mt-2 space-y-1 text-slate-300">
                  <li><a href="#features" className="hover:text-white">Features</a></li>
                  <li><a href="#squad" className="hover:text-white">HR Squad</a></li>
                  <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Company</div>
                <ul className="mt-2 space-y-1 text-slate-300">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Join our community</div>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Join our community"
                  className="w-full rounded-xl border-0 bg-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <button className="rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white">
                  Subscribe
                </button>
              </form>
              <div className="mt-4 flex items-center gap-3 text-slate-300">
                <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Hire HR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
