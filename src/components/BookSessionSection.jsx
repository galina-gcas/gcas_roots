import React from 'react'

const BookSessionSection = () => {
  return (
    <section id="book-session" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #7c3aed, #6d28d9, #5b21b6)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Golden sparkles effect */}
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
          backgroundColor: 'rgba(255, 215, 0, 0.8)',
          borderRadius: '50%',
          animation: 'sparkle 2s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(255, 223, 0, 0.9)',
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
          backgroundColor: 'rgba(255, 193, 7, 0.7)',
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
          backgroundColor: 'rgba(255, 215, 0, 0.6)',
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
          backgroundColor: 'rgba(255, 223, 0, 0.8)',
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
          backgroundColor: 'rgba(255, 193, 7, 0.9)',
          borderRadius: '50%',
          animation: 'sparkle 2.3s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '40%',
          width: '4px',
          height: '4px',
          backgroundColor: 'rgba(255, 215, 0, 0.7)',
          borderRadius: '50%',
          animation: 'sparkle 2.7s ease-in-out infinite',
          animationDelay: '0.3s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '60%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(255, 223, 0, 0.8)',
          borderRadius: '50%',
          animation: 'sparkle 2.1s ease-in-out infinite',
          animationDelay: '1.8s'
        }}></div>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Book a session
        </h2>
        
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '3rem',
          fontWeight: '500'
        }}>
          based on your actual request
        </p>

        {/* Purple button */}
        <button
          style={{
            padding: '1.25rem 3rem',
            border: 'none',
            background: 'linear-gradient(135deg, #a855f7, #9333ea, #7c3aed)',
            color: 'white',
            borderRadius: '50px',
            fontSize: '1.125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            transform: 'scale(1)',
            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3), 0 0 20px rgba(124, 58, 237, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #9333ea, #7c3aed, #6d28d9)'
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.4), 0 0 30px rgba(147, 51, 234, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #a855f7, #9333ea, #7c3aed)'
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = '0 4px 15px rgba(168, 85, 247, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)'
            }}
        >
          <span style={{
            position: 'relative',
            zIndex: 1,
            pointerEvents: 'none'
          }}>Private message me</span>
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

export default BookSessionSection
