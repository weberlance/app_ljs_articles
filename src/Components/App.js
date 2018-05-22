import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import {Provider} from 'react-redux';

import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
import Filters from './Filters'

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

export default class App extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div>
            <div>
              <h1>MainMenu</h1>
              <div><NavLink activeStyle={{color:"#f55"}} to="/counter">Counter</NavLink></div>
              <div><NavLink activeStyle={{color:"#f55"}} to="/filters">Filters</NavLink></div>
              <div><NavLink activeStyle={{color:"#f55"}} to="/articles">Articles</NavLink></div>
            </div>

            <UserForm />
            <Route path = "/counter" component = {Counter}/>
            <Route path = "/filters" component = {Filters}/>
            <Route path = "/articles" component = {ArticleList}/>
          </div>
        </Router>
      </Provider>
    );
  }

}
