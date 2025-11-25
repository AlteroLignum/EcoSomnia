'use client'
import { useEffect, useRef } from 'react';
import { BRAND_LOGOS } from '@/shared/data/brand-logos';
import './BrandCarousel.scss';

const BrandCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const clone = container.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    container.style.animation = 'scroll 20s linear infinite';

    return () => {
      if (container) {
        container.style.animation = '';
      }
    };
  }, []);

  return (
    <div className="brand-carousel">
      <div className="brand-carousel__container" ref={containerRef}>
        {BRAND_LOGOS.map((logo, index) => (
          <div key={index} className="brand-carousel__item">
            <img
              src={logo.src}
              alt={logo.alt}
              className="brand-carousel__logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;