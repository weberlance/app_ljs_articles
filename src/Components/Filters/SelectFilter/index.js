import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {mapToArr} from '../../../helpers';

import {connect} from 'react-redux';
import {filterSelectUpdate} from '../../../AC';

class SelectFilter extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selection: PropTypes.array
  }

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        name = "article-title-filter"
        options = {options}
        value = {this.props.selection}
        onChange = {this.changeSelection}
        closeOnSelect={false}
        multi
      />
    );
  }

  changeSelection = selection => {
    this.props.filterSelectUpdate(selection.map(option => option.value));
  }
}

export default connect(state => ({
  articles: mapToArr(state.articles.entities),
  selection: state.filterState.selection
}), {filterSelectUpdate})(SelectFilter);
