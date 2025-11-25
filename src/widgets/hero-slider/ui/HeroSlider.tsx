'use client'
import { useState, useEffect } from 'react';
import { HERO_SLIDES } from '@/shared/data/hero-slides';
import './HeroSlider.scss';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div className="hero-slider__container">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`hero-slider__slide ${index === currentIndex ? 'hero-slider__slide--active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-slider__image"
            />
            <div className="hero-slider__label">
              {slide.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;