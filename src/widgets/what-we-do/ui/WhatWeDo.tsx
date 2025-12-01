import './WhatWeDo.scss';
import { whatWeDoData } from '@/shared/data/whatwedo';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="what-we-do__container">
        <h2 className="what-we-do__title">Посмотрите, что EcoSomnia может сделать для вас</h2>
        <div className="what-we-do__cards">
          {whatWeDoData.map((item) => (
            <div key={item.id} className="what-we-do__card">
              <div className="what-we-do__image-container">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="what-we-do__image"
                />
                <div className="what-we-do__image-overlay">
                  <h3 className="what-we-do__card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;