import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, Shield, Zap, Database, Users,
  CheckCircle, Sparkles, Sun, Moon, Menu, X
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

interface DiffItem {
  title: string;
  desc: string;
  icon: any;
}

const differentiators: DiffItem[] = [
  {
    title: 'Expert 24/7 SOC Service',
    desc: 'Security Operations Center is better when you have experts monitoring it 24x7. We extend the solution through security delivery partners and resolve cybersecurity skilled workforce deficits.',
    icon: Users
  },
  {
    title: 'Fully Vendor Agnostic',
    desc: 'Any Firewall, Server, EDR/Endpoint agent, or any networking or security device — NativeSOC covers, ingests, and normalizes them all into cohesive indicators.',
    icon: Database
  },
  {
    title: 'Layered Endpoint Security',
    desc: 'Adds a secondary layer of EDR! Operates over and above existing EDR controls to assist active SOC threat hunters in detecting memory deviations in real time.',
    icon: Shield
  },
  {
    title: 'Advanced Cybersecurity SOAR',
    desc: 'SOAR and MITRE ATT&CK frameworks are deeply integrated at the core layer for advanced threat correlation, containment, and playbooks execution.',
    icon: Zap
  }
];

export default function WhyNativeSOCPage() {
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

          {/* Logo & Back */}
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
                style={{
                  ...(isDark ? { width: '135px', height: '40px' } : { height: '40px', width: 'auto' })
                }}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${l.href === '/whynativesoc' ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88]' : 'text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)]'}`}
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

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] relative"
            >
              <Menu className={`w-4 h-4 text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-4 h-4 text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-[rgba(0,255,136,0.1)] pt-3">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-sm font-medium py-2.5 border-b border-[rgba(0,255,136,0.1)] last:border-0 ${l.href === '/whynativesoc' ? 'text-[#00ff88] font-semibold' : 'text-[#7a9bb5]'}`}
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

      {/* ══ HERO ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">Platform Differentiators</span>
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-normal text-white mb-6"
              style={{
                fontFamily: NHG,
                fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Why Enterprise <br />
              <span className="text-[#00ff88] font-medium">Deploys NativeSOC.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#7a9bb5] leading-relaxed">
              We resolve corporate alert fatigue, manage complex SIEM tasks, and deploy multi-layered EDR systems
              backed by 24/7 expert human threat hunters (HUMINT).
            </p>
          </div>
        </div>
      </section>

      {/* ══ FOUR KEY DIFFERENTIATORS ══ */}
      <section >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.title}
                  style={{ background: '#050d1a' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,255,136,0.1)] space-y-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: NHG }}>
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7a9bb5] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══ THE MITRE & HUMINT DETAILS ══ */}
      <section style={{ background: '#050d1a' }} className="py-20 transition-colors duration-500 border-t border-[rgba(0,255,136,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Robust Proactive & Predictive */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-[#00ff88] uppercase">MITRE ATT&amp;CK Alignment</span>
              <h2 className="text-3xl font-semibold text-white" style={{ fontFamily: NHG }}>
                Robust Proactive &amp; Predictive Monitoring
              </h2>
              <p className="text-sm text-[#7a9bb5] leading-relaxed">
                NativeSOC uses multiple tools for security monitoring, file integrity monitoring, and endpoint configuration assessment.
                Add to that the **MITRE ATT&amp;CK framework**, which uses multiple tactics and many techniques used by contemporary threat actors,
                helping to identify or indicate an attack in progress in real time.
              </p>
              <div >
                <strong>MITRE ATT&amp;CK Mapping:</strong> Well-documented, real-world knowledge base detailing threat actor behaviors, process execution steps, and lateral movements.
              </div>
            </div>

            {/* Right: HUMINT Our Secret Sauce */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-[#00ff88] uppercase">Human Intelligence</span>
              <h2 className="text-3xl font-semibold text-white" style={{ fontFamily: NHG }}>
                HUMINT – Our Secret Sauce
              </h2>
              <p className="text-sm text-[#7a9bb5] leading-relaxed">
                The robust NativeSOC platform is ably supported with an expert driven **"Human Intelligence"** services from a state-of-art 24x7 SOC Centre.
                Cybersecurity skilled personnel deficit is a global issue. We at NativeSOC are domain experts and extend the solution through many
                Security delivery partners, in the process creating a workforce of Cybersecurity skilled personnel who understand the cumulative
                and comprehensive aspect of security in an enterprise IT Infrastructure.
              </p>
              <div >
                <strong>Triage Analysts:</strong> Dedicated security operations center engineers monitoring syslog streams 24/7 to safeguard your enterprise assets.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ THE CATCH THE HACKER ROADMAP ══ */}
      <section >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Containment</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              Catch the Hacker in the Act!
            </h2>
            <p className="text-xs text-[#7a9bb5] mt-2">
              Our 24/7 threat operations center runs custom hardening protocols to restrict attackers across their lifecycle.
            </p>
          </div>

          {/* Hacker execution steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: '01', title: 'Reconnaissance', desc: 'Hardening perimeter audits to detect public vulnerability scanning attempts.' },
              { id: '02', title: 'Scanning', desc: 'Tracking host port probes and multi-IP queries across internal firewalls.' },
              { id: '03', title: 'Gaining Access', desc: 'Real-time alert isolation for authentication anomalies or privilege elevations.' },
              { id: '04', title: 'Maintaining Access', desc: 'FIM registry audits and HIDS syscall checks identifying persistence modules.' },
              { id: '05', title: 'Clearing Tracks', desc: 'Immutable log archiving and tamper-proof write protection keeping audits safe.' }
            ].map(step => (
              <div
                key={step.id}
                style={{ background: '#050d1a' }} className="p-6 rounded-2xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow transition-shadow duration-200"
              >
                <div>
                  <span className="text-xs font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] px-2.5 py-1 rounded">
                    {step.id}
                  </span>
                  <h4 className="text-base font-semibold text-white mt-4 mb-2" style={{ fontFamily: NHG }}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#7a9bb5] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(0,255,136,0.1)] mt-4 flex items-center gap-1.5 text-[9px] font-bold text-[#00ff88] uppercase">
                  <CheckCircle className="w-3 h-3" />
                  Contained
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FOOTER ══ */}
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
            <span className="text-xs text-[#7a9bb5]/40">Active HUMINT 24/7 Security Operations</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
