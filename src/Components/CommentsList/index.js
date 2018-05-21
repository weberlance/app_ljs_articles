import React from 'react';
import Comment from '../Comment';
import Loader from '../Loader';
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadArticleComments} from '../../AC';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

class CommentsList extends React.Component {
  // static propTypes = {
  //   comments: PropTypes.array,
  //   isOpen: PropTypes.bool
  // }

  // static defaultProps = {
  //   comments: []
  // }

  static propTypes = {
    article: PropTypes.object,
    // from toggleOpen
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    loadArticleComments: PropTypes.func
  }

  componentWillReceiveProps({article, isOpen, loadArticleComments}) {
    if(isOpen && !article.commentsLoaded && !article.commentsLoading) {
      loadArticleComments(article.id);
    }
  }

  render() {
    const {comments} = this.props.article;

    if (comments.length === 0) return <p>No comments yet</p>;

    return (
      <div>
        <div>
          <button onClick={() => this.props.toggleOpen()}>{this.props.isOpen ? 'Hide' : 'Show'} comments</button>
        </div>

        <ReactCSSTransitionGroup
           className="comments-list"
           transitionName = "commentList"
           transitionEnterTimeout = {500}
           transitionLeaveTimeout = {300}
           component="ul"
        >
          {this.getCommentItems()}
          
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  getCommentItems() {
    const {article, isOpen} = this.props;
    if (!isOpen) return null;
    if(article.commentsLoading) return <Loader />;
    if(!article.commentsLoaded) return null;

    const {comments} = article;
    const commentItems = comments.map(commentId => 
      <Comment key={commentId} id={commentId} addComment={this.addComment(commentId)}/>
    );

    return commentItems;
  }

  addComment = (id) => () => {
    alert('add the comment to comment with id: ' + id);
  }

}

export default connect(null, { loadArticleComments })(toggleOpen(CommentsList));