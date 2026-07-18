'use client';

export default function AchievementsSection({ achievements, summary, sectionTitle, sectionDescription }) {
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
          <article key={item.title} className="achievement-card achievement-card-image">
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
    </section>
  );
}
