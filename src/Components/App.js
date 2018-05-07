import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import DatepickerRange from './DatepickerRange';
import UserForm from './UserForm';
import Select from 'react-select';
import Counter from './Counter';
import store from '../store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  static propTypes = {

  }

  state = {
    selection: null
  }

  render() {
    /*
    // to filters
    const options = this.props.articles.map(article => ({
        label: article.title,
        value: article.id
      }));
    */
    return (
      <Provider store = {store}>
        <div>
          {/*
              add <Filters/>
              wich will be include DatepickerRange, Select
          <DatepickerRange/>
          <Select options={options} value = {this.state.selection} onChange = {this.changeSelection} multi/>
          */}
          <UserForm />
          <Counter />
          <ArticleList/>
        </div>
      </Provider>
    );
  }

  changeSelection = selection => this.setState({selection})
}
