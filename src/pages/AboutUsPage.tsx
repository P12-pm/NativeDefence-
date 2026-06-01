import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Sparkles,
  Sun, Moon, Menu, X, CheckCircle, Compass, Globe
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#336443';
const ACCENT = '#85AB8B';

export default function AboutUsPage() {
  const [isDark, setIsDark] = useState(false);
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
    <div className="min-h-screen bg-white dark:bg-[#0e150d] transition-colors duration-500 text-[#1f2a1d] dark:text-[#c5d9c3]">

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0e150d]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo & Back button */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
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

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleSubLinkClick('about-hero')}
              className="text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d] transition-all duration-200"
            >
              Company
            </button>
            <button
              onClick={() => handleSubLinkClick('founder-spotlight')}
              className="text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d] transition-all duration-200"
            >
              Founder Profile
            </button>
            <button
              onClick={() => handleSubLinkClick('directors-spotlight')}
              className="text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d] transition-all duration-200"
            >
              Directors Technical &amp; Sales
            </button>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(d => !d)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] dark:bg-[#1f2a1d] border border-black/8 dark:border-white/8 relative"
              aria-label="Toggle theme"
            >
              <Sun className={`w-3.5 h-3.5 text-[#1f2a1d] dark:text-white absolute transition-all duration-300 ${isDark ? 'opacity-100' : 'opacity-0 rotate-90'}`} />
              <Moon className={`w-3.5 h-3.5 text-[#1f2a1d] dark:text-white absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90' : 'opacity-100'}`} />
            </button>

            {/* CTA */}
            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Contact Us
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
            <button
              onClick={() => handleSubLinkClick('about-hero')}
              className="text-left text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] py-2.5 border-b border-black/5 dark:border-white/5"
            >
              Company
            </button>
            <button
              onClick={() => handleSubLinkClick('founder-spotlight')}
              className="text-left text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] py-2.5 border-b border-black/5 dark:border-white/5"
            >
              Founder Profile
            </button>
            <button
              onClick={() => handleSubLinkClick('directors-spotlight')}
              className="text-left text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] py-2.5 border-b border-black/5 dark:border-white/5 last:border-0"
            >
              Directors
            </button>
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#1f2a1d] text-white text-sm font-semibold py-3 rounded-full"
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
          <div className="inline-flex items-center gap-2 bg-[#f0f7f1] dark:bg-[#141d13] border border-[#336443]/15 dark:border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#336443] dark:text-[#85AB8B]" />
            <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] tracking-wider uppercase">NativeDefence Leadership</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Title / Main pitch */}
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
                Pioneering Cybersecurity. <br />
                <span className="text-[#336443] dark:text-[#85AB8B] font-medium">Empowering Global Organizations.</span>
              </h1>
              <h2 className="text-sm font-semibold tracking-wider text-[#336443] dark:text-[#85AB8B] uppercase mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Technical &amp; SOC from Ahmedabad · Sales from Mumbai
              </h2>
              <p
                className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-8"
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
                  className="inline-flex items-center gap-3 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 group"
                >
                  Meet the Founder
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
                <button
                  onClick={() => handleSubLinkClick('directors-spotlight')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300"
                >
                  Technical &amp; Sales Directors
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick stats block */}
            <div className="lg:col-span-5 bg-[#f7f6f2]/80 dark:bg-[#141d13]/80 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/5 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#336443]/5 rounded-full blur-2xl pointer-events-none" />
              <Compass className="w-8 h-8 text-[#336443] dark:text-[#85AB8B] mb-5" />
              <h3 className="font-semibold text-lg text-[#1f2a1d] dark:text-white mb-3" style={{ fontFamily: NHG }}>
                Full-Spectrum Security Partners
              </h3>
              <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-4">
                We assist organizations in navigating their digital threat landscapes with tailored VAPT audits,
                24/7 managed SOC monitoring, strategic CISO advisory, and advanced EdTech training modules.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#336443] dark:text-[#85AB8B]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Securing 100,000+ Users Worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER SPOTLIGHT SECTION ══ */}
      <section id="founder-spotlight" className="bg-[#f7f6f2] dark:bg-[#141d13] py-20 sm:py-28 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase mb-4">
              EXECUTIVE PROFILE
            </div>
            <h2
              className="font-normal text-[#1f2a1d] dark:text-white leading-[1.05]"
              style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5.5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Meet the Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left Col: Executive credentials cards */}
            <div className="lg:col-span-4 space-y-6">

              {/* Profile Card */}
              <div className="bg-white dark:bg-[#0e150d] p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#336443] text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-inner" style={{ fontFamily: NHG }}>
                  HP
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2a1d] dark:text-white leading-tight" style={{ fontFamily: NHG }}>
                  Hemal Patel
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] mt-2 mb-6">
                  Founder &amp; CEO, Serial Entrepreneur
                </p>
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {['Stanford PM', 'MS Comp Sci', 'BE Telecom'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider text-[#4b5b47] dark:text-[#8a9e86] bg-[#f7f6f2] dark:bg-[#141d13] rounded-full px-3 py-1 border border-black/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Startup Metrics Grid */}
              <div className="bg-white dark:bg-[#0e150d] p-6 rounded-3xl border border-black/5 dark:border-white/5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B]">Enterprise Milestones</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs py-1 border-b border-black/5 dark:border-white/5">
                    <span className="text-[#4b5b47] dark:text-[#8a9e86]">Cyberoam Brands</span>
                    <span className="font-semibold text-[#1f2a1d] dark:text-white">150+ Countries</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-black/5 dark:border-white/5">
                    <span className="text-[#4b5b47] dark:text-[#8a9e86]">Elitecore Workforce</span>
                    <span className="font-semibold text-[#1f2a1d] dark:text-white">11 to 1700 employees</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-black/5 dark:border-white/5">
                    <span className="text-[#4b5b47] dark:text-[#8a9e86]">Total Valuation Exit</span>
                    <span className="font-semibold text-[#1f2a1d] dark:text-white">$100M+ Val</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Detailed Bio text blocks */}
            <div className="lg:col-span-8 space-y-6">

              {/* Detailed Biographies */}
              <div className="bg-white dark:bg-[#0e150d] p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm space-y-6 text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed text-sm sm:text-base">

                <p className="font-medium text-[#1f2a1d] dark:text-white text-base sm:text-lg border-l-4 border-[#336443] pl-4">
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

                <p className="pt-4 border-t border-black/5 dark:border-white/5 text-xs sm:text-sm font-medium">
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
            <div className="inline-block text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase mb-4">
              TECHNICAL &amp; SALES DIRECTORS
            </div>
            <h2
              className="font-normal text-[#1f2a1d] dark:text-white leading-[1.05] mb-6"
              style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Elite Technical &amp; Commercial Leadership
            </h2>
            <p className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed max-w-xl">
              Driving innovative threat operations from Ahmedabad and commercial expansion from Mumbai.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Director 1: Srijan Nandi */}
            <div className="bg-[#f7f6f2] dark:bg-[#141d13] rounded-3xl border border-black/5 dark:border-white/5 p-8 sm:p-10 flex flex-col justify-between hover:border-[#336443]/20 dark:hover:border-[#85AB8B]/20 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#336443] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: NHG }}>
                    SN
                  </div>
                  <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] bg-white dark:bg-[#0e150d] border border-black/5 dark:border-white/5 rounded-full px-3 py-1">
                    Technical Operations
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2a1d] dark:text-white leading-tight mb-2" style={{ fontFamily: NHG }}>
                  Srijan Nandi
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] mb-4">Director Technical</p>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  Directing the core security analysis platforms, SIEM/HIDS architectures, and container threat assessments.
                  Overseeing the 24/7 technical operations center in Ahmedabad to safeguard corporate infrastructures.
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-8 flex items-center gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Technical Operations Center Lead
              </div>
            </div>

            {/* Director 2: Bishwajit Sutradhar */}
            <div className="bg-[#f7f6f2] dark:bg-[#141d13] rounded-3xl border border-black/5 dark:border-white/5 p-8 sm:p-10 flex flex-col justify-between hover:border-[#336443]/20 dark:hover:border-[#85AB8B]/20 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#336443] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: NHG }}>
                    BS
                  </div>
                  <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] bg-white dark:bg-[#0e150d] border border-black/5 dark:border-white/5 rounded-full px-3 py-1">
                    Commercial Operations
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2a1d] dark:text-white leading-tight mb-2" style={{ fontFamily: NHG }}>
                  Bishwajit Sutradhar
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] mb-4">Director Sales</p>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  Driving regional partner distributions, resellers, SI alignments, and enterprise accounts globally.
                  Orchestrating sales and marketing campaigns from Mumbai to deploy NativeSOC and VAPT models.
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-8 flex items-center gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Global Partnerships &amp; Enterprise Sales Lead
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ FOOTER CTA & FOOTER BAND ══ */}
      <footer className="bg-[#f7f6f2] dark:bg-[#141d13] border-t border-[#1f2a1d]/10 dark:border-white/10 transition-colors duration-500">

        {/* Dynamic CTA Block */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3
              className="font-normal text-[#1f2a1d] dark:text-white mb-2"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
            >
              Ready to fortify your organization's defenses?
            </h3>
            <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86]">Reach out to our security experts for consultations and managed operations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 group"
            >
              Get Free VAPT Assessment
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white dark:bg-[#1f2a1d] hover:bg-[#f0f0ee] dark:hover:bg-[#2a3827] text-[#1f2a1d] dark:text-white border border-[#1f2a1d]/15 dark:border-white/15 text-sm font-semibold px-5 py-3.5 rounded-full transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>

        {/* Lower copyright band */}
        <div className="border-t border-[#1f2a1d]/10 dark:border-white/10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <img src={isDark ? logoDark : logoLight} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 dark:opacity-85 transition-all duration-300" />
              <p className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">
                Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">All corporate pipelines secure</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
