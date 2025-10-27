import React, { useState } from 'react'
import ProductModal from './ProductModal'

const PersonalitySection = () => {
  const [modalState, setModalState] = useState({ isOpen: false, product: null, type: null })

  const products = [
    {
      id: 'personal-boundaries',
      title: 'Personal Boundaries',
      description: 'Learn to define and protect your boundaries',
      image: '/boundaries.png',
      price: '99',
      fullDescription: {
        paragraph1: 'Learn to define and protect your personal boundaries with this comprehensive guide based on your natal chart. Understanding and maintaining healthy boundaries is essential for personal growth and healthy relationships.',
        paragraph2: 'This set of instructions will teach you practical techniques to identify, communicate, and enforce your boundaries effectively in all areas of your life.'
      },
      buyInfo: 'Creating the set will take up to 7 days, you need to send me your full name, e-mail/Telegram or other messenger, date and time, and location of your birth. The guide will be sent to your contacts.',
      messengerLink: 'https://t.me/yourusername'
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      description: 'Discover ways to improve your effectiveness',
      image: '/efficiency.png',
      price: '89',
      fullDescription: {
        paragraph1: 'Discover powerful strategies to enhance your productivity and efficiency in a professional setting.',
        paragraph2: 'Learn individual techniques, energy optimization methods, and practical tools that will help you achieve more with less effort — all based on your natal chart.'
      },
      buyInfo: 'Creating the set will take up to 7 days, you need to send me your full name, e-mail/Telegram or other messenger, date and time, and location of your birth. The guide will be sent to your contacts.',
      messengerLink: 'https://t.me/yourusername'
    },
    {
      id: 'attraction-self-love',
      title: 'Attraction & Self-Love',
      description: 'Reveal your feminine power',
      image: '/feminine.png',
      price: '129',
      fullDescription: {
        paragraph1: 'Reveal and embrace your feminine power through the practices of attraction and self-love. This transformative journey helps you reconnect with your authentic self.',
        paragraph2: 'Discover techniques to cultivate self-love, attract meaningful relationships, and embody your natural feminine energy with confidence and grace — all based on your natal chart.'
      },
      buyInfo: 'Creating the set will take up to 7 days, you need to send me your full name, e-mail/Telegram or other messenger, date and time, and location of your birth. The guide will be sent to your contacts.',
      messengerLink: 'https://t.me/yourusername'
    },
    {
      id: 'mission',
      title: 'Mission',
      description: 'Pursue your genuine mission',
      image: '/mission.png',
      price: '149',
      fullDescription: {
        paragraph1: 'Discover your true life mission and learn how to pursue it with clarity and purpose. This set of instructions guides you through the process of uncovering your authentic calling.',
        paragraph2: 'You will gain insights into your unique talents, values, and how to align your daily actions with your higher purpose for a fulfilling life.'
      },
      buyInfo: 'Creating the set will take up to 7 days, you need to send me your full name, e-mail/Telegram or other messenger, date and time, and location of your birth. The guide will be sent to your contacts.',
      messengerLink: 'https://t.me/yourusername'
    }
  ]

  const handleReadMore = (product) => {
    setModalState({ isOpen: true, product, type: 'readmore' })
  }

  const handleBuy = (product) => {
    setModalState({ isOpen: true, product, type: 'buy' })
  }

  const closeModal = () => {
    setModalState({ isOpen: false, product: null, type: null })
  }

  return (
    <section id="personality" style={{
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
            Personality
          </h2>
        </div>

        {/* Product Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
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
                border: '2px solid #E5E7EB',
                overflow: 'hidden'
              }}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
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
                  onClick={() => handleReadMore(product)}
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
                  onClick={() => handleBuy(product)}
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
      <ProductModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        product={modalState.product}
        type={modalState.type}
      />
    </section>
  )
}

export default PersonalitySection
