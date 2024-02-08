import React, { Component } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from './App';

export default function Root(props: InferProps<typeof App.propTypes>){
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        
          <App />
      </Provider>
    );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
