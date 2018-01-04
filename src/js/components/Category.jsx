import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Main} from './CVline.jsx';

export function Category (props) {
    const lang = props.params.lang || store.getState().infos.default.lang;
    const infos = store.getState().infos[lang].data;
    document.title = props.params.category + " | "+store.getState().infos[lang].meta.name;
    return (
      <div>
        {!infos || !infos[props.params.category] && <p>404, category not found</p>}
        {infos && infos[props.params.category] && Object.keys(infos[props.params.category]).map(function(object,i){
          return (
            <section key={props.params.category+i}>
              <h2>{object}</h2>
              {infos[props.params.category][object].map((sub,j)=>(<Main object={sub} key={props.params.category+"line"+i+"-"+j} />))}
            </section>
          );
        })}
      </div>
    );
}
