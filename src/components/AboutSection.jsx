import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" style={{
      padding: '5rem 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr', 
          gap: '3rem', 
          alignItems: 'center' 
        }}>
          <div>
            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '2rem'
            }}>
              About the Project
            </h2>
            <div style={{ fontSize: '1.125rem', color: '#374151', lineHeight: 1.75 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                This is my multilingual project: here you can learn about <strong>yourself, your heritage, and your mission</strong>.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                Grow as a personality, evolve as a soul rooted 🌳 in the gifts and strength of those who've come before you.
              </p>
              
              <p>
                I use <em>astrology and channeling</em> as tools to connect with realms of your guides and ancestors and empower you with the system of knowledge.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/tree.png" 
              alt="Tree of Life"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '1rem'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
