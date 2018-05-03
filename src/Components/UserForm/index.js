import React from 'react';
import PropTypes from 'prop-types';

class UserForm extends React.Component {
  static propTypes = {

  }

  state = {
    username: ''
  }

  render() {
    return (
      <div>
        Name: <input type="text" value={this.state.username} onChange={this.handleChange}/>
      </div>
    );
  }

  handleChange = (ev) => {
    if (ev.target.value.length > 10) return; 
    this.setState({
      username: ev.target.value
    });
  }
}

export default UserForm;