import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageHeader from '../page-header';
import PageFooter from '../page-footer';
import { CatalogPage, CatalogItemPage } from '../pages';
import './app.scss';

const App = () => {
  return (
    <Fragment>
      <PageHeader />

      <main className="page-main  container">
        <Switch>
          <Route path="/" component={CatalogPage} exact />
          <Route path="/:id" component={CatalogItemPage} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </main>

      <PageFooter />
    </Fragment>
  );
};

export default App;
