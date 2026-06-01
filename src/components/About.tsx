import { useInView, useCountUp } from '../hooks/useInView';
import { NHG } from '../constants';
import { Shield, Eye, Zap, ArrowRight } from 'lucide-react';

const stats = [
  { value: 500,  suffix: '+',  label: 'Threats blocked daily' },
  { value: 99,   suffix: '.9%', label: 'Uptime SLA' },
  { value: 100,  suffix: '+',  label: 'Enterprise clients' },
  { value: 24,   suffix: '/7', label: 'SOC monitoring' },
];

export default function About() {
  const { ref: sectionRef, inView } = useInView();

  return (
    <section
      id="about"
      style={{ background: '#050d1a' }}
      className="transition-colors duration-500 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 cyber-grid-bg-static opacity-30 pointer-events-none" />

      {/* Glow orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 60%)',
          transform: 'translate(20%, -20%)',
        }}
      />

      {/* ── Top half: large intro ─────────────────────── */}
      <div
        ref={sectionRef}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-20 sm:pt-28 lg:pt-36"
      >
        {/* Section tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span
            className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.25)',
              color: '#00ff88',
            }}
          >
            01
          </span>
          <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>
            Introducing NativeDefence
          </span>
        </div>

        {/* Big heading */}
        <h2
          className={`font-normal text-white reveal ${inView ? 'in-view' : ''}`}
          style={{
            fontFamily: NHG,
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            maxWidth: '820px',
            transitionDelay: '80ms',
          }}
        >
          Expert-driven security,{' '}
          <span style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>
            delivering cyber resilience
          </span>{' '}
          in a threat‑first world.
        </h2>

        {/* Divider line */}
        <div
          className={`mt-12 sm:mt-16 reveal ${inView ? 'in-view' : ''}`}
          style={{
            height: '1px',
            background: 'rgba(0,255,136,0.1)',
            transitionDelay: '140ms',
          }}
        />

        {/* Two-column content */}
        <div
          className={`mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-16 sm:pb-20 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '180ms' }}
        >
          {/* Left: body text + image + cta */}
          <div>
            <p
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.75, color: '#7a9bb5' }}
              className="leading-relaxed mb-6"
            >
              Through advanced threat research, expert SOC operations and continuous
              iteration, we help organisations achieve true cyber resilience — staying
              ahead of evolving threats before they impact your business.
            </p>
            <p
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.75, color: '#7a9bb5' }}
              className="leading-relaxed mb-8"
            >
              NativeSOC team works with end-customers, resellers, SIs and OEMs —
              leveraging vast experience across BFSI, Healthcare, Manufacturing,
              Education and more.
            </p>

            {/* SOC image */}
            <div
              className="mb-8 rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(0,255,136,0.12)' }}
            >
              <img
                src="/NativeDefence-/cyber_soc_dashboard.png"
                alt="Cybersecurity SOC Operations Center"
                className="w-full h-48 object-cover"
                style={{ filter: 'brightness(0.9) saturate(1.1)' }}
              />
            </div>

            <a
              href="#team"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 group"
              style={{ color: '#00ff88' }}
            >
              Meet the team
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: three feature pills */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Shield, title: 'Proactive Defence', desc: 'AI & ML models trained on millions of threat signatures detect zero-day attacks before they land.' },
              { icon: Eye,    title: 'Full Visibility',   desc: 'Unified view across endpoints, network, cloud and containers — no blind spots, no silos.' },
              { icon: Zap,    title: 'Instant Response',  desc: 'Automated XOAR playbooks contain and remediate threats in minutes, not hours or days.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="grad-border flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group"
                style={{
                  background: 'rgba(10,22,40,0.7)',
                  border: '1px solid rgba(0,255,136,0.1)',
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,255,136,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#00ff88' }} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#7a9bb5' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────── */}
      <StatsBar inView={inView} />
    </section>
  );
}

function StatsBar({ inView }: { inView: boolean }) {
  const s = stats.map(s => ({ ...s, count: useCountUp(s.value, inView) }));

  return (
    <div style={{ background: '#0a1628', borderTop: '1px solid rgba(0,255,136,0.1)', borderBottom: '1px solid rgba(0,255,136,0.1)' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
          {s.map(({ count, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center lg:items-start lg:px-10 gap-1"
              style={{ borderColor: 'rgba(0,255,136,0.1)' }}
            >
              <span
                className="font-normal"
                style={{
                  fontFamily: NHG,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#00ff88',
                  textShadow: '0 0 20px rgba(0,255,136,0.3)',
                }}
              >
                {count}{suffix}
              </span>
              <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
