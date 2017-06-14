import React, { Component } from 'react';
import Query from './search/Query';
import NYTApi from '../../utils/helpers';

const ApiHelper = new NYTApi();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '', startYr: '', endYr: '' };

    this.setSearch = this.setSearch.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state === nextState) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const newSearch = {
      term: this.state.topic,
      start: this.state.startYr,
      end: this.state.endYr,
    };

    ApiHelper.runQuery(newSearch).then((resp) => {
      console.log('Response right now is', resp);
    });
  }

  setSearch(args) {
    this.setState(args);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Query performSearch={this.setSearch} />
        </div>
      </div>
    );
  }
}

export default Search;
