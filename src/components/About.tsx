import { useInView, useCountUp } from '../hooks/useInView';
import { NHG, COLORS } from '../constants';
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
      className="bg-white dark:bg-[#0e150d] transition-colors duration-500"
    >
      {/* ── Top half: large intro ─────────────────────────── */}
      <div
        ref={sectionRef}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-20 sm:pt-28 lg:pt-36"
      >
        {/* Section tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span
            className="text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase"
          >
            01
          </span>
          <span className="text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86]">
            Introducing NativeDefence
          </span>
        </div>

        {/* Big heading */}
        <h2
          className={`font-normal text-[#1f2a1d] dark:text-white reveal ${inView ? 'in-view' : ''}`}
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
          <span style={{ color: COLORS.accent }}>delivering cyber resilience</span>{' '}
          in a threat‑first world.
        </h2>

        {/* Divider line */}
        <div
          className={`mt-12 sm:mt-16 border-t border-[#1f2a1d]/10 dark:border-white/10 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '140ms' }}
        />

        {/* Two-column content */}
        <div
          className={`mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-16 sm:pb-20 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '180ms' }}
        >
          {/* Left: body text + cta */}
          <div>
            <p
              className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.75 }}
            >
              Through advanced threat research, expert SOC operations and continuous
              iteration, we help organisations achieve true cyber resilience — staying
              ahead of evolving threats before they impact your business.
            </p>
            <p
              className="text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.75 }}
            >
              NativeSOC team works with end-customers, resellers, SIs and OEMs —
              leveraging vast experience across BFSI, Healthcare, Manufacturing,
              Education and more.
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300 group"
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
                className="grad-border flex items-start gap-4 p-5 bg-[#f7f6f2] dark:bg-[#141d13] rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(51,100,67,0.1)' }}
                >
                  <Icon className="w-5 h-5 text-[#336443]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1f2a1d] dark:text-white text-sm mb-1">{title}</p>
                  <p className="text-[#4b5b47] dark:text-[#8a9e86] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────────── */}
      <StatsBar inView={inView} />
    </section>
  );
}

function StatsBar({ inView }: { inView: boolean }) {
  const s = stats.map(s => ({ ...s, count: useCountUp(s.value, inView) }));

  return (
    <div className="bg-[#1f2a1d] dark:bg-[#0a110a]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {s.map(({ count, suffix, label }) => (
            <div key={label} className="flex flex-col items-center lg:items-start lg:px-10 gap-1">
              <span
                className="font-normal text-white"
                style={{
                  fontFamily: NHG,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                {count}{suffix}
              </span>
              <span className="text-sm text-[#85AB8B] font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
