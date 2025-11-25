import './WhatWeDo.scss';

const WhatWeDo = () => {
  const options = [
    { title: 'Отели', icon: '🏨' },
    { title: 'Группы и сети', icon: '🏢' },
    { title: 'Маленькие отели', icon: '🏩' },
    { title: 'Хостелы', icon: '🛏️' },
    { title: 'Альтернативное размещение', icon: '🏝️' }
  ];

  return (
    <section className="what-we-do">
      <div className="what-we-do__container">
        <h2 className="what-we-do__title">Посмотрите, что EcoSomnia может сделать для вас</h2>
        <div className="what-we-do__cards">
          {options.map((option, index) => (
            <div key={index} className="what-we-do__card">
              <div className="what-we-do__icon">{option.icon}</div>
              <h3 className="what-we-do__card-title">{option.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;