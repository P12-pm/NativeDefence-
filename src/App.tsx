import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
import Hero from './components/Hero'
import About from './components/About'
import NativeSOC from './components/NativeSOC'
import Services from './components/Services'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NativeSOCPage from './pages/NativeSOCPage'
import AcademyPage from './pages/AcademyPage'
import VAPTPage from './pages/VAPTPage'
import AboutUsPage from './pages/AboutUsPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'
import NativeSOCApproachPage from './pages/NativeSOCApproachPage'
import NativeSOCFeaturesPage from './pages/NativeSOCFeaturesPage'
import NativeSOCArchitecturePage from './pages/NativeSOCArchitecturePage'
import HowItWorksPage from './pages/HowItWorksPage'
import WhyNativeSOCPage from './pages/WhyNativeSOCPage'
import CoursePage from './pages/CoursePage'
import CybersecurityAwarenessPage from './pages/CybersecurityAwarenessPage'

// Advanced Cyber Features Components
import LoadingScreen from './components/LoadingScreen'
import MouseFollowGlow from './components/MouseFollowGlow'

function HomePage() {
  const [isDark, setIsDark] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  // Global Scroll Reveal Intersection Observer Hook
  useEffect(() => {
    if (loading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  const handleNavClick = (section: string) => {
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className="min-h-screen transition-colors duration-500 relative" style={{ background: '#0A0F1F' }}>
        <MouseFollowGlow />
        <Hero onNavClick={handleNavClick} isDark={isDark} onToggleDark={() => setIsDark(d => !d)} />
        <About />
        <NativeSOC />
        <Services />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename="/NativeDefence-">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nativesoc" element={<NativeSOCPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/vapt" element={<VAPTPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nativesocapproach" element={<NativeSOCApproachPage />} />
        <Route path="/nativesocfeatures" element={<NativeSOCFeaturesPage />} />
        <Route path="/nativesocarchitecture" element={<NativeSOCArchitecturePage />} />
        <Route path="/howitworks" element={<HowItWorksPage />} />
        <Route path="/whynativesoc" element={<WhyNativeSOCPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/vapt/cybersecurityawareness" element={<CybersecurityAwarenessPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


