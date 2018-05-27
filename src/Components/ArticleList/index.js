import React from 'react';
import Article from '../Article';
import Loader from '../Loader';
import Accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from '../../selectors';
import {getAllArticles} from '../../AC';
import {NavLink} from 'react-router-dom';

class ArticleList extends React.Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openedItemId: PropTypes.string,
    toggleOpenedItem: PropTypes.func.isRequired
  }

  render() {
    const {articles, openedItemId, toggleOpenedItem, loading} = this.props;
    if(loading) return <Loader />;
    //debugger;
    const articleElements = articles.map(article =>
      {
      // if (article.id === undefined) article.id = 'randomId';
      // console.log('article.id: ', article.id)
      return <li key={article.id}>
        {/*
        <Article
          article = {article}
          isOpen = {openedItemId === article.id}
          toggleOpen = {toggleOpenedItem(article.id)}
          // toggleOpen = {this.toggleArticle.bind(this, article.id)}
        />
      */}
        <NavLink to={`/articles/${article.id}`} activeStyle = {{color: '#f55'}}>{article.title}</NavLink>
      </li>
      }
    );
    return (
      <ul>
        {articleElements}
      </ul>
    );
  }

  componentDidMount() {
    const {loading, loaded, getAllArticles} = this.props;
    if(!loaded && !loading) getAllArticles();
  }

}

function mapStateToProps(state) {
  return {
    articles: filtrateArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  };
}

export default connect(mapStateToProps, {getAllArticles})(Accordion(ArticleList));