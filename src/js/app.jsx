import '../css/demo.css'
import 'font-awesome-webpack'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { store } from './redux/store.js';
import { MainDiv } from './components/Main.jsx';
import {Category} from './components/Category.jsx';
require('./../logo.png');

import _ from 'lodash';

function renderApp(){
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainDiv}>
          <Route path="/:category" component={Category} />
          <Route path="/:lang/:category" component={Category} />
          <IndexRedirect to={"/"+store.getState().infos.default.lang+"/"+store.getState().infos.default.path}/>
        </Route>
      </Router>
    </Provider>,
    document.querySelector('#app'));
  }

renderApp();
