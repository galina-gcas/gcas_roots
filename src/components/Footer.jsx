import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openSocial = (platform) => {
    const socialLinks = {
      facebook: 'https://facebook.com/your-page',
      instagram: 'https://instagram.com/your-username',
      youtube: 'https://youtube.com/your-channel',
      telegram: 'https://t.me/your_telegram_username',
      whatsapp: 'https://wa.me/your-phone-number',
      vk: 'https://vk.com/your-page'
    }
    window.open(socialLinks[platform], '_blank')
  }

  return (
    <footer style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '4rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(4, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '2rem'
        }}>
          {/* Logo and social */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>Галина GCAS</h3>
            <p style={{
              color: '#9CA3AF',
              marginBottom: '1.5rem'
            }}>
              Ченнелер, предприниматель, инфлюенсер
            </p>
            
            {/* Social media icons */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <button
                onClick={() => openSocial('facebook')}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1877F2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                📘
              </button>
              <button
                onClick={() => openSocial('instagram')}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#E4405F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                📷
              </button>
              <button
                onClick={() => openSocial('youtube')}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                📺
              </button>
              <button
                onClick={() => openSocial('telegram')}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0088CC'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                ✈️
              </button>
              <button
                onClick={() => openSocial('whatsapp')}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#25D366'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                💬
              </button>
              <button
                onClick={() => openSocial('vk')}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0077FF'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                🔵
              </button>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Разделы</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  style={{
                    color: '#9CA3AF',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  style={{
                    color: '#9CA3AF',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Продукты
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  style={{
                    color: '#9CA3AF',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Услуги
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  style={{
                    color: '#9CA3AF',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Блог
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('consultation')}
                  style={{
                    color: '#9CA3AF',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Консультация
                </button>
              </li>
            </ul>
          </div>

          {/* Legal information */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Юридическая информация</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <a href="/privacy" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Политика ПД
                </a>
              </li>
              <li>
                <a href="/offer" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Оферта
                </a>
              </li>
              <li>
                <a href="/contacts" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Контакты
                </a>
              </li>
              <li>
                <a href="/public-offer" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Контакты</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#9CA3AF' }}>📧</span>
                <a 
                  href="mailto:info@golina.com" 
                  style={{
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  info@golina.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#9CA3AF' }}>📱</span>
                <a 
                  href="https://t.me/your_telegram_username" 
                  style={{
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  Telegram
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#9CA3AF' }}>🌐</span>
                <span style={{ color: '#9CA3AF' }}>Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '3rem',
          paddingTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <p style={{
              color: '#9CA3AF',
              fontSize: '0.875rem'
            }}>
              © 2024 Галина GCAS. Все права защищены.
            </p>
            <p style={{
              color: '#9CA3AF',
              fontSize: '0.875rem'
            }}>
              Создано с любовью и космической энергией ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
