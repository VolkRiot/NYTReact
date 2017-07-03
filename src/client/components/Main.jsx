/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route } from 'react-router';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from './children/Search';
import Saved from './children/Saved';

import * as Actions from '../../redux/actions';

const socket = io();

class Main extends Component {
  render() {
    console.log('Main props are currently ', this.props);

    return (
      <div className="main-container">
        <div className="jumbotron text-center">
          <h1 className="display-3">NYT React App</h1>
          <p className="lead">This is a simple New York Times React Application</p>
          <p>Search for Articles in the NYT Api and save them to a Mongo database</p>
        </div>
        <Search
          changeSearch={this.props.actions.changeTerm}
          currentParams={this.props.search}
          currentResults={this.props.results}
          actions={this.props.actions}
          socket={socket}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Route component={() => <Saved socket={socket} />} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  results: state.results,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
