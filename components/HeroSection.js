'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection({ brand, slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div key={slide} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
            <Image
              src={slide}
              alt={`Portfolio slide ${index + 1}`}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <div className="hero-content">
        <h1>{brand.heroTitle}</h1>
        <div className="subtitle">{brand.heroSubtitle}</div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#portfolio">View Portfolio</a>
          <a className="btn btn-secondary" href="#contact">Book a Shoot</a>
        </div>
      </div>
      <a className="scroll-indicator" href="#stats" aria-label="Scroll to explore">
        <span>Explore</span>
        <div className="mouse" />
      </a>
    </section>
  );
}
