import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PathSection from './components/PathSection'
import PersonalitySection from './components/PersonalitySection'
import ServicesSection from './components/ServicesSection'
import FutureSection from './components/FutureSection'
import MediaSection from './components/MediaSection'
import BlogSection from './components/BlogSection'
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
      <ServicesSection />
      <FutureSection />
      <MediaSection />
      <BlogSection />
      <ConsultationForm />
      <Footer />
    </div>
  )
}

export default App
