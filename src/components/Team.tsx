import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { NHG, COLORS } from '../constants';

const team = [
  {
    initials: 'HP',
    name:  'Hemal Patel',
    role:  'Founder & CEO',
    short: 'Serial entrepreneur. Built Cyberoam (100k+ customers, 150+ countries) and Elitecore ($100M+ valuation).',
    bio:   'Hemal Patel is a successful serial entrepreneur and technology executive with diverse skills spanning Sales, Marketing, Product Design and Financial Management. He built Cyberoam — now part of Sophos — with 100,000+ customers across 150+ countries, and Elitecore, acquired by Sterlite at $100M+ enterprise valuation. He has also served as SVP at Sophos managing IT and Operations.',
    creds: ['Stanford Advanced PM Programme', 'Masters in CS — USA', 'BE Electronics & Telecom'],
    color: '#336443',
  },
  {
    initials: 'SN',
    name:  'Srijan Nandi',
    role:  'Director — Technical',
    short: 'SOC & SIEM expert leading NativeSOC\'s technical operations from Ahmedabad.',
    bio:   'Srijan Nandi leads NativeSOC\'s technical and SOC operations based in Ahmedabad. A specialist in SIEM architecture, threat detection engineering and SOC operations, he brings deep domain expertise across enterprise security platforms and has built scalable security operations for organisations across multiple verticals.',
    creds: ['SOC Operations Lead', 'SIEM Architecture Expert', 'Threat Detection Engineering'],
    color: '#4b7a5e',
  },
  {
    initials: 'BS',
    name:  'Bishwajit Sutradhar',
    role:  'Director — Sales',
    short: 'Driving NativeSOC sales from Mumbai across end-customers, resellers, SIs and OEMs.',
    bio:   'Bishwajit Sutradhar leads NativeSOC\'s sales and marketing from Mumbai, building relationships across end-customers, resellers, systems integrators and OEMs. With extensive networks across BFSI, Healthcare and Enterprise verticals, he drives go-to-market strategy and channel partnerships across India and beyond.',
    creds: ['Enterprise Sales Leadership', 'Channel & Partner Management', 'Go-to-Market Strategy'],
    color: '#5a8a6a',
  },
];

export default function Team() {
  const { ref, inView } = useInView();

  return (
    <section
      id="team"
      className="bg-[#f7f6f2] dark:bg-[#141d13] transition-colors duration-500"
    >
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase">04</span>
          <span className="text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86]">Leadership</span>
        </div>

        {/* Heading */}
        <h2
          className={`font-normal text-[#1f2a1d] dark:text-white mb-16 sm:mb-20 reveal ${inView ? 'in-view' : ''}`}
          style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '700px', transitionDelay: '80ms' }}
        >
          Leaders who built{' '}
          <span style={{ color: COLORS.accent }}>global security brands</span>{' '}
          from scratch.
        </h2>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {team.map((m, i) => (
            <TeamCard key={m.name} member={m} delay={i * 100} inView={inView} />
          ))}
        </div>

        {/* Company footer note */}
        <div
          className={`mt-14 pt-10 border-t border-[#1f2a1d]/10 dark:border-white/10 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '320ms' }}
        >
          <p className="text-[#4b5b47] dark:text-[#8a9e86] max-w-2xl" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
            NativeSOC is an expert-driven cybersecurity services company, with Technical and SOC
            operations based in{' '}
            <span className="font-semibold text-[#1f2a1d] dark:text-white">Ahmedabad</span> and Sales
            and Marketing from{' '}
            <span className="font-semibold text-[#1f2a1d] dark:text-white">Mumbai</span>. We work with
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
          className="absolute inset-0 bg-white dark:bg-[#1a2619] rounded-2xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Coloured header band */}
          <div
            className="h-28 flex items-center justify-center flex-shrink-0"
            style={{ background: member.color }}
          >
            {/* Animated rings */}
            <div className="relative flex items-center justify-center">
              {[56, 44, 32].map((r, i) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-white/20"
                  style={{ width: r * 2, height: r * 2, animationDelay: `${i * 0.4}s` }}
                />
              ))}
              <div
                className="relative w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl z-10"
                style={{ fontFamily: NHG }}
              >
                {member.initials}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <p className="text-xs font-semibold text-[#336443] dark:text-[#85AB8B] tracking-widest uppercase mb-1">{member.role}</p>
            <h3 className="text-[#1f2a1d] dark:text-white font-semibold text-lg mb-3" style={{ fontFamily: NHG, letterSpacing: '-0.01em' }}>{member.name}</h3>
            <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed flex-1">{member.short}</p>
            <p className="text-xs text-[#85AB8B] mt-4 font-medium">Hover to read more →</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-[#1f2a1d] dark:bg-[#0a110a] rounded-2xl flex flex-col p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-xs font-semibold text-[#85AB8B] tracking-widest uppercase mb-2">{member.role}</p>
          <h3 className="text-white font-semibold text-lg mb-4" style={{ fontFamily: NHG }}>{member.name}</h3>
          <p className="text-[#8a9e86] text-sm leading-relaxed flex-1">{member.bio}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.creds.map(c => (
              <span
                key={c}
                className="px-2.5 py-1 rounded-md text-xs text-[#85AB8B] bg-white/5 border border-white/10"
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
