import axios from 'axios';

const API_URL = global.API_URL || 'http://localhost:4001';

export const getPhones = () => (dispatch) => {
  dispatch({ type: 'LOADING', loading: true });

  axios.get(`${API_URL}/phones`)
    .then(({ data }) => {
      dispatch({ type: 'GET_PHONES', items: data });
      dispatch({ type: 'LOADING', loading: false });
    })
    .catch(() => {
      dispatch({ type: 'LOADING', loading: false });
    })
    .then(() => {
      dispatch({ type: 'LOADING', loading: false });
    });
};

export const selectPhone = phone => (dispatch) => {
  dispatch({ type: 'SELECT_PHONE', selectedPhone: phone });
};

export const resetSelectPhone = () => ({ type: 'RESET_SELECT_PHONE' });
