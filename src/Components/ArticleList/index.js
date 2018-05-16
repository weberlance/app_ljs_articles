import React from 'react';
import Article from '../Article';
import Accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../../selectors';
import {getAllArticles} from '../../AC';

class ArticleList extends React.Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
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

  componentDidMount() {
    this.props.getAllArticles();
  }

}

function mapStateToProps(state) {
  return {
    articles: filtrateArticlesSelector(state)
  };
}

export default connect(mapStateToProps, {getAllArticles})(Accordion(ArticleList));