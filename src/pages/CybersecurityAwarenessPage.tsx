import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import {
  ArrowLeft, ArrowRight, Lock, Key, MousePointerClick, Wifi, RefreshCw,
  FolderHeart, Sparkles, Sun, Moon, Menu, X, CheckCircle
} from 'lucide-react';

const NHG = '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
const PRIMARY = '#336443';

interface TipItem {
  num: string;
  title: string;
  icon: any;
  bullet1: string;
  bullet2: string;
  example: string;
}

const safetyTips: TipItem[] = [
  {
    num: '01',
    title: 'Use Strong & Unique Passwords',
    icon: Key,
    bullet1: 'Create long, complex passwords (12+ characters).',
    bullet2: 'Use a password manager to store and generate credentials.',
    example: '💡 Example: Using "password123" for all accounts is a hacker\'s dream. Instead, use "Tr33@H0use!$ecure2024" and let your password manager handle the rest.'
  },
  {
    num: '02',
    title: 'Enable Two-Factor Authentication (2FA)',
    icon: Lock,
    bullet1: 'Activate 2FA for corporate email, banking, and portals.',
    bullet2: 'Use authenticator apps (Google Authenticator) instead of SMS.',
    example: '💡 Example: If a hacker gets your password, they still cannot gain access without the second authentication factor.'
  },
  {
    num: '03',
    title: 'Think Before You Click',
    icon: MousePointerClick,
    bullet1: 'Be cautious of unknown links in emails and messages.',
    bullet2: 'Hover over links to verify their destination before clicking.',
    example: '💡 Example: You get an email saying, "Your PayPal account is at risk! Click here." Instead of clicking, log in directly from the official website.'
  },
  {
    num: '04',
    title: 'Keep Software & Devices Updated',
    icon: RefreshCw,
    bullet1: 'Enable automatic updates for your OS, apps, and antivirus.',
    bullet2: 'Regularly install security patches to prevent exploitation.',
    example: '💡 Example: The WannaCry ransomware attack (2017) affected thousands of outdated Windows systems that lacked the latest security patches.'
  },
  {
    num: '05',
    title: 'Watch Out for Phishing Scams',
    icon: Lock,
    bullet1: 'Never provide personal or credit details over email.',
    bullet2: 'Look out for spelling errors, suspect names, and typos.',
    example: '💡 Example: A hacker pretends to be your bank and asks for details via email. Always call your bank directly to confirm.'
  },
  {
    num: '06',
    title: 'Avoid Public Wi-Fi Without a VPN',
    icon: Wifi,
    bullet1: 'Public Wi-Fi networks in airports and cafes are unsafe.',
    bullet2: 'Use a VPN (Virtual Private Network) to encrypt all logs.',
    example: '💡 Example: A hacker can set up a fake Wi-Fi network named "Starbucks Free Wi-Fi" to steal your data. Always verify with staff.'
  },
  {
    num: '07',
    title: 'Secure Your Social Media Profiles',
    icon: Users,
    bullet1: 'Set your profiles to private and limit personal details.',
    bullet2: 'Be extremely cautious of friend requests from strangers.',
    example: '💡 Example: Posting "On vacation from June 10-20!" informs criminals that your home is empty. Share travel updates after you return.'
  },
  {
    num: '08',
    title: 'Back Up Your Important Data',
    icon: FolderHeart,
    bullet1: 'Use cloud storage and external hard drives for copies.',
    bullet2: 'Keep multiple redundant copies of critical files.',
    example: '💡 Example: Ransomware locks your files and demands a fee. With backups, you can restore your data without paying hackers.'
  },
  {
    num: '09',
    title: 'Lock Your Screen and Devices',
    icon: Lock,
    bullet1: 'Use PINs, fingerprints, or facial recognition locks.',
    bullet2: 'Enable auto-lock after short periods of inactivity.',
    example: '💡 Example: Leaving your phone unlocked in a cafe can expose banking apps, social media, and private business messages.'
  },
  {
    num: '10',
    title: 'Be Wary of Unknown USBs & Downloads',
    icon: FolderHeart,
    bullet1: 'Avoid plugging in unknown USB drives you find.',
    bullet2: 'Download software only from official, trusted websites.',
    example: '💡 Example: A hacker leaves infected USBs in a corporate parking lot, hoping someone plugs one in, installing malicious payloads.'
  }
];

// Reusing Users icon from standard lucide-react if needed, otherwise define locally or import
import { Users } from 'lucide-react';

export default function CybersecurityAwarenessPage() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Sync dark class */
  useEffect(() => {
    const root = document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0e150d] transition-colors duration-500 text-[#1f2a1d] dark:text-[#c5d9c3]">

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0e150d]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo & Back */}
          <div className="flex items-center gap-4">
            <Link
              to="/vapt"
              className="flex items-center gap-1.5 text-sm font-medium text-[#4b5b47] dark:text-[#8a9e86] hover:text-[#1f2a1d] dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="w-px h-4 bg-[#1f2a1d]/15 dark:bg-white/15" />
            <Link to="/" className="flex items-center">
              <img
                src={isDark ? logoDark : logoLight}
                alt="NativeDefence Logo"
                className="transition-all duration-300 object-contain"
                style={isDark
                  ? { width: '135px', height: '40px' }
                  : { height: '40px', width: 'auto' }
                }
              />
            </Link>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(d => !d)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] dark:bg-[#1f2a1d] border border-black/8 dark:border-white/8 relative"
            >
              <Sun className={`w-3.5 h-3.5 text-[#1f2a1d] dark:text-white absolute transition-all duration-300 ${isDark ? 'opacity-100' : 'opacity-0 rotate-90'}`} />
              <Moon className={`w-3.5 h-3.5 text-[#1f2a1d] dark:text-white absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90' : 'opacity-100'}`} />
            </button>

            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-1.5 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Request Training
            </Link>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f6f2] dark:bg-[#1f2a1d] border border-black/8 dark:border-white/8 relative"
            >
              <Menu className={`w-4 h-4 text-[#1f2a1d] dark:text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`w-4 h-4 text-[#1f2a1d] dark:text-white absolute transition-all duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-black/5 dark:border-white/5 pt-3">
            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#1f2a1d] text-white text-sm font-semibold py-3 rounded-full"
            >
              Request Training
            </Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse, ${PRIMARY} 0%, transparent 70%)` }} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-[#f0f7f1] dark:bg-[#141d13] border border-[#336443]/15 dark:border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#336443] dark:text-[#85AB8B]" />
            <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] tracking-wider uppercase">End-User Security</span>
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-normal text-[#1f2a1d] dark:text-white mb-6"
              style={{
                fontFamily: NHG,
                fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Essential Cybersecurity <br />
              <span className="text-[#336443] dark:text-[#85AB8B] font-medium">Safety Guidelines.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed">
              In today's digital world, staying secure online is more important than ever. Cyber threats are constantly
              evolving, and a single mistake can put your personal and financial information at risk. Here are some
              simple yet effective cybersecurity best practices to help you stay protected online.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 10 SAFETY TIPS GRID ══ */}
      <section className="bg-[#f7f6f2] dark:bg-[#141d13] py-20 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.num}
                  className="bg-white dark:bg-[#0e150d] p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#336443]/10 dark:bg-[#336443]/20 flex items-center justify-center text-[#336443] dark:text-[#85AB8B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-[#336443] dark:text-[#85AB8B] bg-[#f0f7f1] dark:bg-[#1a2619] px-2.5 py-1 rounded border border-[#336443]/15">
                        Tip {tip.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1f2a1d] dark:text-white animate-fade-in" style={{ fontFamily: NHG }}>
                      {tip.title}
                    </h3>

                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{tip.bullet1}</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-[#4b5b47] dark:text-[#8a9e86]">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{tip.bullet2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-6 text-xs text-[#336443] dark:text-[#85AB8B] font-medium leading-relaxed bg-[#f0f7f1]/50 dark:bg-[#1a2619]/40 p-4 rounded-xl">
                    {tip.example}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══ CONCLUDING CTA SECTION ══ */}
      <section className="bg-white dark:bg-[#0e150d] py-16 transition-colors duration-500 border-t border-black/5 dark:border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#f0f7f1] dark:bg-[#142014]/60 border border-[#336443]/15 dark:border-[#85AB8B]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1f2a1d] dark:text-white leading-tight animate-fade-in" style={{ fontFamily: NHG }}>
                Need Professional Security Operations?
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5b47] dark:text-[#8a9e86] leading-relaxed max-w-3xl">
                Cybersecurity is not just for businesses—it\'s essential for everyone. In addition to user awareness training,
                our expert team is fully equipped to assist your enterprise with Security Audits, Penetration Testing,
                24/7 Incident Response, and continuous active SOC threat hunting.
              </p>
            </div>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-[#1f2a1d] hover:bg-[#2a3827] dark:bg-[#336443] dark:hover:bg-[#2a5438] text-white text-xs font-bold px-6 py-4 rounded-full transition-all duration-300 whitespace-nowrap self-start lg:self-auto group"
            >
              Secure Your Enterprise Today
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FOOTER BAND ══ */}
      <footer className="bg-[#f7f6f2] dark:bg-[#141d13] border-t border-[#1f2a1d]/10 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img src={isDark ? logoDark : logoLight} alt="NativeDefence Logo" className="h-7 w-auto opacity-70 dark:opacity-85 transition-all duration-300" />
            <p className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">
              Copyright 2023  © NATIVEDEFENCE TECH LLP. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#4b5b47]/50 dark:text-[#8a9e86]/40">User security operations active</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
