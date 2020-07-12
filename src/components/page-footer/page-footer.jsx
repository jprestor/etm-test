import React from 'react';

import { AnchorLink } from '../anchor-link';

import './page-footer.scss';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="page-footer__top">
          <div className="page-footer__adress">
            <p className="page-footer__town">Санкт-Петербург</p>
            <p className="page-footer__street">
              Большой Проспект П. С., 18, офис 22
            </p>
          </div>

          <div className="page-footer__contacts">
            <a className="page-footer__email" href="mailto:mail@octoberweb.ru">
              mail@octoberweb.ru
            </a>
            <a className="page-footer__phone" href="tel:+79811316498">
              +7 (981) 131-64-98
            </a>
          </div>

          <AnchorLink
            className="page-footer__btn-to-top btn btn--secondary"
            target="page-header"
            offset={0}
          >
            Написать нам
          </AnchorLink>
        </div>

        <div className="page-footer__bottom">
          <AnchorLink className="page-footer__link link" target="first-static">
            Текстовые блоки
          </AnchorLink>
          <AnchorLink
            className="page-footer__link link"
            target="gallery-section"
          >
            Галерея
          </AnchorLink>
          <AnchorLink className="page-footer__link link" target="form-section">
            Форма
          </AnchorLink>

          <p className="page-footer__copyrights">© 2009-2020 OctoberWeb</p>
        </div>
      </div>
    </footer>
  );
};

export { PageFooter };
