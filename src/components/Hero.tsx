import { useState, useEffect, useRef } from 'react';
import { Play, Shield, Menu, X, ChevronDown, Terminal, Wifi } from 'lucide-react';
import logoLight from '../assets/logo_light.avif';
import logoDark from '../assets/logo_dark.avif';
import { Link } from 'react-router-dom';

/* ── Cybersecurity hero video (Pexels free stock) ── */
const CYBER_VIDEO = 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4';

const NHG =
  '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { href: '#home', label: 'Home' },
  {
    href: '/nativesoc', label: 'NativeSOC',
    children: [
      { href: '/nativesocapproach', label: 'NativeSOC Approach' },
      { href: '/nativesocfeatures', label: 'NativeSOC Features' },
      { href: '/nativesocarchitecture', label: 'NativeSOC Architecture' },
      { href: '/howitworks', label: 'How it Works' },
      { href: '/whynativesoc', label: 'Why NativeSOC' },
    ],
  },
  {
    href: '/academy', label: 'Academy',
    children: [
      { href: '/course', label: 'Course' },
    ],
  },
  {
    href: '/vapt', label: 'VAPT',
    children: [
      { href: '/vapt/cybersecurityawareness', label: 'Cybersecurity Awareness' },
    ],
  },
  { href: '/about-us', label: 'About Us' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

interface HeroProps {
  onNavClick: (section: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export default function Hero({ onNavClick, isDark, onToggleDark: _onToggleDark }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const [londonTime, setLondonTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Nav scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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

  /* Delayed close so pointer can travel from trigger into dropdown */
  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden" style={{ background: '#050d1a' }}>

      {/* ── Background Video ─────────────────────────── */}
      <div className="absolute inset-0 z-0">
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
            background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 60%)',
            transform: 'translate(-30%, 30%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)',
            transform: 'translate(20%, -20%)',
          }}
        />
      </div>

      {/* ── NAV ────────────────────────────────────────── */}
      <nav
        className={`absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 transition-all duration-500 ${
          scrolled ? 'bg-[#050d1a]/80 backdrop-blur-xl border-b border-[rgba(0,255,136,0.1)]' : ''
        }`}
      >

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer flex-shrink-0"
          onClick={() => onNavClick('home')}
        >
          <img
            src={isDark ? logoDark : logoLight}
            alt="NativeDefence Logo"
            className="transition-all duration-300 object-contain"
            style={{ height: '45px', width: 'auto' }}
          />
        </div>

        {/* ── Desktop pill nav ─────────────────────────── */}
        <div
          className="hidden lg:flex items-center rounded-full px-2 py-1.5 gap-0.5"
          style={{
            background: 'rgba(5,13,26,0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0,255,136,0.15)',
            boxShadow: '0 0 20px rgba(0,255,136,0.05)',
          }}
        >

          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
              onMouseLeave={() => item.children ? handleMouseLeave() : undefined}
            >
              {/* Trigger */}
              {item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${i === 0
                    ? 'font-semibold text-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                    : 'font-medium text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.07)]'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : 'rotate-0'}`}
                    />
                  )}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${i === 0
                    ? 'font-semibold text-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                    : 'font-medium text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.07)]'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : 'rotate-0'}`}
                    />
                  )}
                </a>
              )}

              {/* Dropdown panel */}
              {item.children && (
                <div
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  style={{ pointerEvents: openDropdown === item.label ? 'auto' : 'none' }}
                >
                  <div
                    className="rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
                    style={{
                      minWidth: '220px',
                      opacity: openDropdown === item.label ? 1 : 0,
                      transform: openDropdown === item.label ? 'translateY(0)' : 'translateY(-8px)',
                      background: 'rgba(5,13,26,0.92)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0,255,136,0.15)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0,255,136,0.05)',
                    }}
                  >
                    <div className="py-2 px-2 flex flex-col gap-0.5">
                      {item.children.map(child =>
                        child.href.startsWith('/') ? (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block text-sm font-medium text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.07)] px-4 py-2.5 rounded-xl transition-all duration-150"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block text-sm font-medium text-[#7a9bb5] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.07)] px-4 py-2.5 rounded-xl transition-all duration-150"
                          >
                            {child.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA button */}
          <a
            href="#contact"
            className="ml-2 text-[#050d1a] text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #00cc70, #00ff88)' }}
          >
            Free Assessment
          </a>
        </div>

        {/* ── Right cluster ────────────────────────────── */}
        <div className="flex items-center gap-2">

          

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
            style={{
              background: 'rgba(5,13,26,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,255,136,0.2)',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Menu className={`w-5 h-5 text-[#00ff88] absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-5 h-5 text-[#00ff88] absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ──────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#050d1a]/60 backdrop-blur-sm" />
      </div>

      {/* ── Mobile drawer ───────────────────────────────── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[88%] max-w-sm flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: 'rgba(5,13,26,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(0,255,136,0.15)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(0,255,136,0.1)' }}
        >
          <span className="font-semibold text-[#00ff88]" style={{ fontFamily: NHG }}>
            NativeDefence<sup className="text-[9px]">™</sup>
          </span>
          <div className="flex items-center gap-2">
            
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)' }}
            >
              <X className="w-4 h-4 text-[#00ff88]" />
            </button>
          </div>
        </div>

        {/* Drawer nav list */}
        <div className="flex-1 overflow-y-auto py-3">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label}>
              {/* Row */}
              <div
                className={`flex items-center justify-between px-6 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' }}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    onClick={() => !item.children && setMenuOpen(false)}
                    className="flex-1 py-4 text-xl font-semibold text-white hover:text-[#00ff88] transition-colors"
                    style={{ fontFamily: NHG, letterSpacing: '-0.02em' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => !item.children && setMenuOpen(false)}
                    className="flex-1 py-4 text-xl font-semibold text-white hover:text-[#00ff88] transition-colors"
                    style={{ fontFamily: NHG, letterSpacing: '-0.02em' }}
                  >
                    {item.label}
                  </a>
                )}
                {item.children && (
                  <button
                    onClick={() => setMobileExpand(mobileExpand === item.label ? null : item.label)}
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)' }}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-[#00ff88] transition-transform duration-300 ${mobileExpand === item.label ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="h-px mx-6" style={{ background: 'rgba(0,255,136,0.06)' }} />

              {/* Sub-items */}
              {item.children && (
                <div
                  className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ maxHeight: mobileExpand === item.label ? `${item.children.length * 56}px` : '0px' }}
                >
                  <div className="pt-1 pb-3 pl-10 pr-6 flex flex-col gap-0.5" style={{ background: 'rgba(0,255,136,0.03)' }}>
                    {item.children.map(child =>
                      child.href.startsWith('/') ? (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-3 text-sm font-medium text-[#7a9bb5] hover:text-[#00ff88] transition-colors"
                          style={{ borderBottom: '1px solid rgba(0,255,136,0.05)' }}
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-3 text-sm font-medium text-[#7a9bb5] hover:text-[#00ff88] transition-colors"
                          style={{ borderBottom: '1px solid rgba(0,255,136,0.05)' }}
                        >
                          {child.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drawer footer CTA */}
        <div
          className={`flex-shrink-0 p-5 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
          style={{ transitionDelay: menuOpen ? '500ms' : '0ms', borderTop: '1px solid rgba(0,255,136,0.1)' }}
        >
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center text-[#050d1a] text-sm font-bold px-5 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
            style={{ background: 'linear-gradient(135deg, #00cc70, #00ff88)' }}
          >
            Free Assessment
          </a>
        </div>
      </div>

      {/* ── Hero copy ────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-32 sm:pt-36 md:pt-44 px-4 sm:px-6">

        {/* Cyber badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
          style={{
            background: 'rgba(0,255,136,0.08)',
            border: '1px solid rgba(0,255,136,0.25)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-[11px] font-bold text-[#00ff88] tracking-[0.12em] uppercase">
            NativeSOC™ — Advanced Threat Intelligence
          </span>
        </div>

        <h1
          className="font-normal leading-[0.95] text-white max-w-5xl"
          style={{
            fontFamily: NHG,
            fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
            letterSpacing: '-0.035em',
            textShadow: '0 0 60px rgba(0,0,0,0.5)',
          }}
        >
          Defense is the Best Offence in{' '}
          <span
            className="animate-flicker"
            style={{
              color: '#00ff88',
              textShadow: '0 0 20px rgba(0,255,136,0.6), 0 0 40px rgba(0,255,136,0.3)',
            }}
          >
            Cyber Security
          </span>
        </h1>

        <p
          className="mt-6 sm:mt-8 text-[#7a9bb5] text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
        >
          Stay ahead of the threat, Stay ahead in the Fight.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-8 flex-wrap justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#050d1a] text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #00cc70, #00ff88)' }}
          >
            <Shield className="w-4 h-4" />
            Free Assessment
          </a>
          <Link
            to="/nativesoc"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#00ff88] transition-all duration-300 group"
          >
            <Terminal className="w-4 h-4" />
            Explore Platform
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>

      {/* ── Bottom-left SOC info ──────────────────────── */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-xs">
        <div
          className="p-4 rounded-2xl"
          style={{
            background: 'rgba(5,13,26,0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0,255,136,0.15)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs font-bold text-[#00ff88] tracking-widest uppercase">NativeSOC™ Live</span>
          </div>
          <p className="text-xs text-[#7a9bb5] leading-relaxed mb-3">
            AI-driven threat detection, 24/7 SOC monitoring, and instant response — defending your enterprise around the clock.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs font-bold text-[#050d1a] px-4 py-1.5 rounded-full transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,255,136,0.4)]"
              style={{ background: 'linear-gradient(135deg, #00cc70, #00ff88)' }}
            >
              Get Protected
            </a>
            <Link
              to="/nativesoc"
              className="text-xs font-semibold text-[#00ff88] hover:opacity-80 transition-opacity"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom-right live status ──────────────────── */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-3">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-full"
          style={{
            background: 'rgba(5,13,26,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,255,136,0.15)',
          }}
        >
          <Wifi className="w-3.5 h-3.5 text-[#00ff88]" />
          <span className="text-xs font-mono text-[#00ff88]">{londonTime}</span>
          <span className="text-xs text-[#7a9bb5]">· SOC Live</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] inline-block animate-pulse" />
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 cursor-pointer hover:border-[#00ff88]"
          style={{ background: 'rgba(5,13,26,0.7)', border: '1px solid rgba(0,255,136,0.15)' }}
        >
          <Play className="w-3 h-3 fill-[#00ff88] text-[#00ff88] ml-0.5" />
        </div>
      </div>

      {/* ── Floating threat indicators ────────────────── */}
      <div className="absolute top-1/3 right-8 md:right-16 z-10 hidden lg:block">
        <div
          className="flex flex-col gap-2 p-3 rounded-xl"
          style={{
            background: 'rgba(5,13,26,0.65)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,255,136,0.12)',
          }}
        >
          {[
            { label: 'Threats Blocked', value: '2,847', color: '#00ff88' },
            { label: 'Endpoints Secure', value: '1,204', color: '#00d4ff' },
            { label: 'Alerts Active', value: '3', color: '#ff6b35' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center justify-between gap-4">
              <span className="text-[10px] text-[#7a9bb5] font-medium">{stat.label}</span>
              <span className="text-[10px] font-bold font-mono" style={{ color: stat.color }}>{stat.value}</span>
            </div>
          ))}
          <div className="mt-1 pt-1" style={{ borderTop: '1px solid rgba(0,255,136,0.1)' }}>
            <span className="text-[9px] text-[#7a9bb5] font-mono">Live · Updated 2s ago</span>
          </div>
        </div>
      </div>

    </section>
  );
}
