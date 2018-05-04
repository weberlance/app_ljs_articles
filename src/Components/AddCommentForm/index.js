import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class AddCommentForm extends React.Component {
  static propTypes = {
    addComment: PropTypes.func
  }

  state = {
    userName: 'Guest',
    userNameWarn: false,
    message: '',
    messageWarn: false
  }

  render() {
    return (
      <div className="add-comment-form">
        <div className="add-comment-form__inp-box">
          name: <input type="text" className={"add-comment-form__input add-comment-form__input_name" + (this.state.userNameWarn ? " add-comment-form__input_warn" : "")} value={this.state.userName} onChange={this.nameChangeHandle}/>
        </div>
        <div className="add-comment-form__inp-box">
          message: <textarea type="text" className={"add-comment-form__input add-comment-form__input_text" + (this.state.messageWarn ? " add-comment-form__input_warn" : "")} value={this.state.message} onChange={this.messageChangeHandle}></textarea>
        </div>
        <button onClick={this.props.sendComment}>Send</button>
      </div>
    );
  }

  nameChangeHandle = (ev) => {
    const newName = ev.target.value;
    if (newName.length < 5 || newName.length > 15) {
      this.setState({
        userName: newName,
        userNameWarn: true
      });
    } else {
      this.setState({
        userName: newName,
        userNameWarn: false
      });
    }
  }

  messageChangeHandle = (ev) => {
    const newMessage = ev.target.value;
    if (newMessage.length < 30 || newMessage.length > 50) {
      this.setState({
        message: newMessage,
        messageWarn: true
      });
    } else {
      this.setState({
        message: newMessage,
        messageWarn: false
      });
    }
  }
}

export default AddCommentForm;