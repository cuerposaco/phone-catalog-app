import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

function Application() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

render(<Application />, document.getElementById('container'));
