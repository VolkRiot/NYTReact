import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NYTApi from '../../utils/helpers';

const NytHelper = new NYTApi();

class Saved extends Component {
  constructor(props) {
    super(props);
    console.log("Saved component is current at ", props);
    this.socket = this.props.socket;
    this.socket.on('update_saved', (docs) => {
      this.props.actions.getSaved();
    });
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // TODO: Not happy with this as a solution for init mount
    // What id the databse is empty?
    // Should really be an initializing call to the Db to set state.
    if (this.props.saved.length <= 0) {
      this.props.actions.getSaved();
    }
  }

  handleClick(article) {
    // eslint-disable-next-line no-underscore-dangle
    this.props.actions.deleteSaved(article._id);

    // NytHelper.deleteArticle(article._id).then((resp) => {
    //   if (resp.data.success) {
    //     NytHelper.getSaved().then((answ) => {
    //       this.socket.emit('new_saved');
    //       this.setState({
    //         savedArticles: answ.data,
    //       });
    //     });
    //   }
    // });
  }

  render() {
    if (this.props.saved.length === 0) {
      return (
        <li className="list-group-item">
          <h3>
            <span><em>Looks like there are no saved Articles yet</em></span>
          </h3>
        </li>
      );
    }

    const articles = this.props.saved.map(article =>
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
      </div>),
    );

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

Saved.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default Saved;
