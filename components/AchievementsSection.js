'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AchievementsSection({ achievements }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section className="reveal" id="achievements">
      <div className="section-title">
        <h2>Achievements & Press</h2>
        <p>Milestones that reflect both artistic excellence and influence beyond the runway.</p>
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
              <span className="achievement-link">Tap to view story</span>
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
              {selectedAchievement.highlights?.length ? (
                <ul>
                  {selectedAchievement.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
