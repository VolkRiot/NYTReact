import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './index';
import Main from './components/Main';
import SavedView from './components/SavedSingleView';

const Routes = () =>
  (<ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/savedview" render={SavedView} />
    </div>
  </ConnectedRouter>);

export default Routes;
