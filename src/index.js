import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { NewsService, NewsServiceProvider } from './services';
import store from './store.js';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';

const newsService = new NewsService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <NewsServiceProvider value={newsService}>
        <Router basename="/">
          <App />
        </Router>
      </NewsServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
