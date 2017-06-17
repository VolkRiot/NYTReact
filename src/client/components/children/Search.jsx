import React, { Component } from 'react';
import Query from './search/Query';
import NYTApi from '../../utils/helpers';
import Results from './search/Results';

const ApiHelper = new NYTApi();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '', startYr: '', endYr: '', results: [], saved: [] };

    this.setSearch = this.setSearch.bind(this);
    this.setSaved = this.setSaved.bind(this);
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

  setSaved(args) {
    const newState = this.state;
    newState.saved = args;
    this.setState(newState);
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

export default Search;
