import React from 'react'

const ServicesSection = () => {
  const openTelegram = (serviceName) => {
    // Замените на ваш Telegram username
    const message = `Привет! Хочу заказать услугу: ${serviceName}`
    const telegramUrl = `https://t.me/your_telegram_username?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank')
  }

  const services = [
    {
      id: 1,
      title: "Астрологическая консультация",
      price: "7000Р",
      description: "Разбираем натальную карту, транзиты и прогрессии для понимания жизненных циклов и возможностей развития.",
      image: "🔮",
      buttonText: "ЗАКАЗАТЬ",
      buttonAction: () => openTelegram("Астрологическая консультация")
    },
    {
      id: 2,
      title: "Энергоинформационный аудит бизнеса",
      price: "20 000Р",
      description: "Анализ энергетического поля бизнеса и выявление причин проблем в развитии компании, команды и процессов.",
      image: "💼",
      buttonText: "ЗАКАЗАТЬ",
      buttonAction: () => openTelegram("Энергоинформационный аудит бизнеса")
    },
    {
      id: 3,
      title: "Консультация для бизнеса (ченнелинг-сессия)",
      price: "30 000Р",
      description: "Выявление причин проблем в бизнесе через ченнелинг и получение рекомендаций от Высших Сил для развития.",
      image: "🤝",
      buttonText: "ЗАКАЗАТЬ",
      buttonAction: () => openTelegram("Консультация для бизнеса (ченнелинг-сессия)")
    }
  ]

  return (
    <section id="services" style={{
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
            Услуги
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '2rem'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              transform: 'translateY(0)',
              overflow: 'hidden',
              border: '1px solid #F3F4F6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              e.currentTarget.style.transform = 'translateY(-8px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              {/* Service Image */}
              <div style={{
                height: '12rem',
                background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '4rem' }}>{service.image}</div>
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
                  }}>{service.price}</span>
                </div>
              </div>

              {/* Service Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: '0.75rem'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#6B7280',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <button
                  onClick={service.buttonAction}
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
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(to right, #F3E8FF, #FCE7F3)',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '64rem',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '1rem'
            }}>
              Почему выбирают мои услуги?
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '1.5rem',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ fontWeight: '600', color: '#9333EA', marginBottom: '0.5rem' }}>🎯 Точность</h4>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Глубокий анализ с использованием астрологии и ченнелинга</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#EC4899', marginBottom: '0.5rem' }}>⚡ Результат</h4>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Практические рекомендации для реальных изменений</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#F97316', marginBottom: '0.5rem' }}>🌟 Поддержка</h4>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Сопровождение на всех этапах реализации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
