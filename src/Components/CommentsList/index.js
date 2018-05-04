import React from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

class CommentsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array
  }

  static defaultProps = {
    comments: []
  }

  render() {
    const {comments} = this.props;

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
          {/*<ul className="comments-list">
                      {this.getCommentItems()}
                    </ul>*/}
          
          {this.getCommentItems()}
          
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  getCommentItems() {
    if (!this.props.isOpen) return null;
    
    const {comments} = this.props;
    const commentItems = comments.map(comment => 
      <Comment key={comment.id} comment={comment}/>
    );

    return commentItems;
  }
}

export default toggleOpen(CommentsList);