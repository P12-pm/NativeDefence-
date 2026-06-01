import { useState, useEffect, useRef } from 'react';
import { Play, Sparkles, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import BoomerangVideoBg from '../BoomerangVideoBg';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

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

export default function Hero({ onNavClick, isDark, onToggleDark }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const [londonTime, setLondonTime] = useState('');
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Live clock */
  useEffect(() => {
    const tick = () => {
      setLondonTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false,
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
    <section id="home" className="relative w-full min-h-screen sm:h-screen overflow-hidden">

      {/* ── Background video ──────────────────────────────── */}
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer flex-shrink-0"
          onClick={() => onNavClick('home')}
        >
          <img
            src={isDark ? logoDark : logoLight}
            alt="NativeDefence Logo"
            className="transition-all duration-300 object-contain"
            style={isDark
              ? { width: '135px', height: '40px' }
              : { height: '40px', width: 'auto' }
            }
          />
        </div>

        {/* ── Desktop pill nav ──────────────────────────── */}
        <div className="hidden lg:flex items-center bg-white/70 backdrop-blur-md rounded-full px-2 py-1 shadow-sm border border-white/60 gap-0.5">

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
                  className={`inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${i === 0
                    ? 'font-semibold text-[#1f2a1d] bg-white/60'
                    : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-white/50'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                  )}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${i === 0
                    ? 'font-semibold text-[#1f2a1d] bg-white/60'
                    : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-white/50'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                        }`}
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
                    className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
                    style={{
                      minWidth: '210px',
                      opacity: openDropdown === item.label ? 1 : 0,
                      transform: openDropdown === item.label ? 'translateY(0)' : 'translateY(-8px)',
                    }}
                  >
                    <div className="py-2 px-2 flex flex-col gap-0.5">
                      {item.children.map(child =>
                        child.href.startsWith('/') ? (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block text-sm font-medium text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#f7f6f2] px-4 py-2.5 rounded-xl transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block text-sm font-medium text-[#4b5b47] hover:text-[#1f2a1d] hover:bg-[#f7f6f2] px-4 py-2.5 rounded-xl transition-colors duration-150"
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
            className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            Free Assessment
          </a>
        </div>

        {/* ── Right cluster ─────────────────────────────── */}
        <div className="flex items-center gap-2">

          {/* Dark mode toggle */}
          <button
            onClick={onToggleDark}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90 relative"
            aria-label={isDark ? 'Light mode' : 'Dark mode'}
          >
            <Sun className={`w-4 h-4 absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
            <Moon className={`w-4 h-4 absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Menu className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ────────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[88%] max-w-sm bg-white/97 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#1f2a1d]/8 flex-shrink-0">
          <span className="font-semibold text-[#1f2a1d]" style={{ fontFamily: NHG }}>
            NativeDefence<sup className="text-[9px]">™</sup>
          </span>
          <div className="flex items-center gap-2">
            {/* Dark mode in drawer */}
            <button
              onClick={onToggleDark}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] border border-[#1f2a1d]/10 relative"
            >
              <Sun className={`w-3.5 h-3.5 text-[#1f2a1d] absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
              <Moon className={`w-3.5 h-3.5 text-[#1f2a1d] absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] border border-[#1f2a1d]/10"
            >
              <X className="w-4 h-4 text-[#1f2a1d]" />
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
                    className="flex-1 py-4 text-xl font-semibold text-[#1f2a1d]"
                    style={{ fontFamily: NHG, letterSpacing: '-0.02em' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => !item.children && setMenuOpen(false)}
                    className="flex-1 py-4 text-xl font-semibold text-[#1f2a1d]"
                    style={{ fontFamily: NHG, letterSpacing: '-0.02em' }}
                  >
                    {item.label}
                  </a>
                )}
                {item.children && (
                  <button
                    onClick={() => setMobileExpand(mobileExpand === item.label ? null : item.label)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-[#1f2a1d] transition-transform duration-300 ${mobileExpand === item.label ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1f2a1d]/06 mx-6" />

              {/* Sub-items */}
              {item.children && (
                <div
                  className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ maxHeight: mobileExpand === item.label ? `${item.children.length * 56}px` : '0px' }}
                >
                  <div className="pt-1 pb-3 pl-10 pr-6 flex flex-col gap-0.5 bg-[#f7f6f2]/60">
                    {item.children.map(child =>
                      child.href.startsWith('/') ? (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-3 text-sm font-medium text-[#4b5b47] hover:text-[#1f2a1d] transition-colors border-b border-[#1f2a1d]/06 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-3 text-sm font-medium text-[#4b5b47] hover:text-[#1f2a1d] transition-colors border-b border-[#1f2a1d]/06 last:border-0"
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
          className={`flex-shrink-0 p-5 border-t border-[#1f2a1d]/08 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
          style={{ transitionDelay: menuOpen ? '500ms' : '0ms' }}
        >
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3.5 rounded-full transition-colors duration-200"
          >
            Free Assessment
          </a>
        </div>
      </div>

      {/* ── Hero copy ──────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6">
        <h1
          className="font-normal leading-[0.95] text-[#336443] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
          style={{ fontFamily: NHG, letterSpacing: '-0.035em' }}
        >
          Defense is the Best Offence in{' '}
          <span className="text-[#85AB8B]">
            Cyber Security
            <br className="hidden sm:block" />
          </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-[#4b5b47] text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
          Stay ahead of the threat, Stay ahead in the Fight.
        </p>
      </div>

      {/* ── Bottom-left CTA ────────────────────────────────── */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
        <div className="flex items-center gap-2 text-[#3d5638] sm:text-white/95 mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold sm:font-medium">
            NativeSOC<sup className="text-[10px]">™</sup>
          </span>
        </div>
        <p className="text-[#3d5638]/90 sm:text-white/85 text-xs leading-relaxed mb-6 max-w-xs font-medium sm:font-normal">
          NATIVESOC a technology from NativeDefence helps you stay ahead of
          the threat, detect early, manage better and ultimately defend yourself
          better. NATIVESOC helps you develop Cyber Resiliency like never before.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-[#3d5638] sm:bg-white hover:bg-[#2d4228] sm:hover:bg-white/90 text-white sm:text-[#1f2a1d] text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm"
          >
            Free Assessment
          </a>
          <Link
            to="/nativesoc"
            className="text-[#3d5638] sm:text-white text-sm font-semibold sm:font-medium hover:opacity-80 transition-opacity"
          >
            Explore Platform.
          </Link>
        </div>
      </div>

      {/* ── Bottom-right live status ───────────────────────── */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/90 text-sm">
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
          <Play className="w-3 h-3 fill-white text-white ml-0.5" />
        </button>
        <span className="font-medium">{londonTime} · Systems Live</span>
        <span className="text-white/60 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
          24/7
        </span>
      </div>
    </section>
  );
}
