import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { NHG } from '../constants';

const team = [
  {
    initials: 'HP',
    name:  'Hemal Patel',
    role:  'Founder & CEO',
    short: 'Serial entrepreneur. Built Cyberoam (100k+ customers, 150+ countries) and Elitecore ($100M+ valuation).',
    bio:   'Hemal Patel is a successful serial entrepreneur and technology executive with diverse skills spanning Sales, Marketing, Product Design and Financial Management. He built Cyberoam — now part of Sophos — with 100,000+ customers across 150+ countries, and Elitecore, acquired by Sterlite at $100M+ enterprise valuation. He has also served as SVP at Sophos managing IT and Operations.',
    creds: ['Stanford Advanced PM Programme', 'Masters in CS — USA', 'BE Electronics & Telecom'],
    color: '#00ff88',
    colorDim: 'rgba(0,255,136,0.12)',
  },
  {
    initials: 'SN',
    name:  'Srijan Nandi',
    role:  'Director — Technical',
    short: 'SOC & SIEM expert leading NativeSOC\'s technical operations from Ahmedabad.',
    bio:   'Srijan Nandi leads NativeSOC\'s technical and SOC operations based in Ahmedabad. A specialist in SIEM architecture, threat detection engineering and SOC operations, he brings deep domain expertise across enterprise security platforms and has built scalable security operations for organisations across multiple verticals.',
    creds: ['SOC Operations Lead', 'SIEM Architecture Expert', 'Threat Detection Engineering'],
    color: '#00d4ff',
    colorDim: 'rgba(0,212,255,0.12)',
  },
  {
    initials: 'BS',
    name:  'Bishwajit Sutradhar',
    role:  'Director — Sales',
    short: 'Driving NativeSOC sales from Mumbai across end-customers, resellers, SIs and OEMs.',
    bio:   'Bishwajit Sutradhar leads NativeSOC\'s sales and marketing from Mumbai, building relationships across end-customers, resellers, systems integrators and OEMs. With extensive networks across BFSI, Healthcare and Enterprise verticals, he drives go-to-market strategy and channel partnerships across India and beyond.',
    creds: ['Enterprise Sales Leadership', 'Channel & Partner Management', 'Go-to-Market Strategy'],
    color: '#00d4aa',
    colorDim: 'rgba(0,212,170,0.12)',
  },
];

export default function Team() {
  const { ref, inView } = useInView();

  return (
    <section
      id="team"
      style={{ background: '#0a1628' }}
      className="transition-colors duration-500 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 cyber-grid-bg-static opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 60%)',
          transform: 'translateX(-30%)',
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
            style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88' }}
          >
            04
          </span>
          <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>Leadership</span>
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
          Leaders who built{' '}
          <span style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>
            global security brands
          </span>{' '}
          from scratch.
        </h2>

        {/* Security team image banner */}
        <div
          className={`mb-16 rounded-2xl overflow-hidden reveal ${inView ? 'in-view' : ''}`}
          style={{
            border: '1px solid rgba(0,255,136,0.12)',
            transitionDelay: '80ms',
            boxShadow: '0 0 40px rgba(0,0,0,0.4)',
          }}
        >
          <img
            src="/NativeDefence-/cyber_security_team.png"
            alt="NativeDefence Cybersecurity Team"
            className="w-full h-56 md:h-72 object-cover"
            style={{ filter: 'brightness(0.8) saturate(1.1)' }}
          />
          <div
            className="px-5 py-3"
            style={{ background: 'rgba(5,13,26,0.9)', borderTop: '1px solid rgba(0,255,136,0.1)' }}
          >
            <span className="text-xs font-mono" style={{ color: '#7a9bb5' }}>
              NativeSOC — Expert-driven Cyber Security Team · Ahmedabad & Mumbai
            </span>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {team.map((m, i) => (
            <TeamCard key={m.name} member={m} delay={i * 100} inView={inView} />
          ))}
        </div>

        {/* Company footer note */}
        <div
          className={`mt-14 pt-10 reveal ${inView ? 'in-view' : ''}`}
          style={{
            borderTop: '1px solid rgba(0,255,136,0.1)',
            transitionDelay: '320ms',
          }}
        >
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#7a9bb5', maxWidth: '48rem' }}>
            NativeSOC is an expert-driven cybersecurity services company, with Technical and SOC
            operations based in{' '}
            <span className="font-semibold text-white">Ahmedabad</span> and Sales
            and Marketing from{' '}
            <span className="font-semibold text-white">Mumbai</span>. We work with
            end-customers, resellers, SIs and OEMs across India and globally.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, delay, inView }: { member: typeof team[0]; delay: number; inView: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms`, perspective: '1000px', minHeight: '340px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '340px',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            background: '#0a1628',
            border: `1px solid ${member.colorDim}`,
          }}
        >
          {/* Coloured header band with circuit pattern */}
          <div
            className="h-28 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(5,13,26,0.9), rgba(10,22,40,0.95))`,
              borderBottom: `1px solid ${member.colorDim}`,
            }}
          >
            {/* Decorative circuit lines */}
            <div className="absolute inset-0 cyber-grid-bg-static opacity-30" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${member.color}15 0%, transparent 60%)`,
              }}
            />

            {/* Animated rings */}
            <div className="relative flex items-center justify-center z-10">
              {[56, 44, 32].map((r, i) => (
                <div
                  key={r}
                  className="absolute rounded-full"
                  style={{
                    width: r * 2, height: r * 2,
                    border: `1px solid ${member.color}20`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
              <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center text-[#050d1a] font-bold text-xl z-10"
                style={{
                  fontFamily: NHG,
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}bb)`,
                  boxShadow: `0 0 20px ${member.color}40`,
                }}
              >
                {member.initials}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: member.color }}>{member.role}</p>
            <h3 className="text-white font-semibold text-lg mb-3" style={{ fontFamily: NHG, letterSpacing: '-0.01em' }}>{member.name}</h3>
            <p className="text-sm leading-relaxed flex-1" style={{ color: '#7a9bb5' }}>{member.short}</p>
            <p className="text-xs mt-4 font-medium" style={{ color: member.color }}>Hover to read more →</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#050d1a',
            border: `1px solid ${member.colorDim}`,
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: member.color }}>{member.role}</p>
          <h3 className="text-white font-semibold text-lg mb-4" style={{ fontFamily: NHG }}>{member.name}</h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: '#7a9bb5' }}>{member.bio}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.creds.map(c => (
              <span
                key={c}
                className="px-2.5 py-1 rounded-md text-xs font-medium"
                style={{
                  color: member.color,
                  background: `${member.color}10`,
                  border: `1px solid ${member.color}20`,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
