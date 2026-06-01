import { useInView } from '../hooks/useInView';
import { NHG, COLORS } from '../constants';
import { ArrowRight } from 'lucide-react';

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
      className="bg-[#f7f6f2] dark:bg-[#141d13] transition-colors duration-500"
    >
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Section tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase">
            02
          </span>
          <span className="text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86]">Platform Overview</span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
          <h2
            className={`font-normal text-[#1f2a1d] dark:text-white reveal ${inView ? 'in-view' : ''}`}
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
            <span style={{ color: COLORS.accent }}>your complete</span>{' '}
            cyber defence platform.
          </h2>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[#336443] dark:text-[#85AB8B] hover:gap-3 transition-all duration-300 group reveal ${inView ? 'in-view' : ''} flex-shrink-0`}
            style={{ transitionDelay: '100ms' }}
          >
            Get a demo
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f2a1d]/10 dark:bg-white/10 rounded-2xl overflow-hidden mb-16">
          {features.map((f, i) => (
            <FeatureCell key={f.id} feature={f} delay={i * 60} inView={inView} />
          ))}
        </div>

        {/* Verticals strip */}
        <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '300ms' }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#336443] dark:text-[#85AB8B] mb-5">
            Industry Coverage
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {verticals.map((v, i) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#1f2a1d] dark:text-[#c5d9c3] bg-white dark:bg-[#1f2a1d] border border-[#1f2a1d]/12 dark:border-white/10 transition-all duration-300 hover:border-[#336443]/40 hover:text-[#336443] dark:hover:text-[#85AB8B]"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCell({ feature, delay, inView }: { feature: typeof features[0]; delay: number; inView: boolean }) {
  return (
    <div
      className={`bg-white dark:bg-[#141d13] p-6 sm:p-8 group hover:bg-[#f0f7f1] dark:hover:bg-[#1a2619] transition-colors duration-300 reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Feature ID tag */}
      <div className="inline-flex items-center mb-4">
        <span
          className="text-xs font-bold tracking-widest"
          style={{ color: COLORS.primary }}
        >
          {feature.id}
        </span>
        <div
          className="ml-2 w-0 group-hover:w-8 h-px bg-[#336443] transition-all duration-500 ease-out"
        />
      </div>

      <h3
        className="font-medium text-[#1f2a1d] dark:text-white mb-3 leading-tight"
        style={{ fontFamily: NHG, fontSize: '1.05rem', letterSpacing: '-0.01em' }}
      >
        {feature.title}
      </h3>
      <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}
