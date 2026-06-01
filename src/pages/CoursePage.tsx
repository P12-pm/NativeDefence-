import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.avif';
import {
  ArrowLeft, ArrowRight, BookOpen, Sparkles, Sun, Moon, Menu, X, CheckCircle
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00ff88';

interface CourseTrack {
  code: string;
  level: string;
  title: string;
  desc: string;
  points: string[];
}

const coursesList: CourseTrack[] = [
  {
    code: 'CCSP A',
    level: 'Beginner Course',
    title: 'Certified Cyber Security Pursuit',
    desc: 'This course aims to provide individuals with a solid foundation in cybersecurity concepts and practices, enabling them to recognize and address potential security risks, protect computer systems and networks, and contribute to maintaining a secure digital environment.',
    points: ['Security Fundamentals', 'Foundational Networking security', 'System threat recognition', 'Incident report practices']
  },
  {
    code: 'CCSP A+',
    level: 'Intermediate – Practical Labs',
    title: 'Certified Cyber Security Pioneers',
    desc: 'Turning the Cyber Landscape with theory and practical labs. An intermediate cybersecurity course goes far beyond the basics and provides participants with the knowledge and skills necessary to attack and contain more complex security challenges.',
    points: ['Hands-on cyber labs', 'Attack emulation vectors', 'Incident containment metrics', 'System threat response strategies']
  },
  {
    code: 'CCSP A++',
    level: 'Advanced Practitioner',
    title: 'Certified Cyber Security Pioneers',
    desc: 'The aim of a Certified Cyber Practitioner course is to prepare participants with the knowledge and skills needed to protect organizations and individuals from sophisticated cyber threats, strengthen their cybersecurity posture, and contribute to the field of cybersecurity through expertise and innovation.',
    points: ['Sophisticated threat hunting', 'Posture analysis & metrics', 'Enterprise SOAR playbooks', 'Advanced compliance mapping']
  }
];

export default function CoursePage() {
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
              to="/academy"
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

          {/* Desktop Nav Actions */}
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
              Enquire for Cohort
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

        {/* Mobile menu drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-[rgba(0,255,136,0.1)] pt-3">
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#050d1a] text-white text-sm font-semibold py-3 rounded-full"
            >
              Enquire for Cohort
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-bold text-[#00ff88] tracking-wider uppercase">Academy Tracks</span>
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
              Master the Security <br />
              <span className="text-[#00ff88] font-medium">Fundamentals &amp; Labs.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#7a9bb5] leading-relaxed">
              Certified cyber defense curricula designed to provide individuals with foundational, intermediate, and
              advanced knowledge to solve complex cybersecurity challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FLAGSHIP CERTIFICATIONS GRID ══ */}
      <section >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coursesList.map((c) => (
              <div
                key={c.code}
                style={{ background: '#050d1a' }} className="p-8 rounded-3xl border border-[rgba(0,255,136,0.1)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] px-2.5 py-1 rounded border border-[rgba(0,255,136,0.15)]">
                      {c.code}
                    </span>
                    <span className="text-xs text-[#7a9bb5] font-semibold">{c.level}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: NHG }}>
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7a9bb5] leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(0,255,136,0.1)] mt-6 space-y-4">
                  <div className="text-[10px] font-bold tracking-widest text-[#00ff88] uppercase">Syllabus Highlights</div>
                  <ul className="space-y-2">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-white">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ ADMISSIONS CALLOUT ══ */}
      <section style={{ background: '#050d1a' }} className="py-16 transition-colors duration-500 border-t border-[rgba(0,255,136,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[rgba(0,255,136,0.08)]  border border-[rgba(0,255,136,0.15)]  flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00ff88] border border-[rgba(0,255,136,0.1)] rounded-full px-3 py-1" style={{ background: '#050d1a' }}>
                <BookOpen className="w-3.5 h-3.5" />
                Admissions Active
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: NHG }}>
                Ready to secure your future?
              </h3>
              <p className="text-xs sm:text-sm text-[#7a9bb5] leading-relaxed max-w-xl">
                NATIVEDEFENCE is your gateway to a resilient and secure digital world. Get in touch with our admissions counsellors today for cohort sizes, dates, and course materials.
              </p>
            </div>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 hover:opacity-90 text-white text-xs font-bold px-6 py-4 rounded-full transition-all duration-300 whitespace-nowrap self-start md:self-auto group"
            >
              Enquire for Cohorts
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FOOTER BAND ══ */}
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
            <span className="text-xs text-[#7a9bb5]/40">Curriculum operations live</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
