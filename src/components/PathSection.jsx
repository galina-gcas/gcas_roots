import React from 'react'

const PathSection = () => {
  return (
    <section className="cosmic-bg" style={{
      padding: '5rem 0',
      position: 'relative'
    }}>
      {/* Cosmic background effects */}
      <div className="cosmic-lines"></div>
      
      {/* Floating elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '16%',
          width: '16px',
          height: '16px',
          backgroundColor: 'rgba(167, 139, 250, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '16%',
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(244, 114, 182, 0.4)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '3s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '33%',
          left: '33%',
          width: '12px',
          height: '12px',
          backgroundColor: 'rgba(251, 146, 60, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '1.5s'
        }}></div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(4px)',
          borderRadius: '1.5rem',
          padding: window.innerWidth >= 768 ? '3rem' : '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '2rem'
            }}>
              Путь к себе
            </h2>
            
            <div style={{ textAlign: 'left', maxWidth: 'none' }}>
              <p style={{
                fontSize: '1.125rem',
                color: '#374151',
                marginBottom: '1.5rem',
                lineHeight: 1.75
              }}>
                Каждый человек приходит в этот мир с уникальной миссией и предназначением. 
                Мой путь — помочь вам найти и реализовать свой истинный потенциал, 
                создать гармонию между материальным успехом и духовным развитием.
              </p>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#374151',
                lineHeight: 1.75
              }}>
                Через астрологию, ченнелинг и энергоинформационный анализ я помогаю 
                раскрыть ваши скрытые таланты, преодолеть внутренние блоки и создать 
                резонанс с вашим Высшим Я для достижения процветания во всех сферах жизни.
              </p>
            </div>

            {/* Key principles */}
            <div style={{
              marginTop: '3rem',
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '1.5rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(to bottom right, #A78BFA, #9333EA)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  🎯
                </div>
                <h3 style={{ fontWeight: '600', color: 'black', marginBottom: '0.5rem' }}>Целенаправленность</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Четкое понимание ваших целей и путей их достижения</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(to bottom right, #F472B6, #EC4899)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  ⚡
                </div>
                <h3 style={{ fontWeight: '600', color: 'black', marginBottom: '0.5rem' }}>Энергия</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Активация и гармонизация ваших энергетических потоков</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(to bottom right, #FB923C, #F97316)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  🌟
                </div>
                <h3 style={{ fontWeight: '600', color: 'black', marginBottom: '0.5rem' }}>Мудрость</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Доступ к космическим знаниям и духовным истинам</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PathSection
