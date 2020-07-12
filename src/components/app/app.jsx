import React, { Fragment, useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import { DataServiceContext } from '../../services';
import { fetchData } from '../../actions';

import { PageHeader } from '../page-header';
import { PageFooter } from '../page-footer';

import { ErrorIndicator } from '../error-indicator';
import { Spinner } from '../spinner';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <PageHeader />
      <PageFooter />
    </Fragment>
  );
};

const AppContainer = ({ loading, error, fetchData }) => {
  const { getData } = useContext(DataServiceContext);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <App />;
};

const mapStateToProps = ({ loading, error }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
