'use client';

import { useEffect, useState } from 'react';

const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'polaroids', label: 'Polaroids' },
];

const layoutClasses = [
  'card-small',
  'card-small',
  'card-small',
  'card-small',
  'card-large',
  'card-small',
  'card-small',
  'card-small',
  'card-small',
];

function getLayoutClass(index) {
  return layoutClasses[index % layoutClasses.length];
}

function normalizeCategory(item) {
  const category = (item.category || '').toLowerCase();

  if (['editorial', 'runway', 'fashion', 'fashion-week', 'beauty'].includes(category)) {
    return 'editorial';
  }

  if (['commercial', 'campaign', 'brand', 'advertising', 'studio'].includes(category)) {
    return 'commercial';
  }

  if (['polaroid', 'polaroids', 'film', 'instant'].includes(category)) {
    return 'polaroids';
  }

  return 'editorial';
}

export default function GallerySection({ items }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = items.map((item, index) => ({
    ...item,
    normalizedCategory: normalizeCategory(item),
    layoutClass: getLayoutClass(index),
  }));

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.normalizedCategory === activeFilter);

  useEffect(() => {
    document.body.style.overflow = activeImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  const openLightbox = (item, index) => {
    setActiveImage(item);
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveImage(null);
    setActiveIndex(0);
  };

  const showPrevious = () => {
    if (!filteredItems.length) return;
    const nextIndex = activeIndex > 0 ? activeIndex - 1 : filteredItems.length - 1;
    setActiveIndex(nextIndex);
    setActiveImage(filteredItems[nextIndex]);
  };

  const showNext = () => {
    if (!filteredItems.length) return;
    const nextIndex = activeIndex < filteredItems.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
    setActiveImage(filteredItems[nextIndex]);
  };

  return (
    <section className="reveal" id="portfolio">
      <div className="section-title">
        <h2>Featured Portfolio</h2>
        <p>Curated fashion storytelling with a refined editorial rhythm, generous spacing, and cinematic presence.</p>
      </div>
      <div className="filter-tabs" role="tablist" aria-label="Photo categories">
        {categoryOptions.map((category) => (
          <button
            key={category.value}
            className={`filter-tab ${activeFilter === category.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="gallery">
        {filteredItems.map((item, index) => (
          <figure key={`${item.src}-${index}`} className={`gallery-item ${item.layoutClass}`} onClick={() => openLightbox(item, index)}>
            <img src={item.src} alt={item.title} className="gallery-image" />
            <div className="overlay">
              <div>
                <strong>{item.title}</strong>
                <span>{item.normalizedCategory}</span>
              </div>
            </div>
          </figure>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox open" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">✕</button>
          <button className="lightbox-nav lightbox-nav-prev" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous image">‹</button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.title} className="lightbox-image" />
            <div className="lightbox-caption">
              <strong>{activeImage.title}</strong>
              <span>{activeImage.normalizedCategory}</span>
              {activeImage.description ? <p>{activeImage.description}</p> : null}
            </div>
          </div>
          <button className="lightbox-nav lightbox-nav-next" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next image">›</button>
        </div>
      )}
    </section>
  );
}

