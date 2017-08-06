/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Navbar from './children/NavBar';
import Search from './children/Search';
import Saved from './children/Saved';

import * as Actions from '../../redux/actions';

function Main({ actions, search, results }) {
  return (
    <div className="main-container">
      <Navbar />
      <div className="jumbotron text-center">
        <h1 className="display-3">NYT React App</h1>
        <p className="lead">This is a simple New York Times React Application</p>
        <p>Search for Articles in the NYT Api and save them to a Mongo database</p>
      </div>
      <Search
        changeSearch={actions.changeTerm}
        currentParams={search}
        currentResults={results}
        actions={actions}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Route path="/" component={() => <Saved />} />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  search: state.search,
  results: state.results,
  saved: state.saved,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
