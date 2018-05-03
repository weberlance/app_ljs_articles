import React from 'react';
import PropTypes from 'prop-types';
import {articles} from '../fixtures';

import ArticleList from './ArticleList';

export default class App extends React.Component {
  render() {
    return <ArticleList articles={articles}/>
  }
}
