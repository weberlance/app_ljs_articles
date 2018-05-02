import React from 'react';
import Comment from '../Comment';

export default class CommentsList extends React.Component {

  state = {
    isOpen: false
  };

  static defaultProps = {
    comments: []
  }

  render() {
    const {comments} = this.props;

    if (comments.length === 0) return <p>No comments yet</p>;

    return (
      <div>
        <div>
          <button onClick={() => this.toogleOpen()}>{this.state.isOpen ? 'Hide' : 'Show'} comments</button>
        </div>
        <ul className="comments-list">
          {this.getCommentItems()}
        </ul>
      </div>
    );
  }

  getCommentItems() {
    if (!this.state.isOpen) return null;
    
    const {comments} = this.props;
    const commentItems = comments.map(comment => 
      <Comment key={comment.id} comment={comment}/>
    );

    return commentItems;
  }

  toogleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


}