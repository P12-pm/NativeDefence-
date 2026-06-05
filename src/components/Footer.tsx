import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import logoDark from '../assets/logo_dark.avif';
import { NHG } from '../constants';
import {
  ArrowRight,
  Mail,
  MapPin,
  Send,
  ShieldAlert
} from 'lucide-react';

const cols = {
  Platform: [
    { label: 'NativeSOC', href: '/nativesoc' },
    { label: 'SOC Approach', href: '/nativesocapproach' },
    { label: 'Platform Features', href: '/nativesocfeatures' },
    { label: 'Architecture', href: '/nativesocarchitecture' },
    { label: 'How it Works', href: '/howitworks' },
    { label: 'Why NativeSOC', href: '/whynativesoc' },
  ],
  Services: [
    { label: 'VAPT Audit', href: '/vapt' },
    { label: 'SOC Academy', href: '/academy' },
    { label: 'Cybersecurity Courses', href: '/course' },
    { label: 'Awareness Training', href: '/vapt/cybersecurityawareness' },
    { label: 'vCISO Advisory', href: '/#services' },
  ],
};

const socialLinks = [
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: 'https://twitter.com',
    label: 'Twitter'
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    href: 'https://github.com',
    label: 'GitHub'
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.163c-.272-1.018-1.077-1.823-2.095-2.095C19.552 3.5 12 3.5 12 3.5s-7.552 0-9.403.568c-1.018.272-1.823 1.077-2.095 2.095C0 8.015 0 12 0 12s0 3.985.502 5.837c.272 1.018 1.077 1.823 2.095 2.095C4.448 20.5 12 20.5 12 20.5s7.552 0 9.403-.568c1.018-.272 1.823-1.077 2.095-2.095C24 15.985 24 12 24 12s0-3.985-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: 'https://youtube.com',
    label: 'YouTube'
  }
];

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={footerVariants}
      style={{ background: '#070a14', borderTop: '1px solid rgba(0,229,255,0.08)' }}
      className="transition-colors duration-500 overflow-hidden"
    >
      {/* ── Top section: CTA & Newsletter ── */}
      <div style={{ borderBottom: '1px solid rgba(0,229,255,0.08)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* CTA Left */}
          <div className="lg:col-span-7">
            <h3
              className="font-normal text-white mb-2 flex items-center gap-2.5"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              <ShieldAlert className="w-6 h-6 text-[#00E5FF]" />
              Ready to fortify your organization's defences?
            </h3>
            <p className="text-sm text-[#7a9bb5] max-w-xl">
              Book a free vulnerability assessment or SOC sandbox simulation with our lead analysts.
            </p>
            <div className="mt-5">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 text-[#070a14] text-xs font-bold px-6 py-3 rounded-full transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
              >
                Free VAPT Assessment
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Newsletter Right */}
          <div className="lg:col-span-5 bg-[rgba(10,15,31,0.4)] border border-[rgba(0,229,255,0.12)] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-2xl pointer-events-none" />
            <h4 className="text-sm font-semibold text-white mb-1.5" style={{ fontFamily: NHG }}>Subscribe to CyberBrief™</h4>
            <p className="text-xs text-[#7a9bb5] mb-5">
              Receive bi-weekly cyber threat intelligence updates and vulnerability research logs.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 relative z-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email..."
                required
                className="flex-1 text-xs px-4 py-3 rounded-full bg-[#070a14] border border-[rgba(0,229,255,0.15)] focus:border-[#00E5FF] focus:outline-none text-white placeholder-[rgba(0,229,255,0.3)] transition-all duration-300 shadow-[inset_0_0_12px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_0_12px_rgba(0,0,0,0.6),0_0_15px_rgba(0,229,255,0.12)]"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#00E5FF] hover:bg-[#3B82F6] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] text-[#070a14] flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] text-[#00E5FF] mt-3 font-mono tracking-wider"
              >
                &gt;&gt; UPLINK SECURE. SUBSCRIPTION ACTIVATED.
              </motion.p>
            )}
          </div>
        </div>
      </div>

      {/* ── Middle section: Links, Bio & Contact Info ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand/Bio Column */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-5">
              <img
                src={logoDark}
                alt="NativeDefence Logo"
                className="h-10 w-auto transition-all duration-300"
                style={{ opacity: 0.9 }}
              />
            </div>
            <p className="text-xs leading-relaxed mb-6 text-[#7a9bb5] max-w-sm">
              NativeSOC is an expert-driven Cyber Security Services company, delivering zero-trust security audits, 24/7 SIEM monitoring, and enterprise breach containment.
            </p>
          </div>
          
          {/* Social Links */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-[#7a9bb5]/40 uppercase mb-3">Connect With Us</p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-[rgba(0,229,255,0.15)] hover:border-[#00E5FF] hover:bg-[rgba(0,229,255,0.1)] text-[#7a9bb5] hover:text-[#00E5FF] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Column 1: Platform */}
        <div className="lg:col-span-2">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-6 text-[#00E5FF]/60" style={{ fontFamily: NHG }}>
            Platform
          </p>
          <ul className="flex flex-col gap-3">
            {cols.Platform.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-xs font-semibold transition-colors duration-200 text-[#7a9bb5] hover:text-[#00E5FF]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column 2: Services */}
        <div className="lg:col-span-2">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-6 text-[#00E5FF]/60" style={{ fontFamily: NHG }}>
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {cols.Services.map((l) => (
              <li key={l.label}>
                {l.href.startsWith('/') ? (
                  <Link
                    to={l.href}
                    className="text-xs font-semibold transition-colors duration-200 text-[#7a9bb5] hover:text-[#00E5FF]"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="text-xs font-semibold transition-colors duration-200 text-[#7a9bb5] hover:text-[#00E5FF]"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-4">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-6 text-[#00E5FF]/60" style={{ fontFamily: NHG }}>
            Operational Centres
          </p>
          <ul className="flex flex-col gap-4 text-xs text-[#7a9bb5]">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">General &amp; Sales Inquiries</p>
                <a href="mailto:sales@nativedefence.com" className="hover:text-[#00E5FF] transition-colors text-[11px]">
                  sales@nativedefence.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Ahmedabad (Technical &amp; SOC)</p>
                <p className="leading-relaxed text-[11px] text-[#7a9bb5]/80">
                  D-311 Ganesh Glory 11, Off S G Highway, Jagatpur, Ahmedabad, Gujarat — 382470
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#00E5FF] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Mumbai (Commercial Operations)</p>
                <p className="leading-relaxed text-[11px] text-[#7a9bb5]/80">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom band: Copyright & Legal ── */}
      <div style={{ borderTop: '1px solid rgba(0,229,255,0.06)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright & Legal Sublinks */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p className="text-[11px] text-[#7a9bb5]/55">
              Copyright 2026 © NATIVEDEFENCE TECH LLP. All rights reserved.
            </p>
            <div className="flex gap-3 text-[10px] text-[#7a9bb5]/40">
              <Link to="/about-us" className="hover:text-[#00E5FF] transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link to="/about-us" className="hover:text-[#00E5FF] transition-colors">Terms of Service</Link>
              <span>·</span>
              <Link to="/partners" className="hover:text-[#00E5FF] transition-colors">Trust Center</Link>
            </div>
          </div>

          {/* Operational Status */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-[#7a9bb5]/60">All global threat feeds active</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
