import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Main} from './CVline.jsx';

export default class Misc extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Misc | "+store.getState().infos['en'].meta.name;
  }

  render() {
    const infos = store.getState().infos['en'];
    return (
      <div>
        {Object.keys(infos.Misc).map(function(object,i){
          return (
            <section key={'Misc'+i}>
              <h2>{object}</h2>
              {infos.Misc[object].map((sub,j)=>(<Main object={sub} key={"Miscline"+i+"-"+j} />))}
            </section>
          );
        })}
      </div>
    );
  }
}
