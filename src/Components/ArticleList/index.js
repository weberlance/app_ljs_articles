import React from 'react';
import Article from '../Article';
import Accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';

class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    // accordion
    openedItemId: PropTypes.string,
    toggleOpenedItem: PropTypes.func.isRequired
  }

  render() {
    const articleElements = this.props.articles.map(article =>
      <li key={article.id}>
        <Article
          article = {article}
          isOpen = {this.props.openedItemId === article.id}
          toggleOpen = {this.props.toggleOpenedItem(article.id)}
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

  // toggleArticle = id => () => {
  //   this.props.toggleOpenedItem(id);
  // }

}

export default Accordion(ArticleList);