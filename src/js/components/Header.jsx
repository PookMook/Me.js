import React, { Component } from 'react';
import { store } from '../redux/store.js';
import { Link } from 'react-router';

export function Header (props) {
    const lang = props.params.lang || store.getState().infos.default.lang;
    let infos = store.getState().infos.languages[lang].meta;
    let data = store.getState().infos.languages[lang].data;
    return (
      <header>
        <nav>
          {Object.keys(data).map((cat)=>
            (<Link to={"/"+lang+"/"+cat} key={"category"+cat} activeStyle={{ 'fontWeight': 'bold' }}>{cat}</Link>)
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
