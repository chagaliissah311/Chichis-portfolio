import Image from 'next/image';

export default function RunwaySection({ runway }) {
  if (!runway) return null;

  return (
    <section className="reveal runway-section" id="runway">
      <div className="section-title">
        <h2>{runway.title}</h2>
        <p>{runway.subtitle}</p>
      </div>

      <div className="runway-layout">
        <div className="runway-copy">
          <p>{runway.description}</p>
          {runway.highlights?.length ? (
            <ul className="runway-highlights">
              {runway.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="runway-gallery">
          {runway.items?.map((item) => (
            <div key={item.src} className="runway-card">
              <Image
                src={item.src}
                alt={item.title}
                width={520}
                height={360}
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="runway-card-content">
                <h3>{item.title}</h3>
                {item.category ? <span>{item.category}</span> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
