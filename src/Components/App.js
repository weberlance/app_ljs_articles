import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import {Provider} from 'react-redux';

import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
import Filters from './Filters'

export default class App extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <Provider store = {store}>
        <div>
          <UserForm />
          <Counter />
          <Filters />
          <ArticleList/>
        </div>
      </Provider>
    );
  }

}
