import React from 'react';
import PropTypes from 'prop-types';

import languages from '../languages';

import store from '../store';
import {Provider} from 'react-redux';

import Articles from './routes/articles';
import UserForm from './UserForm';
import Counter from './Counter';
import Filters from './Filters';
import NotFound from './NotFound';
import LangSwitcher from './LangSwitcher';
import Translate from './Translate';
import PageComments from './routes/PageComments';

import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';

export default class App extends React.Component {
  static propTypes = {

  }

  static childContextTypes = {
    langs: PropTypes.object
  }

  getChildContext() {
    return {
      langs: languages
    };
  }

  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div>
            <div>
              <LangSwitcher />
              <h1><Translate value="mainMenu" /></h1>
              <div><NavLink activeStyle={{color:"#f55"}} to="/counter"><Translate value="counter" /></NavLink></div>
              <div><NavLink activeStyle={{color:"#f55"}} to="/filters"><Translate value="filters" /></NavLink></div>
              <div><NavLink activeStyle={{color:"#f55"}} to="/articles"><Translate value="articles" /></NavLink></div>
              <div><NavLink activeStyle={{color:"#f55"}} to="/comments/1"><Translate value="comments" /></NavLink></div>
            </div>

            <UserForm />
            <Switch>
              <Route path = "/counter" component = {Counter}/>
              <Route path = "/filters" component = {Filters}/>
              <Route path = "/articles" component = {Articles}/>
              <Route path = "/comments" component = {PageComments}/>
            {/*<Redirect from = "/comments" to = "/comments/1"/>*/}
              <Route path = "*" component = {NotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }

}
