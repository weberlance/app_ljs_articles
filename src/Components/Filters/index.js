import React from 'react';
import PropTypes from 'prop-types';

import DatepickerRange from './DatepickerRange';
import SelectFilter from './SelectFilter';

class Filters extends React.Component {
  static propTypes = {

  }

  render() {
    
    return (
      <div>
        <DatepickerRange />
        <SelectFilter />
      </div>
    );
  }

}

export default Filters;

