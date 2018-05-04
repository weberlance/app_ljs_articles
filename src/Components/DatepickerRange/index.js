import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


export default class DatepickerRange extends React.Component {
  static propTypes = {

  }

  state = {
    startDate: moment()
  }

  render() {
    return (
      <DatePicker
        
        onChange={this.handleChange}
        minDate={moment()}
        maxDate={moment().add(5, "days")}
        placeholderText="Select a date between today and 5 days in the future"
      />
    );
  }
  
  handleChange = date => {
    this.setState({
      startDate: date
    });
  }
}