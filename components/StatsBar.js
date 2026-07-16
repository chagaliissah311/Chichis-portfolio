export default function StatsBar({ stats }) {
  return (
    <section className="stats-bar reveal" id="stats">
      <div className="stats-inner">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
