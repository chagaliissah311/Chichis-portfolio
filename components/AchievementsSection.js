'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AchievementsSection({ achievements, sectionTitle, sectionDescription }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section className="reveal why-section" id="achievements">
      <div className="section-title">
        <h2>{sectionTitle || 'Why you should choose me'}</h2>
        <p>{sectionDescription || 'Experience, mentorship, and professionalism that brings every runway moment to life.'}</p>
      </div>
      <div className="achievements">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="achievement-card"
            onClick={() => setSelectedAchievement(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedAchievement(item);
              }
            }}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                className="achievement-card-image"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            ) : null}
            <div className="achievement-card-inner">
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="achievement-link">Know more</span>
            </div>
          </article>
        ))}
      </div>

      {selectedAchievement ? (
        <div className="achievement-modal" onClick={() => setSelectedAchievement(null)}>
          <div className="achievement-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="achievement-modal-close" onClick={() => setSelectedAchievement(null)} aria-label="Close achievement details">
              ×
            </button>
            <Image
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              width={600}
              height={500}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
            <div className="achievement-modal-body">
              <span className="tag">{selectedAchievement.tag}</span>
              <h3>{selectedAchievement.title}</h3>
              <p>{selectedAchievement.detail}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
