import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NewsServiceContext } from '../../services/context';
import { fetchData } from '../../actions';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import NewsListPaginaton from '../news-list-pagination';

import './catalog-list.scss';

const CatalogList = ({ items, isMainPage }) => {
  const [curPage, setCurPage] = useState(1);
  const postsPerPage = isMainPage ? 3 : 6;

  const elements = [];
  const start = postsPerPage * (curPage - 1);
  const end = postsPerPage + start;

  for (let i = start; i < end; i++) {
    const { id, title, price, image } = items[i];

    elements.push(
      <div className="news-list__item  card" key={id}>
        <div className="card-body">
          <img className="news-list__item-img" src={image} alt="" />
        </div>

        <div className="card-bottom">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Цена: {price} руб.</p>

          <Link className="btn btn-outline-warning" to={`/${id}`}>
            Перейти к товару
          </Link>
        </div>
      </div>
    );

    if (i === items.length - 1) break;
  }

  return (
    <section className="news-list">
      <div className="news-list__layout">{elements}</div>

      {!isMainPage && (
        <NewsListPaginaton
          items={items}
          curPage={curPage}
          postsPerPage={postsPerPage}
          onPageChange={setCurPage}
        />
      )}
    </section>
  );
};

const CatalogListContainer = (props) => {
  const { fetchData, items, error, loading, isMainPage = false } = props;
  const { getData } = useContext(NewsServiceContext);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <CatalogList items={items} isMainPage={isMainPage} />;
};

const mapStateToProps = ({ news: { items, loading, error } }) => {
  return {
    items,
    error,
    loading,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogListContainer);
