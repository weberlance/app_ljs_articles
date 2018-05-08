import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {connect} from 'react-redux';
import {filterDateRangeUpdate} from '../../AC';

import 'react-datepicker/dist/react-datepicker.css';

class DatepickerRange extends React.Component {
  static propTypes = {
    dateRange: PropTypes.shape({
      startDate: PropTypes.object,
      endDate: PropTypes.object,
    })
  }

  render() {
    const {startDate, endDate} = this.props.dateRange;
    return (
      <div>
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeStart}
          isClearable
          placeholderText="From date"
        />
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeEnd}
          isClearable
          placeholderText="To date"
        />
      </div>
    );
  }
  
  handleChange = ({ startDate, endDate }) => {

    startDate = startDate === undefined ? this.props.dateRange.startDate : startDate;
    endDate = endDate === undefined ? this.props.dateRange.endDate : endDate;

    if (startDate && endDate && startDate.isAfter(endDate)) {
      endDate = startDate
    }

    this.props.filterDateRangeUpdate({ startDate, endDate });
  }

  handleChangeStart = (startDate) => this.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.handleChange({ endDate })

}

export default connect(state => ({
  dateRange: state.filterState.dateRange
}), { filterDateRangeUpdate })(DatepickerRange);


