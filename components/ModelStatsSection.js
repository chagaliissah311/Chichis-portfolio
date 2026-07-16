export default function ModelStatsSection({ stats, languageStats }) {
  return (
    <section className="reveal model-stats-section" id="model-stats">
      <div className="section-title">
        <h2>Model Statistics</h2>
        <p>Strength, presence, and language fluency for every runway and brand engagement.</p>
      </div>
      <div className="model-stats-grid">
        <div className="model-stats-card">
          {stats.map((item) => (
            <div key={item.label} className="model-stat-row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <div className="language-chart">
          <h3>Language Fluency</h3>
          <div className="language-bars">
            {languageStats.map((lang) => (
              <div key={lang.name} className="language-bar">
                <span>{lang.name}</span>
                <div className="language-fill" style={{ width: `${lang.level}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
