import React, { Component } from 'react';
import { store } from '../redux/store.js';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infos = store.getState().infos['en'].meta;
    let data = store.getState().infos['en'].data;
    return (
      <header>
        <nav>
          {Object.keys(data).map((cat)=>
            (<Link to={"/"+cat} key={"category"+cat} activeStyle={{ 'fontWeight': 'bold' }}>{cat}</Link>)
          )}
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
