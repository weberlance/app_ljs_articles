import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import UserForm from './UserForm';

import Select from 'react-select';

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
      <div>
        <Select options={options} value = {this.state.selection} onChange = {this.changeSelection} multi/>
        <UserForm />
        <ArticleList articles={this.props.articles}/>
      </div>
    );
  }

  changeSelection = selection => this.setState({selection})
}
