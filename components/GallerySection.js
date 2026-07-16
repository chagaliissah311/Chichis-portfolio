'use client';

import { useState } from 'react';

const categories = ['all', 'runway', 'editorial', 'outdoor', 'studio', 'awards', 'philanthropy'];
const layoutClasses = ['tall', 'wide', 'featured', 'stacked'];

function getLayoutClass(index) {
  return layoutClasses[index % layoutClasses.length];
}

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
        {filteredItems.map((item, index) => {
          const layoutClass = getLayoutClass(index);
          return (
            <figure key={`${item.src}-${index}`} className={`gallery-item ${layoutClass}`} onClick={() => setActiveImage(item)}>
              <img
                src={item.src}
                alt={item.title}
                className="gallery-image"
              />
              <div className="overlay">
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                </div>
              </div>
            </figure>
          );
        })}
      </div>
      {activeImage && (
        <div className="lightbox open" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="lightbox-image"
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

