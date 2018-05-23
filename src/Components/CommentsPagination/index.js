import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadCommentsForPage} from '../../AC';
import Loader from '../Loader';
import Comment from '../Comment';
import {NavLink} from 'react-router-dom';

import './style.css';

class Pagination extends React.Component {
  static propTypes = {
    options: PropTypes.shape({
      page: PropTypes.string.isRequired,
      // from connect
      total: PropTypes.string,
      comments: PropTypes.array,
      loading: PropTypes.bool
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
        <ul>{this.getComments()}</ul>
        {this.paginator()}
      </div>
    );
  }

  getComments = () => {
    const {comments, loading} = this.props;
    if (!comments || loading) return <Loader />;
    return comments.map(id => <Comment id = { id } key={ id }/>)
  }

  paginator = () => {
    const {total} = this.props;
    const pageLinks = [];
    for(let i = 1; i < Math.ceil(total/5) + 1; i++ ) {
      pageLinks.push(<li key = {i}><NavLink to = {`/comments/${i}`}>{i}</NavLink></li>);
    }
    return <ul className="paginator">{pageLinks}</ul>;
  }

}


export default connect((state, { options:{page} }) => {
  const {total, pagination} = state.comments;
  return {
      total,
      comments: pagination.getIn([page, 'ids']),
      loading: pagination.getIn([page, 'loading'])
  }
}, {loadCommentsForPage})(Pagination);