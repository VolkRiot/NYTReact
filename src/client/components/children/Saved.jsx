import React, { Component } from 'react';
import NYTApi from '../../utils/helpers';

const NytHelper = new NYTApi();

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = { savedArticles: [] };
  }

  componentWillMount() {
    NytHelper.getSaved().then((resp) => {
      this.setState({
        savedArticles: resp.data,
      });
    });
  }

  handleClick(article) {
    console.log('Clicked');
  }

  render() {
    if (this.state.savedArticles.length === 0) {
      return (
        <li className="list-group-item">
          <h3>
            <span><em>Looks like there are no saved Articles yet</em></span>
          </h3>
        </li>
      );
    }

    const articles = this.state.savedArticles.map(article =>
      // eslint-disable-next-line no-underscore-dangle
      (<div key={article._id}>
        <li className="list-group-item">
          <h3>
            <span><em>{article.title}</em></span>
            <span className="btn-group pull-right">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-default ">View Article</button>
              </a>
              <button className="btn btn-primary" onClick={() => this.handleClick(article)}>
                Delete
              </button>
            </span>
          </h3>
          <p>Date Published: {article.date}</p>
        </li>
      </div>));

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">
            <strong><i className="fa fa-download" aria-hidden="true" /> Saved Articles</strong>
          </h1>
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

export default Saved;
