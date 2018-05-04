import React from 'react';
import CommentsList from '../CommentsList';
import PropTypes from 'prop-types';
import LeaveCommentBtn from '../LeaveCommentBtn';

import './style.css';

export default class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }),
    addComment: PropTypes.func
  }

  render() {
    const {comment, addComment} = this.props;
    return (
      <li>
        <div className="comment__author">
          {comment.user}
        </div>
        <div className="comment__text">
          {comment.text}
          <LeaveCommentBtn 
            id={comment.id}
            type="comment"
            addComment={this.props.addComment}
          />
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
}