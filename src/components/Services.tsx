import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { NHG, COLORS } from '../constants';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    num:   '01',
    title: 'NativeSOC as a Service',
    tag:   'Managed SOC',
    desc:  'Round-the-clock monitoring with a fully managed SOC — SIEM, XDR, HIDS, FIM, VA and XOAR in one vendor-agnostic platform built with AI, ML and human intelligence.',
    points: ['24/7 real-time monitoring & alerting', 'AI-driven threat detection & correlation', 'Automated incident response (XOAR)', 'Compliance reporting (ISO 27001, PCI-DSS, HIPAA)'],
    href:  '#nativesoc',
  },
  {
    num:   '02',
    title: 'Vulnerability Assessment & Penetration Testing',
    tag:   'VAPT',
    desc:  'Uncover hidden vulnerabilities before attackers do — comprehensive VAPT across network, application and cloud environments with a clear remediation roadmap.',
    points: ['Network & web application scanning', 'Red team attack simulations', 'Risk prioritisation matrix', 'Executive + technical remediation reports'],
    href:  '/vapt',
  },
  {
    num:   '03',
    title: 'NativeSOC Academy',
    tag:   'Training',
    desc:  'Upskill your security teams with hands-on courses, certifications and live threat simulations from industry experts with decades of real-world SOC experience.',
    points: ['Live instructor-led online sessions', 'Threat hunting & SOC analyst workshops', 'Industry-recognised certifications', 'Custom enterprise curricula & labs'],
    href:  '/academy',
  },
  {
    num:   '04',
    title: 'vCISO as a Service',
    tag:   'Strategic Advisory',
    desc:  'Strategic security leadership without the full-time cost — a virtual CISO to guide your security programme, board communications and risk governance framework.',
    points: ['Security strategy & roadmap development', 'Board-level risk & compliance reporting', 'Vendor assessment & policy management', 'Regulatory compliance guidance'],
    href:  '#contact',
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      className="bg-white dark:bg-[#0e150d] transition-colors duration-500"
    >
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase">03</span>
          <span className="text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86]">Core Services</span>
        </div>

        {/* Heading */}
        <h2
          className={`font-normal text-[#1f2a1d] dark:text-white mb-16 sm:mb-20 reveal ${inView ? 'in-view' : ''}`}
          style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '700px', transitionDelay: '80ms' }}
        >
          Everything you need to{' '}
          <span style={{ color: COLORS.accent }}>defend, detect</span>{' '}
          and respond.
        </h2>

        {/* Service cards */}
        <div className="flex flex-col gap-px bg-[#1f2a1d]/10 dark:bg-white/10 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} delay={i * 80} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, delay, inView }: { service: typeof services[0]; delay: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white dark:bg-[#0e150d] group transition-colors duration-300 hover:bg-[#f7f6f2] dark:hover:bg-[#141d13] reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Row header — always visible */}
      <button
        className="w-full flex items-center gap-4 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 text-left"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {/* Number */}
        <span
          className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] tracking-widest flex-shrink-0 hidden sm:block"
        >
          {service.num}
        </span>

        {/* Tag pill */}
        <span className="hidden md:inline-block flex-shrink-0 text-xs font-semibold text-[#4b5b47] dark:text-[#8a9e86] bg-[#f7f6f2] dark:bg-[#1f2a1d] rounded-full px-3 py-1 border border-[#1f2a1d]/10 dark:border-white/10">
          {service.tag}
        </span>

        {/* Title */}
        <span
          className="flex-1 font-normal text-[#1f2a1d] dark:text-white transition-colors"
          style={{ fontFamily: NHG, fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', letterSpacing: '-0.02em' }}
        >
          {service.title}
        </span>

        {/* Arrow */}
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full border border-[#1f2a1d]/15 dark:border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-[#336443] group-hover:bg-[#336443] group-hover:text-white dark:group-hover:border-[#85AB8B] dark:group-hover:bg-[#336443]"
          style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s' }}
        >
          <ArrowRight className="w-4 h-4 text-[#1f2a1d] dark:text-white group-hover:text-white transition-colors" />
        </div>
      </button>

      {/* Expanded body */}
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <div className="px-5 sm:px-8 pb-8 sm:pb-10 flex flex-col sm:flex-row gap-8 sm:gap-16">
          <p className="flex-1 text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed" style={{ fontSize: '0.95rem' }}>
            {service.desc}
          </p>
          <div className="flex-1">
            <ul className="flex flex-col gap-2.5">
              {service.points.map(pt => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-[#1f2a1d] dark:text-[#c5d9c3]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#336443]" />
                  {pt}
                </li>
              ))}
            </ul>
            {service.href.startsWith('/') ? (
              <Link
                to={service.href}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300 group/link"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ) : (
              <a
                href={service.href}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300 group/link"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
