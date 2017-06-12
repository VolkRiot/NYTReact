/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const wrapApp = AppComponent =>
  (<AppContainer>
    <AppComponent />
  </AppContainer>);

ReactDOM.render(wrapApp(App), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(wrapApp(NextApp), document.getElementById('app'));
  });
}
