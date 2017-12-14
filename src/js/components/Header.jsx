import React, { Component } from 'react';
import { store } from '../redux/store.js';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infos = store.getState().infos[0];
    return (
      <header>
        <nav>
          <Link to="/resume" activeStyle={{ 'fontWeight': 'bold' }}>Resume</Link>
          <Link to="/portfolio" activeStyle={{ 'fontWeight': 'bold' }}>Portfolio</Link>
          <Link to="/misc" activeStyle={{ 'fontWeight': 'bold' }}>Misc</Link>
        </nav>
        <h1>{infos.name}</h1>
        <p>{infos.location}</p>
        {infos.contact? <p>{infos.contact}</p>:''}
        {infos.summary.split('\n').map((o,i)=>(<p key={"summary"+i}>{o}</p>))}
        <p>{infos.languages}</p>
      </header>
    );
  }
}
