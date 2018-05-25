import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from '../CommentsList';
import LeaveCommentBtn from '../LeaveCommentBtn';
import Loader from '../Loader';
import PropTypes from 'prop-types';
// import toggleOpen from '../../decorators/toggleOpen';
import {connect} from 'react-redux';
import {deleteArticle} from '../../AC';
import {loadArticle} from '../../AC';
import {createComment} from '../../AC';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

import AddCommentForm from '../AddCommentForm';

class Article extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    //toggleOpen: PropTypes.func,
    // from connect
    deleteArticle: PropTypes.func,
    createComment: PropTypes.func,
    article: PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array,
      // from articleRecord
      loading: PropTypes.bool,
      commentsLoading: PropTypes.bool,
      commentsLoaded: PropTypes.bool
    })
  }

  state = {
    isAddingComment: false
  }
  

  componentDidMount() {
    const {id, isOpen, loadArticle, article} = this.props;
    console.log('article did mount');
    if( !article || (!article.text && !article.loading)) {
    
    // if( article && isOpen && !article.text && !article.loading) {
      console.log('start to load article');
      loadArticle(id);
    }
  }

  render() {
    const {article, isOpen} = this.props;
    if (!article) {
      return null;
    }
    return (
      <article>
        <div>
          <h1>{article.title}</h1>
          <button onClick = {this.handleDelete} className="article-btn article-btn_delete">Delete article</button>
          {/*
          <button onClick = {toggleOpen} className="article-btn article-btn_open-close">
            {isOpen ? 'Close' : 'Open'}
          </button>
          */}
        </div>
        
          <ReactCSSTransitionGroup
            transitionName = "article"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
          >
            {this.getBody()}
          </ReactCSSTransitionGroup>
      </article>
    );
  }

  getBody() {
    const {article, isOpen} = this.props;
    if (!isOpen) return null;
    if (article.loading) return <Loader />;
    return (
      <div>
        {article.text}
        <LeaveCommentBtn 
          id={article.id}
          type="article"
          addComment={this.addComment(article.id)}
        />
        {this.state.isAddingComment ? <AddCommentForm sendComment={this.sendComment}/> : null}

        {this.getComments()}
      </div>
    );
  }

  getComments() {
    const {article, isOpen} = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <div className="article-comments">
        {/*<CommentsList comments={article.comments} />*/}
        <CommentsList article = {article} /> 
      </div>
    );
  }

  addComment = (id) => () => {
    this.setState({
      isAddingComment: true
    });
  }

  sendComment = (comment) => {
    const {createComment, article} = this.props;
    this.setState({
      isAddingComment: false
    });
    createComment(comment, article.id);
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id);
  }
}

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, createComment, loadArticle}, null, {pure: false} )(Article);