import React from 'react';
import PropTypes from 'prop-types';

class LeaveCommentBtn extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    addComment: PropTypes.func
  }

  render() {
    return (
      <button className="add-comment-btn" onClick={this.props.addComment}>
        Answer
      </button>
    );
  }
}

export default LeaveCommentBtn;