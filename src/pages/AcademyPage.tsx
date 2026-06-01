import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Shield, Award, Sparkles, BookOpen,
  GraduationCap, Sun, Moon, Menu, X, CheckCircle, Target, Trophy, Brain
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#336443';
const ACCENT = '#85AB8B';


export default function AcademyPage() {
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
              onClick={() => handleSubLinkClick('academy-intro')}
              className="text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d] transition-all duration-200"
            >
              About Academy
            </button>
            <button
              onClick={() => handleSubLinkClick('mission-usp')}
              className="text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d] transition-all duration-200"
            >
              Mission &amp; USP
            </button>
            <button
              onClick={() => handleSubLinkClick('courses')}
              className="text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-[#f7f6f2] dark:hover:bg-[#1f2a1d] transition-all duration-200"
            >
              Certification Courses
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
              Enquire Now
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
              onClick={() => handleSubLinkClick('academy-intro')}
              className="text-left text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] py-2.5 border-b border-black/5 dark:border-white/5"
            >
              About Academy
            </button>
            <button
              onClick={() => handleSubLinkClick('mission-usp')}
              className="text-left text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] py-2.5 border-b border-black/5 dark:border-white/5"
            >
              Mission &amp; USP
            </button>
            <button
              onClick={() => handleSubLinkClick('courses')}
              className="text-left text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] py-2.5 border-b border-black/5 dark:border-white/5 last:border-0"
            >
              Certification Courses
            </button>
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#1f2a1d] text-white text-sm font-semibold py-3 rounded-full"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section id="academy-intro" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        {/* Dynamic background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`, transform: 'translate(20%, 20%)' }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f0f7f1] dark:bg-[#141d13] border border-[#336443]/15 dark:border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#336443] dark:text-[#85AB8B]" />
            <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] tracking-wider uppercase">NATIVEDEFENCE Academy</span>
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
                Empowering <br />
                <span className="text-[#336443] dark:text-[#85AB8B] font-medium">Cybersecurity Excellence.</span>
              </h1>
              <p
                className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: 1.75 }}
              >
                Welcome to NATIVEDEFENCE, your trusted partner in the realm of cybersecurity.
                Originating from the vibrant city of Ahmedabad, NATIVEDEFENCE stands at the forefront
                with a singular focus on providing cutting-edge cybersecurity courses.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleSubLinkClick('courses')}
                  className="inline-flex items-center gap-3 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 group"
                >
                  Explore Courses
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300"
                >
                  Contact Admissions
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quote/Side callout block */}
            <div className="lg:col-span-5 bg-[#f7f6f2]/80 dark:bg-[#141d13]/80 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/5 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#336443]/5 rounded-full blur-2xl pointer-events-none" />
              <BookOpen className="w-8 h-8 text-[#336443] dark:text-[#85AB8B] mb-5" />
              <h3 className="font-semibold text-lg text-[#1f2a1d] dark:text-white mb-3" style={{ fontFamily: NHG }}>
                Unparalleled Training Ecosystem
              </h3>
              <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-4">
                Experience cybersecurity education like never before at NATIVEDEFENCE Academy.
                We take pride in offering three distinct courses tailored to meet the dynamic
                challenges of the digital era.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#336443] dark:text-[#85AB8B]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                New Enrolments Now Active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION, USP, FACULTY GRID ══ */}
      <section id="mission-usp" className="bg-[#f7f6f2] dark:bg-[#141d13] py-20 sm:py-28 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase mb-4">
              THE ACADEMY ADVANTAGE
            </div>
            <h2
              className="font-normal text-[#1f2a1d] dark:text-white leading-[1.05]"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
            >
              Why train with <span className="text-[#336443] dark:text-[#85AB8B] font-semibold">NATIVEDEFENCE</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Our Mission */}
            <div className="bg-white dark:bg-[#0e150d] p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1f2a1d] dark:text-white mb-4" style={{ fontFamily: NHG }}>
                  Our Mission: Cybersecurity Excellence
                </h3>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  At NATIVEDEFENCE, our core mission is to fortify the nation's cybersecurity landscape.
                  With a team boasting two decades of experience in the cybersecurity space, we bring
                  a wealth of expertise to safeguard and defend against evolving digital threats.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B] uppercase tracking-wider">
                <span>20 Years Experience</span>
              </div>
            </div>

            {/* Card 2: USP */}
            <div className="bg-white dark:bg-[#0e150d] p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1f2a1d] dark:text-white mb-4" style={{ fontFamily: NHG }}>
                  USP: Cutting-edge SOC Technology
                </h3>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  What sets NATIVEDEFENCE apart is our commitment to innovation. Our in-house team
                  has developed a state-of-the-art Security Operations Center (SOC), proudly made in India.
                  Hosted on the cloud and equipped with both on-premise and online solutions, our SOC ensures
                  a robust defense against cyber threats.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B] uppercase tracking-wider">
                <span>In-House NativeSOC Integration</span>
              </div>
            </div>

            {/* Card 3: Faculty Excellence */}
            <div className="bg-white dark:bg-[#0e150d] p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1f2a1d] dark:text-white mb-4" style={{ fontFamily: NHG }}>
                  Faculty Excellence: Learn from the Best
                </h3>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
                  NATIVEDEFENCE Academy is staffed with seasoned professionals, each bringing a wealth
                  of real-world experience to the classroom. Our faculty includes gold medalists and
                  industry experts, ensuring that every student receives top-tier education and practical insights.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B] uppercase tracking-wider">
                <span>Gold Medalist Faculty</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ FLAGSHIP COURSES SECTION ══ */}
      <section id="courses" className="py-20 sm:py-28 relative overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute top-[20%] left-10 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${PRIMARY} 0%, transparent 70%)` }} />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase mb-4">
              Curriculum Showcase
            </div>
            <h2
              className="font-normal text-[#1f2a1d] dark:text-white leading-[1.05] mb-6"
              style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Flagship Cybersecurity <br />
              <span className="text-[#336443] dark:text-[#85AB8B] font-semibold">Certification Modules</span>
            </h2>
            <p className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed max-w-xl">
              Take the next step in your professional growth. Check out our certified cyber curricula, built on modern cybersecurity standards and practical lab ecosystems.
            </p>
          </div>

          {/* Informative Banner Badge */}
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#f0f7f1]/80 dark:bg-[#142014]/60 border border-[#336443]/15 dark:border-[#85AB8B]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] block mb-2">Defenders Paradigm</span>
              <p className="text-sm sm:text-base text-[#1f2a1d] dark:text-[#c5d9c3] font-medium leading-relaxed max-w-3xl">
                "Join us at NATIVEDEFENCE, where we not only educate but empower the next generation of cybersecurity defenders. Secure your future with NATIVEDEFENCE – your gateway to a resilient and secure digital world."
              </p>
            </div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-[#1f2a1d] dark:bg-[#336443] hover:opacity-90 text-white text-xs font-bold px-5 py-3 rounded-full transition-all duration-300 whitespace-nowrap self-start md:self-auto"
            >
              Secure Your Future Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Courses Grid List */}
          <div className="flex flex-col gap-10">

            {/* Course 1: Practitioner */}
            <div className="bg-[#f7f6f2] dark:bg-[#141d13] rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-[#336443]/20 dark:hover:border-[#85AB8B]/20">
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Course Header & Visual */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#336443] dark:text-[#85AB8B] bg-white dark:bg-[#0e150d] border border-black/5 dark:border-white/5 rounded-full px-3 py-1 mb-4">
                    <Brain className="w-3 h-3" />
                    Practical Focus
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-[#1f2a1d] dark:text-white leading-tight mb-4"
                    style={{ fontFamily: NHG }}
                  >
                    Certified Cyber Security Practitioner at NATIVEDEFENCE
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] mb-2">Key Areas Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {['Dynamic Labs', 'Hands-on Scenarios', 'Practical Triage', 'EdTech Experience'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider text-[#4b5b47] dark:text-[#8a9e86] bg-white/70 dark:bg-[#0e150d]/70 rounded-full px-3 py-1 border border-black/5 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Body Description */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[220px]">
                  <p className="text-sm sm:text-base text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-6">
                    Dive into the realm of cybersecurity with NATIVEDEFENCE's Certified Cyber Security Practitioner module.
                    Our cutting-edge EdTech solutions transform learning into a dynamic experience, providing hands-on
                    training and real-world scenarios. Become a certified practitioner, backed by NATIVEDEFENCE's two
                    decades of cybersecurity expertise, and step confidently into the world of digital defense.
                  </p>

                  <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Two Decades of Corporate Expertise</span>
                    </div>
                    <Link
                      to="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B] hover:text-[#1f2a1d] dark:hover:text-white transition-colors"
                    >
                      Enquire for Cohort →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Course 2: Pioneers */}
            <div className="bg-[#f7f6f2] dark:bg-[#141d13] rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-[#336443]/20 dark:hover:border-[#85AB8B]/20">
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Course Header & Visual */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#336443] dark:text-[#85AB8B] bg-white dark:bg-[#0e150d] border border-black/5 dark:border-white/5 rounded-full px-3 py-1 mb-4">
                    <Trophy className="w-3 h-3" />
                    Advanced Strategy
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-[#1f2a1d] dark:text-white leading-tight mb-4"
                    style={{ fontFamily: NHG }}
                  >
                    Certified Cyber Security Pioneers by NATIVEDEFENCE
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] mb-2">Key Areas Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {['Advanced Frameworks', 'Emerging Tech', 'Pioneering Strategies', 'Expert Mentorship'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider text-[#4b5b47] dark:text-[#8a9e86] bg-white/70 dark:bg-[#0e150d]/70 rounded-full px-3 py-1 border border-black/5 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Body Description */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[220px]">
                  <p className="text-sm sm:text-base text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-6">
                    Forge new paths in cybersecurity with NATIVEDEFENCE's Certified Cyber Security Pioneers module.
                    Our innovative EdTech platform enriches your learning journey, empowering you to explore advanced
                    strategies and emerging technologies. Join a community of pioneers, guided by NATIVEDEFENCE's
                    seasoned professionals, and position yourself at the forefront of cybersecurity innovation.
                  </p>

                  <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Led by Seasoned Industry Professionals</span>
                    </div>
                    <Link
                      to="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B] hover:text-[#1f2a1d] dark:hover:text-white transition-colors"
                    >
                      Enquire for Cohort →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Course 3: Pursuit */}
            <div className="bg-[#f7f6f2] dark:bg-[#141d13] rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-[#336443]/20 dark:hover:border-[#85AB8B]/20">
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Course Header & Visual */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#336443] dark:text-[#85AB8B] bg-white dark:bg-[#0e150d] border border-black/5 dark:border-white/5 rounded-full px-3 py-1 mb-4">
                    <Award className="w-3 h-3" />
                    Comprehensive Scope
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-[#1f2a1d] dark:text-white leading-tight mb-4"
                    style={{ fontFamily: NHG }}
                  >
                    Certified Cyber Security Pursuit with NATIVEDEFENCE EdTech
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#336443] dark:text-[#85AB8B] mb-2">Key Areas Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {['Foundational Principles', 'Threat Detection', 'Enterprise Triage', 'Career Acceleration'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider text-[#4b5b47] dark:text-[#8a9e86] bg-white/70 dark:bg-[#0e150d]/70 rounded-full px-3 py-1 border border-black/5 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Body Description */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[220px]">
                  <p className="text-sm sm:text-base text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-6">
                    Pursue excellence in cybersecurity through NATIVEDEFENCE's Certified Cyber Security Pursuit module.
                    Our state-of-the-art EdTech solutions ensure a comprehensive and engaging learning experience.
                    Covering foundational principles to advanced threat detection, this module equips you with the
                    skills needed to excel. Choose NATIVEDEFENCE for EdTech-driven cybersecurity education and chart
                    your path to success in the digital landscape.
                  </p>

                  <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Full Spectrum Threat Landscape Instruction</span>
                    </div>
                    <Link
                      to="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#336443] dark:text-[#85AB8B] hover:text-[#1f2a1d] dark:hover:text-white transition-colors"
                    >
                      Enquire for Cohort →
                    </Link>
                  </div>
                </div>

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
              Ready to pursue professional excellence?
            </h3>
            <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86]">Enquire today to obtain custom syllabus materials and schedules.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 group"
            >
              Request Syllabus
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
              <span className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">Academy operations live</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
