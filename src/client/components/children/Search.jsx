import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Query from './search/Query';
import NYTApi from '../../utils/helpers';
import Results from './search/Results';

const ApiHelper = new NYTApi();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        topic: '',
        startYr: '',
        endYr: '',
      },
      results: [],
      saved: [],
    };

    this.setSearch = this.setSearch.bind(this);
    this.setSaved = this.setSaved.bind(this);
  }

  componentDidUpdate() {
    const newSearch = this.state.search;

    ApiHelper.runQuery(newSearch.topic, newSearch.startYr, newSearch.endYr)
      .then((resp) => {
        const newArticles = resp.data.response.docs;
        this.setState({ results: newArticles });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error happened', err);
      });
  }

  setSearch(args) {
    this.setState({ search: args });
  }

  setSaved(args) {
    this.setState({ saved: args });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Query performSearch={this.setSearch} />
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
