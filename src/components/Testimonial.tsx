import { useInView } from '../hooks/useInView';
import { NHG } from '../constants';

export default function Testimonial() {
  const { ref } = useInView(0.2);

  return (
    <section
      style={{ background: '#0A0F1F' }}
      className="transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid-bg-static opacity-20 pointer-events-none" />

      {/* Large faint quote mark */}
      <div
        className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none"
        aria-hidden
        style={{
          fontFamily: NHG,
          fontSize: '28rem',
          lineHeight: 1,
          color: '#00E5FF',
          transform: 'translate(20%, -30%)',
        }}
      >
        "
      </div>

      {/* Data stream decorations */}
      <div
        className="absolute top-0 left-20 w-px h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.15), transparent)',
        }}
      />
      <div
        className="absolute top-0 right-32 w-px h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.1), transparent)',
        }}
      />

      {/* Floating orb */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36 relative z-10"
      >
        <div className="max-w-3xl">
          {/* Tag */}
          <div data-aos="fade-up" className="flex items-center gap-3 mb-12">
            <span
              className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}
            >
              05
            </span>
            <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>Client Testimonial</span>
          </div>

          {/* Stars */}
          <div data-aos="fade-up" data-aos-delay="60" className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00E5FF">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-normal text-white mb-10"
            style={{
              fontFamily: NHG,
              fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
            }}
          >
            "The knowledge and skills gained through{' '}
            <span
              style={{
                color: '#00E5FF',
                textShadow: '0 0 15px rgba(0,229,255,0.4)',
              }}
            >
              NATIVEDEFENCE
            </span>{' '}
            have transformed how we approach security. We now recognise threats faster and respond more efficiently."
          </blockquote>

          {/* Attribution */}
          <div
            data-aos="fade-up"
            data-aos-delay="160"
            className="flex items-center gap-4"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-white text-sm"
              style={{
                background: 'rgba(0,229,255,0.1)',
                border: '1px solid rgba(0,229,255,0.25)',
                fontFamily: NHG,
                boxShadow: '0 0 12px rgba(0,229,255,0.15)',
              }}
            >
              MB
            </div>
            <div>
              <p className="font-semibold text-white text-sm" style={{ fontFamily: NHG }}>Mr. Mahesh Bhosale</p>
              <p className="text-xs mt-0.5" style={{ color: '#7a9bb5' }}>AGM & Head IT — Sun Petrochemicals Pvt. Ltd.</p>
            </div>
          </div>
        </div>

        {/* Bottom divider with industries */}
        <div
          data-aos="fade-up"
          data-aos-delay="220"
          className="mt-16 sm:mt-20 pt-10"
          style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}
        >
          <p className="text-xs tracking-widest uppercase mb-5 font-bold" style={{ color: 'rgba(0,229,255,0.5)' }}>
            Trusted across industries
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {['BFSI', 'Healthcare', 'Manufacturing', 'Education', 'Aviation', 'Legal & Audit', 'Retail', 'Transportation'].map(s => (
              <span key={s} className="text-sm font-medium" style={{ color: 'rgba(200,224,240,0.25)' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
