'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = ['all', 'runway', 'editorial', 'outdoor', 'studio', 'awards', 'philanthropy'];

export default function GallerySection({ items }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter);

  return (
    <section className="reveal" id="portfolio">
      <div className="section-title">
        <h2>Featured Portfolio</h2>
        <p>Editorial sophistication, runway presence, and community-driven storytelling captured in every frame.</p>
      </div>
      <div className="filter-tabs" role="tablist" aria-label="Photo categories">
        {categories.map((category) => (
          <button key={category} className={`filter-tab ${activeFilter === category ? 'active' : ''}`} onClick={() => setActiveFilter(category)}>
            {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="gallery">
        {filteredItems.map((item) => (
          <figure key={item.src} className="gallery-item" onClick={() => setActiveImage(item)}>
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="overlay">
              <div>
                <strong>{item.title}</strong>
                <span>{item.category}</span>
              </div>
            </div>
          </figure>
        ))}
      </div>
      {activeImage && (
        <div className="lightbox open" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="lightbox-caption">
              <strong>{activeImage.title}</strong>
              <span>{activeImage.category}</span>
            </div>
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

