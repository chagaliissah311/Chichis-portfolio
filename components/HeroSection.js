'use client';

import { useEffect, useState } from 'react';

export default function HeroSection({ brand }) {
  const slides = brand.heroSlides ?? [brand.heroImage];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((value) => (value + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero hero-modern">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`hero-slide${index === currentSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="hero-copy">
        <span className="eyebrow">Fashion</span>
        <h1>{brand.heroTitle}</h1>
        <p>{brand.heroDescription}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#portfolio">Recent Photos</a>
          <a className="btn btn-secondary" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}
