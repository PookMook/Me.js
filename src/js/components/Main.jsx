import React, { Component } from 'react';
// components
import Header from './Header.jsx';
import Portfolio from './Portfolio.jsx';



export class MainDiv extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
