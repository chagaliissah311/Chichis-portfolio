'use client';

import { useState } from 'react';

export default function AchievementsSection({ achievements, summary, sectionTitle, sectionDescription }) {
  const [activeAchievement, setActiveAchievement] = useState(null);

  const openAchievement = (achievement) => {
    setActiveAchievement(achievement);
  };

  const closeAchievement = () => {
    setActiveAchievement(null);
  };

  const handleAchievementKey = (event, achievement) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openAchievement(achievement);
    }
  };

  return (
    <section className="reveal why-section" id="achievements">
      <div className="section-title">
        <h2>{sectionTitle || 'Why you should choose me'}</h2>
        <p>{sectionDescription || 'Experience, mentorship, and professionalism that brings every runway moment to life.'}</p>
      </div>
      {summary?.sections?.length ? (
        <div className="achievement-summary">
          {summary.sections.map((section) => (
            <div key={section.title} className="achievement-summary-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
      <div className="achievements achievements-with-images">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="achievement-card achievement-card-image"
            role="button"
            tabIndex={0}
            onClick={() => openAchievement(item)}
            onKeyDown={(event) => handleAchievementKey(event, item)}
          >
            {item.image ? (
              <div className="achievement-image-wrap">
                <img src={item.image} alt={item.title} />
              </div>
            ) : null}
            <div className="achievement-card-inner">
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              {item.text ? <p>{item.text}</p> : null}
            </div>
          </article>
        ))}
      </div>

      {activeAchievement ? (
        <div className="lightbox open" onClick={closeAchievement} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={(event) => { event.stopPropagation(); closeAchievement(); }} aria-label="Close achievement image">✕</button>
          <button className="lightbox-nav lightbox-nav-prev" onClick={(event) => event.stopPropagation() && null} aria-hidden="true" tabIndex={-1} style={{ display: 'none' }}>
            ‹
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={activeAchievement.image} alt={activeAchievement.title} className="lightbox-image" />
            <div className="lightbox-caption">
              <strong>{activeAchievement.title}</strong>
              <span>{activeAchievement.tag}</span>
              {activeAchievement.text ? <p>{activeAchievement.text}</p> : null}
            </div>
          </div>
          <button className="lightbox-nav lightbox-nav-next" onClick={(event) => event.stopPropagation() && null} aria-hidden="true" tabIndex={-1} style={{ display: 'none' }}>
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}
