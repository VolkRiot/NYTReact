/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route } from 'react-router';
import Search from './children/Search';
import Saved from './children/Saved';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="jumbotron text-center">
          <h1 className="display-3">NYT React App</h1>
          <p className="lead">
            This is a simple New York Times React Application
          </p>
          <p>
            Search for Articles in the NYT Api and save them to a Mongo database
          </p>
        </div>
        <Route exact path="/" component={Search} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Route exact path="/" component={Saved} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
