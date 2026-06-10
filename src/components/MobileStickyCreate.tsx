import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Phone } from 'lucide-react';

const NHG =
  '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';

interface MobileStickyCreateProps {
  /** Override the primary CTA text */
  ctaText?: string;
  /** Override the primary CTA link/href */
  ctaLink?: string;
  /** If true, uses scroll-to-section instead of routing */
  ctaIsAnchor?: boolean;
  /** Scroll offset before bar fades in (px). Default = 80 */
  showAfterPx?: number;
  /** Callback when the primary CTA is clicked (e.g. smooth-scroll) */
  onCtaClick?: () => void;
}

export default function MobileStickyCreate({
  ctaText = 'Free Assessment',
  ctaLink = '/contact',
  ctaIsAnchor = false,
  showAfterPx = 80,
  onCtaClick,
}: MobileStickyCreateProps) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  /* Show bar once user scrolls past threshold */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfterPx);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfterPx]);

  /* Hide on the contact page itself */
  if (location.pathname === '/contact') return null;

  const handleCtaClick = () => {
    if (onCtaClick) onCtaClick();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="mobile-sticky-create"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-[55]"
          style={{
            background: 'rgba(10,15,31,0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(0,229,255,0.18)',
            boxShadow: '0 -8px 32px rgba(0,0,0,0.5), 0 -1px 0 rgba(0,229,255,0.08)',
          }}
        >
          {/* Subtle cyan glow line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.5) 30%, rgba(59,130,246,0.6) 50%, rgba(0,229,255,0.5) 70%, transparent 100%)',
            }}
          />

          <div className="flex items-center gap-3 px-4 py-3 safe-bottom">
            {/* Left: Live status pill */}
            <div
              className="flex items-center gap-1.5 flex-shrink-0 px-2.5 py-1.5 rounded-full"
              style={{
                background: 'rgba(0,229,255,0.07)',
                border: '1px solid rgba(0,229,255,0.15)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse flex-shrink-0" />
              <span
                className="text-[10px] font-bold text-[#00E5FF] tracking-wider uppercase whitespace-nowrap"
                style={{ fontFamily: NHG }}
              >
                SOC Live
              </span>
            </div>

            {/* Center: Primary CTA */}
            <div className="flex-1 min-w-0">
              {ctaIsAnchor ? (
                <a
                  href={ctaLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCtaClick();
                  }}
                  className="flex items-center justify-center gap-2 text-[#0A0F1F] text-sm font-bold py-3 rounded-full w-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] active:scale-95 group"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #00E5FF)',
                    fontFamily: NHG,
                  }}
                >
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <Link
                  to={ctaLink}
                  className="flex items-center justify-center gap-2 text-[#0A0F1F] text-sm font-bold py-3 rounded-full w-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] active:scale-95 group"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #00E5FF)',
                    fontFamily: NHG,
                  }}
                >
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>

            {/* Right: Call icon */}
            <a
              href="tel:+919748780073"
              className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 transition-all duration-300 active:scale-90"
              style={{
                background: 'rgba(0,229,255,0.08)',
                border: '1px solid rgba(0,229,255,0.2)',
              }}
              aria-label="Call NativeDefence"
            >
              <Phone className="w-5 h-5 text-[#00E5FF]" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
