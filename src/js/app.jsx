import '../css/demo.css'
import 'font-awesome-webpack'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { store } from './redux/store.js';
import { Main } from './components/Main.jsx';
import { Resume } from './components/Resume.jsx';
import { Portfolio } from './components/Portfolio.jsx';

import _ from 'lodash';

function renderApp(){
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/resume" component={Resume} />
          <IndexRedirect to="resume"/>
        </Route>
      </Router>
    </Provider>,
    document.querySelector('#app'));
  }

  renderApp();
  store.subscribe(renderApp);
