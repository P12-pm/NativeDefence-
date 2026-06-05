import { useInView } from '../hooks/useInView';
import { NHG } from '../constants';
import { ArrowRight } from 'lucide-react';
import TerminalSection from './TerminalSection';

const features = [
  { id: 'SIEM',  title: 'Security Information & Event Management', desc: 'Centralise and correlate log data from every source across your organisation for complete, real-time security intelligence.' },
  { id: 'XDR',   title: 'Extended Detection & Response',           desc: 'Unify detection, investigation and response across endpoints, networks and cloud in a single integrated workflow.' },
  { id: 'HIDS',  title: 'Host-based Intrusion Detection',          desc: 'Analyse system activity on endpoints to identify potential threats and mitigate risk with advanced reports and alerts.' },
  { id: 'FIM',   title: 'File Integrity Monitoring',               desc: 'Detect unauthorised changes to critical files, system configurations and registries in real time.' },
  { id: 'UEBA',  title: 'User & Entity Behaviour Analytics',       desc: 'Surface insider threats and compromised accounts through ML-driven behavioural baselines and anomaly detection.' },
  { id: 'XOAR',  title: 'Extended Orchestration & Automation',     desc: 'Automated response playbooks neutralise threats within minutes — no manual intervention required.' },
];

const verticals = [
  'BFSI', 'Financial Services', 'Healthcare', 'Manufacturing',
  'Legal & Audit', 'Education', 'Retail', 'Transportation',
  'Credit Unions', 'Aviation', 'Auto Dealers',
];

export default function NativeSOC() {
  const { ref, inView } = useInView();

  return (
    <section
      id="nativesoc"
      style={{ background: '#111827' }}
      className="transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid-bg-static opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)',
          transform: 'translate(-20%, 30%)',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Section tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span
            className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}
          >
            02
          </span>
          <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>Platform Overview</span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
          <h2
            className={`font-normal text-white reveal ${inView ? 'in-view' : ''}`}
            style={{
              fontFamily: NHG,
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              maxWidth: '700px',
              transitionDelay: '80ms',
            }}
          >
            NativeSOC —{' '}
            <span style={{ color: '#00E5FF', textShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
              your complete
            </span>{' '}
            cyber defence platform.
          </h2>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 group reveal ${inView ? 'in-view' : ''} flex-shrink-0`}
            style={{ color: '#00E5FF', transitionDelay: '100ms' }}
          >
            Get a demo
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Dashboard image */}
        <div
          className={`mb-12 rounded-2xl overflow-hidden reveal group ${inView ? 'in-view' : ''}`}
          style={{
            border: '1px solid rgba(0,229,255,0.12)',
            transitionDelay: '80ms',
            boxShadow: '0 0 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,229,255,0.05)',
          }}
        >
          <img
            src="/NativeDefence-/cyber_threat_detection.png"
            alt="Cybersecurity Threat Detection Command Center"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.85) saturate(1.2)' }}
          />
          <div
            className="flex items-center gap-3 px-5 py-3"
            style={{ background: 'rgba(10,15,31,0.9)', borderTop: '1px solid rgba(0,229,255,0.1)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-xs font-mono" style={{ color: '#00E5FF' }}>NativeSOC™ Platform — Real-time threat monitoring active</span>
          </div>
        </div>

        {/* Features grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden mb-16"
          style={{ background: 'rgba(0,229,255,0.08)' }}
        >
          {features.map((f, i) => (
            <FeatureCell key={f.id} feature={f} delay={i * 60} inView={inView} />
          ))}
        </div>

        {/* Verticals strip */}
        <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '300ms' }}>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: '#00E5FF' }}
          >
            Industry Coverage
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {verticals.map((v, i) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  color: '#c8e0f0',
                  background: 'rgba(17,24,39,0.7)',
                  border: '1px solid rgba(0,229,255,0.1)',
                  transitionDelay: `${i * 30}ms`,
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#00E5FF';
                  (e.target as HTMLElement).style.borderColor = 'rgba(0,229,255,0.3)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#c8e0f0';
                  (e.target as HTMLElement).style.borderColor = 'rgba(0,229,255,0.1)';
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Diagnostic CLI Console Simulator */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto reveal" style={{ transitionDelay: '400ms' }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#00E5FF] text-center">
            Diagnostics Laboratory Sandbox
          </p>
          <TerminalSection />
        </div>
      </div>
    </section>
  );
}

function FeatureCell({ feature, delay, inView }: { feature: typeof features[0]; delay: number; inView: boolean }) {
  return (
    <div
      className={`p-6 sm:p-8 group hover:-translate-y-0.5 transition-all duration-300 reveal ${inView ? 'in-view' : ''} cursor-default`}
      style={{
        background: '#111827',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = '#1F2937';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = '#111827';
      }}
    >
      {/* Feature ID tag */}
      <div className="inline-flex items-center mb-4">
        <span
          className="text-xs font-bold tracking-widest"
          style={{ color: '#00E5FF' }}
        >
          {feature.id}
        </span>
        <div
          className="ml-2 w-0 group-hover:w-8 h-px transition-all duration-500 ease-out"
          style={{ background: '#00E5FF' }}
        />
      </div>

      <h3
        className="font-medium text-white mb-3 leading-tight"
        style={{ fontFamily: NHG, fontSize: '1.05rem', letterSpacing: '-0.01em' }}
      >
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: '#7a9bb5' }}>
        {feature.desc}
      </p>
    </div>
  );
}
