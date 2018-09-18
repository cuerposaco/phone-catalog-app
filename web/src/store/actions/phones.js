const API_URL = global.API_URL || 'http://localhost:4001';

export const getPhones = () => (dispatch) => {
  dispatch({ type: 'LOADING', loading: true });
  fetch(`${API_URL}/phones`)
    .then(res => res.json())
    .then(items => dispatch({ type: 'GET_PHONES', items }));
};

export const selectPhone = phone => (dispatch) => {
  // dispatch({ type: 'LOADING', loading: true });
  dispatch({ type: 'SELECT_PHONE', selectedPhone: phone });
};
