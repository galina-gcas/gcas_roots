import React from 'react'

const MediaSection = () => {
  const openArticle = () => {
    // Замените на реальную ссылку на статью
    window.open('https://zen.yandex.ru/media/your-article-link', '_blank')
  }

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: '«Звёздная душа» и цифровой креатор: творчество и нейросети',
        text: 'Статья о Галине GCAS в Яндекс.Дзен',
        url: 'https://zen.yandex.ru/media/your-article-link'
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText('https://zen.yandex.ru/media/your-article-link')
      alert('Ссылка скопирована в буфер обмена!')
    }
  }

  return (
    <section id="media" style={{
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
            В СМИ пишут
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left content */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                fontSize: '1.125rem',
                color: '#374151',
                lineHeight: 1.75,
                marginBottom: '1.5rem'
              }}>
                Я — Зерокодер, создатель контента с аудиторией более 100,000 подписчиков. 
                Моя миссия — донести знания о космосе, астрологии и духовном развитии 
                до широкой аудитории через современные цифровые платформы.
              </p>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#374151',
                lineHeight: 1.75,
                marginBottom: '1.5rem'
              }}>
                В своих материалах я сочетаю древние знания с современными технологиями, 
                помогая людям понять их место во Вселенной и раскрыть свой потенциал 
                в эпоху цифровых преобразований.
              </p>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#374151',
                lineHeight: 1.75
              }}>
                Мои статьи и видео набирают тысячи просмотров, а отзывы читателей 
                подтверждают эффективность моих методов и подходов к духовному развитию.
              </p>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '2rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3)',
                borderRadius: '0.75rem'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#9333EA'
                }}>100K+</div>
                <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>Подписчиков</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(to bottom right, #FCE7F3, #FED7AA)',
                borderRadius: '0.75rem'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#EC4899'
                }}>500+</div>
                <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>Статей</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(to bottom right, #FED7AA, #F3E8FF)',
                borderRadius: '0.75rem'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#F97316'
                }}>1M+</div>
                <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>Просмотров</div>
              </div>
            </div>
          </div>

          {/* Right content - Article card */}
          <div style={{
            display: 'flex',
            justifyContent: window.innerWidth >= 1024 ? 'flex-end' : 'center'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              padding: '1.5rem',
              maxWidth: '28rem',
              width: '100%'
            }}>
              {/* Article header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                  Яндекс.Дзен | 22 октября 2022
                </div>
              </div>

              {/* Article title */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: '0.75rem',
                lineHeight: 1.3
              }}>
                «Звёздная душа» и цифровой креатор: творчество и нейросети
              </h3>

              {/* Article description */}
              <p style={{
                color: '#6B7280',
                fontSize: '0.875rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                Как современные технологии помогают раскрыть творческий потенциал 
                и создать уникальный контент, основанный на духовных знаниях и 
                космической мудрости.
              </p>

              {/* Article buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={openArticle}
                  style={{
                    flex: 1,
                    backgroundColor: '#14B8A6',
                    color: 'white',
                    fontWeight: '600',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0D9488'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#14B8A6'}
                >
                  Читать статью
                </button>
                <button
                  onClick={shareArticle}
                  style={{
                    flex: 1,
                    border: '1px solid #D1D5DB',
                    color: '#6B7280',
                    fontWeight: '600',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Поделиться
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional media mentions */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ color: '#6B7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Мои материалы также публикуются в других изданиях
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            opacity: 0.6,
            flexWrap: 'wrap'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#9CA3AF' }}>Яндекс.Дзен</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#9CA3AF' }}>Telegram</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#9CA3AF' }}>YouTube</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#9CA3AF' }}>Instagram</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaSection
