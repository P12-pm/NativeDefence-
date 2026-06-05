import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { NHG } from '../constants';
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
    img:   '/NativeDefence-/cyber_soc_dashboard.jpeg',
  },
  {
    num:   '02',
    title: 'Vulnerability Assessment & Penetration Testing',
    tag:   'VAPT',
    desc:  'Uncover hidden vulnerabilities before attackers do — comprehensive VAPT across network, application and cloud environments with a clear remediation roadmap.',
    points: ['Network & web application scanning', 'Red team attack simulations', 'Risk prioritisation matrix', 'Executive + technical remediation reports'],
    href:  '/vapt',
    img:   '/NativeDefence-/cyber_pentest_terminal.png',
  },
  {
    num:   '03',
    title: 'NativeSOC Academy',
    tag:   'Training',
    desc:  'Upskill your security teams with hands-on courses, certifications and live threat simulations from industry experts with decades of real-world SOC experience.',
    points: ['Live instructor-led online sessions', 'Threat hunting & SOC analyst workshops', 'Industry-recognised certifications', 'Custom enterprise curricula & labs'],
    href:  '/academy',
    img:   '/NativeDefence-/cyber_security_team.jpeg',
  },
  {
    num:   '04',
    title: 'vCISO as a Service',
    tag:   'Strategic Advisory',
    desc:  'Strategic security leadership without the full-time cost — a virtual CISO to guide your security programme, board communications and risk governance framework.',
    points: ['Security strategy & roadmap development', 'Board-level risk & compliance reporting', 'Vendor assessment & policy management', 'Regulatory compliance guidance'],
    href:  '#contact',
    img:   '/NativeDefence-/cyber_data_encryption.png',
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      style={{ background: '#0A0F1F' }}
      className="transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid-bg-static opacity-25 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)',
          transform: 'translate(20%, -20%)',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span
            className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}
          >
            03
          </span>
          <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>Core Services</span>
        </div>

        {/* Heading */}
        <h2
          className={`font-normal text-white mb-16 sm:mb-20 reveal ${inView ? 'in-view' : ''}`}
          style={{
            fontFamily: NHG,
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            maxWidth: '700px',
            transitionDelay: '80ms',
          }}
        >
          Everything you need to{' '}
          <span style={{ color: '#00E5FF', textShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
            defend, detect
          </span>{' '}
          and respond.
        </h2>

        {/* Service cards */}
        <div
          className="flex flex-col gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(0,229,255,0.07)' }}
        >
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
      className={`group transition-colors duration-300 reveal ${inView ? 'in-view' : ''}`}
      style={{
        background: open ? '#1F2937' : '#0A0F1F',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={e => {
        if (!open) (e.currentTarget as HTMLElement).style.background = '#111827';
      }}
      onMouseLeave={e => {
        if (!open) (e.currentTarget as HTMLElement).style.background = '#0A0F1F';
      }}
    >
      {/* Row header */}
      <button
        className="w-full flex items-center gap-4 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 text-left"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {/* Number */}
        <span
          className="text-xs font-bold tracking-widest flex-shrink-0 hidden sm:block"
          style={{ color: '#00E5FF' }}
        >
          {service.num}
        </span>

        {/* Tag pill */}
        <span
          className="hidden md:inline-block flex-shrink-0 text-xs font-semibold rounded-full px-3 py-1"
          style={{
            color: '#3B82F6',
            background: 'rgba(0,212,170,0.08)',
            border: '1px solid rgba(0,212,170,0.2)',
          }}
        >
          {service.tag}
        </span>

        {/* Title */}
        <span
          className="flex-1 font-normal text-white transition-colors group-hover:text-[#00E5FF]"
          style={{ fontFamily: NHG, fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', letterSpacing: '-0.02em' }}
        >
          {service.title}
        </span>

        {/* Arrow */}
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            border: '1px solid rgba(0,229,255,0.2)',
            transform: open ? 'rotate(-45deg)' : 'rotate(0deg)',
            transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s',
            background: open ? 'rgba(0,229,255,0.15)' : 'transparent',
          }}
        >
          <ArrowRight className="w-4 h-4" style={{ color: '#00E5FF' }} />
        </div>
      </button>

      {/* Expanded body */}
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: open ? '500px' : '0px' }}
      >
        <div className="px-5 sm:px-8 pb-8 sm:pb-10 flex flex-col sm:flex-row gap-8 sm:gap-16">
          {/* Image */}
          <div className="sm:w-48 flex-shrink-0">
            <div
              className="rounded-xl overflow-hidden group/img"
              style={{ border: '1px solid rgba(0,229,255,0.12)', boxShadow: '0 0 20px rgba(0,0,0,0.3), 0 0 10px rgba(0,229,255,0.05)' }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-32 object-cover transition-transform duration-700 group-hover/img:scale-110"
                style={{ filter: 'brightness(0.85) saturate(1.1)' }}
              />
            </div>
          </div>

          <p className="flex-1 leading-relaxed" style={{ fontSize: '0.95rem', color: '#7a9bb5' }}>
            {service.desc}
          </p>

          <div className="flex-1">
            <ul className="flex flex-col gap-2.5">
              {service.points.map(pt => (
                <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: '#c8e0f0' }}>
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#00E5FF', boxShadow: '0 0 6px rgba(0,229,255,0.5)' }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
            {service.href.startsWith('/') ? (
              <Link
                to={service.href}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold hover:gap-3 transition-all duration-300 group/link"
                style={{ color: '#00E5FF' }}
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ) : (
              <a
                href={service.href}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold hover:gap-3 transition-all duration-300 group/link"
                style={{ color: '#00E5FF' }}
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
