import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, X } from 'lucide-react';
import logoDark from '../assets/logo_dark.avif';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';

export interface SubLink {
  label: string;
  href?: string;
  targetId?: string;
}

export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const GLOBAL_NAV_ITEMS: NavItem[] = [
  { href: '#home', label: 'Home' },
  {
    href: '/nativesoc',
    label: 'NativeSOC',
    children: [
      { href: '/nativesocapproach', label: 'NativeSOC Approach' },
      { href: '/nativesocfeatures', label: 'NativeSOC Features' },
      { href: '/nativesocarchitecture', label: 'NativeSOC Architecture' },
      { href: '/howitworks', label: 'How it Works' },
      { href: '/whynativesoc', label: 'Why NativeSOC' },
    ],
  },
  {
    href: '/academy',
    label: 'Academy',
    children: [
      { href: '/course', label: 'Course' },
    ],
  },
  {
    href: '/vapt',
    label: 'VAPT',
    children: [
      { href: '/vapt/cybersecurityawareness', label: 'Cybersecurity Awareness' },
    ],
  },
  { href: '/about-us', label: 'About Us' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

interface NavbarProps {
  backLink?: string;
  subLinks?: SubLink[];
  ctaText?: string;
  ctaLink?: string;
  isHomePage?: boolean;
  onNavClick?: (section: string) => void;
}

export default function Navbar({
  backLink,
  subLinks,
  ctaText = 'Free Assessment',
  ctaLink = '/#contact',
  isHomePage = false,
  onNavClick,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const location = useLocation();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll spy & active section highlight for Homepage
  useEffect(() => {
    if (!isHomePage || location.pathname !== '/') {
      // Determine active item based on current sub-path
      const path = location.pathname;
      if (path.startsWith('/nativesoc')) {
        setActiveItem('NativeSOC');
      } else if (path.startsWith('/academy') || path.startsWith('/course')) {
        setActiveItem('Academy');
      } else if (path.startsWith('/vapt')) {
        setActiveItem('VAPT');
      } else if (path.startsWith('/about-us')) {
        setActiveItem('About Us');
      } else if (path.startsWith('/partners')) {
        setActiveItem('Partners');
      } else if (path.startsWith('/contact')) {
        setActiveItem('Contact');
      } else {
        setActiveItem('');
      }
      return;
    }

    const sectionIds = ['home', 'about', 'nativesoc', 'services', 'contact'];
    const sectionToNavMap: Record<string, string> = {
      home: 'Home',
      about: 'About Us',
      nativesoc: 'NativeSOC',
      services: 'NativeSOC',
      contact: 'Contact',
    };

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveItem(sectionToNavMap[id]);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.disconnect();
      });
    };
  }, [location.pathname, isHomePage]);

  // Handle scroll detection for sticky effects
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const handleSubLinkScroll = (targetId: string) => {
    setMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 64;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* ── Desktop & Mobile Navigation Wrapper ── */}
      <nav
        className={`fixed z-50 transition-all duration-500 ${
          isHomePage
            ? scrolled
              ? 'top-3 left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 py-2.5 bg-[rgba(10,15,31,0.65)] backdrop-blur-xl border border-[rgba(0,229,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(0,229,255,0.06)] rounded-full lg:flex items-center justify-between px-6'
              : 'top-6 left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 py-4 bg-[rgba(10,15,31,0.4)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-full lg:flex items-center justify-between px-6'
            : 'top-0 left-0 right-0 h-16 bg-[#0A0F1F]/85 dark:bg-[#0A0F1F]/90 backdrop-blur-xl border-b border-[rgba(0,229,255,0.1)] flex items-center justify-between px-4 sm:px-6 md:px-10'
        } ${
          // On mobile screens, always force full-width at the top for sub-pages or consistent mobile sticky bar
          'max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:h-16 max-lg:rounded-none max-lg:bg-[#0A0F1F]/90 max-lg:border-b max-lg:border-[rgba(0,229,255,0.1)] max-lg:px-6'
        }`}
      >
        {/* Left Side: Logo or Back Button */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {!isHomePage && backLink && (
            <>
              <Link
                to={backLink}
                className="flex items-center gap-1.5 text-sm font-medium text-[#7a9bb5] hover:text-[#00E5FF] transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <span className="w-px h-4 bg-white/15" />
            </>
          )}

          <Link
            to="/"
            className="flex items-center group"
            onClick={() => {
              if (isHomePage && onNavClick) {
                onNavClick('home');
              }
            }}
          >
            <img
              src={logoDark}
              alt="NativeDefence Logo"
              className="transition-all duration-300 object-contain group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.4)] group-hover:scale-102"
              style={{ height: '42px', width: 'auto' }}
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation Items */}
        {isHomePage ? (
          /* Homepage Navigation Items (Floating Pill look) */
          <div
            className="nav-pill-container hidden lg:flex items-center rounded-full px-2 py-1.5 gap-0.5"
            style={{
              background: 'rgba(10,15,31,0.7)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(0,229,255,0.15)',
              boxShadow: '0 0 20px rgba(0,229,255,0.05)',
            }}
          >
            {GLOBAL_NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => (item.children ? handleMouseEnter(item.label) : undefined)}
                onMouseLeave={() => (item.children ? handleMouseLeave() : undefined)}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`nav-link-hover inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap relative ${
                      activeItem === item.label ? 'font-semibold text-[#00E5FF] z-10' : 'font-medium text-[#7a9bb5] hover:text-[#00E5FF] z-10'
                    }`}
                  >
                    {activeItem === item.label && (
                      <motion.span
                        layoutId="activeCapsule"
                        className="absolute inset-0 rounded-full z-0"
                        style={{
                          background: 'rgba(0,229,255,0.08)',
                          border: '1px solid rgba(0,229,255,0.18)',
                          boxShadow: '0 0 12px rgba(0,229,255,0.12)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {item.children && (
                      <ChevronDown
                        className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 relative z-10 ${
                          openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (location.pathname !== '/') {
                        window.location.href = `/NativeDefence-/${item.href}`;
                      } else if (onNavClick) {
                        const sectionId = item.href.replace('#', '');
                        onNavClick(sectionId);
                      }
                    }}
                    className={`nav-link-hover inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap relative ${
                      activeItem === item.label ? 'font-semibold text-[#00E5FF] z-10' : 'font-medium text-[#7a9bb5] hover:text-[#00E5FF] z-10'
                    }`}
                  >
                    {activeItem === item.label && (
                      <motion.span
                        layoutId="activeCapsule"
                        className="absolute inset-0 rounded-full z-0"
                        style={{
                          background: 'rgba(0,229,255,0.08)',
                          border: '1px solid rgba(0,229,255,0.18)',
                          boxShadow: '0 0 12px rgba(0,229,255,0.12)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {item.children && (
                      <ChevronDown
                        className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 relative z-10 ${
                          openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </a>
                )}

                {/* Desktop Dropdown Panel */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -12, scale: 0.97, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                      exit={{ opacity: 0, y: -12, scale: 0.97, x: '-50%' }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-1/2 pt-2 z-50"
                    >
                      <div
                        className="dropdown-panel rounded-2xl shadow-2xl overflow-hidden"
                        style={{
                          minWidth: '240px',
                          background: 'rgba(10,15,31,0.95)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          border: '1px solid rgba(0,229,255,0.18)',
                          boxShadow:
                            '0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0,229,255,0.08), inset 0 1px 0 rgba(0,229,255,0.1)',
                        }}
                      >
                        <div className="py-2 px-2 flex flex-col gap-0.5">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="dropdown-item block text-sm font-medium text-[#7a9bb5] hover:text-[#00E5FF] py-2.5 rounded-xl transition-all duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to={ctaLink}
              onClick={(e) => {
                if (ctaLink.startsWith('#') || ctaLink.includes('#')) {
                  const hash = ctaLink.split('#')[1];
                  if (location.pathname === '/') {
                    e.preventDefault();
                    if (onNavClick) onNavClick(hash);
                  }
                }
              }}
              className="nav-cta-btn ml-2 text-[#0A0F1F] text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
            >
              {ctaText}
            </Link>
          </div>
        ) : (
          /* Sub-page Specific Navigation Items */
          <div className="hidden lg:flex items-center gap-1.5">
            {subLinks &&
              subLinks.map((link) =>
                link.targetId ? (
                  <button
                    key={link.label}
                    onClick={() => handleSubLinkScroll(link.targetId!)}
                    className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00E5FF] px-3 py-1.5 rounded-full hover:bg-[rgba(0,229,255,0.07)] transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href || '/'}
                    className="text-xs font-semibold text-[#7a9bb5] hover:text-[#00E5FF] px-3 py-1.5 rounded-full hover:bg-[rgba(0,229,255,0.07)] transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              )}
          </div>
        )}

        {/* Right Side: CTA Button on Desktop, Hamburger Button on Mobile */}
        <div className="flex items-center gap-3">
          {/* Desktop Right CTA for Sub-pages */}
          {!isHomePage && (
            <Link
              to={ctaLink}
              onClick={(e) => {
                if (ctaLink.startsWith('#') || ctaLink.includes('#')) {
                  const hash = ctaLink.split('#')[1];
                  if (location.pathname === '/') {
                    e.preventDefault();
                    if (onNavClick) onNavClick(hash);
                  }
                }
              }}
              className="hidden lg:flex items-center gap-1.5 hover:opacity-90 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 border border-[rgba(0,229,255,0.2)] bg-[rgba(10,15,31,0.5)] whitespace-nowrap hover:border-[#00E5FF] hover:text-[#00E5FF]"
            >
              {ctaText}
            </Link>
          )}

          {/* Interactive Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-full transition-all duration-300 gap-1.5 focus:outline-none flex-shrink-0"
            style={{
              background: 'rgba(10,15,31,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`w-5 h-[2px] bg-[#00E5FF] transition-all duration-300 rounded-full ${
                menuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-[#00E5FF] transition-all duration-300 rounded-full ${
                menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-[#00E5FF] transition-all duration-300 rounded-full ${
                menuOpen ? '-rotate-45 translate-y-[-8px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay & Drawer (Unified & Smooth) ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-[60]"
              onClick={() => setMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-[#0A0F1F]/60 backdrop-blur-sm" />
            </motion.div>

            {/* Sliding Mobile Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-[60] w-[88%] max-w-sm flex flex-col"
              style={{
                background: 'rgba(10,15,31,0.98)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderLeft: '1px solid rgba(0,229,255,0.15)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.6)',
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(0,229,255,0.1)' }}
              >
                <span className="font-semibold text-[#00E5FF] tracking-wider" style={{ fontFamily: NHG }}>
                  NativeDefence<sup className="text-[9px]">™</sup>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)' }}
                >
                  <X className="w-4 h-4 text-[#00E5FF]" />
                </button>
              </div>

              {/* Drawer Menu List */}
              <div className="flex-1 overflow-y-auto py-3">
                {isHomePage ? (
                  /* Standard items for Homepage */
                  GLOBAL_NAV_ITEMS.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between px-6">
                        {item.href.startsWith('/') ? (
                          <Link
                            to={item.href}
                            onClick={() => !item.children && setMenuOpen(false)}
                            className="flex-1 py-4 text-lg font-semibold text-white hover:text-[#00E5FF] transition-colors"
                            style={{ fontFamily: NHG, letterSpacing: '-0.01em' }}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setMenuOpen(false);
                              if (location.pathname !== '/') {
                                window.location.href = `/NativeDefence-/${item.href}`;
                              } else if (onNavClick) {
                                const sectionId = item.href.replace('#', '');
                                onNavClick(sectionId);
                              }
                            }}
                            className="flex-1 py-4 text-lg font-semibold text-white hover:text-[#00E5FF] transition-colors"
                            style={{ fontFamily: NHG, letterSpacing: '-0.01em' }}
                          >
                            {item.label}
                          </a>
                        )}

                        {item.children && (
                          <button
                            onClick={() => setMobileExpand(mobileExpand === item.label ? null : item.label)}
                            className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                            style={{
                              background: 'rgba(0,229,255,0.08)',
                              border: '1px solid rgba(0,229,255,0.15)',
                            }}
                          >
                            <ChevronDown
                              className={`w-4 h-4 text-[#00E5FF] transition-transform duration-300 ${
                                mobileExpand === item.label ? 'rotate-180' : 'rotate-0'
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="h-px mx-6" style={{ background: 'rgba(0,229,255,0.06)' }} />

                      {/* Nested Dropdown Sub-links */}
                      {item.children && (
                        <div
                          className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ maxHeight: mobileExpand === item.label ? `${item.children.length * 56}px` : '0px' }}
                        >
                          <div
                            className="pt-1 pb-3 pl-10 pr-6 flex flex-col gap-0.5"
                            style={{ background: 'rgba(0,229,255,0.03)' }}
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => setMenuOpen(false)}
                                className="block py-3 text-sm font-medium text-[#7a9bb5] hover:text-[#00E5FF] transition-colors"
                                style={{ borderBottom: '1px solid rgba(0,229,255,0.05)' }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  /* Custom items for sub-pages */
                  subLinks &&
                  subLinks.map((link) => (
                    <div key={link.label}>
                      <div className="flex items-center justify-between px-6">
                        {link.targetId ? (
                          <button
                            onClick={() => handleSubLinkScroll(link.targetId!)}
                            className="flex-1 text-left py-4 text-lg font-semibold text-white hover:text-[#00E5FF] transition-colors"
                            style={{ fontFamily: NHG, letterSpacing: '-0.01em' }}
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            to={link.href || '/'}
                            onClick={() => setMenuOpen(false)}
                            className="flex-1 py-4 text-lg font-semibold text-white hover:text-[#00E5FF] transition-colors"
                            style={{ fontFamily: NHG, letterSpacing: '-0.01em' }}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                      <div className="h-px mx-6" style={{ background: 'rgba(0,229,255,0.06)' }} />
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Bottom CTA Button */}
              <div className="flex-shrink-0 p-5" style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}>
                <Link
                  to={ctaLink}
                  onClick={(e) => {
                    setMenuOpen(false);
                    if (ctaLink.startsWith('#') || ctaLink.includes('#')) {
                      const hash = ctaLink.split('#')[1];
                      if (location.pathname === '/') {
                        e.preventDefault();
                        if (onNavClick) onNavClick(hash);
                      }
                    }
                  }}
                  className="block w-full text-center text-[#0A0F1F] text-sm font-bold px-5 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
                >
                  {ctaText}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
