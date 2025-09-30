import React from 'react'

const ProductsSection = () => {
  const openTelegram = (productName) => {
    // Замените на ваш Telegram username
    const message = `Привет! Хочу приобрести продукт: ${productName}`
    const telegramUrl = `https://t.me/your_telegram_username?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank')
  }

  const products = [
    {
      id: 1,
      title: "Денежная энергия в карте",
      price: "2000Р",
      description: "Пойми на сколько развита твоя денежная энергия в натальной карте и как её усилить для привлечения финансового потока.",
      image: "💰",
      buttonText: "ПРИОБРЕСТИ",
      buttonAction: () => openTelegram("Денежная энергия в карте")
    },
    {
      id: 2,
      title: "Карьера и самореализация",
      price: "3000Р",
      description: "Раскрой и используй свой истинный потенциал для достижения успеха в карьере и реализации предназначения.",
      image: "🚀",
      buttonText: "ПРОДВИНУТЬСЯ",
      buttonAction: () => openTelegram("Карьера и самореализация")
    },
    {
      id: 3,
      title: "Карма и опыт Души",
      price: "1500Р",
      description: "Пойми жизненные задачи твоего воплощения и как проработать кармические уроки для духовного роста.",
      image: "🌟",
      buttonText: "УЗНАТЬ",
      buttonAction: () => openTelegram("Карма и опыт Души")
    }
  ]

  return (
    <section id="products" style={{
      padding: '5rem 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '2rem'
          }}>
            Продукты
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '2rem'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              transform: 'translateY(0)',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              e.currentTarget.style.transform = 'translateY(-8px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              {/* Product Image */}
              <div style={{
                height: '12rem',
                background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '4rem' }}>{product.image}</div>
                {/* Cosmic effect overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom right, rgba(167, 139, 250, 0.1), rgba(244, 114, 182, 0.1))'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px'
                }}>
                  <span style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#9333EA'
                  }}>{product.price}</span>
                </div>
              </div>

              {/* Product Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: '0.75rem'
                }}>
                  {product.title}
                </h3>
                <p style={{
                  color: '#6B7280',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>
                  {product.description}
                </p>
                
                {/* CTA Button */}
                <button
                  onClick={product.buttonAction}
                  className="btn-cosmic"
                  style={{
                    width: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: '600',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#374151'
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'black'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
            Все продукты создаются индивидуально на основе вашей натальной карты
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Срок выполнения: 3-5 рабочих дней
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
