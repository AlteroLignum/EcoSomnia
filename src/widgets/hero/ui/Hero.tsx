import HeroSlider from '@/widgets/hero-slider';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__tag">Система управления гостиницами</div>
          <h1 className="hero__headline">
            Упрощайте операции. Повышайте качество сервиса. Увеличивайте выручку.
          </h1>
          <p className="hero__subtext">
            EcoSomnia — это облачная система управления, которой доверяют более 12 500 объектов по всему миру...
          </p>
          <button className="hero__demo-button">Забронировать демонстрацию</button>
          <p className="hero__stat-text">
            Наша система управления гостиничным бизнесом обеспечивает работу более 12 500 лучших брендов гостеприимства в мире.
          </p>
          <a href="#" className="hero__customer-link">Посмотреть наших клиентов</a>
        </div>
        <div className="hero__image-container">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;