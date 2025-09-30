import React from 'react'

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openTelegram = () => {
    // Замените на ваш Telegram username
    window.open('https://t.me/your_telegram_username', '_blank')
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '4rem',
      backgroundColor: 'black'
    }}>

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '45% 55%' : '1fr',
          gap: '2rem',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          {/* Left content */}
          <div style={{ 
            textAlign: window.innerWidth >= 1024 ? 'left' : 'center',
            padding: window.innerWidth >= 1024 ? '0' : '0 1rem'
          }}>
            <h1 style={{
              fontSize: window.innerWidth >= 768 ? '3.5rem' : '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              Ченнелер, предприниматель,<br />
              инфлюенсер
            </h1>
            <p style={{
              fontSize: window.innerWidth >= 768 ? '1.25rem' : '1.125rem',
              color: 'white',
              marginBottom: '2.5rem',
              lineHeight: 1.3
            }}>
              Продукты для роста, услуги для бизнеса.
            </p>
            
            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
              gap: '1rem',
              justifyContent: window.innerWidth >= 1024 ? 'flex-start' : 'center'
            }}>
              <button
                onClick={() => scrollToSection('consultation')}
                className="btn-cosmic glow-orange"
                style={{
                  padding: '0.875rem 1.5rem',
                  background: 'linear-gradient(to right, #F97316, #EF4444)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  transform: 'scale(1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.background = 'linear-gradient(to right, #EA580C, #DC2626)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.background = 'linear-gradient(to right, #F97316, #EF4444)'
                }}
              >
                <span>💬</span>
                ОНЛАЙН-КОНСУЛЬТАЦИЯ
              </button>
              <button
                onClick={openTelegram}
                className="btn-cosmic"
                style={{
                  padding: '1rem 2rem',
                  border: '2px solid #F97316',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.backgroundColor = '#F97316'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = 'white'
                }}
              >
                ПОДОБРАТЬ ПРОДУКТ
              </button>
            </div>
          </div>

          {/* Right content - Photo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Galina's photo in circular frame */}
            <div style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)',
              padding: '6px'
            }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="/me.png" 
                    alt="Галина GCAS"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback if image not found */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom right, #DDD6FE, #FBCFE8)',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}>
                    👩‍💼
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
