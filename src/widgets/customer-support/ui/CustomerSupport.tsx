import './CustomerSupport.scss';
import Image from 'next/image';

const CustomerSupport = () => {
  return (
    <section className="customer-support">
      <div className="customer-support__container">
        <div className="customer-support__content">
          <h2 className="customer-support__title">Поддержка клиентов, такой как она должна быть</h2>
          <p className="customer-support__text">
            Мы предоставляем круглосуточную поддержку, доступную более чем на 15 языках, с нашим AI-чат-ботом, который может ответить на самые распространенные вопросы, и живой командой экспертов, готовых помочь с более сложными вопросами.
          </p>
          <div className="customer-support__chat">
            <div className="customer-support__chat-bubble customer-support__chat-bubble--question">
              Могу ли я рассчитывать на завтрак при заезде?
            </div>
            <div className="customer-support__chat-bubble customer-support__chat-bubble--answer">
              Конечно! Подробнее об этом можно прочитать здесь →
            </div>
          </div>
        </div>
        <div className="customer-support__image">
          <Image
            src="/images/customersupport/customer_support.webp"
            alt="Сотрудник поддержки"
            width={380}
            height={420}
            className="customer-support__agent-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;