import React from 'react';
import { Link } from 'react-router-dom';

import './page-header.scss';

const PageHeader = () => {
  return (
    <header className="page-header  navbar-dark  bg-dark">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="navbar-brand  nav-link" to="/">
              ЭТМ-маркет
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default PageHeader;
