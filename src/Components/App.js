import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import DatepickerRange from './DatepickerRange';
import UserForm from './UserForm';
import Select from 'react-select';
import Counter from './Counter';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  static propTypes = {

  }

  state = {
    selection: null
  }

  render() {
    const options = this.props.articles.map(article => ({
        label: article.title,
        value: article.id
      }));
    return (
      <Provider store = {store}>
        <div>
          <DatepickerRange/>
          <Select options={options} value = {this.state.selection} onChange = {this.changeSelection} multi/>
          <UserForm />
          <Counter />
          <ArticleList articles={this.props.articles}/>
        </div>
      </Provider>
    );
  }

  changeSelection = selection => this.setState({selection})
}
