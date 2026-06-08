import { useState, useEffect, useRef } from 'react';
import { Play, Shield, Terminal, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HackerText from './HackerText';
import ThreatDashboard from './ThreatDashboard';
import Navbar from './Navbar';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const heroContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    }
  }
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

/* ── Cybersecurity hero video ── */
const CYBER_VIDEO = '/NativeDefence-/Create_a_premium_cinematic_cyb.mp4';

const NHG =
  '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';

interface HeroProps {
  onNavClick: (section: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export default function Hero({ onNavClick, isDark: _isDark, onToggleDark: _onToggleDark }: HeroProps) {
  const [londonTime, setLondonTime] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  /* GSAP Parallax Scroll Effect */
  useEffect(() => {
    const element = parallaxBgRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  /* Live clock */
  useEffect(() => {
    const tick = () => {
      setLondonTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ background: '#0A0F1F', minHeight: '90vh' }}>

      {/* ── Background Video ─────────────────────────── */}
      <div ref={parallaxBgRef} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35) saturate(1.2)' }}
        >
          <source src={CYBER_VIDEO} type="video/mp4" />
        </video>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 hero-video-overlay" />

        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid-bg opacity-40" />

        {/* Scan line animation */}
        <div className="scan-line" style={{ animationDuration: '8s', top: 0 }} />

        {/* Corner glow effects */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 60%)',
            transform: 'translate(-30%, 30%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)',
            transform: 'translate(20%, -20%)',
          }}
        />
      </div>

      {/* ── NAV ────────────────────────────────────────── */}
      <Navbar isHomePage={true} onNavClick={onNavClick} />

      {/* ── Hero copy ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-5 sm:px-6 md:px-10" style={{ minHeight: '90vh', paddingTop: '56px', paddingBottom: '60px' }}>
        
        {/* Floating holographic security icons — desktop only */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div
            className="absolute top-[20%] left-[12%] animate-float hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(10,15,31,0.6)] border border-[rgba(0,229,255,0.25)] shadow-[0_0_20px_rgba(0,229,255,0.15)] text-[#00E5FF]"
            style={{ animationDelay: '0s', transform: 'rotate(-10deg)', backdropFilter: 'blur(8px)' }}
          >
            <Shield className="w-5 h-5 animate-pulse" />
          </div>
          <div
            className="absolute top-[25%] right-[12%] animate-float-slow hidden lg:flex items-center justify-center w-14 h-14 rounded-xl bg-[rgba(10,15,31,0.6)] border border-[rgba(59,130,246,0.25)] shadow-[0_0_20px_rgba(59,130,246,0.15)] text-[#00E5FF]"
            style={{ animationDelay: '1.5s', transform: 'rotate(15deg)', backdropFilter: 'blur(8px)' }}
          >
            <Terminal className="w-6 h-6" />
          </div>
          <div
            className="absolute bottom-[30%] left-[10%] animate-float-slow hidden lg:flex items-center justify-center w-14 h-14 rounded-xl bg-[rgba(10,15,31,0.6)] border border-[rgba(0,229,255,0.25)] shadow-[0_0_20px_rgba(0,229,255,0.15)] text-[#00E5FF]"
            style={{ animationDelay: '0.8s', transform: 'rotate(8deg)', backdropFilter: 'blur(8px)' }}
          >
            <Wifi className="w-6 h-6" />
          </div>
          <div
            className="absolute bottom-[28%] right-[10%] animate-float hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(10,15,31,0.6)] border border-[rgba(59,130,246,0.25)] shadow-[0_0_20px_rgba(59,130,246,0.15)] text-[#00E5FF]"
            style={{ animationDelay: '2.2s', transform: 'rotate(-12deg)', backdropFilter: 'blur(8px)' }}
          >
            <Play className="w-5 h-5" />
          </div>
        </div>

        {/* ── Hero Two-Column Content Grid ── */}
        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[500px] pointer-events-none rounded-full blur-[120px] opacity-30 z-0"
            style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.3) 0%, rgba(59,130,246,0.25) 50%, transparent 80%)' }}
          />

          {/* Left Column */}
          <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10"
          >

            {/* Cyber badge */}
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.25)', backdropFilter: 'blur(8px)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#00E5FF] tracking-[0.10em] sm:tracking-[0.12em] uppercase">
                NativeSOC™ — Advanced Threat Intelligence
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroItemVariants}
              className="font-normal leading-[1.05] text-white max-w-3xl"
              style={{
                fontFamily: NHG,
                fontSize: 'clamp(1.8rem, 6vw, 4rem)',
                letterSpacing: '-0.03em',
              }}
            >
              <HackerText text="Defense is the Best Offence in" />{' '}
              <span
                className="animate-flicker shimmer-text block sm:inline font-semibold"
                style={{ textShadow: '0 0 25px rgba(0,229,255,0.5)' }}
              >
                <HackerText text="Cyber Security" delay={300} triggerOnHover />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={heroItemVariants}
              className="mt-3 sm:mt-4 text-[#7a9bb5] text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-xl"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              Stay ahead of the threat, Stay ahead in the Fight.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-5 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-[#0A0F1F] text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 group"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
              >
                <Shield className="w-4 h-4" />
                Free Assessment
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/nativesoc"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3.5 rounded-full border border-[rgba(0,229,255,0.25)] hover:border-[#00E5FF] hover:text-[#00E5FF] bg-[rgba(10,15,31,0.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Terminal className="w-4 h-4" />
                Explore Platform
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Mobile quick stats — shown only on mobile instead of dashboard */}
            <motion.div variants={heroItemVariants} className="flex items-center gap-3 mt-5 lg:hidden">
              {[
                { label: 'Threats Blocked', value: '2,847+', color: '#00E5FF' },
                { label: 'Uptime', value: '99.9%', color: '#3B82F6' },
                { label: 'Alerts', value: '24/7', color: '#00E5FF' },
              ].map(s => (
                <div key={s.label} className="flex-1 p-3 rounded-2xl text-center" style={{ background: 'rgba(10,15,31,0.6)', border: '1px solid rgba(0,229,255,0.12)' }}>
                  <div className="text-sm font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[9px] text-[#7a9bb5] uppercase tracking-wider mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Threat Dashboard — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-5 w-full relative z-10 flex-col gap-4"
          >
            <ThreatDashboard />
          </motion.div>

        </div>
      </div>

      {/* ── Bottom SOC info — desktop only ── */}
      <div className="hidden sm:block absolute left-6 md:left-10 bottom-4 md:bottom-6 z-10 max-w-xs">
        <div
          className="p-4 rounded-2xl"
          style={{ background: 'rgba(10,15,31,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,229,255,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-xs font-bold text-[#00E5FF] tracking-widest uppercase">NativeSOC™ Live</span>
          </div>
          <p className="text-xs text-[#7a9bb5] leading-relaxed mb-3">
            AI-driven threat detection, 24/7 SOC monitoring, and instant response — defending your enterprise around the clock.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs font-bold text-[#0A0F1F] px-4 py-1.5 rounded-full transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,229,255,0.4)]"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
            >
              Get Protected
            </a>
            <Link to="/nativesoc" className="text-xs font-semibold text-[#00E5FF] hover:opacity-80 transition-opacity">
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom-right live status ────────────────── */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-4 z-10 items-center gap-3">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(10,15,31,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,229,255,0.15)',
          }}
        >
          <Wifi className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span className="text-xs font-mono text-[#00E5FF]">{londonTime}</span>
          <span className="text-xs text-[#7a9bb5]">· SOC Live</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] inline-block animate-pulse" />
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 cursor-pointer hover:border-[#00E5FF]"
          style={{ background: 'rgba(10,15,31,0.7)', border: '1px solid rgba(0,229,255,0.15)' }}
        >
          <Play className="w-3 h-3 fill-[#00E5FF] text-[#00E5FF] ml-0.5" />
        </div>
      </div>

      {/* ── Floating threat indicators ────────────────── */}
      <div className="absolute top-1/3 right-8 md:right-16 z-10 hidden lg:block">
        <div
          className="flex flex-col gap-2 p-3 rounded-xl"
          style={{
            background: 'rgba(10,15,31,0.65)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,229,255,0.12)',
          }}
        >
          {[
            { label: 'Threats Blocked', value: '2,847', color: '#00E5FF' },
            { label: 'Endpoints Secure', value: '1,204', color: '#00E5FF' },
            { label: 'Alerts Active', value: '3', color: '#ff6b35' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center justify-between gap-4">
              <span className="text-[10px] text-[#7a9bb5] font-medium">{stat.label}</span>
              <span className="text-[10px] font-bold font-mono" style={{ color: stat.color }}>{stat.value}</span>
            </div>
          ))}
          <div className="mt-1 pt-1" style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}>
            <span className="text-[9px] text-[#7a9bb5] font-mono">Live · Updated 2s ago</span>
          </div>
        </div>
      </div>

    </section>
  );
}
