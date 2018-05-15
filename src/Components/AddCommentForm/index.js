import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class AddCommentForm extends React.Component {
  static propTypes = {
    addComment: PropTypes.func
  }

  state = {
    userName: 'Guest',
    message: ''
  }

  render() {
    return (
      <div className="add-comment-form">
        <div className="add-comment-form__inp-box">
          name: <input
            type="text"
            className={"add-comment-form__input add-comment-form__input_name" + this.warningClass('userName')}
            value={this.state.userName}
            onChange={this.changeHandle('userName')}
          />
        </div>
        <div className="add-comment-form__inp-box">
          message: <textarea
            type="text"
            className={"add-comment-form__input add-comment-form__input_text" + this.warningClass('message')}
            value={this.state.message}
            onChange={this.changeHandle('message')}>
          </textarea>
        </div>
        <button onClick={this.sendComment}>Send</button>
      </div>
    );
  }

  warningClass = type => {
    const currentValue = this.state[type];
    if (currentValue.length && currentValue.length < limit[type].min) {
      return ' add-comment-form__input_warn';
    }
  }

  changeHandle = type => (ev) => {
    const value = ev.target.value;
    if (value.length > limit[type].max) return;
    this.setState({
      [type]: value
    });
  }

  sendComment = () => {
    const comment = this.getComment();
    this.props.sendComment(comment);
  }

  getComment() {
    return {
      id: null,
      user: this.state.userName,
      text: this.state.message
    };
  }
}

const limit = {
  userName: {
    min: 5,
    max: 15
  },
  message: {
    min: 30,
    max: 50
  }
};

export default AddCommentForm;