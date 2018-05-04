import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


export default class DatepickerRange extends React.Component {
  static propTypes = {

  }

  state = {
    startDate: moment(),
    endDate: moment()
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
        />
        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
        />
      </div>
    );
  }
  
  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate

    if (startDate.isAfter(endDate)) {
      endDate = startDate
    }

    this.setState({ startDate, endDate })
  }

  handleChangeStart = (startDate) => this.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.handleChange({ endDate })
}

// export default class DatepickerRange extends React.Component {
//   static propTypes = {

//   }

//   state = {
//     startDate: moment()
//   }

//   render() {
//     return (
//       <DatePicker
        
//         onChange={this.handleChange}
//         minDate={moment()}
//         maxDate={moment().add(5, "days")}
//         placeholderText="Select a date between today and 5 days in the future"
//       />
//     );
//   }
  
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   }
// }