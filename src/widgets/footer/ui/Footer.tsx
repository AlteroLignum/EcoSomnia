import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__newsletter">
          <h3 className="footer__newsletter-title">Присоединяйтесь к нашей рассылке</h3>
          <div className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Адрес электронной почты"
              className="footer__newsletter-input"
            />
            <button className="footer__newsletter-button">Подписаться</button>
          </div>
        </div>

        <div className="footer__social">
          <div className="footer__social-icons">
            <a href="#" className="footer__social-link">
              <span className="footer__social-icon">f</span>
            </a>
            <a href="#" className="footer__social-link">
              <span className="footer__social-icon">in</span>
            </a>
            <a href="#" className="footer__social-link">
              <span className="footer__social-icon">t</span>
            </a>
            <a href="#" className="footer__social-link">
              <span className="footer__social-icon">ig</span>
            </a>
            <a href="#" className="footer__social-link">
              <span className="footer__social-icon">yt</span>
            </a>
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-column">
            <h4 className="footer__nav-title">Продукты</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Безопасность</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Истории клиентов</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Цены</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Ресурсы</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Карьера</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Забронировать демонстрацию</a></li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <h4 className="footer__nav-title">Ключевые возможности</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Управление размещением</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Управление доходами</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Управление каналами</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Управление гостями</a></li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <h4 className="footer__nav-title">По ролям</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Генеральный директор</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Директор по доходу</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Генеральный менеджер</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Директор по операциям</a></li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <h4 className="footer__nav-title">По типу</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Отдельные отели</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Группы и сети</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Хостелы</a></li>
              <li className="footer__nav-item"><a href="#" className="footer__nav-link">Альтернативное размещение</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Настройки конфиденциальности</a>
            <a href="#" className="footer__legal-link">Горячая линия</a>
            <a href="#" className="footer__legal-link">Центр доверия</a>
            <a href="#" className="footer__legal-link">Прозрачность поставщиков</a>
            <a href="#" className="footer__legal-link">Авторские права</a>
          </div>

          <div className="footer__certifications">
            <span className="footer__certification">🔒 GDPR Compliant</span>
            <span className="footer__certification">🛡️ SOC 2 Type II</span>
            <span className="footer__certification">🌐 ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;