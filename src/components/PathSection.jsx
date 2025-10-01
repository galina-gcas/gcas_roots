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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1.5rem',
          padding: window.innerWidth >= 768 ? '4rem' : '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '3rem'
            }}>
              Evolution Path
            </h2>
            
            {/* Evolution scheme */}
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: window.innerWidth >= 768 ? '3rem' : '2rem',
              marginBottom: '3rem'
            }}>
              {/* Personality */}
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  border: '2px solid #9CA3AF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem',
                  color: '#6B7280'
                }}>
                  👤
                </div>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: 'black', 
                  marginBottom: '0.5rem',
                  fontSize: '1.25rem'
                }}>
                  Personality
                </h3>
                <p style={{ 
                  color: '#6B7280', 
                  fontSize: '0.9rem',
                  lineHeight: 1.4
                }}>
                  Grow as a personality
                </p>
              </div>

              {/* Arrow */}
              <div style={{
                fontSize: '2rem',
                color: '#9CA3AF',
                display: window.innerWidth >= 768 ? 'block' : 'none'
              }}>
                →
              </div>

              {/* Soul */}
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  border: '2px solid #9CA3AF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem',
                  color: '#6B7280'
                }}>
                  ✨
                </div>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: 'black', 
                  marginBottom: '0.5rem',
                  fontSize: '1.25rem'
                }}>
                  Soul
                </h3>
                <p style={{ 
                  color: '#6B7280', 
                  fontSize: '0.9rem',
                  lineHeight: 1.4
                }}>
                  Evolve as a soul
                </p>
              </div>

              {/* Arrow */}
              <div style={{
                fontSize: '2rem',
                color: '#9CA3AF',
                display: window.innerWidth >= 768 ? 'block' : 'none'
              }}>
                →
              </div>

              {/* Heritage */}
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  border: '2px solid #9CA3AF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem',
                  color: '#6B7280'
                }}>
                  🌳
                </div>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: 'black', 
                  marginBottom: '0.5rem',
                  fontSize: '1.25rem'
                }}>
                  Heritage
                </h3>
                <p style={{ 
                  color: '#6B7280', 
                  fontSize: '0.9rem',
                  lineHeight: 1.4
                }}>
                  Embrace the gifts and strength of your ancestry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PathSection