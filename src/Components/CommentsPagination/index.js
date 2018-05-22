import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadCommentsForPage} from '../../AC';

class Pagination extends React.Component {
  static propTypes = {
    options: PropTypes.shape({
      page: PropTypes.string.isRequired
    })
  }

  componentDidMount() {
    this.props.loadCommentsForPage(this.props.options.page);
  }

  componentDidUpdate() {
    this.props.loadCommentsForPage(this.props.options.page);
  }

  render() {
    return (
      <div>
        <h1>Pagination page: {this.props.options.page}</h1>
      </div>
    );
  }
}

export default connect(null, {loadCommentsForPage})(Pagination);