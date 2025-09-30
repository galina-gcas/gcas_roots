import React from 'react'

const BlogSection = () => {
  const openBlogPost = () => {
    // Замените на реальную ссылку на статью блога
    window.open('/blog/augmented-fantasy', '_blank')
  }

  const blogPosts = [
    {
      id: 1,
      title: "Дополненная фантазия о рождении нового мира",
      date: "12.04.2023",
      excerpt: "Размышления о том, как технологии и духовность могут объединиться для создания нового мира",
      image: "🌸",
      category: "Философия"
    },
    {
      id: 2,
      title: "Астрология в эпоху искусственного интеллекта",
      date: "28.03.2023",
      excerpt: "Как современные технологии помогают глубже понять древние знания о звездах",
      image: "🤖",
      category: "Астрология"
    },
    {
      id: 3,
      title: "Энергетические практики для предпринимателей",
      date: "15.03.2023",
      excerpt: "Практические советы по гармонизации энергии для успеха в бизнесе",
      image: "💼",
      category: "Бизнес"
    }
  ]

  return (
    <section id="blog" style={{
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
            Блог
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6B7280',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Размышления о духовности, технологиях и пути к новому миру
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '2rem'
        }}>
          {blogPosts.map((post) => (
            <article key={post.id} style={{
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
              {/* Blog post image */}
              <div style={{
                height: '12rem',
                background: 'linear-gradient(to bottom right, #F3E8FF, #FCE7F3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '4rem' }}>{post.image}</div>
                {/* Category badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px'
                }}>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#9333EA'
                  }}>{post.category}</span>
                </div>
                {/* Date */}
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
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#6B7280'
                  }}>{post.date}</span>
                </div>
                {/* Cosmic effect overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom right, rgba(167, 139, 250, 0.1), rgba(244, 114, 182, 0.1))'
                }}></div>
              </div>

              {/* Blog post content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  {post.title}
                </h3>
                <p style={{
                  color: '#6B7280',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>
                  {post.excerpt}
                </p>
                
                {/* Read more button */}
                <button
                  onClick={openBlogPost}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(to right, #9333EA, #EC4899)',
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
                    e.target.style.background = 'linear-gradient(to right, #7C3AED, #DB2777)'
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #9333EA, #EC4899)'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  Читать далее
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View all posts button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button style={{
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
            padding: '0.75rem 2rem',
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
          }}>
            Все статьи блога
          </button>
        </div>

        {/* Blog stats */}
        <div style={{
          marginTop: '4rem',
          background: 'linear-gradient(to right, #F3E8FF, #FCE7F3)',
          borderRadius: '1rem',
          padding: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#9333EA',
                marginBottom: '0.5rem'
              }}>50+</div>
              <div style={{ color: '#6B7280' }}>Статей опубликовано</div>
            </div>
            <div>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#EC4899',
                marginBottom: '0.5rem'
              }}>25K+</div>
              <div style={{ color: '#6B7280' }}>Читателей в месяц</div>
            </div>
            <div>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#F97316',
                marginBottom: '0.5rem'
              }}>100K+</div>
              <div style={{ color: '#6B7280' }}>Просмотров статей</div>
            </div>
            <div>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#9333EA',
                marginBottom: '0.5rem'
              }}>4.8</div>
              <div style={{ color: '#6B7280' }}>Средняя оценка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
