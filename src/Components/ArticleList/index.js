import React from 'react';
import Article from '../Article';
import Accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

  // toggleArticle = id => () => {
  //   this.props.toggleOpenedItem(id);
  // }

}

function mapStateToProps(state) {
  const {selection, dateRange: {startDate, endDate}} = state.filterState;
  const {articles} = state;

  const filteredArticles = articles.filter(article => {
    const publishDate = Date.parse(article.date);
    return (
         // selected
        (!selection.length || selection.includes(article.id)) &&
        // in date range
        (
          (!startDate && !endDate) ||
          ((startDate && !endDate) && (publishDate > startDate)) ||
          ((!startDate && endDate) && (publishDate < endDate)) ||
          (startDate && endDate && (publishDate > startDate && publishDate < endDate))
        )
      );
  });

  return {
    articles: filteredArticles
  };

  // if (selection.length === 0) return ({articles});

  // return ({
  //   articles: articles.filter(article => selection.some(id => article.id === id))
  // });
}

export default connect(mapStateToProps)(Accordion(ArticleList));