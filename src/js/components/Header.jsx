import React, { Component } from 'react';
import { store } from '../redux/store.js';
import { Link } from 'react-router';

export function Header (props) {
    const lang = props.params.lang || Object.keys(store.getState().infos)[0];
    const languages = store.getState().infos;
    const infos = languages[lang].meta;
    const data = languages[lang].data;
    return (
      <header>
        <nav>
          {Object.keys(data).map((cat)=>
            (<Link to={"/"+lang+"/"+cat} key={"category"+cat} activeStyle={{ 'fontWeight': 'bold' }}>{cat}</Link>)
          )}
          {Object.keys(languages).length > 1 && Object.keys(languages).map((language)=>(
            <Link to={"/"+language+"/"+Object.keys(languages[language].data)[0]} key={language+"category"} activeStyle={{ 'fontWeight': 'bold' }}>{language}</Link>
          ))}
        </nav>
        <h1>{infos.name}</h1>
        <p>{infos.location}</p>
        {infos.contact? <p>{infos.contact}</p>:''}
        {infos.summary.split('\n').map((o,i)=>(<p key={"summary"+i}>{o}</p>))}
        <p>{infos.languages}</p>
      </header>
    );
}
