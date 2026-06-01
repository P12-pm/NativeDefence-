import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.avif';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Sparkles,
  Menu, X, CheckCircle, Compass, Globe
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00ff88';
const ACCENT = '#00d4aa';

export default function AboutUsPage() {
  const [isDark, _setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
              onClick={() => handleSubLinkClick('about-hero')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Company
            </button>
            <button
              onClick={() => handleSubLinkClick('founder-spotlight')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Founder Profile
            </button>
            <button
              onClick={() => handleSubLinkClick('directors-spotlight')}
              className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00ff88] px-3 py-1.5 rounded-full hover:bg-[#0a1628] hover:bg-[rgba(0,255,136,0.07)] transition-all duration-200"
            >
              Directors Technical &amp; Sales
            </button>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            

            {/* CTA */}
            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 hover:opacity-90 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Contact Us
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
              onClick={() => handleSubLinkClick('about-hero')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Company
            </button>
            <button
              onClick={() => handleSubLinkClick('founder-spotlight')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)]"
            >
              Founder Profile
            </button>
            <button
              onClick={() => handleSubLinkClick('directors-spotlight')}
              className="text-left text-sm font-medium text-[#7a9bb5] py-2.5 border-b border-[rgba(0,255,136,0.1)] last:border-0"
            >
              Directors
            </button>
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#050d1a] text-white text-sm font-semibold py-3 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section id="about-hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
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
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">NativeDefence Leadership</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
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
                Pioneering Cybersecurity. <br />
                <span className="text-[#00ff88] font-medium">Empowering Global Organizations.</span>
              </h1>
              <h2 className="text-sm font-semibold tracking-wider text-[#00ff88] uppercase mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Technical &amp; SOC from Ahmedabad · Sales from Mumbai
              </h2>
              <p
                className="text-[#7a9bb5] leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: 1.75 }}
              >
                NativeSOC is an expert-driven Cyber Security Services company, with its Technical and SOC
                operations based out of Ahmedabad and Sales and Marketing driving from Mumbai. NativeSOC
                Team works with End-Customers, Resellers, SI's, and OEM's potentially due to its vast
                experience in the domain.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleSubLinkClick('founder-spotlight')}
                  className="inline-flex items-center gap-3 text-[#050d1a] text-sm font-semibold px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-colors duration-300 group" style={{ background: "linear-gradient(135deg, #00cc70, #00ff88)" }}
                >
                  Meet the Founder
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
                <button
                  onClick={() => handleSubLinkClick('directors-spotlight')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff88] hover:gap-3 transition-all duration-300"
                >
                  Technical &amp; Sales Directors
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick stats block */}
            <div className="lg:col-span-5 bg-[#0a1628]/80 backdrop-blur-md p-8 rounded-3xl border border-[rgba(0,255,136,0.1)] relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00ff88]/5 rounded-full blur-2xl pointer-events-none" />
              <Compass className="w-8 h-8 text-[#00ff88] mb-5" />
              <h3 className="font-semibold text-lg text-white mb-3" style={{ fontFamily: NHG }}>
                Full-Spectrum Security Partners
              </h3>
              <p className="text-sm text-[#7a9bb5] leading-relaxed mb-4">
                We assist organizations in navigating their digital threat landscapes with tailored VAPT audits,
                24/7 managed SOC monitoring, strategic CISO advisory, and advanced EdTech training modules.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#00ff88]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Securing 100,000+ Users Worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER SPOTLIGHT SECTION ══ */}
      <section id="founder-spotlight" >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase mb-4">
              EXECUTIVE PROFILE
            </div>
            <h2
              className="font-normal text-white leading-[1.05]"
              style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5.5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Meet the Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left Col: Executive credentials cards */}
            <div className="lg:col-span-4 space-y-6">

              {/* Profile Card */}
              <div style={{ background: '#050d1a' }} className="p-8 rounded-3xl border border-[rgba(0,255,136,0.1)] shadow-sm text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#00ff88] text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-inner" style={{ fontFamily: NHG }}>
                  HP
                </div>
                <h3 className="text-2xl font-semibold text-white leading-tight" style={{ fontFamily: NHG }}>
                  Hemal Patel
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#00ff88] mt-2 mb-6">
                  Founder &amp; CEO, Serial Entrepreneur
                </p>
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {['Stanford PM', 'MS Comp Sci', 'BE Telecom'].map(tag => (
                    <span key={tag} >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Startup Metrics Grid */}
              <div style={{ background: '#050d1a' }} className="p-6 rounded-3xl border border-[rgba(0,255,136,0.1)] space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00ff88]">Enterprise Milestones</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs py-1 border-b border-[rgba(0,255,136,0.1)]">
                    <span className="text-[#7a9bb5]">Cyberoam Brands</span>
                    <span className="font-semibold text-white">150+ Countries</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-[rgba(0,255,136,0.1)]">
                    <span className="text-[#7a9bb5]">Elitecore Workforce</span>
                    <span className="font-semibold text-white">11 to 1700 employees</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-[rgba(0,255,136,0.1)]">
                    <span className="text-[#7a9bb5]">Total Valuation Exit</span>
                    <span className="font-semibold text-white">$100M+ Val</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Detailed Bio text blocks */}
            <div className="lg:col-span-8 space-y-6">

              {/* Detailed Biographies */}
              <div style={{ background: '#050d1a' }} className="p-8 sm:p-10 rounded-3xl border border-[rgba(0,255,136,0.1)] shadow-sm space-y-6 text-[#7a9bb5] leading-relaxed text-sm sm:text-base">

                <p className="font-medium text-white text-base sm:text-lg border-l-4 border-[rgba(0,255,136,0.3)] pl-4">
                  Hemal Patel is a successful serial Entrepreneur and a Technology Executive with diverse skills and management experience, including Sales, Marketing, Product Design, Product Development and Financial Management.
                </p>

                <p>
                  He started his career with IceNet and has managed four successful tech start-ups and built global brands like Cyberoam and Elitecore in the domains of network security and telecom. He founded Elitecore as software product company from Ahmedabad, India and grew up to 1700 employee from 11 at start and worldwide revenue grossing over $90mil. He successfully raised private equity fund from The Carlyle group, demerge two businesses in to independent companies (Cyberoam and Elitecore) and brought exit to shareholders with $100+Mil in enterprise valuation. He served as a Senior Vice President managing IT (CIO) and Operations at SOPHOS from 2015 and successfully completed challenging integration.
                </p>

                <p>
                  Hemal Patel has vast experience in building technology businesses from scratch and running ISPs in USA, Puerto Rico and India. Cyberoam, which is now a part of SOPHOS, is his best-known venture with 100000+ customers, 600+ member strong team and 12000+ resellers / 200 distributors in 150+ countries. Elitecore, was the parent company of Cyberoam and now a part of Sterlite, is another best-known startup for building enterprise OSS/BSS solution for Telecom industry with the market penetration in India, South East Asia, Middle East and Africa.
                </p>

                <p>
                  He has also been the founder of Eclipse Micro Computer which has managed large IT infrastructure projects for US firms like Chase Manhattan Bank, J.P. Morgan, Merrill Lynch, AT&T and many more.
                </p>

                <p className="pt-4 border-t border-[rgba(0,255,136,0.1)] text-xs sm:text-sm font-medium">
                  Hemal Patel has a bachelor’s degree in Electronics and Telecommunication Engineering from India, Masters in Computer Science from USA and Advanced Project Management from Stanford University, CA, USA.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══ DIRECTORS & SPOTLIGHTS SECTION ══ */}
      <section id="directors-spotlight" className="py-20 sm:py-28 relative overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute top-[20%] left-10 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${PRIMARY} 0%, transparent 70%)` }} />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[11px] font-semibold text-[#050d1a] bg-[#00ff88] rounded-full px-3 py-1 tracking-widest uppercase mb-4">
              TECHNICAL &amp; SALES DIRECTORS
            </div>
            <h2
              className="font-normal text-white leading-[1.05] mb-6"
              style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Elite Technical &amp; Commercial Leadership
            </h2>
            <p className="text-[#7a9bb5] leading-relaxed max-w-xl">
              Driving innovative threat operations from Ahmedabad and commercial expansion from Mumbai.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Director 1: Srijan Nandi */}
            <div >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#00ff88] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: NHG }}>
                    SN
                  </div>
                  <span className="text-xs font-bold text-[#00ff88] border border-[rgba(0,255,136,0.1)] rounded-full px-3 py-1" style={{ background: '#050d1a' }}>
                    Technical Operations
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white leading-tight mb-2" style={{ fontFamily: NHG }}>
                  Srijan Nandi
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#00ff88] mb-4">Director Technical</p>
                <p className="text-sm text-[#7a9bb5] leading-relaxed">
                  Directing the core security analysis platforms, SIEM/HIDS architectures, and container threat assessments.
                  Overseeing the 24/7 technical operations center in Ahmedabad to safeguard corporate infrastructures.
                </p>
              </div>
              <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] mt-8 flex items-center gap-2 text-xs text-[#7a9bb5]">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Technical Operations Center Lead
              </div>
            </div>

            {/* Director 2: Bishwajit Sutradhar */}
            <div >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#00ff88] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: NHG }}>
                    BS
                  </div>
                  <span className="text-xs font-bold text-[#00ff88] border border-[rgba(0,255,136,0.1)] rounded-full px-3 py-1" style={{ background: '#050d1a' }}>
                    Commercial Operations
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white leading-tight mb-2" style={{ fontFamily: NHG }}>
                  Bishwajit Sutradhar
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#00ff88] mb-4">Director Sales</p>
                <p className="text-sm text-[#7a9bb5] leading-relaxed">
                  Driving regional partner distributions, resellers, SI alignments, and enterprise accounts globally.
                  Orchestrating sales and marketing campaigns from Mumbai to deploy NativeSOC and VAPT models.
                </p>
              </div>
              <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] mt-8 flex items-center gap-2 text-xs text-[#7a9bb5]">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Global Partnerships &amp; Enterprise Sales Lead
              </div>
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
              Ready to fortify your organization's defenses?
            </h3>
            <p className="text-sm text-[#7a9bb5]">Reach out to our security experts for consultations and managed operations.</p>
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
              <img src={logoDark} style={{ opacity: 0.8 }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
              <p className="text-xs text-[#7a9bb5]/40">
                Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#7a9bb5]/40">All corporate pipelines secure</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
