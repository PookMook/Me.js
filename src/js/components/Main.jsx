import React, { Component } from 'react';
// components
import {Header} from './Header.jsx';



export function MainDiv (props) {
    return (
      <div id="page">
        <Header {...props}/>
        {props.children}
      </div>
    );
}
