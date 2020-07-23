import React from 'react';

const NewsServiceContext = React.createContext();
const { Provider: NewsServiceProvider } = NewsServiceContext;

export { NewsServiceContext, NewsServiceProvider };
