import React from 'react';
import CommentsList from '../CommentsList';
import PropTypes from 'prop-types';
import LeaveCommentBtn from '../LeaveCommentBtn';
import {commentSelectorFactory} from '../../selectors';

import {connect} from 'react-redux';

import './style.css';

class Comment extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.object
    }),
    addComment: PropTypes.func
  }

  render() {
    const {comment} = this.props;
    return (
      <li>
        <div className="comment__author">
          {comment.user}
        </div>
        <div className="comment__text">
          {comment.text}
          {this.getLeaveCommentBtn()}
        </div>
        {this.getInnerComments(comment)}
      </li>
    );
  }

  getInnerComments(comment) {
    if (comment.comments) {
      return (
        <div className="comment__inner">
          <CommentsList comments={comment.comments}/>
        </div>
      );
    } else {
      return null;
    }
  }

  getLeaveCommentBtn() {
    const {comment, addComment} = this.props;
    if (!addComment) return null;
    return <LeaveCommentBtn 
            id={comment.id}
            type="comment"
            addComment={addComment}
          />
  }
}

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();

  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    };
  };
}

export default connect(mapStateToProps)(Comment);