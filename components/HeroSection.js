'use client';

import Image from 'next/image';

export default function HeroSection({ brand }) {
  return (
    <section className="hero hero-modern">
      <div className="hero-copy">
        <span className="eyebrow">Fashion</span>
        <h1>{brand.heroTitle}</h1>
        <p>{brand.heroDescription}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#portfolio">Recent Photos</a>
          <a className="btn btn-secondary" href="#contact">Contact</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <Image
            src={brand.heroImage}
            alt={brand.heroTitle}
            width={760}
            height={950}
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-badge">Judge · Model Trainer</div>
        </div>
      </div>
    </section>
  );
}
