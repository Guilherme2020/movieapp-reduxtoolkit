import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Home from './src/pages';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
    // <Provider store={store}>
    // </Provider>
  );
};

export default App;
