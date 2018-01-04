import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Main} from './CVline.jsx';

export function Category (props) {
    const infos = store.getState().infos['en'].data;
    document.title = props.params.category + " | "+store.getState().infos['en'].meta.name;
    return (
      <div>
        {Object.keys(infos[props.params.category]).map(function(object,i){
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
