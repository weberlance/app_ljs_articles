import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import CommentsPagination from '../CommentsPagination';
import {Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

class AllComments extends React.Component {
  static propTypes = {
    
  }

  render() {
    const {match} = this.props;
    if (match.isExact) return <Redirect to = "/comments/1" />;

    return (
      <div>
        <h1>COMMENTS:</h1>
        <Route path = "/comments/:page" render = {this.getCommentsPagination} />
      </div>
    );
  }

  getCommentsPagination = ({ match }) => {
    const pagOptions = {
      page: parseInt(match.params.page) || 1,
      limitPerPage: 5
    };
    const {totalComments} = this.props;

    if(totalComments !== null) {
      const pages = Math.ceil(totalComments/pagOptions.limitPerPage);
      const overLastPage = pagOptions.page > pages;
      if (overLastPage) return <Redirect to = {`/comments/${pages}`} />
    }

    return <CommentsPagination options = {pagOptions} />;

  }
}

export default connect(state => ({
  totalComments: state.comments.total
}), {})(AllComments);