/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Query from './search/Query';
import Results from './search/Results';

class Search extends Component {
  constructor(props) {
    super(props);
    this.setSearch = this.setSearch.bind(this);
    this.setSaved = this.setSaved.bind(this);
  }

  componentDidUpdate() {
  }

  setSearch(args) {
    this.props.handleChange( args );
  }

  setSaved(args) {
    this.setState({ saved: args });
  }

  render() {
    console.log('Search props are ', this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Query
              search={this.props.currentParams}
              actions={this.props.actions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Results
              results={this.props.currentResults}
              socket={this.props.socket}
              actions={this.props.actions}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  socket: PropTypes.object.isRequired,
  currentParams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentResults: PropTypes.array.isRequired,
};

export default Search;
