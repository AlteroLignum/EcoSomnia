import './Header.scss';

const Header = () => {

  return (
    <header className="header" >
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-text">ECOSOMNIA</span>
        </div>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">Платформа</a>
              <span className="header__menu-arrow">▾</span>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">Решения</a>
              <span className="header__menu-arrow">▾</span>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">Цены</a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">Истории клиентов</a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">Ресурсы</a>
              <span className="header__menu-arrow">▾</span>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__language">RU</button>
          <button className="header__search">
            <svg className="header__search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.0625 14.0625L10.3125 10.5M12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="header__login">Войти</button>
          <button className="header__demo">Забронировать демонстрацию</button>
        </div>
      </div>
    </header>
  );
};

export default Header;