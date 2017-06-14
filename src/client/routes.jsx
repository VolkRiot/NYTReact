import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Main from './components/Main';

const Routes = () =>
(
  <HashRouter>
    <Route path="/" component={Main} />
  </HashRouter>
);

export default Routes;
