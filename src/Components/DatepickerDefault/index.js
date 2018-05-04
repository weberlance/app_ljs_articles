import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


export default class DatepickerDefault extends React.Component {
  static propTypes = {

  }

  state = {
    startDate: moment()
  }

  render() {
    return (
      <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
      />
    );
  }
  
  handleChange = date => {
    this.setState({
      startDate: date
    });
  }
}