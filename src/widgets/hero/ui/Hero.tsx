import HeroSlider from '@/widgets/hero-slider';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className='hero__main-section'>
            <div className="hero__content">
              <div className="hero__tag">Система управления гостиницами</div>
              <h1 className="hero__headline">
                Упрощайте операции. Повышайте качество сервиса. Увеличивайте выручку.
              </h1>
              <p className="hero__subtext">
                EcoSomnia — это облачная система управления, которой доверяют более 12 500 клиентов по всему миру. Автоматизируйте рутинные задачи, улучшайте пользовательский опыт с помощью ИИ и увеличивайте доход с вашего курорта - все с помощью одной платформы.
              </p>
              <button className="hero__demo-button">Забронировать демонстрацию</button>
            </div>
            <div className="hero__image-container">
              <HeroSlider />
            </div>
        </div>
        <div>
          <p className="hero__stat-text">
            Наша система управления гостиничным бизнесом обеспечивает работу более 12 500 лучших брендов гостеприимства в мире.
          </p>
          <a href="#" className="hero__customer-link">Посмотреть наших клиентов</a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;