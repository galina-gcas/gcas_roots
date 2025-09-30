import React, { useState } from 'react'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Отправка данных в Telegram-бота
      const botToken = 'YOUR_BOT_TOKEN' // Замените на токен вашего бота
      const chatId = 'YOUR_CHAT_ID' // Замените на ваш chat ID
      
      const message = `
🆕 Новая заявка на консультацию!

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📱 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
      `

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error('Ошибка отправки')
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      alert('Произошла ошибка при отправке формы. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="consultation" className="cosmic-bg" style={{
        padding: '5rem 0',
        position: 'relative'
      }}>
        <div className="cosmic-lines"></div>
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '32rem',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            borderRadius: '1.5rem',
            padding: window.innerWidth >= 768 ? '3rem' : '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '1rem'
            }}>
              Заявка отправлена!
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#374151',
              marginBottom: '1.5rem'
            }}>
              Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время для подтверждения консультации.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              style={{
                background: 'linear-gradient(to right, #9333EA, #EC4899)',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(to right, #7C3AED, #DB2777)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(to right, #9333EA, #EC4899)'
              }}
            >
              Отправить еще одну заявку
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="consultation" className="cosmic-bg" style={{
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
          backgroundColor: 'rgba(167, 139, 250, 0.2)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '16%',
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(244, 114, 182, 0.3)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '33%',
          left: '33%',
          width: '12px',
          height: '12px',
          backgroundColor: 'rgba(251, 146, 60, 0.25)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '4s'
        }}></div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '32rem',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Запись на консультацию (ченнелинг)
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Стоимость 30 000 Р. Оплата после подтверждения
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(4px)',
          borderRadius: '1.5rem',
          padding: window.innerWidth >= 768 ? '3rem' : '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Name field */}
            <div>
              <label htmlFor="name" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#9333EA'
                  e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
                placeholder="Введите ваше имя"
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Ваш e-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#9333EA'
                  e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
                placeholder="Введите ваш email"
              />
            </div>

            {/* Phone field */}
            <div>
              <label htmlFor="phone" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Ваш номер телефона *
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0.75rem',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  fontSize: '0.875rem',
                  color: '#6B7280'
                }}>
                  🇷🇺 +7
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    paddingLeft: '4rem',
                    paddingRight: '1rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#9333EA'
                    e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="(999) 123-45-67"
                />
              </div>
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Консультация, какая тема, что хотите узнать? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  resize: 'none',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#9333EA'
                  e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
                placeholder="Опишите, что вас интересует, какие вопросы хотите задать..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-cosmic glow-orange"
              style={{
                width: '100%',
                background: 'linear-gradient(to right, #F97316, #EF4444)',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                transform: 'scale(1)',
                opacity: isSubmitting ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.background = 'linear-gradient(to right, #EA580C, #DC2626)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.background = 'linear-gradient(to right, #F97316, #EF4444)'
                }
              }}
            >
              {isSubmitting ? 'Отправляем...' : 'ОСТАВИТЬ ЗАЯВКУ'}
            </button>

            {/* Privacy policy */}
            <p style={{
              fontSize: '0.875rem',
              color: '#6B7280',
              textAlign: 'center'
            }}>
              Нажимая кнопку "ОСТАВИТЬ ЗАЯВКУ", вы даете согласие на обработку персональных данных 
              и соглашаетесь с{' '}
              <a href="/privacy" style={{
                color: '#9333EA',
                textDecoration: 'underline'
              }}>
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm
