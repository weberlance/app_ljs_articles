import React from 'react';
import CommentsList from '../CommentsList';
import PropTypes from 'prop-types';

export default class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    })
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