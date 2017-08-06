/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Query from './search/Query';
import Results from './search/Results';

function Search({ currentParams, currentResults, actions }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Query search={currentParams} actions={actions} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Results results={currentResults} actions={actions} />
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  currentParams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentResults: PropTypes.array.isRequired,
};

export default Search;
