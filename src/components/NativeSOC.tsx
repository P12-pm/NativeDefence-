import { NHG } from '../constants';
import { ArrowRight } from 'lucide-react';
import TerminalSection from './TerminalSection';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const socGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const socItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

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
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span
            className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}
          >
            02
          </span>
          <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>Platform Overview</span>
        </motion.div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-normal text-white"
            style={{
              fontFamily: NHG,
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              maxWidth: '700px',
            }}
          >
            NativeSOC —{' '}
            <span style={{ color: '#00E5FF', textShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
              your complete
            </span>{' '}
            cyber defence platform.
          </motion.h2>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 group flex-shrink-0"
            style={{ color: '#00E5FF' }}
          >
            Get a demo
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Dashboard image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12 rounded-2xl overflow-hidden group"
          style={{
            border: '1px solid rgba(0,229,255,0.12)',
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
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={socGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden mb-16"
          style={{ background: 'rgba(0,229,255,0.08)' }}
        >
          {features.map((f) => (
            <FeatureCell key={f.id} feature={f} />
          ))}
        </motion.div>

        {/* Verticals strip */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: '#00E5FF' }}
          >
            Industry Coverage
          </motion.p>
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.03
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {verticals.map((v) => (
              <motion.span
                key={v}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  color: '#c8e0f0',
                  background: 'rgba(17,24,39,0.7)',
                  border: '1px solid rgba(0,229,255,0.1)',
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
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Diagnostic CLI Console Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 max-w-4xl mx-auto"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#00E5FF] text-center">
            Diagnostics Laboratory Sandbox
          </p>
          <TerminalSection />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCell({ feature }: { feature: typeof features[0] }) {
  return (
    <motion.div
      variants={socItemVariants}
      className="p-6 sm:p-8 group hover:-translate-y-0.5 transition-all duration-300 cursor-default"
      style={{
        background: '#111827',
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
    </motion.div>
  );
}
