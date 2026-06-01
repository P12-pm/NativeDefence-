import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.avif';
import {
  ArrowLeft, ArrowRight, Shield, Activity, Database, Sparkles,
  Sun, Moon, Menu, X
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00ff88';

const subLinks = [
  { label: 'NativeSOC Approach', href: '/nativesocapproach' },
  { label: 'NativeSOC Features', href: '/nativesocfeatures' },
  { label: 'NativeSOC Architecture', href: '/nativesocarchitecture' },
  { label: 'How it Works', href: '/howitworks' },
  { label: 'Why NativeSOC', href: '/whynativesoc' },
];

export default function NativeSOCApproachPage() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Sync dark class */
  useEffect(() => {
    const root = document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 text-white" style={{ background: '#050d1a' }}>

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/85 dark:bg-[#050d1a]/90 backdrop-blur-xl border-b border-[rgba(0,255,136,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo & Back button */}
          <div className="flex items-center gap-4">
            <Link
              to="/nativesoc"
              className="flex items-center gap-1.5 text-sm font-medium text-[#7a9bb5] hover:text-[#00ff88] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="w-px h-4 bg-[#050d1a]/15 dark:bg-white/15" />
            <Link to="/" className="flex items-center">
              <img
                src={logoDark}
                alt="NativeDefence Logo"
                className="transition-all duration-300 object-contain"
                style={{ height: '38px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Sub Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${l.href === '/nativesocapproach' ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88]' : 'text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)]'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(d => !d)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] relative"
              aria-label="Toggle theme"
            >
              <Sun className={`w-3.5 h-3.5 text-white absolute transition-all duration-300 ${isDark ? 'opacity-100' : 'opacity-0 rotate-90'}`} />
              <Moon className={`w-3.5 h-3.5 text-white absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90' : 'opacity-100'}`} />
            </button>

            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 hover:opacity-90 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Get Demo
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] relative"
            >
              <Menu className={`w-4 h-4 text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-4 h-4 text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-[rgba(0,255,136,0.1)] pt-3">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-sm font-medium py-2.5 border-b border-[rgba(0,255,136,0.1)] last:border-0 ${l.href === '/nativesocapproach' ? 'text-[#00ff88] font-semibold' : 'text-[#7a9bb5]'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#050d1a] text-white text-sm font-semibold py-3 rounded-full"
            >
              Get Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">Strategic Methodology</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1
                className="font-normal text-white mb-6"
                style={{
                  fontFamily: NHG,
                  fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                }}
              >
                The NativeSOC <br />
                <span className="text-[#00ff88] font-medium">Approach.</span>
              </h1>
              <h2 className="text-sm font-semibold tracking-wider text-[#00ff88] uppercase mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Comprehensive Security Operations Mapping
              </h2>
              <p
                className="text-[#7a9bb5] leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: 1.75 }}
              >
                Modern cyber attacks cross boundary layers in a matter of seconds. Standard silos
                leave organizations blind to unified campaign threats. The NativeSOC platform
                ingests, parses, correlates, and automates alarm cycles in a single vendor-agnostic
                command space.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/nativesocfeatures"
                  className="inline-flex items-center gap-3 text-[#050d1a] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-all duration-300 group" style={{ background: "linear-gradient(135deg, #00cc70, #00ff88)" }}
                >
                  Explore Pillars
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff88] hover:gap-3 transition-all duration-300"
                >
                  Free SIEM Audit
                </Link>
              </div>
            </div>

            {/* Visual Abstract SVG Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div >
                <div className="absolute inset-4 rounded-full border border-[rgba(0,255,136,0.3)]/10  animate-pulse" />
                <div className="relative w-28 h-28 rounded-full bg-[#050d1a] border-4 border-[rgba(0,255,136,0.3)] flex flex-col items-center justify-center shadow-xl z-10">
                  <Shield className="w-8 h-8 text-[#00d4aa]" />
                  <span className="text-[9px] font-bold tracking-widest text-[#00d4aa] uppercase mt-1">XDR+SIEM</span>
                </div>

                {/* Orbital telemetry paths */}
                <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg border border-black/5 flex items-center justify-center shadow" style={{ background: '#050d1a' }}>
                    <Database className="w-4 h-4 text-[#00ff88]" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg border border-black/5 flex items-center justify-center shadow" style={{ background: '#050d1a' }}>
                    <Activity className="w-4 h-4 text-[#00ff88]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE DUAL SECURITY CORE ══ */}
      <section >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Pillars</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              The Dual Command Architecture
            </h2>
            <p className="text-sm text-[#7a9bb5] mt-2">
              How NativeSOC unifies multi-layer host telemetries with real-time SIEM auditing schemas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Extended Detection and Response (XDR) */}
            <div style={{ background: '#050d1a' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88]">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: NHG }}>
                  Extended Detection &amp; Response (XDR)
                </h3>
                <p className="text-sm text-[#7a9bb5] leading-relaxed">
                  The NativeSOC Extended Detection and Response (XDR) platform provides a comprehensive security solution
                  that detects, analyzes, and responds to threats across multiple IT infrastructure layers.
                  NativeSOC collects telemetry from endpoints, network devices, cloud workloads, third-party APIs,
                  and other sources for unified security monitoring and protection.
                </p>
              </div>
              <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] mt-8 flex items-center gap-2 text-xs font-bold text-[#00ff88]">
                <Activity className="w-4 h-4" />
                Cross-layer attack correlation operational
              </div>
            </div>

            {/* Security Information and Event Management (SIEM) */}
            <div style={{ background: '#050d1a' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88]">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: NHG }}>
                  Security Information &amp; Event Management (SIEM)
                </h3>
                <p className="text-sm text-[#7a9bb5] leading-relaxed">
                  The NativeSOC Security Information and Event Management (SIEM) solution is a centralized platform for
                  aggregating and analyzing telemetry in real time for threat detection and compliance. NativeSOC collects
                  event data from various sources like endpoints, network devices, cloud workloads, and applications for
                  broader security coverage.
                </p>
              </div>
              <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] mt-8 flex items-center gap-2 text-xs font-bold text-[#00ff88]">
                <Database className="w-4 h-4" />
                Real-time compliance auditing active
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ FOOTER BAND ══ */}
      <footer style={{ background: '#050d1a' }} className="border-t border-[rgba(0,255,136,0.1)] transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img src={logoDark} style={{ opacity: 0.8 }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
            <p className="text-xs text-[#7a9bb5]/40">
              Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#7a9bb5]/40">Technical Operations Ahmedabad</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
