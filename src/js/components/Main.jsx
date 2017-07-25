import React, { Component } from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
// components

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="page">
        <Header/>
        <p>MAIN</p>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
