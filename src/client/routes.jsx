import React from 'react';
import { Route } from 'react-router';
// import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './index';
import Main from './components/Main';

const Routes = () =>
  (
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Main} />
      </div>
    </ConnectedRouter>
  );


export default Routes;
