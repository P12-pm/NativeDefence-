import { useInView } from '../hooks/useInView';
import { NHG } from '../constants';

export default function Testimonial() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      className="bg-[#1f2a1d] dark:bg-[#0a110a] transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background decoration: large faint "quote" */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none select-none"
        aria-hidden
        style={{
          fontFamily: NHG,
          fontSize: '28rem',
          lineHeight: 1,
          color: '#ffffff',
          transform: 'translate(20%, -30%)',
        }}
      >
        "
      </div>

      {/* Floating orb */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(133,171,139,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36 relative z-10"
      >
        <div className="max-w-3xl">
          {/* Tag */}
          <div className={`flex items-center gap-3 mb-12 reveal ${inView ? 'in-view' : ''}`}>
            <span className="text-[11px] font-semibold text-[#1f2a1d] bg-[#85AB8B] rounded-full px-3 py-1 tracking-widest uppercase">05</span>
            <span className="text-sm font-medium text-[#85AB8B]/70">Client Testimonial</span>
          </div>

          {/* Stars */}
          <div className={`flex gap-1 mb-8 reveal ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '60ms' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#85AB8B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className={`font-normal text-white mb-10 reveal ${inView ? 'in-view' : ''}`}
            style={{
              fontFamily: NHG,
              fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              transitionDelay: '100ms',
            }}
          >
            “The knowledge and skills gained through{' '}
            <span style={{ color: '#85AB8B' }}>NATIVEDEFENCE</span> have transformed how we
            approach security. We now recognise threats faster and respond more efficiently.”
          </blockquote>

          {/* Attribution */}
          <div
            className={`flex items-center gap-4 reveal ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '160ms' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-white text-sm"
              style={{ background: 'rgba(133,171,139,0.2)', border: '1px solid rgba(133,171,139,0.3)', fontFamily: NHG }}
            >
              MB
            </div>
            <div>
              <p className="font-semibold text-white text-sm" style={{ fontFamily: NHG }}>Mr. Mahesh Bhosale</p>
              <p className="text-[#85AB8B]/80 text-xs mt-0.5">AGM & Head IT — Sun Petrochemicals Pvt. Ltd.</p>
            </div>
          </div>
        </div>

        {/* Bottom divider with industries */}
        <div
          className={`mt-16 sm:mt-20 pt-10 border-t border-white/10 reveal ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '220ms' }}
        >
          <p className="text-xs tracking-widest uppercase text-[#85AB8B]/50 mb-5 font-semibold">Trusted across industries</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {['BFSI', 'Healthcare', 'Manufacturing', 'Education', 'Aviation', 'Legal & Audit', 'Retail', 'Transportation'].map(s => (
              <span key={s} className="text-sm text-white/30 font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
