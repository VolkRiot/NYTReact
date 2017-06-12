/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import App from './app';
import Main from './components/Main';

// Hot module reload wrapper
const wrapApp = AppComponent =>
  (<AppContainer>
    <AppComponent />
  </AppContainer>);

ReactDOM.render(wrapApp(Main), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./components/Main').default;
    ReactDOM.render(wrapApp(NextApp), document.getElementById('app'));
  });
}
