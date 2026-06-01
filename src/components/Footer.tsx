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
    <footer className="bg-[#1f2a1d] dark:bg-[#0a110a] transition-colors duration-500">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3
              className="font-normal text-white mb-1"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
            >
              Ready to fortify your defences?
            </h3>
            <p className="text-sm text-[#85AB8B]/70">Book a free security assessment — no commitment.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-3 bg-white hover:bg-[#f0f7f1] text-[#1f2a1d] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 group"
          >
            Get free assessment
            <div className="w-6 h-6 rounded-full bg-[#1f2a1d]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
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
            <img src={logoDark} alt="NativeDefence Logo" className="h-12 w-auto opacity-95 hover:opacity-100 transition-all duration-300" />
          </div>
          <p className="text-xs text-[#85AB8B]/60 leading-relaxed mb-5 max-w-[200px]">
            NativeSOC is an expert-driven Cyber Security Services company, with its Technical and SOC operations based out of Ahmedabad and Sales and Marketing driving from Mumbai. NativeSOC Team works with End-Customers, Resellers, SI's, and OEM's potentially due to its vast experience in the domain.
          </p>
          <a
            href="mailto:sales@nativedefence.com"
            className="text-xs text-[#85AB8B] hover:text-white transition-colors duration-200 font-medium"
          >
            sales@nativedefence.com
          </a>
        </div>

        {/* Nav cols */}
        {Object.entries(cols).map(([group, links]) => (
          <div key={group}>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#85AB8B]/50 mb-5">{group}</p>
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l.label}>
                  {l.href.startsWith('/') ? (
                    <Link
                      to={l.href}
                      className="text-sm text-[#85AB8B]/60 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="text-sm text-[#85AB8B]/60 hover:text-white transition-colors duration-200"
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
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#85AB8B]/40">
            Copyright 2023 © NATIVEDEFENCE TECH LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-blink" />
            <span className="text-xs text-[#85AB8B]/50">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
