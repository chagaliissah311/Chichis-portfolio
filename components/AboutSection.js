import Image from 'next/image';

export default function AboutSection({ about, aboutImage }) {
  return (
    <section className="reveal" id="about">
      <div className="section-title">
        <h2>{about.title}</h2>
        <p>{about.intro}</p>
      </div>
      <div className="about-grid">
        <div className="about-image">
          <Image
            src={aboutImage}
            alt="Immaculate Chichi in a polished editorial portrait"
            width={500}
            height={600}
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <div className="about-copy">
          <p>{about.body1}</p>
          <p>{about.body2}</p>
          {about.highlights?.length ? (
            <div className="profile-panel">
              <h3>Professional Profile</h3>
              <ul>
                {about.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ) : null}
          <div className="quote">“{about.quote}”</div>
        </div>
      </div>
    </section>
  );
}
