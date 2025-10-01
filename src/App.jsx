import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PathSection from './components/PathSection'
import PersonalitySection from './components/PersonalitySection'
import SunDivider from './components/SunDivider'
import SoulSection from './components/SoulSection'
import FutureSection from './components/FutureSection'
import ConsultationForm from './components/ConsultationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <PathSection />
      <PersonalitySection />
      <SunDivider />
      <SoulSection />
      <FutureSection />
      <ConsultationForm />
      <Footer />
    </div>
  )
}

export default App
