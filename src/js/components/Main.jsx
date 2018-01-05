import React, { Component } from 'react';
import { store } from '../redux/store.js';
import { Link } from 'react-router';
// components
import {Header} from './Header.jsx';
import {NotFound} from './404.jsx';



export function MainDiv (props) {

  const lang = props.params.lang || Object.keys(store.getState().infos)[0];
  const languages = store.getState().infos;

  //Check if language exist in the init, and Redirect if not
  if(!languages[lang]){
    return (
      <NotFound {...props} object={store.getState().infos} />
    );
  }



    return (
      <div id="page">
        <Header {...props}/>
        {props.children}
      </div>
    );
}
