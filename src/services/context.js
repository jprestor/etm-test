import React from 'react';

const DataServiceContext = React.createContext();

const { Provider: DataServiceProvider } = DataServiceContext;

export { DataServiceContext, DataServiceProvider };
