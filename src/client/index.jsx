/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducedTotal from '../redux/reducers';
import Routes from './routes';

const store = createStore(
  reducedTotal,
  window.devToolsExtension ? window.devToolsExtension() : undefined,
);

// Hot module reload wrapper
const wrapApp = AppComponent =>
  (<Provider store={store}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>);

ReactDOM.render(wrapApp(Routes), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    ReactDOM.render(wrapApp(NextApp), document.getElementById('app'));
  });
}
