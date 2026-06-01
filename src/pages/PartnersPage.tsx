import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.avif';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Shield, Sparkles,
  Sun, Moon, Menu, X, Globe, Server, Cloud, Cpu, Database
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00ff88';
const ACCENT = '#00d4aa';

interface Partner {
  name: string;
  desc: string;
  role: string;
  details: string;
}

const securityAllies: Partner[] = [
  {
    name: 'Sophos',
    role: 'Endpoint Telemetry',
    desc: 'Deep integration of Sophos endpoint states and process logs into NativeSOC alarms.',
    details: 'Leverages direct event ingestion API to feed host-level warnings into central XDR triggers.'
  },
  {
    name: 'Cyberoam',
    role: 'Legacy Firewall Integrity',
    desc: 'Legacy firewall log parsing, flow inspection, and packet event correlation.',
    details: 'Supports traditional firewall packet flow exports and event logs to track intrusion attempts.'
  },
  {
    name: 'Cisco',
    role: 'Enterprise Routing & Web UI',
    desc: 'IOS XE Web UI monitoring, network traffic flow data collection, and privilege audit logs.',
    details: 'Correlates router config change indicators and network telemetry to highlight lateral movements.'
  },
  {
    name: 'Fortinet',
    role: 'SSL-VPN Triage',
    desc: 'Heap overflow scanning, SSL-VPN log intake, and secure gatekeeper analytics.',
    details: 'Monitors VPN connection volumes, user logins, and heap exception signals from FortiOS engines.'
  },
  {
    name: 'Citrix',
    role: 'NetScaler Gateway Auditing',
    desc: 'NetScaler ADC and Gateway injection checks, session telemetry, and buffer health alerts.',
    details: 'Tracks input validation queries and ADC buffer indicators to detect zero-day injection exploits.'
  },
  {
    name: 'Barracuda',
    role: 'Email Security Telemetry',
    desc: 'Email Security Gateway attachment scan tracking and secure command execution checks.',
    details: 'Monitors ESG mail transfer logs and attachments validation indicators to suppress phishing exploits.'
  }
];

const cloudAllies: Partner[] = [
  {
    name: 'Amazon Web Services (AWS)',
    role: 'Cloud Native Telemetry',
    desc: 'VPC flow logs auditing, CloudTrail operations logging, and direct GuardDuty integration.',
    details: 'Tracks IAM changes, S3 access deviations, and serverless executions from AWS cloud ecosystems.'
  },
  {
    name: 'Microsoft Azure',
    role: 'Azure AD & Sentinel Integration',
    desc: 'Azure AD sign-in anomalies monitoring, Sentinel telemetry stream, and VMs logs audits.',
    details: 'Syncs directory alerts and VM container states to track compromised credentials.'
  },
  {
    name: 'Google Cloud Platform (GCP)',
    role: 'GCP Cloud Logging & IAM Audit',
    desc: 'GCP IAM changes, Cloud Logging event streams, and Google Workspace security alerts.',
    details: 'Aggregates multi-project resources, service accounts tokens audits, and GCP VPC logs.'
  }
];

const osAllies: Partner[] = [
  {
    name: 'Microsoft Windows',
    role: 'Active Directory Triage',
    desc: 'Windows Event Logs ingestion, Active Directory change tracking, and FIM baseline tracking.',
    details: 'Monitors registry additions, privilege escalation events, and domain controller audits.'
  },
  {
    name: 'Apple macOS',
    role: 'WebKit & Audit Ingestion',
    desc: 'WebKit memory exceptions tracking, endpoint audit logs extraction, and OS file integrity.',
    details: 'Tracks macOS endpoint execution policies, gatekeeper alerts, and critical library integrity.'
  },
  {
    name: 'Linux Systems',
    role: 'HIDS Syscall Audit',
    desc: 'Auditd syscall tracking, kernel module load auditing, and daemon logs parsing.',
    details: 'Secures enterprise RedHat, Ubuntu, and Debian servers against rootkits and malicious system loads.'
  },
  {
    name: 'Docker & Kubernetes',
    role: 'Container Security Ingestion',
    desc: 'K8s API audit logs, Docker daemon process tracking, and container networking telemetry.',
    details: 'Ensures container privilege isolation, image deviations tracking, and microservice traffic audits.'
  }
];

const appAllies: Partner[] = [
  {
    name: 'Atlassian',
    role: 'Workflow Escalation',
    desc: 'Jira ticket synchronization, Confluence access control checks, and secure DevOps auditing.',
    details: 'Links verified threat incidents to Jira workflows for automated developer and IT remediation.'
  },
  {
    name: 'Apache',
    role: 'Web Server Log Correlation',
    desc: 'Apache HTTPD access audits, Log4j2 input validation checks, and secure web hosting metrics.',
    details: 'Monitors web server logs for Log4Shell-style injection strings and abnormal directory traversals.'
  },
  {
    name: 'Progress MOVEit',
    role: 'Secure Transfer Auditing',
    desc: 'MOVEit SQL injection detection, secure file transfer logs aggregation, and database integrity.',
    details: 'Tracks file storage access transactions, unauthorized upload indicators, and SQL statement audits.'
  }
];

export default function PartnersPage() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'security' | 'cloud' | 'os' | 'apps'>('security');

  /* Sync dark class on document element */
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSubLinkClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 64;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const getActivePartners = () => {
    switch (activeCategory) {
      case 'security': return securityAllies;
      case 'cloud': return cloudAllies;
      case 'os': return osAllies;
      case 'apps': return appAllies;
    }
  };

  const getCategoryIcon = () => {
    switch (activeCategory) {
      case 'security': return <Shield className="w-5 h-5" />;
      case 'cloud': return <Cloud className="w-5 h-5" />;
      case 'os': return <Cpu className="w-5 h-5" />;
      case 'apps': return <Database className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 text-white" style={{ background: '#050d1a' }}>

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/85 dark:bg-[#050d1a]/90 backdrop-blur-xl border-b border-[rgba(0,255,136,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo & Back button */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
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
                style={{ height: '45px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleSubLinkClick('partners-hero')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Overview
            </button>
            <button
              onClick={() => handleSubLinkClick('alliance-grid')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Technology Alliances
            </button>
            <button
              onClick={() => handleSubLinkClick('join-partner')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Join Partner Program
            </button>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(d => !d)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] relative"
              aria-label="Toggle theme"
            >
              <Sun className={`w-3.5 h-3.5 text-white absolute transition-all duration-300 ${isDark ? 'opacity-100' : 'opacity-0 rotate-90'}`} />
              <Moon className={`w-3.5 h-3.5 text-white absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90' : 'opacity-100'}`} />
            </button>

            {/* CTA */}
            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 hover:opacity-90 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Become a Partner
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
            <button
              onClick={() => handleSubLinkClick('partners-hero')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Overview
            </button>
            <button
              onClick={() => handleSubLinkClick('alliance-grid')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Technology Alliances
            </button>
            <button
              onClick={() => handleSubLinkClick('join-partner')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)] last:border-0"
            >
              Join Partner Program
            </button>
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#050d1a] text-white text-sm font-semibold py-3 rounded-full"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section id="partners-hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        {/* Dynamic background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`, transform: 'translate(20%, 20%)' }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">NativeSOC Alliance Network</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Title / Main pitch */}
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
                Technology Alliance <br />
                <span className="text-[#00ff88] font-medium">Partners.</span>
              </h1>
              <h2 className="text-sm font-semibold tracking-wider text-[#00ff88] uppercase mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Unifying and fortifying the global security stack
              </h2>
              <p
                className="text-[#7a9bb5] leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: 1.75 }}
              >
                NativeSOC is designed to be fully vendor-agnostic, integrating seamlessly with your existing
                infrastructure. We partner with the world's leading technology providers across cloud,
                endpoint, identity, and networking to correlate threat signals and deliver automated,
                high-fidelity security orchestration.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleSubLinkClick('alliance-grid')}
                  className="inline-flex items-center gap-3 text-[#050d1a] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-colors duration-300 group" style={{ background: "linear-gradient(135deg, #00cc70, #00ff88)" }}
                >
                  Explore Integrations
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
                <button
                  onClick={() => handleSubLinkClick('join-partner')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff88] hover:gap-3 transition-all duration-300"
                >
                  Apply to Program
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive integrations network canvas */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div >
                <div className="absolute inset-4 rounded-full border border-[rgba(0,255,136,0.3)]/10  animate-pulse" />

                {/* Central NativeSOC Core */}
                <div className="relative w-28 h-28 rounded-full bg-[#050d1a] border-4 border-[rgba(0,255,136,0.3)] flex flex-col items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500 z-10">
                  <Shield className="w-8 h-8 text-[#00d4aa] mb-1" />
                  <span className="text-[10px] font-bold tracking-widest text-[#00d4aa] uppercase">NativeSOC</span>
                </div>

                {/* Orbiting technology nodes */}
                <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                  {/* Node 1: Cloud */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl border border-black/5 flex items-center justify-center shadow-md -rotate-spin" style={{ background: '#050d1a', animation: 'counter-spin 20s linear infinite' }}>
                    <Cloud className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  {/* Node 2: Endpoint */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl border border-black/5 flex items-center justify-center shadow-md -rotate-spin" style={{ background: '#050d1a', animation: 'counter-spin 20s linear infinite' }}>
                    <Server className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  {/* Node 3: OS */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl border border-black/5 flex items-center justify-center shadow-md -rotate-spin" style={{ background: '#050d1a', animation: 'counter-spin 20s linear infinite' }}>
                    <Cpu className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  {/* Node 4: DB */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl border border-black/5 flex items-center justify-center shadow-md -rotate-spin" style={{ background: '#050d1a', animation: 'counter-spin 20s linear infinite' }}>
                    <Database className="w-5 h-5 text-[#00ff88]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECHNOLOGY ALLIANCE GRID ══ */}
      <section id="alliance-grid" >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Integration Schema</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              Technology Alliance Ecosystem
            </h2>
            <p className="text-sm text-[#7a9bb5] leading-relaxed mt-2">
              We ingest and analyze log feeds from security platforms, cloud fabrics, HIDS/FIM runtimes, and databases globally.
            </p>
          </div>

          {/* Interactive Categories Tab switcher */}
          <div className="flex justify-center gap-2 flex-wrap mb-12">
            {[
              { id: 'security', label: 'Security & VPN', icon: <Shield className="w-3.5 h-3.5" /> },
              { id: 'cloud', label: 'Cloud Infrastructure', icon: <Cloud className="w-3.5 h-3.5" /> },
              { id: 'os', label: 'OS & Virtualization', icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: 'apps', label: 'Apps & Databases', icon: <Database className="w-3.5 h-3.5" /> },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-full border transition-all duration-200 ${activeCategory === cat.id ? 'bg-[#050d1a] text-white border-transparent' : 'text-[#7a9bb5] border-[rgba(0,255,136,0.1)] hover:border-[rgba(0,255,136,0.3)]'}`}
                style={{ background: '#050d1a' }}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Partners Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getActivePartners().map((partner) => (
              <div
                key={partner.name}
                style={{ background: '#050d1a' }} className="p-6 sm:p-8 rounded-3xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88]">
                      {getCategoryIcon()}
                    </div>
                    <span className="text-[10px] font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] px-2.5 py-1 rounded border border-[rgba(0,255,136,0.15)]">
                      {partner.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: NHG }}>
                    {partner.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7a9bb5] leading-relaxed mb-4">
                    {partner.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[rgba(0,255,136,0.1)] mt-4 text-xs font-semibold text-[#00ff88]">
                  <strong>Telemetry Scope:</strong> {partner.details}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ JOIN PARTNER PROGRAM CTA ══ */}
      <section id="join-partner" className="py-20 sm:py-28 relative overflow-hidden transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[rgba(0,255,136,0.08)]  border border-[rgba(0,255,136,0.15)]  flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00ff88] px-3.5 py-1 rounded-full border border-black/5 self-start" style={{ background: '#050d1a' }}>
                Become a Partner
              </span>
              <h2 className="text-3xl font-semibold text-white leading-tight" style={{ fontFamily: NHG }}>
                Expand Your Portfolio with NativeDefence
              </h2>
              <p className="text-sm sm:text-base text-[#7a9bb5] leading-relaxed max-w-3xl">
                NativeSOC works with End-Customers, Resellers, SI's, and OEM's globally. Collaborate with us
                as a channel partner or systems integrator to deploy AI-driven detection engines, FIM monitors,
                and automated playbooks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#050d1a] hover:opacity-90 text-white text-xs font-bold px-6 py-4 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                Apply for Channel Partner
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══ FOOTER CTA & FOOTER BAND ══ */}
      <footer >

        {/* Dynamic CTA Block */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3
              className="font-normal text-white mb-2"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
            >
              Ready to unify your threat management?
            </h3>
            <p className="text-sm text-[#7a9bb5]">Connect with our channel and partner alliance teams.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 text-[#050d1a] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-colors duration-300 group" style={{ background: "linear-gradient(135deg, #00cc70, #00ff88)" }}
            >
              Join Partner Program
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white dark:bg-[#050d1a] hover:bg-[#f0f0ee] dark:hover:bg-[#00cc70] text-white border border-[rgba(0,255,136,0.15)] text-sm font-semibold px-5 py-3.5 rounded-full transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>

        {/* Lower copyright band */}
        <div className="border-t border-[rgba(0,255,136,0.1)]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <img src={logoDark} style={{ opacity: 0.8 }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
              <p className="text-xs text-[#7a9bb5]/40">
                Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#7a9bb5]/40">Alliance scanning operations active</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
