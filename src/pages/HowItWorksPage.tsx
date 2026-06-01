import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, Shield, Activity, Database, Zap,
  CheckCircle, Sparkles, Sun, Moon, Menu, X
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

interface StepItem {
  number: string;
  title: string;
  icon: any;
  desc: string;
  metrics: string;
}

const timelineSteps: StepItem[] = [
  {
    number: '01',
    title: 'Detect',
    icon: Shield,
    desc: 'Proactively detect malicious threat actors and vulnerability is the key to address new age impending attacks. Detection of the vulnerable areas of your assets combined with continuous security compliance checks helps understanding priority focus areas for the Security Team. NativeSOC\'s strategic approach uses cutting-edge tools and the required co-relations through well-set SOC analytical operations to quickly identify the cause of Cyber Attacks or the vulnerabilities that cause such attacks on your infrastructure.',
    metrics: 'Continuous configuration audits & vulnerability scanning active'
  },
  {
    number: '02',
    title: 'Analyse',
    icon: Activity,
    desc: 'With our vast & deep experience and strong co-relation capabilities, we assess and analyze if a traffic flow is genuine or an Cyber Attack. NativeSOC is fine tuned and integrated with relative threat intel and raises timely alerts. This helps our SOC analysts do a positive identification of an attack in the IT Infrastructure and produce timely alerts and reports. Cyber Attacking elements have a path and strategy. NativeSOC\'s proactive checks on "what can breach" to "what had breached" helps organisations stay ahead of any surprise or historical breach.',
    metrics: 'ML-powered anomalous traffic filter & threat intel feed sync'
  },
  {
    number: '03',
    title: 'Remediate',
    icon: Zap,
    desc: 'NativeSOC\'s ability of continuous Detection and Analytics help in getting a thorough "remedial action points" for the Security Team. The world-known CVE vulnerabilities could be plugged in timely manner before any hacker gets a chance to exploit the pre-existing anomaly, or could explore weak configured Critical Servers. NativeSOC helps in achieving a continuous cycle of "identify-detect-prevent" strategy and ensure the IT Infrastructure is hardened and the Security posture stays ahead of any impending attack.',
    metrics: 'SOAR playbooks & CVE remediation pathways mapping'
  },
  {
    number: '04',
    title: 'Monitor',
    icon: Database,
    desc: 'Our timely services makes the NativeSOC solution all-embracing. "We know what to Monitor" is our mantra when it comes to configuring Security dashboard for eyes-on-screen monitoring by our SOC Analysts. With our vast experience in the Security domain and knowing the attack mindset of new-age threats, we first build a robust alert mechanism powered by well designed "dashboards" that makes monitoring easy, but Security & Compliance very strong.',
    metrics: '24/7 eyes-on-screen technical operations center dashboard active'
  }
];

export default function HowItWorksPage() {
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

          {/* Logo & Back */}
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

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${l.href === '/howitworks' ? 'bg-[#1f2a1d] text-white dark:bg-[#336443]' : 'text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d]'}`}
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

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] dark:bg-[#1f2a1d] border border-black/8 dark:border-white/8 relative"
            >
              <Menu className={`w-4 h-4 text-[#1f2a1d] dark:text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-4 h-4 text-[#1f2a1d] dark:text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-black/5 dark:border-white/5 pt-3">
            {subLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-sm font-medium py-2.5 border-b border-black/5 dark:border-white/5 last:border-0 ${l.href === '/howitworks' ? 'text-[#336443] dark:text-[#85AB8B] font-semibold' : 'text-[#4b5b47] dark:text-[#8a9e86]'}`}
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

      {/* ══ HERO ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[#f0f7f1] dark:bg-[#141d13] border border-[#336443]/15 dark:border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#336443] dark:text-[#85AB8B]" />
            <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] tracking-wider uppercase">Lifecycle Flow</span>
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-normal text-[#1f2a1d] dark:text-white mb-6"
              style={{
                fontFamily: NHG,
                fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Operation Threat <br />
              <span className="text-[#336443] dark:text-[#85AB8B] font-medium">Life-Cycle Map.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
              We focus on a thorough 4-step cybersecurity strategy to identify, contain, and resolve cyberattacks
              before critical server nodes can be breached.
            </p>
          </div>
        </div>
      </section>

      {/* ══ STYLED TIMELINE STEPS ══ */}
      <section className="bg-[#f7f6f2] dark:bg-[#141d13] py-20 transition-colors duration-500">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">

          <div className="relative border-l border-[#336443]/20 dark:border-white/10 ml-4 sm:ml-10 space-y-16">
            {timelineSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative pl-10 sm:pl-16 group">

                  {/* Timeline bullet node */}
                  <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white dark:bg-[#0e150d] border-2 border-[#336443] flex items-center justify-center text-xs font-bold text-[#336443] dark:text-[#85AB8B] shadow group-hover:scale-105 transition-transform duration-200">
                    {step.number}
                  </div>

                  <div className="bg-white dark:bg-[#0e150d] p-8 rounded-3xl border border-black/5 dark:border-white/5 space-y-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1f2a1d] dark:text-white" style={{ fontFamily: NHG }}>
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-[10px] font-bold text-[#336443] dark:text-[#85AB8B] uppercase">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {step.metrics}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══ FOOTER ══ */}
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
            <span className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">Strategic containment models active</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
