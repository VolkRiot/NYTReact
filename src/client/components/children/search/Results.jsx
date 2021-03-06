/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(article) {
    this.props.actions.saveNewArticle(article.headline.main, article.web_url);
  }

  render() {
    if (this.props.results.length === 0) {
      return (
        <div style={{ marginBottom: '1em' }}>
          <li className="list-group-item">
            <h3>
              <span><em>Search for articles to begin.</em></span>
            </h3>
          </li>
        </div>
      );
    }

    const articles = this.props.results.map(article =>
      //  eslint-disable-next-line no-underscore-dangle
      (<div key={article._id}>
        <li className="list-group-item">
          <h3>
            <span><em>{article.headline.main}</em></span>
            <span className="btn-group pull-right">
              <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-default ">View Article</button>
              </a>
              <button className="btn btn-primary" onClick={() => this.handleClick(article)}>
                Save
              </button>
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
  results: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Results;
