import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../../AC';

class Counter extends React.Component {
  static propTypes = {
    counter: PropTypes.number
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick = {this.handleIncrement}>Increment</button>
      </div>
    );
  }

  handleIncrement = () => {
    console.log('incremented');
    // this.props.dispatch(increment());
    this.props.dispatchIncrement();
  }
}

function mapStateToProps(state) {
  return {
    counter: state.count
  }
}

const mapToDispatch = ({
  dispatchIncrement: increment
});

// const decorator = connect(mapStateToProps);
const decorator = connect(mapStateToProps, mapToDispatch);

export default decorator(Counter);