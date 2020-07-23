const fetchDataSuccess = (items) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: items,
  };
};

const fetchDataRequest = () => {
  return 'FETCH_DATA_REQUEST';
};

const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  };
};

const setLoginSuccess = () => {
  return 'SET_LOGIN_SUCCESS';
};

const setLoginPending = () => {
  return 'SET_LOGIN_PENDING';
};

const setLoginError = (error) => {
  return {
    type: 'SET_LOGIN_ERROR',
    payload: error,
  };
};

const fetchData = (getData) => (dispatch) => {
  dispatch(fetchDataRequest());

  getData()
    .then((data) => {
      dispatch(fetchDataSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error));
    }); 
};

const authorize = (callApi) => (email, password) => (dispatch) => {
  dispatch(setLoginPending());

  callApi(email, password)
    .then(() => {
      dispatch(setLoginSuccess());
    })
    .catch((error) => {
      dispatch(setLoginError(error));
    });
};

export { fetchData, authorize };
