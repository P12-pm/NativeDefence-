import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Mail, MapPin, Phone, Clock, Sparkles,
  CheckCircle
} from 'lucide-react';
import HeroVideoBg from '../components/HeroVideoBg';
import Navbar from '../components/Navbar';
import logoDark from '../assets/logo_dark.avif';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#00E5FF';

export default function ContactPage() {
  const [isDark, _setIsDark] = useState(false);
  const [formActive, setFormActive] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Sales Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* Sync dark class on document element */
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', company: '', subject: 'Sales Inquiry', message: '' });
    }, 1200);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${formActive === field ? PRIMARY : 'rgba(133,171,139,0.3)'}`,
    padding: '12px 0',
    fontSize: '0.95rem',
    outline: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  });

  return (
    <div className="min-h-screen transition-colors duration-500 text-white" style={{ background: '#0A0F1F' }}>

      {/* ══ NAVBAR ══ */}
      <Navbar
        backLink="/"
        subLinks={[
          { label: 'Contact Channels', targetId: 'contact-hero' },
          { label: 'Send Message', targetId: 'contact-form-section' },
          { label: 'Find Us', targetId: 'office-map-section' },
        ]}
        ctaText="Sales Assessment"
        ctaLink="#contact-form-section"
      />

      {/* ══ HERO SECTION ══ */}
      <section id="contact-hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <HeroVideoBg />
        {/* Ambient forest glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-bold text-[#00E5FF] tracking-wider uppercase">Contact Support & Sales</span>
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-normal text-white mb-6"
              style={{
                fontFamily: NHG,
                fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Let's Connect and <br />
              <span className="text-[#00E5FF] font-medium">Fortify Your Enterprise.</span>
            </h1>
            <p
              className="text-[#7a9bb5] leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', lineHeight: 1.75 }}
            >
              Get in touch with our security engineers, integration specialists, and corporate office leaders.
              We typically triage and respond to all inquiries within 4 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ══ TWO COLUMN INFO & FORM ══ */}
      <section id="contact-form-section" className="pb-24 sm:pb-32 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left: Offices & Email Channels */}
            <div className="lg:col-span-5 space-y-10">

              {/* Departmental Emails */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#00E5FF]">Communication Channels</h3>

                {/* Sales Channel */}
                <a
                  href="mailto:sales@nativedefence.com"
                  className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(10,15,31,0.7)',
                    border: '1px solid rgba(0,229,255,0.12)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7a9bb5] mb-0.5">Enterprise Sales & Demos</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#00E5FF] dark:group-hover:text-[#3B82F6] transition-colors">
                      sales@nativedefence.com
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF] ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0" />
                </a>

                {/* General Inquiry / Info Channel */}
                <a
                  href="mailto:info@nativedefence.com"
                  className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(10,15,31,0.7)',
                    border: '1px solid rgba(0,229,255,0.12)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7a9bb5] mb-0.5">General Inquiries & Careers</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#00E5FF] dark:group-hover:text-[#3B82F6] transition-colors">
                      info@nativedefence.com
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF] ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0" />
                </a>

                {/* Phone Channel */}
                <a
                  href="tel:+919748780073"
                  className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(10,15,31,0.7)',
                    border: '1px solid rgba(0,229,255,0.12)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7a9bb5] mb-0.5">Phone Support (Operations)</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#00E5FF] dark:group-hover:text-[#3B82F6] transition-colors">
                      +91 97487 80073
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF] ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0" />
                </a>
              </div>

              {/* Operating Hours */}
              <div
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: 'rgba(10,15,31,0.7)',
                  border: '1px solid rgba(0,229,255,0.12)',
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center text-[#00E5FF]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase mb-0.5">Operating Hours</h4>
                  <p className="text-xs text-[#7a9bb5]">Monday – Saturday, 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              {/* Physical Offices */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#00E5FF]">Corporate Offices</h3>

                {[
                  {
                    city: 'Ahmedabad (Technical HQ)',
                    addr: 'D-311, Ganesh Glory 11, Jagatpur Road, Off S G Highway, Ahmedabad, Gujarat — 382470',
                    mapDesc: 'Threat Operations & Custom SOC Center'
                  },
                  {
                    city: 'Kolkata (Regional Office)',
                    addr: '8 Beck Bagan Row, Kolkata, West Bengal — 700017',
                    mapDesc: 'Eastern Region Sales & Deployment Operations'
                  }
                ].map(loc => (
                  <div
                    key={loc.city}
                    className="p-6 rounded-2xl border border-[rgba(0,229,255,0.1)] flex items-start gap-4 shadow-sm hover:shadow transition-shadow duration-200" style={{ background: '#0A0F1F' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#00E5FF]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{loc.city}</h4>
                      <p className="text-xs text-[#7a9bb5] leading-relaxed mb-2">{loc.addr}</p>
                      <span className="text-[10px] font-bold text-[#00E5FF] bg-[rgba(0,229,255,0.08)] px-2.5 py-1 rounded">
                        {loc.mapDesc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: State-of-the-Art Contact Form */}
            <div className="lg:col-span-7 bg-[rgba(17,24,39,0.4)] p-8 sm:p-12 rounded-3xl border border-[rgba(0,229,255,0.12)] backdrop-blur-xl shadow-2xl">

              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.3)]/20 flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-8 h-8 text-[#00E5FF]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white text-2xl" style={{ fontFamily: NHG }}>
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#7a9bb5] max-w-sm mx-auto">
                      Thank you for contacting NativeDefence. Our security operations and channel relations teams will review your details and reach out within 4 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5FF] hover:opacity-85 transition-opacity"
                  >
                    Send another message
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white" style={{ fontFamily: NHG }}>
                      Initiate Security Assessment
                    </h2>
                    <p className="text-xs text-[#7a9bb5]">
                      Fill out your corporate details below and a senior architect will be in touch.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: formActive === 'name' ? PRIMARY : '#7a9bb5' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={() => setFormActive('name')}
                      onBlur={() => setFormActive(null)}
                      style={inputStyle('name')}
                    />
                  </div>

                  {/* Email & Company Dual Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: formActive === 'email' ? PRIMARY : '#7a9bb5' }}>
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@company.com"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        onFocus={() => setFormActive('email')}
                        onBlur={() => setFormActive(null)}
                        style={inputStyle('email')}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: formActive === 'company' ? PRIMARY : '#7a9bb5' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ACME Corp"
                        required
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        onFocus={() => setFormActive('company')}
                        onBlur={() => setFormActive(null)}
                        style={inputStyle('company')}
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase mb-2 text-[#7a9bb5]">
                      Inquiry Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full text-white text-sm px-4 py-3 rounded-xl border border-[rgba(0,229,255,0.1)] outline-none focus:border-[rgba(0,229,255,0.3)] transition-colors" style={{ background: '#0A0F1F' }}
                    >
                      <option value="Sales Inquiry">NativeSOC Demo & Sales Assessment</option>
                      <option value="VAPT Assessment">VAPT & Penetration Testing</option>
                      <option value="Academy Programs">Academy & Training Courses</option>
                      <option value="Channel Partnership">Channel Partner & Reseller Portal</option>
                      <option value="Support & Careers">Operational Support / Careers</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: formActive === 'message' ? PRIMARY : '#7a9bb5' }}>
                      How can we help you?
                    </label>
                    <textarea
                      placeholder="Provide brief context on your infrastructure, target user count, or assessment timeline..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={() => setFormActive('message')}
                      onBlur={() => setFormActive(null)}
                      className="resize-none"
                      style={inputStyle('message')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 hover:opacity-90 text-[#0A0F1F] text-sm font-bold py-4 rounded-full transition-all duration-300 disabled:opacity-70 group"
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)', boxShadow: '0 0 20px rgba(0,229,255,0.15)' }}
                  >
                    {isSubmitting ? 'Verifying Threat Parameters...' : 'Submit Request'}
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

      {/* ══ GOOGLE MAP EMBED ══ */}
      <section id="office-map-section" >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold text-[#0A0F1F] bg-[#00E5FF] rounded-full px-3 py-1 tracking-widest uppercase">HQ Office Geolocation</span>
            <h2 className="text-3xl font-semibold text-white mt-4" style={{ fontFamily: NHG }}>
              Locate Our Operations Center
            </h2>
            <p className="text-xs text-[#7a9bb5] mt-2">
              Our Tier-3 security operation operations are monitored 24/7 in Ahmedabad, Gujarat.
            </p>
          </div>

          <div className="w-full h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-[rgba(0,229,255,0.1)] shadow-md">
            <iframe
              title="NativeDefence Ahmedabad HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1192938150494!2d72.54019187606682!3d23.092750663473187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8346f042ee11%3A0xe54e3d36b85ccdb3!2sGanesh%20Glory%2011!5e0!3m2!1sen!2sin!4v1717145000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* ══ FOOTER BAND ══ */}
      <footer style={{ background: '#0A0F1F' }} className="border-t border-[rgba(0,229,255,0.1)] transition-colors duration-500">

        {/* Upper Band */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3
              className="font-normal text-white mb-2"
              style={{ fontFamily: NHG, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
            >
              Have a critical security event?
            </h3>
            <p className="text-sm text-[#7a9bb5]">Our threat operations scanning center is available around the clock.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:sales@nativedefence.com"
              className="inline-flex items-center gap-2 hover:opacity-90 text-[#0A0F1F] text-sm font-semibold px-5 py-3.5 rounded-full transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #00E5FF)' }}
            >
              Email Incident Command
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.08)] hover:bg-[#eef2ee] dark:hover:bg-[#3B82F6] text-white border border-[rgba(0,229,255,0.15)] text-sm font-semibold px-5 py-3.5 rounded-full transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Lower copyright band */}
        <div >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <img src={logoDark} style={{ opacity: 0.8 }} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 transition-all duration-300" />
              <p className="text-xs text-[#7a9bb5]/40">
                Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#7a9bb5]/40">Security triage operations active</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
