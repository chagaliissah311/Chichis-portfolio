import Image from 'next/image';

export default function AboutSection({ about, aboutImage, aboutImages }) {
  return (
    <section className="reveal about-section" id="about">
      <div className="section-title">
        <h2>{about.title}</h2>
        <p>{about.intro}</p>
      </div>
      <div className="about-grid modern-about">
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
        <div className="about-visual-grid">
          <div className="about-image-large">
            <Image
              src={aboutImage}
              alt="Emmaculate Chichi portrait"
              width={600}
              height={760}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="about-image-stack">
            {aboutImages?.map((src, index) => (
              <div key={src} className={`about-image-small about-image-small-${index + 1}`}>
                <Image
                  src={src}
                  alt={`Emmaculate portfolio ${index + 1}`}
                  width={280}
                  height={280}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
