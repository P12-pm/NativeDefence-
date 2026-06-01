import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { NHG, COLORS } from '../constants';
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

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${active === field ? COLORS.primary : 'rgba(31,42,29,0.2)'}`,
    padding: '10px 0',
    fontSize: '0.95rem',
    outline: 'none',
    color: 'inherit',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit',
  });

  return (
    <section
      id="contact"
      className="bg-white dark:bg-[#0e150d] transition-colors duration-500"
    >
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-28 lg:py-36"
      >
        {/* Tag */}
        <div className={`flex items-center gap-3 mb-8 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-[11px] font-semibold text-white bg-[#336443] rounded-full px-3 py-1 tracking-widest uppercase">06</span>
          <span className="text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86]">Get in Touch</span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading + info */}
          <div>
            <h2
              className={`font-normal text-[#1f2a1d] dark:text-white mb-6 reveal ${inView ? 'in-view' : ''}`}
              style={{ fontFamily: NHG, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.95, letterSpacing: '-0.03em', transitionDelay: '80ms' }}
            >
              Let's start your{' '}
              <span style={{ color: COLORS.accent }}>security journey</span>{' '}
              today.
            </h2>
            <p
              className={`text-[#4b5b47] dark:text-[#8a9e86] mb-12 reveal ${inView ? 'in-view' : ''}`}
              style={{ fontSize: '0.95rem', lineHeight: 1.8, transitionDelay: '120ms' }}
            >
              Whether you need a full SOC solution, a penetration test, or strategic guidance — our experts are ready. We typically respond within 4 hours.
            </p>

            {/* Contact cards */}
            <div className={`flex flex-col gap-4 reveal ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '160ms' }}>
              <a
                href="mailto:sales@nativedefence.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#f7f6f2] dark:bg-[#141d13] hover:bg-[#eef5ef] dark:hover:bg-[#1a2619] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#336443]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#336443]" />
                </div>
                <div>
                  <p className="text-xs text-[#4b5b47] dark:text-[#8a9e86] mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-[#1f2a1d] dark:text-white group-hover:text-[#336443] dark:group-hover:text-[#85AB8B] transition-colors">
                    sales@nativedefence.com
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#336443] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {[
                { city: 'Ahmedabad', addr: 'D-311, Ganesh Glory 11, Jagatpur Road, Off S G Highway, Ahmedabad, Gujarat — 382470' },
                { city: 'Kolkata',    addr: '8 Beck Bagan Row, Kolkata — 700017' },
              ].map(loc => (
                <div
                  key={loc.city}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#f7f6f2] dark:bg-[#141d13]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#336443]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#336443]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1f2a1d] dark:text-white mb-1">{loc.city}</p>
                    <p className="text-xs text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">{loc.addr}</p>
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
                  style={{ background: 'rgba(51,100,67,0.1)' }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#336443" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1f2a1d] dark:text-white text-xl mb-2" style={{ fontFamily: NHG }}>Message sent!</h3>
                <p className="text-sm text-[#4b5b47] dark:text-[#8a9e86]">We'll be in touch within 4 hours.</p>
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
                      className="block text-xs font-semibold tracking-widest uppercase mb-3"
                      style={{ color: active === field ? COLORS.primary : '#4b5b47' }}
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
                      className="text-[#1f2a1d] dark:text-white placeholder:text-[#1f2a1d]/30 dark:placeholder:text-white/20"
                      style={inputStyle(field)}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: active === 'message' ? COLORS.primary : '#4b5b47' }}>
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
                    className="text-[#1f2a1d] dark:text-white placeholder:text-[#1f2a1d]/30 dark:placeholder:text-white/20 resize-none"
                    style={{ ...inputStyle('message'), borderBottom: `1px solid ${active === 'message' ? COLORS.primary : 'rgba(31,42,29,0.2)'}` }}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start flex items-center gap-3 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 group"
                >
                  Send message
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
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
