import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.avif';
import {
  ArrowLeft, Award, Cpu, Database, Server,
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

interface CertItem {
  id: string;
  name: string;
  scope: string;
}

const complianceCerts: CertItem[] = [
  {
    id: 'ISO/IEC 27001:2013',
    name: 'Information Security Management System (ISMS)',
    scope: 'Ensures absolute corporate data integrity, physical asset controls, and secure handling rules for client SIEM alarms.'
  },
  {
    id: 'ISO/IEC 27017:2015',
    name: 'ISMS Cloud Security Certification',
    scope: 'Validates strict security controls tailored specifically for multi-tenant cloud storage ecosystems and SaaS operations.'
  },
  {
    id: 'ISO/IEC 27018:2019',
    name: 'Privacy Information Management System (PIMS)',
    scope: 'Guarantees secure handling and masking of personally identifiable information (PII) inside collected syslog streams.'
  },
  {
    id: 'ISO/IEC 20000-1:2018',
    name: 'IT Service Management (ITSMS)',
    scope: 'Ensures technical operations conform to professional IT service guidelines, change logs, and escalation parameters.'
  },
  {
    id: 'ISO 9001:2015',
    name: 'Quality Management System (QMS)',
    scope: 'Continuous operations auditing and service enhancement frameworks for 24/7 security analyst operations.'
  },
  {
    id: 'PCI-DSS Compliance Ready',
    name: 'Payment Card Industry Data Security Standard',
    scope: 'Configured tools to fulfill technical cardholder security rules, transaction isolation logs, and compliance reporting.'
  }
];

export default function NativeSOCArchitecturePage() {
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
                style={{ height: '30px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${l.href === '/nativesocarchitecture' ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88]' : 'text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)]'}`}
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
                className={`text-left text-sm font-medium py-2.5 border-b border-[rgba(0,255,136,0.1)] last:border-0 ${l.href === '/nativesocarchitecture' ? 'text-[#00ff88] font-semibold' : 'text-[#7a9bb5]'}`}
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
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">Architecture &amp; Compliance</span>
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
              Secure Operational <br />
              <span className="text-[#00ff88] font-medium">Platform Blueprint.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#7a9bb5] leading-relaxed">
              NativeSOC is engineered to enforce strict privacy, data retention, and continuous cloud safety protocols.
              Review our ISO compliance certificates and multi-tenant telemetry flow schemas.
            </p>
          </div>
        </div>
      </section>

      {/* ══ COMPLIANCE CERTIFICATES ══ */}
      <section >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Certifications</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              Global Information Security Frameworks
            </h2>
            <p className="text-xs text-[#7a9bb5] mt-2">
              Validating top-tier systems reliability, privacy controls, and data protection policies globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCerts.map((cert) => (
              <div
                key={cert.id}
                style={{ background: '#050d1a' }} className="p-6 sm:p-8 rounded-3xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88] mb-6">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] px-2.5 py-1 rounded">
                    {cert.id}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-4 mb-3" style={{ fontFamily: NHG }}>
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7a9bb5] leading-relaxed">
                    {cert.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(0,255,136,0.1)] mt-6 flex items-center gap-2 text-[10px] font-bold text-[#00ff88] uppercase">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Audited &amp; Active
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SECURE DATA FLOW SCHEMA ══ */}
      <section style={{ background: '#050d1a' }} className="py-20 transition-colors duration-500 border-t border-[rgba(0,255,136,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Secure Flow</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              Multi-Agent Telemetry Flow
            </h2>
            <p className="text-xs text-[#7a9bb5] mt-2">
              Ingesting system activity logs directly from distributed enterprise nodes to the 24/7 technical operations center.
            </p>
          </div>

          {/* Graphical Data Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div >
              <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88]">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white" style={{ fontFamily: NHG }}>
                1. NativeSOC Logging Agents
              </h4>
              <p className="text-xs text-[#7a9bb5] leading-relaxed">
                Distributed OS agents monitor process execution, registry queries, and HIDS/FIM baseline deviations continuously at the client endpoints.
              </p>
            </div>

            {/* Step 2 */}
            <div >
              <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white" style={{ fontFamily: NHG }}>
                2. Real-Time Correlation Engine
              </h4>
              <p className="text-xs text-[#7a9bb5] leading-relaxed">
                Syslog flows are aggregated and parsed through central SIEM/XDR analyzers. Threat alerts are enriched against CVE signatures and MITRE tactics.
              </p>
            </div>

            {/* Step 3 */}
            <div >
              <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white" style={{ fontFamily: NHG }}>
                3. Secure 24/7 Analyst Triage
              </h4>
              <p className="text-xs text-[#7a9bb5] leading-relaxed">
                Enriched alerts stream onto standard observability dashboards. Triage engineers and automated SOAR playbooks neutralize threat indicators within minutes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img src={logoDark} style={{ opacity: 0.8 }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
            <p className="text-xs text-[#7a9bb5]/40">
              Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#7a9bb5]/40">Continuous compliance metrics active</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
