import React, { useState } from 'react'

const Header = () => {
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
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
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
              color: 'black'
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
                color: 'black',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8B5CF6'}
              onMouseLeave={(e) => e.target.style.color = 'black'}
            >
              About project
            </button>
            <button
              onClick={() => scrollToSection('products')}
              style={{
                color: 'black',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8B5CF6'}
              onMouseLeave={(e) => e.target.style.color = 'black'}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('book-session')}
              style={{
                color: 'black',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8B5CF6'}
              onMouseLeave={(e) => e.target.style.color = 'black'}
            >
              Sessions
            </button>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', height: '2.5rem' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  background: 'none',
                  border: language === 'en' ? '1px solid black' : '1px solid transparent',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  opacity: language === 'en' ? 1 : 0.5,
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
                  background: 'none',
                  border: language === 'ru' ? '1px solid black' : '1px solid transparent',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  opacity: language === 'ru' ? 1 : 0.5,
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
                color: 'black',
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
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '0.5rem 0'
          }}>
            <div style={{ padding: '0.5rem 0' }}>
              <button
                onClick={() => scrollToSection('about')}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  color: 'black',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                About project
              </button>
              <button
                onClick={() => scrollToSection('products')}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  color: 'black',
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
                  color: 'black',
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
                    background: 'none',
                    border: language === 'en' ? '1px solid black' : '1px solid transparent',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    opacity: language === 'en' ? 1 : 0.5,
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
                    background: 'none',
                    border: language === 'ru' ? '1px solid black' : '1px solid transparent',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    opacity: language === 'ru' ? 1 : 0.5,
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
    </header>
  )
}

export default Header
