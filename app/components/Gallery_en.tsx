'use client';

import { useState } from 'react';

interface GalleryItem {
  id: number;
  category: 'gaan' | 'performance' | 'photos';
  image: string;
  title?: string;
}

export default function Gallery_en() {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'gaan' | 'performance' | 'photos'
  >('all');

  const galleryItems: GalleryItem[] = [
    // 🎨 gaan
    { id: 1, category: 'gaan', image: '/images/gaan/gaan1.jpg', title: 'Gaan 1' },
    { id: 2, category: 'gaan', image: '/images/gaan/gaan2.jpg', title: 'Gaan 2' },
    { id: 3, category: 'gaan', image: '/images/gaan/gaan3.jpg', title: 'Gaan 3' },
    { id: 4, category: 'gaan', image: '/images/gaan/gaan4.jpg', title: 'Gaan 4' },

    // 🗿 performance
    { id: 5, category: 'performance', image: '/images/performance/performance1.jpg', title: 'Performance 1' },
    { id: 6, category: 'performance', image: '/images/performance/performance2.jpg', title: 'Performance 2' },
    { id: 7, category: 'performance', image: '/images/performance/performance3.jpg', title: 'Performance 3' },
    { id: 8, category: 'performance', image: '/images/performance/performance4.jpg', title: 'Performance 4' },

    // 📷 photos
    { id: 13, category: 'photos', image: '/images/photo/photo1.jpg', title: 'Photo 1' },
    { id: 14, category: 'photos', image: '/images/photo/photo2.jpg', title: 'Photo 2' },
    { id: 15, category: 'photos', image: '/images/photo/photo3.jpg', title: 'Photo 3' },
    { id: 16, category: 'photos', image: '/images/photo/photo4.jpg', title: 'Photo 4' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const formatLabel = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <section 
      id="gallery" 
      className="relative overflow-hidden"
      style={{ padding: '60px 20px', background: 'transparent' }}
    >
      {/* Subtle Watermark - Same as other sections */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/images/watermark/watermark3.jpg')`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '260px',
          opacity: 0.08,
          filter: 'grayscale(100%) brightness(1.5)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>GALLERY</h2>
          <p style={{ opacity: 0.7 }}>Visual narratives of cultural heritage</p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 30,
          }}
        >
          {['all', 'gaan', 'performance', 'photos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border:
                  activeCategory === cat
                    ? '1px solid #D4A843'
                    : '1px solid #ccc',
                cursor: 'pointer',
                background: 'transparent',
                color: activeCategory === cat ? '#D4A843' : '#111',
                transition: '0.3s',
                fontWeight: activeCategory === cat ? 600 : 400,
                boxShadow:
                  activeCategory === cat
                    ? '0 0 10px rgba(212, 168, 67, 0.35)'
                    : 'none',
              }}
            >
              {formatLabel(cat)}
            </button>
          ))}
        </div>

        {/* ========================= */}
        {/* ALL → CAROUSEL VIEW */}
        {/* ========================= */}
        {activeCategory === 'all' ? (
          <div
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: 10,
              scrollSnapType: 'x mandatory',
            }}
          >
            {galleryItems.map((item) => (
              <div
                key={item.id}
                style={{
                  minWidth: '280px',
                  height: '360px',
                  position: 'relative',
                  flex: '0 0 auto',
                  borderRadius: 16,
                  overflow: 'hidden',
                  scrollSnapAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title || item.category}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#000',
                    padding: '10px'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    padding: '10px',
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                    color: '#fff',
                    fontSize: '14px',
                  }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ========================= */
          /* GRID VIEW FOR CATEGORIES */
          /* ========================= */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, max-content))',
              gap: '16px',
              justifyContent: 'center'
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'inline-block',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                  background: '#111'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title || item.category}
                  style={{
                    width: 'auto',
                    height: '220px',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />

                <div
                  style={{
                    padding: '6px 10px',
                    color: '#fff',
                    fontSize: '13px',
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.6)'
                  }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}