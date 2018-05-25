import React from 'react';
import PropTypes from 'prop-types';
import Translate from '../Translate';

function Loader(props){
  return (
    <h1><Translate value="loading" /></h1>
  );
}

Loader.propTypes = {};

export default Loader;