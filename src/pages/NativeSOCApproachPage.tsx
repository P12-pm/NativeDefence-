import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, ArrowRight, Shield, Activity, Database, Sparkles,
  Sun, Moon, Menu, X
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#336443';

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
    <div className="min-h-screen bg-white dark:bg-[#0e150d] transition-colors duration-500 text-[#1f2a1d] dark:text-[#c5d9c3]">

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0e150d]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo & Back button */}
          <div className="flex items-center gap-4">
            <Link
              to="/nativesoc"
              className="flex items-center gap-1.5 text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="w-px h-4 bg-[#1f2a1d]/15 dark:bg-white/15" />
            <Link to="/" className="flex items-center">
              <img
                src={isDark ? logoDark : logoLight}
                alt="NativeDefence Logo"
                className="transition-all duration-300 object-contain"
                style={isDark
                  ? { width: '135px', height: '40px' }
                  : { height: '40px', width: 'auto' }
                }
              />
            </Link>
          </div>

          {/* Desktop Sub Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${l.href === '/nativesocapproach' ? 'bg-[#1f2a1d] text-white dark:bg-[#336443]' : 'text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d]'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(d => !d)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] dark:bg-[#1f2a1d] border border-black/8 dark:border-white/8 relative"
              aria-label="Toggle theme"
            >
              <Sun className={`w-3.5 h-3.5 text-[#1f2a1d] dark:text-white absolute transition-all duration-300 ${isDark ? 'opacity-100' : 'opacity-0 rotate-90'}`} />
              <Moon className={`w-3.5 h-3.5 text-[#1f2a1d] dark:text-white absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90' : 'opacity-100'}`} />
            </button>

            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Get Demo
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] dark:bg-[#1f2a1d] border border-black/8 dark:border-white/8 relative"
            >
              <Menu className={`w-4 h-4 text-[#1f2a1d] dark:text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-4 h-4 text-[#1f2a1d] dark:text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-black/5 dark:border-white/5 pt-3">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-sm font-medium py-2.5 border-b border-black/5 dark:border-white/5 last:border-0 ${l.href === '/nativesocapproach' ? 'text-[#336443] dark:text-[#85AB8B] font-semibold' : 'text-[#4b5b47] dark:text-[#8a9e86]'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#1f2a1d] text-white text-sm font-semibold py-3 rounded-full"
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
          <div className="inline-flex items-center gap-2 bg-[#f0f7f1] dark:bg-[#141d13] border border-[#336443]/15 dark:border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#336443] dark:text-[#85AB8B]" />
            <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] tracking-wider uppercase">Strategic Methodology</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1
                className="font-normal text-[#1f2a1d] dark:text-white mb-6"
                style={{
                  fontFamily: NHG,
                  fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                }}
              >
                The NativeSOC <br />
                <span className="text-[#336443] dark:text-[#85AB8B] font-medium">Approach.</span>
              </h1>
              <h2 className="text-sm font-semibold tracking-wider text-[#336443] dark:text-[#85AB8B] uppercase mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Comprehensive Security Operations Mapping
              </h2>
              <p
                className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-8"
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
                  className="inline-flex items-center gap-3 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 group"
                >
                  Explore Pillars
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300"
                >
                  Free SIEM Audit
                </Link>
              </div>
            </div>

            {/* Visual Abstract SVG Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-[#f7f6f2] dark:bg-[#141d13] border border-black/5 dark:border-white/5 rounded-full flex items-center justify-center shadow-inner group">
                <div className="absolute inset-4 rounded-full border border-[#336443]/10 dark:border-[#85AB8B]/10 animate-pulse" />
                <div className="relative w-28 h-28 rounded-full bg-[#1f2a1d] dark:bg-[#141d13] border-4 border-[#336443] flex flex-col items-center justify-center shadow-xl z-10">
                  <Shield className="w-8 h-8 text-[#85AB8B]" />
                  <span className="text-[9px] font-bold tracking-widest text-[#85AB8B] uppercase mt-1">XDR+SIEM</span>
                </div>

                {/* Orbital telemetry paths */}
                <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-white dark:bg-[#0e150d] border border-black/5 flex items-center justify-center shadow">
                    <Database className="w-4 h-4 text-[#336443]" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-white dark:bg-[#0e150d] border border-black/5 flex items-center justify-center shadow">
                    <Activity className="w-4 h-4 text-[#336443]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE DUAL SECURITY CORE ══ */}
      <section className="bg-[#f7f6f2] dark:bg-[#141d13] py-20 sm:py-28 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase">Pillars</span>
            <h2 className="text-3xl font-semibold text-[#1f2a1d] dark:text-white mt-4" style={{ fontFamily: NHG }}>
              The Dual Command Architecture
            </h2>
            <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] mt-2">
              How NativeSOC unifies multi-layer host telemetries with real-time SIEM auditing schemas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Extended Detection and Response (XDR) */}
            <div className="bg-white dark:bg-[#0e150d] p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B]">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2a1d] dark:text-white" style={{ fontFamily: NHG }}>
                  Extended Detection &amp; Response (XDR)
                </h3>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  The NativeSOC Extended Detection and Response (XDR) platform provides a comprehensive security solution
                  that detects, analyzes, and responds to threats across multiple IT infrastructure layers.
                  NativeSOC collects telemetry from endpoints, network devices, cloud workloads, third-party APIs,
                  and other sources for unified security monitoring and protection.
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-8 flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B]">
                <Activity className="w-4 h-4" />
                Cross-layer attack correlation operational
              </div>
            </div>

            {/* Security Information and Event Management (SIEM) */}
            <div className="bg-white dark:bg-[#0e150d] p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B]">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2a1d] dark:text-white" style={{ fontFamily: NHG }}>
                  Security Information &amp; Event Management (SIEM)
                </h3>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  The NativeSOC Security Information and Event Management (SIEM) solution is a centralized platform for
                  aggregating and analyzing telemetry in real time for threat detection and compliance. NativeSOC collects
                  event data from various sources like endpoints, network devices, cloud workloads, and applications for
                  broader security coverage.
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-8 flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B]">
                <Database className="w-4 h-4" />
                Real-time compliance auditing active
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ FOOTER BAND ══ */}
      <footer className="bg-white dark:bg-[#0e150d] border-t border-[#1f2a1d]/10 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img src={isDark ? logoDark : logoLight} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 dark:opacity-85 transition-all duration-300" />
            <p className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">
              Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">Technical Operations Ahmedabad</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
