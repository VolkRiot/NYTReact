import React from 'react';
import { Route } from 'react-router';
// import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './index';
import Main from './components/Main';
import Saved from './components/children/Saved';

const Routes = () =>
  (<ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/savedview" component={Saved} />
    </div>
  </ConnectedRouter>);

export default Routes;
