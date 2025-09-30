import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" style={{
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
            Обо мне
          </h2>
        </div>

        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ fontSize: '1.125rem', color: '#374151', lineHeight: 1.75 }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Родилась на Земле, пришла с γ Кассиопеи.
              Я всегда выделялась. Но только
              в определенный период жизни я поняла,
              что создана для чего-то большего.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Тогда я открыла в себе способности
              к ченнелингу: считывать энергии
              и информацию с дальних и ближних пространств.
            </p>
            
            <p>
              Да, именно так я узнала, где есть мой источник.
            </p>
          </div>
        </div>

        {/* Stats or highlights */}
        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '2rem'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3)',
            borderRadius: '0.75rem'
          }}>
            <div style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#9333EA',
              marginBottom: '0.5rem'
            }}>10+</div>
            <div style={{ color: '#374151' }}>Лет опыта в ченнелинге</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(to bottom right, #FCE7F3, #FED7AA)',
            borderRadius: '0.75rem'
          }}>
            <div style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#EC4899',
              marginBottom: '0.5rem'
            }}>1000+</div>
            <div style={{ color: '#374151' }}>Успешных консультаций</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(to bottom right, #FED7AA, #F3E8FF)',
            borderRadius: '0.75rem'
          }}>
            <div style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#F97316',
              marginBottom: '0.5rem'
            }}>50+</div>
            <div style={{ color: '#374151' }}>Бизнес-проектов</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
