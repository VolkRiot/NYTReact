import React, { Component } from 'react';
import Query from './search/Query';
import NYTApi from '../../utils/helpers';
import Results from './search/Results';

const ApiHelper = new NYTApi();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '', startYr: '', endYr: '', results: [] };

    this.setSearch = this.setSearch.bind(this);
  }

  componentDidUpdate() {
    const newSearch = {
      term: this.state.topic,
      start: this.state.startYr,
      end: this.state.endYr,
    };

    ApiHelper.runQuery(newSearch)
      .then((resp) => {
        const newArticles = resp.data.response.docs;
        this.setState({ results: newArticles });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error happend', err);
      });
  }

  setSearch(args) {
    this.setState(args);
  }

  render() {
    return (
      <div className="main-part">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <Query performSearch={this.setSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <Results results={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
