import './GetStarted.scss';

const GetStarted = () => {
  const steps = [
    {
      number: '01',
      title: 'Запланируйте 30-минутный звонок',
      description: 'Поговорите с одним из наших экспертов, чтобы определить, как EcoSomnia может помочь вашему бизнесу.'
    },
    {
      number: '02',
      title: 'Получите персональную демонстрацию',
      description: 'Наша команда покажет возможности EcoSomnia, адаптированные к вашим уникальным требованиям.'
    },
    {
      number: '03',
      title: 'Экспертное введение в систему',
      description: 'Наша команда по внедрению поможет вам настроить и запустить систему за 30 дней.'
    }
  ];

  return (
    <section className="get-started">
      <div className="get-started__container">
        <div className="get-started__image">
          {/* Placeholder for tablet image */}
          <div className="get-started__tablet">Таблица с приложением отеля</div>
        </div>
        <div className="get-started__content">
          <h2 className="get-started__title">Начните работу за три простых шага</h2>
          <div className="get-started__steps">
            {steps.map((step, index) => (
              <div key={index} className="get-started__step">
                <div className="get-started__step-number">{step.number}</div>
                <h3 className="get-started__step-title">{step.title}</h3>
                <p className="get-started__step-description">{step.description}</p>
              </div>
            ))}
          </div>
          <button className="get-started__button">Начать работу</button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;