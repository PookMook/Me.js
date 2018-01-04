import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Main} from './CVline.jsx';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Portfolio | "+store.getState().infos['en'].name;
  }

  render() {
    const infos = store.getState().infos['en'];
    return (
      <div>
        {Object.keys(infos.Portfolio).map(function(object,i){
          return (
            <section key={'Portfolio'+i}>
              <h2>{object}</h2>
              {infos.Portfolio[object].map((sub,j)=>(<Main object={sub} key={"Portfolioline"+i+"-"+j} />))}
            </section>
          );
        })}
      </div>
    );
  }
}
