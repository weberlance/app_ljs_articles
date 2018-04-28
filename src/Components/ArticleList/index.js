import React from 'react';
import Article from '../Article';

export default class ArticleList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const articleElements = this.props.articles.map(article =>
      <li key={article.id}>
        <Article article={article}/>
      </li>
    );
    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}