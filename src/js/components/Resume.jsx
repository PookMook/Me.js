import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Main} from './CVline.jsx';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Resume | "+store.getState().infos['en'].meta.name;
  }

  render() {
    const infos = store.getState().infos['en'];
    return (
      <div>
        {Object.keys(infos.Resume).map(function(object,i){
          return (
            <section key={'resume'+i}>
              <h2>{object}</h2>
              {infos.Resume[object].map((sub,j)=>(<Main object={sub} key={"resumeline"+i+"-"+j} />))}
            </section>
          );
        })}
      </div>
    );
  }
}
