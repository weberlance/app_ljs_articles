import React from 'react';
import ReactDOM from 'react-dom';
import {articles} from './fixtures';

import ArticleList from './Components/ArticleList';

ReactDOM.render(
  <ArticleList articles={articles}/>,
  document.getElementById('container')
)