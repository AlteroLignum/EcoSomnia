'use client'
import './StatsCarousel.scss';
import { useState } from 'react';
import { statsData } from '@/shared/data/stats';

const StatsCarousel = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(statsData.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentPage(index);
  };

  // Get the stats for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, statsData.length);
  const currentStats = statsData.slice(startIndex, endIndex);

  return (
    <section className="stats-carousel">
      <div className="stats-carousel__container">
        <h2 className="stats-carousel__title">Почему более 12 500 клиентов любят EcoSomnia</h2>
        <div className="stats-carousel__items">
          {currentStats.map((stat) => (
            <div key={stat.id} className="stats-carousel__item">
              <div className="stats-carousel__text">{stat.text}</div>
            </div>
          ))}
        </div>
        <div className="stats-carousel__navigation">
          <button
            className="stats-carousel__nav-btn stats-carousel__nav-btn--prev"
            onClick={prevSlide}
            aria-label="Предыдущая страница статистики"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="stats-carousel__dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`stats-carousel__dot ${index === currentPage ? 'stats-carousel__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к странице ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            className="stats-carousel__nav-btn stats-carousel__nav-btn--next"
            onClick={nextSlide}
            aria-label="Следующая страница статистики"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsCarousel;