import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Translate extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  }

  static contextTypes = {
    langs: PropTypes.object
  }

  render() {
    return (
      <span>{this.getTranslate()}</span>
    );
  }

  getTranslate = () => {
    const {value, lang} = this.props;
    const {langs} = this.context;
    return langs[lang][value] || value;
  }
}

export default connect(state => ({
  lang: state.lang
}))(Translate);