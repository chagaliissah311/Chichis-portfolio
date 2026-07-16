'use client';

import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import GallerySection from '../components/GallerySection';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import VideoSection from '../components/VideoSection';
import { getSiteContent } from '../lib/content';

export const dynamic = 'force-static';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const content = getSiteContent();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setRevealed(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    elements.forEach((element) => element.classList.add('visible'));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`preloader ${isLoading ? '' : 'hidden'}`}>
        <div className="ring" />
      </div>

      <div className="page-shell">
        <header className={revealed ? 'scrolled' : ''}>
          <nav>
            <a href="#home" className="brand">{content.brand.name}</a>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">☰</button>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#achievements" onClick={() => setMenuOpen(false)}>Press</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Book</a>
            </div>
          </nav>
        </header>

        <main id="home">
          <HeroSection brand={content.brand} slides={content.heroSlides} />
          <StatsBar stats={content.stats} />
          <GallerySection items={content.gallery} />
          <VideoSection video={content.video} />
          <AboutSection about={content.about} aboutImage={content.aboutImage} />
          <AchievementsSection achievements={content.achievements} />
          <ContactSection contact={content.contact} />
        </main>

        <footer>
          <div className="footer-inner">
            <div>© 2026 Immaculate Chichi. All rights reserved.</div>
            <div className="footer-links">
              <a href="#portfolio">Portfolio</a>
              <a href="#about">About</a>
              <a href="#contact">Booking</a>
              <a className="back-top" href="#home">Back to top</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
