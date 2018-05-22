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
      page: this.props.match.params.page
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