import React from 'react'

const SunDivider = () => {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #F97316, #EF4444)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background sun effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
        animation: 'pulse 3s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: window.innerWidth >= 768 ? '2.5rem' : '2rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1.5rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Meditation "Sun"
        </h2>
        
        <p style={{
          fontSize: '1.125rem',
          color: 'white',
          marginBottom: '2rem',
          lineHeight: 1.6,
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
        }}>
          Release negativity from your social sphere and empower yourself with the solar energy to achieve your goals and embrace success
        </p>
        
        <button
          style={{
            padding: '1rem 3rem',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderRadius: '0.5rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            transform: 'scale(1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)'
            e.target.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)'
            e.target.style.transform = 'scale(1)'
          }}
        >
          Dive in
        </button>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}

export default SunDivider
