import React from 'react'

const HeritageSection = () => {
  return (
    <section id="heritage" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #064e3b, #065f46, #047857)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Sparkling stars effect */}
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
          top: '20%',
          left: '15%',
          width: '4px',
          height: '4px',
          backgroundColor: 'rgba(34, 197, 94, 0.8)',
          borderRadius: '50%',
          animation: 'sparkle 2s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(16, 185, 129, 0.9)',
          borderRadius: '50%',
          animation: 'sparkle 2.5s ease-in-out infinite',
          animationDelay: '0.5s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          width: '5px',
          height: '5px',
          backgroundColor: 'rgba(5, 150, 105, 0.7)',
          borderRadius: '50%',
          animation: 'sparkle 3s ease-in-out infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(34, 197, 94, 0.6)',
          borderRadius: '50%',
          animation: 'sparkle 2.2s ease-in-out infinite',
          animationDelay: '1.5s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '40%',
          right: '30%',
          width: '4px',
          height: '4px',
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderRadius: '50%',
          animation: 'sparkle 2.8s ease-in-out infinite',
          animationDelay: '0.8s'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '10%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(5, 150, 105, 0.9)',
          borderRadius: '50%',
          animation: 'sparkle 2.3s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
      </div>
      
      {/* Background tree effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
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
          fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '3rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Heritage
        </h2>
        
        {/* Single Product Card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1.5rem',
          padding: '3rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {/* Circular Product Image */}
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: '#F3F4F6',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: '#9CA3AF',
            border: '2px solid #E5E7EB'
          }}>
            📷
          </div>

          {/* Product Title */}
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: 'black',
            marginBottom: '1rem',
            lineHeight: 1.3
          }}>
            Meditation — Unlock ancestry's potential
          </h3>

          {/* Product Description */}
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            maxWidth: '500px',
            margin: '0 auto 2.5rem'
          }}>
            Connect with your ancestors on both bloodlines and discover your heritage of power and sacred gifts.
          </p>

          {/* Connect Button */}
          <button
            style={{
              padding: '1rem 3rem',
              border: 'none',
              background: 'linear-gradient(135deg, #059669, #047857, #065f46)',
              color: 'white',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: 'scale(1)',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3), 0 0 20px rgba(34, 197, 94, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #047857, #065f46, #064e3b)'
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 6px 20px rgba(5, 150, 105, 0.4), 0 0 30px rgba(34, 197, 94, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #059669, #047857, #065f46)'
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = '0 4px 15px rgba(5, 150, 105, 0.3), 0 0 20px rgba(34, 197, 94, 0.2)'
            }}
          >
            <span style={{
              position: 'relative',
              zIndex: 1,
              pointerEvents: 'none'
            }}>Connect me</span>
            {/* Magical shimmer effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              animation: 'shimmer 2s ease-in-out infinite'
            }}></div>
          </button>
        </div>
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
        
        @keyframes shimmer {
          0% { 
            left: -100%;
          }
          100% { 
            left: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default HeritageSection
