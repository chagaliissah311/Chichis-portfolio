'use client';

import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import ModelStatsSection from '../components/ModelStatsSection';
import RunwaySection from '../components/RunwaySection';
import ProjectsSection from '../components/ProjectsSection';
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
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Recent Photos</a>
              <a href="#achievements" onClick={() => setMenuOpen(false)}>Why Choose Me</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        </header>

        <main id="home">
          <HeroSection brand={content.brand} />
          <AboutSection about={content.about} aboutImage={content.aboutImage} aboutImages={content.aboutImages} />
          <AchievementsSection
            achievements={content.achievements}
            summary={content.achievementsSummary}
            sectionTitle="Why you should choose me"
            sectionDescription="A confident, experienced woman in fashion who brings insight, fairness, and inspiration to every judging panel and runway moment."
          />
          <GallerySection items={content.gallery} />
          <RunwaySection runway={content.runway} />
          <ProjectsSection projects={content.projects} />
          <VideoSection video={content.video} />
          <EducationSection education={content.education} graphicImage={content.educationGraphic} />
          <ModelStatsSection stats={content.modelStats} languageStats={content.languageStats} />
          <ContactSection contact={content.contact} />
        </main>

        <footer>
          <div className="footer-inner">
            <div>© 2026 Emmaculate Chichi. All rights reserved.</div>
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
