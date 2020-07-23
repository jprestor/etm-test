import React from 'react';

import './news-list-pagination.scss';

const NewsListPaginaton = ({ items, curPage, postsPerPage, onPageChange }) => {
  const pageCount = Math.ceil(items.length / postsPerPage);

  let elements = [];

  for (let i = 1; i <= pageCount; i++) {
    let classNames = 'news-list__pagination-item btn btn-info';
    if (i === curPage) {
      classNames += ' is-active';
    }

    elements.push(
      <li key={i}>
        <button className={classNames} onClick={() => onPageChange(i)}>
          {i}
        </button>
      </li>
    );
  }

  return <ul className="news-list__pagination">{elements}</ul>;
};

export default NewsListPaginaton;
