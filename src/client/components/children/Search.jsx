import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Query from './search/Query';
import Results from './search/Results';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.search,
      results: props.currentResults,
      saved: [],
    };

    this.setSearch = this.setSearch.bind(this);
    this.setSaved = this.setSaved.bind(this);
  }

  componentDidUpdate() {
    // const newSearch = this.state.search;
    //
    // ApiHelper.runQuery(newSearch.topic, newSearch.startYr, newSearch.endYr)
    //   .then((resp) => {
    //     const newArticles = resp.data.response.docs;
    //     this.setState({ results: newArticles });
    //   })
    //   .catch((err) => {
    //     // eslint-disable-next-line no-console
    //     console.log('Error happened', err);
    //   });
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
              performSearch={this.setSearch}
              actions={this.props.actions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Results
              results={this.state.results}
              updateSaved={this.setSaved}
              socket={this.props.socket}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default Search;
