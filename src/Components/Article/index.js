import React from 'react';
import CommentsList from '../CommentsList';
import PropTypes from 'prop-types';

class Article extends React.Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isReqired,
      user: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const {article} = this.props;
    return (
      <article>
        <div>
          <h1>{article.title}</h1>
          <button onClick={() => this.toggleOpen()}>
            {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        <div>
          {this.getBody()}
        </div>

        {this.getComments()}
      </article>
    );
  }

  getBody() {
    const {article} = this.props;
    return this.state.isOpen ? article.text : null;
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getComments() {
    const {article} = this.props;
    if (this.state.isOpen) {
      return (
        <div className="article-comments">
          <CommentsList comments={article.comments}/> 
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Article;