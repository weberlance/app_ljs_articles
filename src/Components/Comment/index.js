import React from 'react';
import CommentsList from '../CommentsList';

export default class Comment extends React.Component {
  render() {
    const {comment} = this.props;
    return (
      <li>
        <div className="comment__author">
          {comment.user}
        </div>
        <div className="comment__text">
          {comment.text}
        </div>
        {this.getInnerComents(comment)}
      </li>
    );
  }

  getInnerComents(comment) {
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