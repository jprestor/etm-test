import React from 'react';
import Link from 'react-router-dom';

import '../../assets/styles/style.scss';
import './page-header.scss';
import brandLogo from '../../assets/images/brand.svg';

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="container">
        <ul className="page-header__nav">
          <li className="page-header__nav-item  page-header__nav-item--brand">
            <img className="page-header__nav-brand" src={brandLogo} alt="" />
          </li>
          <li className="page-header__nav-item">
            <Link className="link" target="first-static">
              Текстовые блоки
            </Link>
          </li>
          <li className="page-header__nav-item">
            <Link className="link" target="gallery-section">
              Галерея
            </Link>
          </li>
          <li className="page-header__nav-item">
            <Link className="link" target="form-section">
              Форма с приветами
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { PageHeader };
