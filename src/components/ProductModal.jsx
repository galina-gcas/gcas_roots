import React from 'react'

const ProductModal = ({ isOpen, onClose, product, type }) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#6B7280',
              padding: '0.5rem',
              lineHeight: 1,
              width: '2rem',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>

          {type === 'readmore' && (
            <>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                marginBottom: '1rem',
                paddingRight: '2rem'
              }}>
                {product.title}
              </h2>
              <div style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#374151',
                marginTop: '1.5rem'
              }}>
                <p style={{ marginBottom: '1rem' }}>
                  {product.fullDescription?.paragraph1 || 'This is a detailed description of the product. It helps you understand what this product offers and how it can benefit you.'}
                </p>
                <p>
                  {product.fullDescription?.paragraph2 || 'Discover the full potential of this transformative experience that will guide you on your journey of personal growth and development.'}
                </p>
              </div>
            </>
          )}

          {type === 'buy' && (
            <>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                marginBottom: '1rem',
                paddingRight: '2rem'
              }}>
                Purchase {product.title}
              </h2>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#F97316',
                marginTop: '1.5rem',
                marginBottom: '0.5rem'
              }}>
                ${product.price || '99'}
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                marginBottom: '1.5rem'
              }}>
                {product.buyInfo || 'Get instant access to this transformative program after purchase.'}
              </p>
              <a
                href={product.messengerLink || 'https://t.me/yourusername'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(to right, #F97316, #EF4444)',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  textAlign: 'center',
                  width: '100%',
                  transition: 'all 0.3s',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #EA580C, #DC2626)'
                  e.target.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #F97316, #EF4444)'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                Contact me on Telegram
              </a>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductModal

