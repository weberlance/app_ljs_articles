import React from 'react';
import CommentsList from '../CommentsList';
import PropTypes from 'prop-types';
// import toggleOpen from '../../decorators/toggleOpen';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

class Article extends React.Component {

  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isReqired,
      user: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {

    const {article, isOpen, toggleOpen} = this.props;
    return (
      <article>
        <div>
          <h1>{article.title}</h1>
          <button onClick={toggleOpen}>
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        
          <ReactCSSTransitionGroup
            transitionName = "article"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
          >
            {this.getBody()}
          </ReactCSSTransitionGroup>
      </article>
    );
  }

  getBody() {
    const {article, isOpen} = this.props;
    if (!isOpen) return null;
    return (
      <div>
        {article.text}
        {this.getComments()}
      </div>
    );
  }

  getComments() {
    const {article, isOpen} = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <div className="article-comments">
        <CommentsList comments={article.comments} /> 
      </div>
    );
  }
}

export default Article;