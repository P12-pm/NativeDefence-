import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { NHG } from '../constants';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{ background: '#0a1628' }}
      className="transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid-bg-static opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 60%)',
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
            style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88' }}
          >
            06
          </span>
          <span className="text-sm font-medium" style={{ color: '#7a9bb5' }}>Get in Touch</span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading + info */}
          <div>
            <h2
              className={`font-normal text-white mb-6 reveal ${inView ? 'in-view' : ''}`}
              style={{
                fontFamily: NHG,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                transitionDelay: '80ms',
              }}
            >
              Let's start your{' '}
              <span style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>
                security journey
              </span>{' '}
              today.
            </h2>

            <p
              className={`mb-8 reveal ${inView ? 'in-view' : ''}`}
              style={{ fontSize: '0.95rem', lineHeight: 1.8, transitionDelay: '120ms', color: '#7a9bb5' }}
            >
              Whether you need a full SOC solution, a penetration test, or strategic guidance — our experts are ready. We typically respond within 4 hours.
            </p>

            {/* Contact office image */}
            <div
              className={`mb-8 rounded-2xl overflow-hidden reveal ${inView ? 'in-view' : ''}`}
              style={{
                border: '1px solid rgba(0,255,136,0.12)',
                transitionDelay: '130ms',
              }}
            >
              <img
                src="/NativeDefence-/cyber_soc_dashboard.png"
                alt="NativeDefence Cybersecurity Operations Center"
                className="w-full h-44 object-cover"
                style={{ filter: 'brightness(0.75) saturate(1.1)' }}
              />
            </div>

            {/* Contact cards */}
            <div className={`flex flex-col gap-4 reveal ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '160ms' }}>
              <a
                href="mailto:sales@nativedefence.com"
                className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(5,13,26,0.7)',
                  border: '1px solid rgba(0,255,136,0.12)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.12)';
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,255,136,0.1)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#00ff88' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#7a9bb5' }}>Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00ff88] transition-colors">
                    sales@nativedefence.com
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#00ff88' }} />
              </a>

              {[
                { city: 'Ahmedabad', addr: 'D-311, Ganesh Glory 11, Jagatpur Road, Off S G Highway, Ahmedabad, Gujarat — 382470' },
                { city: 'Kolkata',    addr: '8 Beck Bagan Row, Kolkata — 700017' },
              ].map(loc => (
                <div
                  key={loc.city}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: 'rgba(5,13,26,0.7)', border: '1px solid rgba(0,255,136,0.08)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,212,255,0.1)' }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: '#00d4ff' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{loc.city}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#7a9bb5' }}>{loc.addr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`reveal-right ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '80ms' }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="font-semibold text-white text-xl mb-2"
                  style={{ fontFamily: NHG }}
                >
                  Message sent!
                </h3>
                <p className="text-sm" style={{ color: '#7a9bb5' }}>We'll be in touch within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {[
                  { field: 'name',    label: 'Full name',    type: 'text',  ph: 'Rahul Sharma' },
                  { field: 'email',   label: 'Work email',   type: 'email', ph: 'rahul@company.com' },
                  { field: 'company', label: 'Company',      type: 'text',  ph: 'ACME Corp' },
                ].map(({ field, label, type, ph }) => (
                  <div key={field}>
                    <label
                      className="block text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: active === field ? '#00ff88' : '#7a9bb5' }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={ph}
                      required
                      value={(form as Record<string, string>)[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      onFocus={() => setActive(field)}
                      onBlur={() => setActive(null)}
                      className="cyber-input"
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ color: active === 'message' ? '#00ff88' : '#7a9bb5' }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your security needs..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setActive('message')}
                    onBlur={() => setActive(null)}
                    className="cyber-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start flex items-center gap-3 text-[#050d1a] text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #00cc70, #00ff88)' }}
                >
                  Send message
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ background: 'rgba(5,13,26,0.2)' }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
