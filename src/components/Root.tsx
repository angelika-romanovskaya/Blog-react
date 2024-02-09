import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter} from 'react-router-dom';
import { Provider  } from 'react-redux';
import App from './App';

export default function Root({store}){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
