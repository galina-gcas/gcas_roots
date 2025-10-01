import React, { useState } from 'react'

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: 'black',
      boxShadow: '0 -4px 6px -1px rgba(255, 255, 255, 0.1)',
      overflow: 'hidden'
    }}>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo */}
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white'
            }}>GCAS Roots</h1>
          </div>

          {/* Desktop Navigation */}
          <nav style={{
            display: window.innerWidth >= 768 ? 'flex' : 'none',
            gap: '2rem',
            alignItems: 'center'
            }}>
              <button
              onClick={() => scrollToSection('about')}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8B5CF6'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              About project
            </button>
            <button
              onClick={() => scrollToSection('personality')}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8B5CF6'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('book-session')}
                style={{
                color: 'white',
                background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                fontSize: '1rem',
                transition: 'color 0.2s'
                }}
              onMouseEnter={(e) => e.target.style.color = '#8B5CF6'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              >
              Sessions
              </button>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', height: '2.5rem' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  background: language === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'none',
                  border: language === 'en' ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: 'white',
                  opacity: language === 'en' ? 1 : 0.7,
                  transition: 'all 0.2s',
                  padding: '0.25rem',
                  height: '2.5rem',
                  width: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1'
                }}
              >
                🇺🇸
              </button>
              <button
                onClick={() => setLanguage('ru')}
                style={{
                  background: language === 'ru' ? 'rgba(255, 255, 255, 0.1)' : 'none',
                  border: language === 'ru' ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: 'white',
                  opacity: language === 'ru' ? 1 : 0.7,
                  transition: 'all 0.2s',
                  padding: '0.25rem',
                  height: '2.5rem',
                  width: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1'
                }}
              >
                🇷🇺
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div style={{ display: window.innerWidth < 768 ? 'block' : 'none' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div style={{
              display: window.innerWidth < 768 ? 'block' : 'none',
              backgroundColor: 'black',
              borderTop: '1px solid #4B5563',
              padding: '0.5rem 0'
            }}>
            <div style={{ padding: '0.5rem 0' }}>
              <button
                onClick={() => scrollToSection('about')}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                About project
              </button>
              <button
                onClick={() => scrollToSection('personality')}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('book-session')}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                Sessions
              </button>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                padding: '0.75rem 1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '3rem'
              }}>
                <button
                  onClick={() => setLanguage('en')}
                  style={{
                    background: language === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'none',
                    border: language === 'en' ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    color: 'white',
                    opacity: language === 'en' ? 1 : 0.7,
                    transition: 'all 0.2s',
                    padding: '0.25rem',
                    height: '2.5rem',
                    width: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}
                >
                  🇺🇸
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  style={{
                    background: language === 'ru' ? 'rgba(255, 255, 255, 0.1)' : 'none',
                    border: language === 'ru' ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    color: 'white',
                    opacity: language === 'ru' ? 1 : 0.7,
                    transition: 'all 0.2s',
                    padding: '0.25rem',
                    height: '2.5rem',
                    width: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}
                >
                  🇷🇺
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer