import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import CommentsPagination from '../CommentsPagination';
import {Route} from 'react-router-dom';

class AllComments extends React.Component {
  static propTypes = {
    
  }

  render() {
    const pagOptions = {
      page: parseInt(this.props.match.params.page) || 1,
      limitPerPage: 5
    };

    return (
      <div>
        <h1>COMMENTS:</h1>
        <CommentsPagination options = {pagOptions}/>
      </div>
    );
  }
}

export default AllComments;