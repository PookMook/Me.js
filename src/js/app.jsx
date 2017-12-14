import '../css/demo.css'
import '../data.json'
import 'font-awesome-webpack'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { store } from './redux/store.js';
import { MainDiv } from './components/Main.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Misc from './components/Misc.jsx';
require('./../logo.png');

import _ from 'lodash';

function renderApp(){
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainDiv}>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/misc" component={Misc} />
          <IndexRedirect to="/resume"/>
        </Route>
      </Router>
    </Provider>,
    document.querySelector('#app'));
  }

let resolveFirst = [];
resolveFirst.push(fetch("/data.json",
{
    method: "GET",
    credentials: 'same-origin'
})
.then(function(res){
  if(!res.ok){throw res.json();}
  return res.json()})
.then(function(data){
  store.dispatch({type:'LOADJSON',payload:data});
  return null})
.catch(()=>(null)));
Promise.all(resolveFirst).then(renderApp).then(function(){
  store.subscribe(renderApp);
});
