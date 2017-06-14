/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results });
  }

  render() {
    if (this.state.results === []) {
      return (
        <li className="list-group-item">
          <h3>
            <span><em>Search for articles to begin.</em></span>
          </h3>
        </li>
      );
    }

    const articles = this.state.results.map((article, index) =>
      (<div key={index}>
        <li className="list-group-item">
          <h3>
            <span><em>{article.headline.main}</em></span>
            <span className="btn-group pull-right">
              <a href={article.web_url} target="_blank">
                <button className="btn btn-default ">View Article</button>
              </a>

              {/* <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>
                Save
              </button> */}
            </span>
          </h3>
          <p>Date Published: {article.pub_date}</p>
        </li>
      </div>),
    );

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title"><strong><i className="fa fa-list-alt" /> Results</strong></h1>
        </div>
        <div className="panel-body">
          <ul className="list-group">

            {articles}

          </ul>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.array,
};

Results.defaultProps = {
  results: [],
};

export default Results;
