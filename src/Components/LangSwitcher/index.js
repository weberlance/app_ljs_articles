import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Translate from '../Translate';
import Select from 'react-select';
import {langSwitch} from '../../AC';

class LangSwitcher extends React.Component {
  static propTypes = {

  }

  static contextTypes = {
    langs: PropTypes.object
  }

  handleChange = selection => {
    this.props.langSwitch(selection.value);
  }

  render() {
    const {lang} = this.props;
    const {langs} = this.context;
    const options = Object.keys(langs).map(lang => ({
        value: lang,
        label: langs[lang].langName || lang
      }));
    const styles = {
      maxWidth: '500px',
      padding: '3px',
      margin: 'auto',
      boxShadow: 'inset 0 0 10px #69c',
      textAlign: 'center'
    };
    return (
      <div style={styles}>
        <h2><Translate value="langChoose" /></h2>
        <Select
          name="langList"
          value={lang}
          onChange={this.handleChange}
          options={options}
          clearable={false}
        />
      </div>
    );
  }
}

export default connect(state => ({
  lang: state.lang
}), {langSwitch})(LangSwitcher);