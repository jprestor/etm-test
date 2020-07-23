import React, { useContext, useEffect, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { NewsServiceContext } from '../../../services/context';
import { fetchData } from '../../../actions';

import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';

import './catalog-item-page.scss';

const CatalogItemPage = ({ item }) => {
  const { vendor, pack, price, image } = item;

  return (
    <Fragment>
      <Link className="news-page-back d-block text-secondary" to="/">
        <i>Назад к каталогу</i>
      </Link>

      <div className="news-page-content">
        <img className="news-page-content__img" src={image} />

        <div className="news-page-content__info">
          <p className="news-page-content__author mb-1">Тип: {vendor}</p>
          <p className="news-page-content__text mb-4">
            В комплекте: {pack} шт.
          </p>
          <p className="news-page-content__price text-warning">
            Цена: {price} руб.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

const CatalogItemPageContainer = (props) => {
  const { fetchData, items, error, loading, match } = props;
  const { getData } = useContext(NewsServiceContext);

  const { id } = match.params;
  const item = items.find((i) => i.id === id);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <CatalogItemPage item={item} />;
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CatalogItemPageContainer);
