'use client';

import { useState } from 'react';

interface GalleryItem {
  id: number;
  category: string;
  image?: string;
  emoji: string;
}

export default function Gallery_en() {
  const [activeCategory, setActiveCategory] = useState('all');
   const galleryItems: GalleryItem[] = [
    { id: 1, category: 'paintings', image: '🎨', emoji: '🎨' },
    { id: 2, category: 'sculptures', image: '🗿', emoji: '🗿' },
    { id: 3, category: 'crafts', image: '🧵', emoji: '🧵' },
    { id: 4, category: 'photos', image: '📷', emoji: '📷' },
  ];

  const filterGallery = (category: string) => {
    setActiveCategory(category);
  };

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="gallery">
      <div className="section-label">ARTWORK · GALLERY</div>
      <h2 className="section-title">Art Collection</h2>
      <p className="section-subtitle">Visual narratives of cultural heritage</p>

      <div className="gallery-tabs">
        <button
          className={`gallery-tab ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => filterGallery('all')}
        >
          All
        </button>

        <button
          className={`gallery-tab ${
            activeCategory === 'paintings' ? 'active' : ''
          }`}
          onClick={() => filterGallery('paintings')}
        >
          Paintings
        </button>

        <button
          className={`gallery-tab ${
            activeCategory === 'sculptures' ? 'active' : ''
          }`}
          onClick={() => filterGallery('sculptures')}
        >
          Sculptures
        </button>

        <button
          className={`gallery-tab ${activeCategory === 'crafts' ? 'active' : ''}`}
          onClick={() => filterGallery('crafts')}
        >
          Crafts
        </button>

        <button
          className={`gallery-tab ${activeCategory === 'photos' ? 'active' : ''}`}
          onClick={() => filterGallery('photos')}
        >
          Photos
        </button>
      </div>

      <div className="gallery-grid" id="galleryGrid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-item" data-cat={item.category}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                background:
                  'linear-gradient(135deg, rgba(200,130,10,0.1) 0%, rgba(26,122,110,0.1) 100%)',
              }}
            >
              {item.emoji}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}