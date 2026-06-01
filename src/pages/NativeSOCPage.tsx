import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.avif';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Shield, Eye, Zap,
  Database, FileSearch, Users, Menu, X, Sparkles, CheckCircle
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00E5FF';
const ACCENT = '#3B82F6';

/* ─── Platform feature data ─── */
const features = [
  {
    id: 'SIEM',
    icon: Database,
    title: 'Security Information & Event Management',
    desc: 'Centralise and correlate log data from every source across your organisation for complete, real-time security intelligence. Detect anomalies and threats across your entire infrastructure from a single pane of glass.',
    points: ['Real-time log ingestion & correlation', 'Threat intelligence integration', 'Compliance-ready dashboards', 'Custom alert rules & escalation'],
  },
  {
    id: 'XDR',
    icon: Shield,
    title: 'Extended Detection & Response',
    desc: 'Unify detection, investigation and response across endpoints, networks and cloud in a single integrated workflow — breaking down security silos for faster, more accurate threat response.',
    points: ['Unified threat timeline view', 'Cross-layer attack correlation', 'One-click investigation pivot', 'Automated triage & enrichment'],
  },
  {
    id: 'HIDS',
    icon: Eye,
    title: 'Host-based Intrusion Detection',
    desc: 'Analyse system activity on endpoints to identify potential threats and mitigate risk with advanced reports and alerts. Monitor process execution, file access, and privilege changes in real time.',
    points: ['Process & syscall monitoring', 'Rootkit & malware detection', 'Privilege escalation alerts', 'Advanced endpoint reports'],
  },
  {
    id: 'FIM',
    icon: FileSearch,
    title: 'File Integrity Monitoring',
    desc: 'Detect unauthorised changes to critical files, system configurations and registries in real time. Stay ahead of ransomware, insider threats, and supply-chain attacks with continuous file change tracking.',
    points: ['Real-time change detection', 'Registry & config monitoring', 'Baseline deviation alerting', 'Audit-ready change history'],
  },
  {
    id: 'UEBA',
    icon: Users,
    title: 'User & Entity Behaviour Analytics',
    desc: 'Surface insider threats and compromised accounts through ML-driven behavioural baselines and anomaly detection. Identify lateral movement and data exfiltration before they escalate.',
    points: ['Behavioural baseline learning', 'ML-powered anomaly scoring', 'Lateral movement detection', 'Insider threat early warning'],
  },
  {
    id: 'XOAR',
    icon: Zap,
    title: 'Extended Orchestration & Automation',
    desc: 'Automated response playbooks neutralise threats within minutes — no manual intervention required. Coordinate actions across your entire security stack with intelligent, context-aware workflows.',
    points: ['Pre-built response playbooks', 'Cross-tool orchestration', 'Automated threat containment', 'Human-in-the-loop escalation'],
  },
];

/* ─── Industry verticals ─── */
const industries = [
  { label: 'BFSI', icon: '🏦' },
  { label: 'Financial Services', icon: '💳' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Manufacturing', icon: '🏭' },
  { label: 'Legal & Audit Firms', icon: '⚖️' },
  { label: 'Education', icon: '🎓' },
  { label: 'Retail', icon: '🛍️' },
  { label: 'Transportation', icon: '🚚' },
  { label: 'Credit Unions', icon: '🏛️' },
  { label: 'Aviation', icon: '✈️' },
  { label: 'Auto Dealers', icon: '🚗' },
];

/* ─── Sub-page nav links ─── */
const subLinks = [
  { label: 'NativeSOC Approach', href: '/nativesocapproach' },
  { label: 'NativeSOC Features', href: '/nativesocfeatures' },
  { label: 'NativeSOC Architecture', href: '/nativesocarchitecture' },
  { label: 'How it Works', href: '/howitworks' },
  { label: 'Why NativeSOC', href: '/whynativesoc' },
];

/* ─── Animated counter ─── */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

/* ─── useInView hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Stats bar ─── */
const stats = [
  { value: 500, suffix: '+', label: 'Threats blocked daily' },
  { value: 99, suffix: '.9%', label: 'Uptime SLA' },
  { value: 11, suffix: '+', label: 'Industry verticals' },
  { value: 24, suffix: '/7', label: 'SOC monitoring' },
];

/* ══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════════════════════ */
export default function NativeSOCPage() {
  const [isDark, _setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  /* Sync dark class */
  useEffect(() => {
    const root = document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  /* Lock scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: '#0A0F1F' }}>

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1F]/85 dark:bg-[#0A0F1F]/90 backdrop-blur-xl border-b border-[rgba(0,229,255,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Back + Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-medium text-[#7a9bb5] hover:text-[#00E5FF] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="w-px h-4 bg-[#0A0F1F]/15 dark:bg-white/15" />
            <Link to="/" className="flex items-center">
              <img
                src={logoDark}
                alt="NativeDefence Logo"
                className="transition-all duration-300 object-contain"
                style={{ height: '45px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop sub-links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className="text-xs font-medium text-[#7a9bb5] hover:text-[#00E5FF] px-3 py-1.5 rounded-full hover:bg-[#111827] hover:bg-[rgba(0,229,255,0.07)] transition-all duration-200 whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            
            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 hover:opacity-90 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Free Assessment
            </Link>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] relative"
            >
              <Menu className={`w-4 h-4 text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-4 h-4 text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Mobile sub-link drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-[rgba(0,229,255,0.1)] pt-3">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,229,255,0.1)] last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="mt-2 block text-center bg-[#0A0F1F] text-white text-sm font-semibold py-3 rounded-full"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.04]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`, transform: 'translate(30%, 30%)' }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Breadcrumb badge */}
          <div >
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-semibold text-[#00E5FF] tracking-wider uppercase">NativeSOC Platform</span>
          </div>

          {/* Main heading */}
          <h1
            className="font-normal text-white mb-8 max-w-4xl"
            style={{
              fontFamily: NHG,
              fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
            }}
          >
            A next-gen{' '}
            <span style={{ color: PRIMARY }}>all-in-one</span>{' '}
            on-prem &amp; cloud security platform.
          </h1>

          {/* Description */}
          <p
            className="text-[#7a9bb5] max-w-2xl mb-10"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.75 }}
          >
            NativeSOC has SIEM, XDR, HIDS, FIM, VA and XOAR built into a single, cohesive system.
            It provides end-to-end security analysis, intrusion detection, log data analysis,
            incident response, regulatory compliance, and cloud & container security — in one unified command centre.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 text-[#0A0F1F] text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
            >
              Get a free demo
              <div className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5" style={{ background: 'rgba(10,15,31,0.2)' }}>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
            <Link
              to="/nativesocfeatures"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:gap-3 transition-all duration-300"
            >
              Explore features
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pill indicators */}
          <div className="flex flex-wrap gap-2 mt-10">
            {['SIEM', 'XDR', 'HIDS', 'FIM', 'VA', 'XOAR'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#00E5FF] bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] dark:border-[rgba(0,212,170,0.15)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Threat map image */}
          <div
            className="mt-16 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(0,229,255,0.12)', boxShadow: '0 0 40px rgba(0,0,0,0.4)' }}
          >
            <img
              src="/NativeDefence-/cyber_threat_map.png"
              alt="Real-time Global Threat Map"
              className="w-full h-72 md:h-96 object-cover"
              style={{ filter: 'brightness(0.85) saturate(1.1)' }}
            />
            <div
              className="flex items-center gap-3 px-5 py-3"
              style={{ background: 'rgba(10,15,31,0.9)', borderTop: '1px solid rgba(0,229,255,0.1)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-mono text-[#00E5FF]">NativeSOC™ — Global Threat Intelligence Feed · Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <StatsSection />

      {/* ══ PLATFORM FEATURES ══ */}
      <PlatformFeatures />

      {/* ══ SUB-PAGE LINKS ══ */}
      <ExploreDeeper />

      {/* ══ INDUSTRY COVERAGE ══ */}
      <IndustryCoverage />

      {/* ══ ABOUT NATIVESOC ══ */}
      <AboutNativeSOC />

      {/* ══ FOOTER CTA ══ */}
      <FooterCTA isDark={isDark} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   STATS SECTION
══════════════════════════════════════════════════════ */
function StatsSection() {
  const { ref, inView } = useInView();
  const counts = stats.map(s => ({ ...s, count: useCountUp(s.value, inView) }));

  return (
    <div ref={ref} className="bg-[#0A0F1F]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {counts.map(({ count, suffix, label }) => (
            <div key={label} className="flex flex-col items-center lg:items-start lg:px-10 gap-1">
              <span
                className="font-normal text-white"
                style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                {count}{suffix}
              </span>
              <span className="text-sm text-[#3B82F6] font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PLATFORM FEATURES
══════════════════════════════════════════════════════ */
function PlatformFeatures() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section >
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36">
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[11px] font-semibold text-[#0A0F1F] bg-[#00E5FF] rounded-full px-3 py-1 tracking-widest uppercase">Platform</span>
          <span className="text-sm font-medium text-[#7a9bb5]">Six Pillars of NativeSOC</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
          <h2
            className={`font-normal text-white transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '700px' }}
          >
            One platform.{' '}
            <span style={{ color: PRIMARY }}>Six integrated</span>{' '}
            security capabilities.
          </h2>
          <Link
            to="/nativesocfeatures"
            className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:gap-3 transition-all duration-300 group flex-shrink-0 ${inView ? 'opacity-100' : 'opacity-0'}`}
          >
            See all features <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0F1F]/10 dark:bg-white/10 rounded-2xl overflow-hidden">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isActive = active === f.id;
            return (
              <div
                key={f.id}
                className={`bg-white p-6 sm:p-8 cursor-pointer transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isActive ? 'bg-[rgba(0,229,255,0.08)]' : 'hover:bg-[#f7faf8] hover:bg-[#1F2937]'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setActive(isActive ? null : f.id)}
              >
                {/* ID + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-widest text-[#00E5FF]">{f.id}</span>
                    <div className={`h-px bg-[#00E5FF] transition-all duration-500 ease-out ${isActive ? 'w-8' : 'w-0'}`} />
                  </div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? 'bg-[#00E5FF]' : 'bg-[#00E5FF]/10'}`}>
                    <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#00E5FF]'}`} />
                  </div>
                </div>

                <h3 className="font-medium text-white mb-3 leading-tight" style={{ fontFamily: NHG, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                  {f.title}
                </h3>
                <p className="text-sm text-[#7a9bb5] leading-relaxed mb-4">{f.desc}</p>

                {/* Expandable bullet points */}
                <div className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="flex flex-col gap-2 pt-2">
                    {f.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-white">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={`text-xs text-[#3B82F6] mt-3 font-medium transition-opacity duration-200 ${isActive ? 'opacity-0' : 'opacity-60'}`}>
                  Click to expand →
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   EXPLORE DEEPER — sub-page link cards
══════════════════════════════════════════════════════ */
function ExploreDeeper() {
  const { ref, inView } = useInView();

  return (
    <section style={{ background: '#0A0F1F' }} className="transition-colors duration-500">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28">
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[11px] font-semibold text-[#0A0F1F] bg-[#00E5FF] rounded-full px-3 py-1 tracking-widest uppercase">Learn More</span>
          <span className="text-sm font-medium text-[#7a9bb5]">Explore NativeSOC in depth</span>
        </div>

        <h2
          className={`font-normal text-white mb-12 transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontFamily: NHG, fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '600px' }}
        >
          Everything you need to{' '}
          <span style={{ color: PRIMARY }}>understand the platform.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`group flex items-center justify-between p-6 rounded-2xl bg-[#111827] hover:bg-[#eef5ef] hover:bg-[#1F2937] border border-transparent hover:border-[rgba(0,229,255,0.2)] hover:border-[rgba(0,212,170,0.2)] transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#00E5FF] mb-1">
                  0{i + 1}
                </p>
                <p className="font-medium text-white" style={{ fontFamily: NHG, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                  {link.label}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full border border-[rgba(0,229,255,0.15)] flex items-center justify-center transition-all duration-300 group-hover:bg-[#00E5FF] group-hover:border-[rgba(0,229,255,0.3)]">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   INDUSTRY COVERAGE
══════════════════════════════════════════════════════ */
function IndustryCoverage() {
  const { ref, inView } = useInView();

  return (
    <section >
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28">
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[11px] font-semibold text-[#0A0F1F] bg-[#00E5FF] rounded-full px-3 py-1 tracking-widest uppercase">Coverage</span>
          <span className="text-sm font-medium text-[#7a9bb5]">Industry verticals</span>
        </div>

        <h2
          className={`font-normal text-white mb-4 transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontFamily: NHG, fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '700px' }}
        >
          Built for every{' '}
          <span style={{ color: PRIMARY }}>regulated industry.</span>
        </h2>
        <p className={`text-[#7a9bb5] mb-12 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '560px' }}>
          NativeSOC is purpose-built for compliance-heavy industries where security failures have real-world consequences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#1f2a1d]/08 hover:border-[rgba(0,229,255,0.3)] hover:border-[rgba(0,212,170,0.3)] hover:-translate-y-0.5 transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="text-xl flex-shrink-0">{ind.icon}</span>
              <span className="text-sm font-medium text-white">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   ABOUT NATIVESOC
══════════════════════════════════════════════════════ */
function AboutNativeSOC() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#0A0F1F] overflow-hidden relative">
      {/* Floating orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(133,171,139,0.08) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-[11px] font-semibold text-white bg-[#3B82F6] rounded-full px-3 py-1 tracking-widest uppercase">About</span>
              <span className="text-sm font-medium text-[#3B82F6]/70">NativeSOC Company</span>
            </div>
            <h2
              className={`font-normal text-white mb-6 transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: NHG, fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Expert-driven cybersecurity,{' '}
              <span style={{ color: ACCENT }}>built for organisations that can't afford to fail.</span>
            </h2>
            <p
              className={`text-[#7a9bb5] leading-relaxed mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontSize: '0.95rem', lineHeight: 1.85 }}
            >
              NativeSOC is an expert-driven Cyber Security Services company, with its Technical
              and SOC operations based out of <span className="text-white font-semibold">Ahmedabad</span> and
              Sales and Marketing driving from <span className="text-white font-semibold">Mumbai</span>.
            </p>
            <p
              className={`text-[#7a9bb5] leading-relaxed mb-10 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontSize: '0.95rem', lineHeight: 1.85 }}
            >
              NativeSOC Team works with End-Customers, Resellers, SI's and OEM's — leveraging
              vast experience across BFSI, Healthcare, Manufacturing, Education and more.
            </p>
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                to="/#team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-white hover:gap-3 transition-all duration-300"
              >
                Meet the team <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-white hover:gap-3 transition-all duration-300"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: contact info cards */}
          <div className={`flex flex-col gap-4 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-[#3B82F6] mb-2">Email</p>
              <a href="mailto:sales@nativedefence.com" className="text-white font-semibold hover:text-[#3B82F6] transition-colors duration-200">
                sales@nativedefence.com
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-[#3B82F6] mb-2">Ahmedabad</p>
              <p className="text-[#7a9bb5] text-sm leading-relaxed">
                D-311 Ganesh Glory 11, Jagatpur Road, Near BSNL Office,<br />
                Off S G Highway, Jagatpur, Ahmedabad, Gujarat — 382470
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-[#3B82F6] mb-2">Kolkata</p>
              <p className="text-[#7a9bb5] text-sm leading-relaxed">
                8 Beck Bagan Row, Kolkata — 700017
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   FOOTER CTA
══════════════════════════════════════════════════════ */
function FooterCTA({ isDark: _isDark }: { isDark: boolean }) {
  return (
    <footer >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <h3
            className="font-normal text-white mb-2"
            style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
          >
            Ready to deploy NativeSOC?
          </h3>
          <p className="text-sm text-[#7a9bb5]">Book a free security assessment — no commitment.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 text-[#0A0F1F] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5 transition-colors duration-300 group" style={{ background: "linear-gradient(135deg, #3B82F6, #00E5FF)" }}
          >
            Free Assessment
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white dark:bg-[#0A0F1F] hover:bg-[#f0f0ee] dark:hover:bg-[#3B82F6] text-white border border-[rgba(0,229,255,0.15)] text-sm font-semibold px-5 py-3.5 rounded-full transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
      <div className="border-t border-[rgba(0,229,255,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img src={logoDark} style={{ opacity: 0.8 }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
            <p className="text-xs text-[#7a9bb5]/40">
              Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#7a9bb5]/40">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
