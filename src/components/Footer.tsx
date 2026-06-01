import { NHG } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/logo_dark.png';

const cols = {
  Platform: [
    { label: 'NativeSOC', href: '/nativesoc' },
    { label: 'SOC Approach', href: '/nativesocapproach' },
    { label: 'Platform Features', href: '/nativesocfeatures' },
    { label: 'Architecture', href: '/nativesocarchitecture' },
    { label: 'How it Works', href: '/howitworks' },
    { label: 'Why NativeSOC', href: '/whynativesoc' },
  ],
  Services: [
    { label: 'VAPT', href: '/vapt' },
    { label: 'Academy', href: '/academy' },
    { label: 'Courses', href: '/course' },
    { label: 'Cybersec Awareness', href: '/vapt/cybersecurityawareness' },
    { label: 'vCISO', href: '/#services' },
  ],
  Company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{ background: '#020910', borderTop: '1px solid rgba(0,255,136,0.08)' }}
      className="transition-colors duration-500"
    >
      {/* CTA band */}
      <div style={{ borderBottom: '1px solid rgba(0,255,136,0.08)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3
              className="font-normal text-white mb-1"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
            >
              Ready to fortify your defences?
            </h3>
            <p className="text-sm" style={{ color: 'rgba(0,255,136,0.5)' }}>Book a free security assessment — no commitment.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-3 text-[#020910] text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
            style={{ background: 'linear-gradient(135deg, #00cc70, #00ff88)' }}
          >
            Get free assessment
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ background: 'rgba(2,9,16,0.2)' }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand col */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logoDark}
              alt="NativeDefence Logo"
              className="h-12 w-auto transition-all duration-300"
              style={{ opacity: 0.9, filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p
            className="text-xs leading-relaxed mb-5 max-w-[200px]"
            style={{ color: 'rgba(0,255,136,0.45)' }}
          >
            NativeSOC is an expert-driven Cyber Security Services company, with its Technical and SOC operations based out of Ahmedabad and Sales and Marketing driving from Mumbai.
          </p>
          <a
            href="mailto:sales@nativedefence.com"
            className="text-xs font-medium hover:text-white transition-colors duration-200"
            style={{ color: 'rgba(0,255,136,0.6)' }}
          >
            sales@nativedefence.com
          </a>
        </div>

        {/* Nav cols */}
        {Object.entries(cols).map(([group, links]) => (
          <div key={group}>
            <p
              className="text-[11px] font-bold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(0,255,136,0.4)' }}
            >
              {group}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l.label}>
                  {l.href.startsWith('/') ? (
                    <Link
                      to={l.href}
                      className="text-sm font-medium transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(0,255,136,0.45)' }}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="text-sm font-medium transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(0,255,136,0.45)' }}
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(0,255,136,0.06)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(0,255,136,0.3)' }}>
            Copyright 2023 © NATIVEDEFENCE TECH LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] dot-blink" />
            <span className="text-xs" style={{ color: 'rgba(0,255,136,0.4)' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
