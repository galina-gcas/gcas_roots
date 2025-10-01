import React from 'react'

const SoulSection = () => {
  const products = [
    {
      id: 'karma-lessons',
      title: 'Karma Lessons',
      description: 'Unveil your past karma and your karmic tasks for the current embodiment.',
      image: '/placeholder-karma.jpg'
    },
    {
      id: 'karma-meditation',
      title: 'Karma Lessons + Meditation "Past Life"',
      description: 'Harness both the power of astrology and channeling to unlock your true soul\'s potential.',
      image: '/placeholder-karma-meditation.jpg'
    },
    {
      id: 'meditation-past-life',
      title: 'Meditation "Past Life"',
      description: 'Dive into your past experiences to discover new ways for the ongoing life',
      image: '/placeholder-meditation.jpg'
    }
  ]

  return (
    <section id="soul" style={{
      padding: '5rem 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
            fontWeight: 'bold',
            color: 'black',
            margin: 0
          }}>
            Soul
          </h2>
        </div>

        {/* Product Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '2rem',
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                width: '280px',
                height: '400px',
                margin: '0 auto',
                padding: '1rem',
                boxSizing: 'border-box'
              }}
            >
              {/* Circular Product Image */}
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: '#F3F4F6',
                marginBottom: '1.5rem',
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
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'black',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {product.title}
              </h3>

              {/* Product Description */}
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                marginBottom: '1.5rem',
                lineHeight: 1.4,
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {product.description}
              </p>

              {/* Buttons */}
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                marginTop: 'auto'
              }}>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid black',
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: 'scale(1)',
                    flex: 1,
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    minWidth: '0'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'black'
                    e.target.style.color = 'white'
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = 'black'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  <span style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap'
                  }}>
                    Read More
                  </span>
                </button>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    background: 'linear-gradient(to right, #F97316, #EF4444)',
                    color: 'white',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: 'scale(1)',
                    flex: 1,
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #EA580C, #DC2626)'
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #F97316, #EF4444)'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  <span style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}>
                    Buy
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoulSection
