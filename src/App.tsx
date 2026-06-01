import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function HomePage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  const handleNavClick = (section: string) => {
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: '#050d1a' }}>
      <Hero onNavClick={handleNavClick} isDark={isDark} onToggleDark={() => setIsDark(d => !d)} />
      <About />
      <NativeSOC />
      <Services />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename="/NativeDefence-">
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


