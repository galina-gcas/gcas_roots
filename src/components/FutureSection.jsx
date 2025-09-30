import React from 'react'

const FutureSection = () => {
  return (
    <section className="cosmic-bg" style={{
      padding: '5rem 0',
      position: 'relative'
    }}>
      {/* Cosmic background effects */}
      <div className="cosmic-lines"></div>
      
      {/* Enhanced floating elements */}
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
          top: '16%',
          left: '25%',
          width: '24px',
          height: '24px',
          backgroundColor: 'rgba(251, 146, 60, 0.2)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33%',
          right: '25%',
          width: '16px',
          height: '16px',
          backgroundColor: 'rgba(167, 139, 250, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '16%',
          width: '20px',
          height: '20px',
          backgroundColor: 'rgba(244, 114, 182, 0.25)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '4s'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '66%',
          right: '16%',
          width: '12px',
          height: '12px',
          backgroundColor: 'rgba(251, 146, 60, 0.4)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '33%',
          right: '33%',
          width: '16px',
          height: '16px',
          backgroundColor: 'rgba(167, 139, 250, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '3s'
        }}></div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '4.5rem' : '3rem',
            fontWeight: 'bold',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '2rem'
          }}>
            Наше будущее —
          </h2>
          <p style={{
            fontSize: window.innerWidth >= 768 ? '2.5rem' : '1.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '300'
          }}>
            на новой Земле,
          </p>
        </div>

        {/* Additional cosmic elements */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '4rem',
            height: '4rem',
            background: 'linear-gradient(to bottom right, rgba(167, 139, 250, 0.3), rgba(147, 51, 234, 0.3))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            fontSize: '1.5rem'
          }}>
            🌍
          </div>
          <div style={{
            width: '4rem',
            height: '4rem',
            background: 'linear-gradient(to bottom right, rgba(244, 114, 182, 0.3), rgba(236, 72, 153, 0.3))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            fontSize: '1.5rem'
          }}>
            ✨
          </div>
          <div style={{
            width: '4rem',
            height: '4rem',
            background: 'linear-gradient(to bottom right, rgba(251, 146, 60, 0.3), rgba(249, 115, 22, 0.3))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            fontSize: '1.5rem'
          }}>
            🌟
          </div>
        </div>

        {/* Vision statement */}
        <div style={{
          marginTop: '4rem',
          maxWidth: '48rem',
          margin: '4rem auto 0'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.75
          }}>
            Мы стоим на пороге великих изменений. Новая Земля — это не просто место, 
            это состояние сознания, где каждый человек может реализовать свой истинный потенциал 
            и жить в гармонии с Вселенной.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FutureSection
