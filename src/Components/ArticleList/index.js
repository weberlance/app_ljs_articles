import React from 'react';
import Article from '../Article';

export default class ArticleList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openArticleId: null
    }
  }

  render() {
    const articleElements = this.props.articles.map(article =>
      <li key={article.id}>
        <Article
          article = {article}
          isOpen = {this.state.openArticleId === article.id}
          toggleOpen = {this.toggleArticle(article.id)}
          // toggleOpen = {this.toggleArticle.bind(this, article.id)}
        />
      </li>
    );
    return (
      <ul>
        {articleElements}
      </ul>
    );
  }

  toggleArticle = id => () => {
    this.setState({
      openArticleId: this.state.openArticleId === id ? null : id
    });
  }

}