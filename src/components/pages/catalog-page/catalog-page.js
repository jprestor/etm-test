import React, { Fragment } from 'react';

import CatalogList from '../../catalog-list';

const CatalogPage = () => {
  return (
    <Fragment>
      <h1>Каталог товаров</h1>
      <CatalogList isMainPage={false} />
    </Fragment>
  );
};

export default CatalogPage;
