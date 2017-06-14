/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';

// Hot module reload wrapper
const wrapApp = AppComponent =>
  (<AppContainer>
    <AppComponent />
  </AppContainer>);

ReactDOM.render(wrapApp(Routes), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    ReactDOM.render(wrapApp(NextApp), document.getElementById('app'));
  });
}
