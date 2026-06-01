import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Award, Sparkles,
  Sun, Moon, Menu, X, CheckCircle, Target, Flame, ChevronRight, ChevronDown
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00ff88';
const ACCENT = '#00d4aa';

interface ThreatItem {
  id: number;
  title: string;
  severity: 'Critical' | 'High';
  cve: string;
  affected: string;
  versions: string;
  vulnerability: string;
  impact: string;
  recommendation: string;
  remediation: string;
}

const threatIntelData: ThreatItem[] = [
  {
    id: 1,
    title: 'Citrix NetScaler ADC and NetScaler Gateway Code Injection Vulnerability',
    severity: 'Critical',
    cve: 'CVE-2023-3519',
    affected: 'Citrix NetScaler ADC and NetScaler Gateway',
    versions: 'Specific versions not specified',
    vulnerability: 'Improper input validation allows unauthenticated attackers to inject malicious code.',
    impact: 'Potential remote code execution leading to system compromise.',
    recommendation: 'Apply the latest security patches provided by Citrix.',
    remediation: 'Update to the latest version as per Citrix\'s guidance.'
  },
  {
    id: 2,
    title: 'Citrix NetScaler ADC and NetScaler Gateway Buffer Overflow Vulnerability',
    severity: 'Critical',
    cve: 'CVE-2023-4966',
    affected: 'Citrix NetScaler ADC and NetScaler Gateway',
    versions: 'Specific versions not specified',
    vulnerability: 'Buffer overflow allows attackers to execute arbitrary code.',
    impact: 'System crashes and potential remote code execution.',
    recommendation: 'Apply the latest security patches provided by Citrix.',
    remediation: 'Update to the latest version as per Citrix\'s guidance.'
  },
  {
    id: 3,
    title: 'Cisco IOS XE Web UI Privilege Escalation Vulnerability',
    severity: 'Critical',
    cve: 'CVE-2023-20198',
    affected: 'Cisco IOS XE Software',
    versions: 'Specific versions not specified',
    vulnerability: 'Unauthorized users can escalate privileges via the Web UI.',
    impact: 'Complete system compromise.',
    recommendation: 'Apply the latest security patches provided by Cisco.',
    remediation: 'Update to the latest version as per Cisco\'s guidance.'
  },
  {
    id: 4,
    title: 'Fortinet FortiOS and FortiProxy SSL-VPN Heap-Based Buffer Overflow',
    severity: 'Critical',
    cve: 'CVE-2023-27997',
    affected: 'Fortinet FortiOS and FortiProxy',
    versions: 'Specific versions not specified',
    vulnerability: 'Heap-based buffer overflow allows remote code execution.',
    impact: 'Unauthorized access and control over the system.',
    recommendation: 'Apply the latest security patches provided by Fortinet.',
    remediation: 'Update to the latest version as per Fortinet\'s guidance.'
  },
  {
    id: 5,
    title: 'Progress MOVEit Transfer SQL Injection Vulnerability',
    severity: 'Critical',
    cve: 'CVE-2023-34362',
    affected: 'Progress MOVEit Transfer',
    versions: 'Before 2021.0.6 (13.0.6), 2021.1.4 (13.1.4), 2022.0.4 (14.0.4), 2022.1.5 (14.1.5), 2023.0.1 (15.0.1)',
    vulnerability: 'SQL injection allows unauthenticated access to the database.',
    impact: 'Unauthorized data access, alteration, or deletion.',
    recommendation: 'Apply the latest security patches provided by Progress.',
    remediation: 'Update to the latest version as per Progress\'s guidance.'
  },
  {
    id: 6,
    title: 'Atlassian Confluence Data Center and Server Broken Access Control',
    severity: 'High',
    cve: 'CVE-2023-22515',
    affected: 'Atlassian Confluence Data Center and Server',
    versions: 'Specific versions not specified',
    vulnerability: 'Broken access control allows unauthorized access to restricted information.',
    impact: 'Information disclosure and potential data manipulation.',
    recommendation: 'Apply the latest security patches provided by Atlassian.',
    remediation: 'Update to the latest version as per Atlassian\'s guidance.'
  },
  {
    id: 7,
    title: 'Apache Log4j2 Remote Code Execution (Log4Shell)',
    severity: 'Critical',
    cve: 'CVE-2021-44228',
    affected: 'Apache Log4j2',
    versions: 'Specific versions not specified',
    vulnerability: 'Improper input validation allows remote code execution.',
    impact: 'Complete system compromise.',
    recommendation: 'Apply the latest security patches provided by Apache.',
    remediation: 'Update to the latest version as per Apache\'s guidance.'
  },
  {
    id: 8,
    title: 'Barracuda Networks ESG Appliance Improper Input Validation',
    severity: 'Critical',
    cve: 'CVE-2023-2868',
    affected: 'Barracuda Networks Email Security Gateway (ESG)',
    versions: 'Versions 5.1.3.001 to 9.2.0.006',
    vulnerability: 'Improper input validation in the processing of email attachments, leading to remote command execution.',
    impact: 'Attackers can exploit this flaw to gain unauthorized access and execute arbitrary code remotely.',
    recommendation: 'Upgrade to the latest version provided by Barracuda Networks.',
    remediation: 'Barracuda has urged customers to replace affected appliances as a permanent fix.'
  },
  {
    id: 9,
    title: 'Apple WebKit Memory Corruption Vulnerability',
    severity: 'High',
    cve: 'CVE-2023-32409',
    affected: 'Apple iOS, iPadOS, macOS, and Safari',
    versions: 'Older versions before recent security patches',
    vulnerability: 'A memory corruption issue in WebKit, exploited to execute arbitrary code via maliciously crafted web content.',
    impact: 'Users visiting a malicious website may have their system compromised.',
    recommendation: 'Apply Apple\'s latest security updates.',
    remediation: 'Ensure iOS/macOS devices are updated to the latest versions.'
  },
  {
    id: 10,
    title: 'Microsoft Outlook NTLM Relay Attack (Privilege Escalation)',
    severity: 'High',
    cve: 'CVE-2023-23397',
    affected: 'Microsoft Outlook',
    versions: 'Outlook 2013, 2016, 2019, and Microsoft 365',
    vulnerability: 'NTLM relay attack via a crafted email, allowing attackers to steal NTLM hashes.',
    impact: 'Potential privilege escalation and unauthorized access to sensitive information.',
    recommendation: 'Apply Microsoft security patches.',
    remediation: 'Disable NTLM authentication where possible and enable Extended Protection for Authentication.'
  }
];

const steps = [
  {
    num: '1',
    name: 'Scope',
    goal: 'Define the boundaries and limitations of the VAPT assessment.',
    obj: 'Clearly outline what systems, applications, and networks will be tested, along with the specific goals and constraints.'
  },
  {
    num: '2',
    name: 'Information Gathering',
    goal: 'Collect essential information about the target environment.',
    obj: 'To understand the target\'s architecture, potential attack surface, and initial reconnaissance of assets.'
  },
  {
    num: '3',
    name: 'Vulnerability Detection',
    goal: 'Identify security weaknesses, misconfigurations, and vulnerabilities.',
    obj: 'Use automated scanning tools and manual testing to discover common and unique security issues.'
  },
  {
    num: '4',
    name: 'Information Analysis and Planning',
    goal: 'Analyze the gathered information and plan the penetration testing.',
    obj: 'To evaluate the potential risks and prioritize testing efforts.'
  },
  {
    num: '5',
    name: 'Privilege Escalation',
    goal: 'Attempt to escalate privileges and gain deeper access to systems.',
    obj: 'To explore the extent of potential breaches and assess the level of risk.'
  },
  {
    num: '6',
    name: 'Result Analysis',
    goal: 'Analyze the outcomes and impact of the vulnerabilities identified.',
    obj: 'Understand the significance and potential consequences of the security weaknesses.'
  },
  {
    num: '7',
    name: 'Reporting',
    goal: 'Document and communicate the findings and recommendations.',
    obj: 'Create a clear and actionable report for the organization\'s stakeholders.'
  },
  {
    num: '8',
    name: 'Cleanup',
    goal: 'Ensure that no unintentional damage is done during the testing.',
    obj: 'Clean up and restore any changes made during the penetration testing.'
  }
];

export default function VAPTPage() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedThreat, setExpandedThreat] = useState<number | null>(null);
  const [threatSearch, setThreatSearch] = useState('');

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

  const filteredThreats = threatIntelData.filter(threat =>
    threat.title.toLowerCase().includes(threatSearch.toLowerCase()) ||
    threat.cve.toLowerCase().includes(threatSearch.toLowerCase()) ||
    threat.vulnerability.toLowerCase().includes(threatSearch.toLowerCase())
  );

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
                style={{
                  filter: 'brightness(0) invert(1)',
                  ...(isDark ? { width: '135px', height: '40px' } : { height: '40px', width: 'auto' })
                }}
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleSubLinkClick('vapt-intro')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Overview
            </button>
            <button
              onClick={() => handleSubLinkClick('timeline-methodology')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Methodology
            </button>
            <button
              onClick={() => handleSubLinkClick('safeguard-industries')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Industries
            </button>
            <button
              onClick={() => handleSubLinkClick('threat-intel')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Threat Intelligence
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
              Schedule VAPT
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
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-[rgba(0,255,136,0.1)] pt-3">
            <button
              onClick={() => handleSubLinkClick('vapt-intro')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Overview
            </button>
            <button
              onClick={() => handleSubLinkClick('timeline-methodology')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Methodology
            </button>
            <button
              onClick={() => handleSubLinkClick('safeguard-industries')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Industries
            </button>
            <button
              onClick={() => handleSubLinkClick('threat-intel')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)] last:border-0"
            >
              Threat Intelligence
            </button>
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#050d1a] text-white text-sm font-semibold py-3 rounded-full"
            >
              Schedule VAPT
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section id="vapt-intro" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
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
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">Proactive Defense Systems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Title / Main pitch */}
            <div className="lg:col-span-7">
              <h1
                className="font-normal text-white mb-6"
                style={{
                  fontFamily: NHG,
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                }}
              >
                Fortify Your Digital Defenses <br />
                <span className="text-[#00ff88] font-medium">with NATIVEDEFENCE's VAPT Services.</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-[#00ff88] mb-5 uppercase tracking-wide">
                Elevate Your Cybersecurity Today!
              </h2>
              <p
                className="text-[#7a9bb5] leading-relaxed mb-8"
                style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', lineHeight: 1.75 }}
              >
                At NativeDefence, we serve as your unwavering partner in strengthening your digital security.
                With a well-established history of excellence in Vulnerability Assessment and Penetration Testing (VAPT),
                we are wholeheartedly dedicated to fortifying your organization's defenses. Discover the depth of
                NativeDefence's proficiency and how it can safeguard your invaluable digital assets.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleSubLinkClick('vapt-canvas')}
                  className="inline-flex items-center gap-3 text-[#050d1a] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-colors duration-300 group" style={{ background: "linear-gradient(135deg, #00cc70, #00ff88)" }}
                >
                  Explore Capabilities
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff88] hover:gap-3 transition-all duration-300"
                >
                  Request a Free Audit
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pentest workstation image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(0,255,136,0.15)' }}
              >
                <img
                  src="/NativeDefence-/cyber_pentest_terminal.png"
                  alt="Cybersecurity Penetration Testing"
                  className="w-full h-72 object-cover"
                  style={{ filter: 'brightness(0.85) saturate(1.1)' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2"
                  style={{ background: 'rgba(5,13,26,0.85)', borderTop: '1px solid rgba(0,255,136,0.1)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span className="text-xs font-mono text-[#00ff88]">VAPT Assessment Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GOALS & OBJECTIVES CARD BAND ══ */}
      <section className="bg-[#0a1628]/60/40 py-10 border-y border-[rgba(0,255,136,0.1)] transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-[rgba(0,255,136,0.1)]">
            <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88] flex-shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-1">VAPT Goal</h4>
              <p className="text-sm text-[#7a9bb5] leading-relaxed">
                To identify and mitigate security vulnerabilities in the target environment.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-[rgba(0,255,136,0.1)]">
            <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-[#00ff88] flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-1">VAPT Objective</h4>
              <p className="text-sm text-[#7a9bb5] leading-relaxed">
                To improve the overall security posture, reduce risks, and prevent potential security breaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VA vs PT CANVAS ══ */}
      <section id="vapt-canvas" className="py-20 sm:py-28 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Dual Paradigm</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              The VAPT Core Structure
            </h2>
            <p className="text-sm text-[#7a9bb5] leading-relaxed mt-2">
              Our service model splits into two tightly integrated testing practices: Vulnerability Assessment and Penetration Testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* VA Card */}
            <div >
              <div>
                <span className="text-xs font-bold tracking-widest text-[#00ff88] uppercase block mb-4">Practice 01</span>
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: NHG }}>
                  Vulnerability Assessment
                </h3>
                <p className="text-sm sm:text-base text-[#7a9bb5] leading-relaxed mb-6">
                  Uncover vulnerabilities in your digital infrastructure proactively, beating potential attackers at their own game.
                  Our comprehensive Vulnerability Assessment meticulously identifies weaknesses, empowering you to address and
                  prioritize remediation effectively for enhanced security.
                </p>
              </div>
              <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] flex items-center gap-2 text-xs font-semibold text-[#00ff88]">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Proactive weaknesses discovery and cataloging
              </div>
            </div>

            {/* PT Card */}
            <div >
              <div>
                <span className="text-xs font-bold tracking-widest text-[#00ff88] uppercase block mb-4">Practice 02</span>
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: NHG }}>
                  Penetration Testing
                </h3>
                <p className="text-sm sm:text-base text-[#7a9bb5] leading-relaxed mb-6">
                  Our team of ethical hackers specializes in emulating real-world cyberattacks, rigorously testing the
                  resilience of your systems. Through Penetration Testing, we reveal vulnerabilities that automated
                  scans might overlook, guaranteeing the fortification of your defenses.
                </p>
              </div>
              <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] flex items-center gap-2 text-xs font-semibold text-[#00ff88]">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Ethical exploit simulations and validation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERACTIVE TIMELINE / METHODOLOGY ══ */}
      <section id="timeline-methodology" >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Testing Cycle</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white mt-4" style={{ fontFamily: NHG, lineHeight: 1.05 }}>
              Our 8-Step <br />
              <span className="text-[#00ff88] font-semibold">Scope &amp; Methodology</span>
            </h2>
            <p className="text-sm text-[#7a9bb5] mt-4">
              We execute our assessments under strict boundaries following standard operational phases to maintain safety and thoroughness.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} style={{ background: '#050d1a' }} className="p-6 rounded-2xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] px-2.5 py-1 rounded-full border border-[rgba(0,255,136,0.15)]">
                      Phase {s.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                  </div>

                  <h3 className="font-semibold text-base text-white mb-4" style={{ fontFamily: NHG }}>
                    {s.name}
                  </h3>

                  {/* Goal and Obj detailed blocks */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-rose-500 dark:text-rose-400 block mb-0.5">Goal</span>
                      <p className="text-xs text-[#7a9bb5] leading-relaxed font-medium">{s.goal}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#00ff88] block mb-0.5">Objective</span>
                      <p className="text-xs text-[#7a9bb5] leading-relaxed">{s.obj}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ INDUSTRIES WE SAFEGUARD ══ */}
      <section id="safeguard-industries" className="py-20 sm:py-28 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Target Coverage</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              Industries We Safeguard
            </h2>
            <p className="text-sm text-[#7a9bb5] leading-relaxed mt-2">
              Our VAPT methodologies are adapted specifically for the regulatory hurdles and risks facing your business vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Healthcare */}
            <div >
              <div>
                <span className="text-lg mb-3 block">🏥</span>
                <h4 className="font-semibold text-base text-white mb-2">Healthcare</h4>
                <p className="text-xs text-[#7a9bb5] leading-relaxed">
                  NATIVEDEFENCE ensures the security of healthcare systems, safeguarding patient data and ensuring compliance with strict healthcare regulations. Trust us for the confidentiality of sensitive patient information.
                </p>
              </div>
            </div>

            {/* Finance */}
            <div >
              <div>
                <span className="text-lg mb-3 block">💳</span>
                <h4 className="font-semibold text-base text-white mb-2">Finance</h4>
                <p className="text-xs text-[#7a9bb5] leading-relaxed">
                  Empower your financial institution with NATIVEDEFENCE's finance-focused VAPT services. Enhance the security of financial transactions and protect sensitive data from cyber threats.
                </p>
              </div>
            </div>

            {/* Government */}
            <div >
              <div>
                <span className="text-lg mb-3 block">🏛️</span>
                <h4 className="font-semibold text-base text-white mb-2">Government</h4>
                <p className="text-xs text-[#7a9bb5] leading-relaxed">
                  Government agencies trust NATIVEDEFENCE as their comprehensive VAPT partner. We secure critical infrastructure and protect sensitive government data to ensure national security.
                </p>
              </div>
            </div>

            {/* E-commerce */}
            <div >
              <div>
                <span className="text-lg mb-3 block">🛍️</span>
                <h4 className="font-semibold text-base text-white mb-2">E-commerce</h4>
                <p className="text-xs text-[#7a9bb5] leading-relaxed">
                  Trust NATIVEDEFENCE to secure your e-commerce platform. Our VAPT services form the foundation of online business security, safeguarding customer data and maintaining trust.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ THREAT INTELLIGENCE DATABASE ══ */}
      <section id="threat-intel" >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="max-w-3xl mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase">Vulnerability Intel</span>
              <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
                Significant Threat Intelligence
              </h2>
              <p className="text-sm text-[#7a9bb5] mt-2">
                We monitor active campaigns and zero-days to safeguard our partners. Check out the threat profiles below.
              </p>
            </div>

            {/* Search Input bar */}
            <div className="w-full md:w-80">
              <input
                type="text"
                value={threatSearch}
                onChange={(e) => setThreatSearch(e.target.value)}
                placeholder="Search CVEs or keywords..."
                className="w-full text-sm px-4 py-2.5 rounded-full border border-black/10 focus:outline-none focus:border-[rgba(0,255,136,0.3)]/50 focus:ring-1 focus:ring-[#336443]/30" style={{ background: '#050d1a' }}
              />
            </div>
          </div>

          {/* Expandable threat grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredThreats.map((threat) => {
              const isExpanded = expandedThreat === threat.id;
              return (
                <div
                  key={threat.id}
                  style={{ background: '#050d1a' }} className="rounded-2xl border border-[rgba(0,255,136,0.1)] overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => setExpandedThreat(isExpanded ? null : threat.id)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${threat.severity === 'Critical' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'}`}>
                          {threat.severity}
                        </span>
                        <span className="text-[10px] font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] px-2 py-0.5 rounded border border-[rgba(0,255,136,0.15)]">
                          {threat.cve}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base text-white leading-snug" style={{ fontFamily: NHG }}>
                        {threat.title}
                      </h4>
                    </div>
                    <div >
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? 'max-h-[500px] border-t border-[rgba(0,255,136,0.1)]' : 'max-h-0'}`}>
                    <div className="p-6 space-y-4 text-xs sm:text-sm bg-[#0a1628]/40/30 leading-relaxed text-[#7a9bb5]">
                      <div>
                        <strong className="text-white">Affected Applications:</strong> {threat.affected}
                      </div>
                      {threat.versions && (
                        <div>
                          <strong className="text-white">Versions Affected:</strong> {threat.versions}
                        </div>
                      )}
                      <div>
                        <strong className="text-white">Vulnerability mechanics:</strong> {threat.vulnerability}
                      </div>
                      <div>
                        <strong className="text-white">Exploitation Impact:</strong> {threat.impact}
                      </div>
                      <div>
                        <strong className="text-white">Recommendation:</strong> {threat.recommendation}
                      </div>
                      <div className="bg-[rgba(0,255,136,0.08)] dark:bg-[#142214] p-3 rounded-xl border border-[rgba(0,255,136,0.15)]">
                        <strong className="text-[#00ff88] block mb-0.5">Remediation Path</strong>
                        <p className="text-xs text-[#00ff88]">{threat.remediation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredThreats.length === 0 && (
            <div className="text-center py-10 rounded-2xl border border-black/5" style={{ background: '#050d1a' }}>
              <Flame className="w-8 h-8 text-rose-500 mx-auto mb-2" />
              <p className="text-sm font-medium">No threats match your query.</p>
            </div>
          )}

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
              Ready to secure your digital infrastructure?
            </h3>
            <p className="text-sm text-[#7a9bb5]">Schedule a comprehensive vulnerability assessment and pentest audit.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 text-[#050d1a] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-colors duration-300 group" style={{ background: "linear-gradient(135deg, #00cc70, #00ff88)" }}
            >
              Get Free VAPT Assessment
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
              <img src={logoDark} style={{ filter: 'brightness(0) invert(1)' }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
              <p className="text-xs text-[#7a9bb5]/40">
                Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#7a9bb5]/40">Security scanning engines operational</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
