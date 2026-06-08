import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Activity, Database, Sparkles
} from 'lucide-react';
import HeroVideoBg from '../components/HeroVideoBg';
import Navbar from '../components/Navbar';
import logoDark from '../assets/logo_dark.avif';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00E5FF';

const subLinks = [
  { label: 'NativeSOC Approach', href: '/nativesocapproach' },
  { label: 'NativeSOC Features', href: '/nativesocfeatures' },
  { label: 'NativeSOC Architecture', href: '/nativesocarchitecture' },
  { label: 'How it Works', href: '/howitworks' },
  { label: 'Why NativeSOC', href: '/whynativesoc' },
];

export default function NativeSOCApproachPage() {
  const [isDark, _setIsDark] = useState(false);

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
    <div className="min-h-screen transition-colors duration-500 text-white" style={{ background: '#0A0F1F' }}>

      {/* ══ NAVBAR ══ */}
      <Navbar
        backLink="/nativesoc"
        subLinks={subLinks}
        ctaText="Get Demo"
        ctaLink="/#contact"
      />

      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        <HeroVideoBg />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-bold text-[#00E5FF] tracking-wider uppercase">Strategic Methodology</span>
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
                <span className="text-[#00E5FF] font-medium">Approach.</span>
              </h1>
              <h2 className="text-sm font-semibold tracking-wider text-[#00E5FF] uppercase mb-6 flex items-center gap-2">
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
                  className="inline-flex items-center gap-3 text-[#0A0F1F] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 group" style={{ background: "linear-gradient(135deg, #3B82F6, #00E5FF)" }}
                >
                  Explore Pillars
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:gap-3 transition-all duration-300"
                >
                  Free SIEM Audit
                </Link>
              </div>
            </div>

            {/* Visual Abstract SVG Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div >
                <div className="absolute inset-4 rounded-full border border-[rgba(0,229,255,0.3)]/10  animate-pulse" />
                <div className="relative w-28 h-28 rounded-full bg-[#0A0F1F] border-4 border-[rgba(0,229,255,0.3)] flex flex-col items-center justify-center shadow-xl z-10">
                  <Shield className="w-8 h-8 text-[#3B82F6]" />
                  <span className="text-[9px] font-bold tracking-widest text-[#3B82F6] uppercase mt-1">XDR+SIEM</span>
                </div>

                {/* Orbital telemetry paths */}
                <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg border border-black/5 flex items-center justify-center shadow" style={{ background: '#0A0F1F' }}>
                    <Database className="w-4 h-4 text-[#00E5FF]" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg border border-black/5 flex items-center justify-center shadow" style={{ background: '#0A0F1F' }}>
                    <Activity className="w-4 h-4 text-[#00E5FF]" />
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
            <span className="text-[11px] font-semibold text-[#0A0F1F] bg-[#00E5FF] rounded-full px-3 py-1 tracking-widest uppercase">Pillars</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              The Dual Command Architecture
            </h2>
            <p className="text-sm text-[#7a9bb5] mt-2">
              How NativeSOC unifies multi-layer host telemetries with real-time SIEM auditing schemas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Extended Detection and Response (XDR) */}
            <div style={{ background: '#0A0F1F' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,229,255,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center text-[#00E5FF]">
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
              <div className="pt-6 border-t border-[rgba(0,229,255,0.1)] mt-8 flex items-center gap-2 text-xs font-bold text-[#00E5FF]">
                <Activity className="w-4 h-4" />
                Cross-layer attack correlation operational
              </div>
            </div>

            {/* Security Information and Event Management (SIEM) */}
            <div style={{ background: '#0A0F1F' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,229,255,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center text-[#00E5FF]">
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
              <div className="pt-6 border-t border-[rgba(0,229,255,0.1)] mt-8 flex items-center gap-2 text-xs font-bold text-[#00E5FF]">
                <Database className="w-4 h-4" />
                Real-time compliance auditing active
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ FOOTER BAND ══ */}
      <footer style={{ background: '#0A0F1F' }} className="border-t border-[rgba(0,229,255,0.1)] transition-colors duration-500">
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
