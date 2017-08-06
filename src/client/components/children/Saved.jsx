/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../../redux/actions';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { initRender: true };
  }

  componentDidMount() {
    if (this.props.saved.length <= 0 && this.state.initRender === true) {
      this.props.actions.getSaved();
    }
  }

  handleClick(article) {
    // eslint-disable-next-line no-underscore-dangle
    this.props.actions.deleteSaved(article._id);
  }

  render() {
    if (this.props.saved.length === 0) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Looks like there are no saved Articles yet</em>
            </span>
          </h3>
        </li>
      );
    }

    const articles = this.props.saved.map(article =>
      // eslint-disable-next-line no-underscore-dangle
      (<div key={article._id}>
        <li className="list-group-item">
          <h3>
            <span>
              <em>
                {article.title}
              </em>
            </span>
            <span className="btn-group pull-right">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-default ">View Article</button>
              </a>
              <button className="btn btn-primary" onClick={() => this.handleClick(article)}>
                Delete
              </button>
            </span>
          </h3>
          <p>
            Date Published: {article.date}
          </p>
        </li>
      </div>),
    );

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">
            <strong>
              <i className="fa fa-download" aria-hidden="true" /> Saved Articles
            </strong>
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

Saved.propTypes = {
  actions: PropTypes.object.isRequired,
  saved: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  saved: state.saved,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
