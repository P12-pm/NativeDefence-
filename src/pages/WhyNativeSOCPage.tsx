import { useEffect, useState } from 'react';
import {
  Shield, Zap, Database, Users,
  CheckCircle, Sparkles
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

      {/* ══ HERO ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <HeroVideoBg />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-bold text-[#00E5FF] tracking-wider uppercase">Platform Differentiators</span>
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
              <span className="text-[#00E5FF] font-medium">Deploys NativeSOC.</span>
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
                  style={{ background: '#0A0F1F' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,229,255,0.1)] space-y-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center text-[#00E5FF]">
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
      <section style={{ background: '#0A0F1F' }} className="py-20 transition-colors duration-500 border-t border-[rgba(0,229,255,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Robust Proactive & Predictive */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase">MITRE ATT&amp;CK Alignment</span>
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
              <span className="text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase">Human Intelligence</span>
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
            <span className="text-[11px] font-semibold text-[#0A0F1F] bg-[#00E5FF] rounded-full px-3 py-1 tracking-widest uppercase">Containment</span>
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
                style={{ background: '#0A0F1F' }} className="p-6 rounded-2xl border border-[rgba(0,229,255,0.1)] flex flex-col justify-between hover:shadow transition-shadow duration-200"
              >
                <div>
                  <span className="text-xs font-bold text-[#00E5FF] bg-[rgba(0,229,255,0.08)] px-2.5 py-1 rounded">
                    {step.id}
                  </span>
                  <h4 className="text-base font-semibold text-white mt-4 mb-2" style={{ fontFamily: NHG }}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#7a9bb5] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(0,229,255,0.1)] mt-4 flex items-center gap-1.5 text-[9px] font-bold text-[#00E5FF] uppercase">
                  <CheckCircle className="w-3 h-3" />
                  Contained
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FOOTER ══ */}
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
            <span className="text-xs text-[#7a9bb5]/40">Active HUMINT 24/7 Security Operations</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
