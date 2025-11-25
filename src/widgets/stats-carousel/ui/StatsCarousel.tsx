import './StatsCarousel.scss';

const StatsCarousel = () => {
  const stats = [
    {
      value: '45%',
      label: 'увеличение прямых бронирований...',
      icon: '📈'
    },
    {
      value: '39%',
      label: 'увеличение RevPAR...',
      icon: '📊'
    },
    {
      value: '70%',
      label: 'среднее увеличение RevPAG...',
      icon: '💡'
    }
  ];

  return (
    <section className="stats-carousel">
      <div className="stats-carousel__container">
        <h2 className="stats-carousel__title">Почему более 12 500 клиентов любят EcoSomnia</h2>
        <div className="stats-carousel__items">
          {stats.map((stat, index) => (
            <div key={index} className="stats-carousel__item">
              <div className="stats-carousel__icon">{stat.icon}</div>
              <div className="stats-carousel__value">{stat.value}</div>
              <div className="stats-carousel__label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="stats-carousel__navigation">
          <button className="stats-carousel__nav-btn stats-carousel__nav-btn--prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="stats-carousel__dots">
            <button className="stats-carousel__dot stats-carousel__dot--active"></button>
            <button className="stats-carousel__dot"></button>
            <button className="stats-carousel__dot"></button>
          </div>
          <button className="stats-carousel__nav-btn stats-carousel__nav-btn--next">
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