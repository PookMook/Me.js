import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Main, Education, Experience, Achievement,SkillSet} from './CVline.jsx';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.infos = store.getState().infos['en'];
  }

  componentWillMount(){
    document.title = "Resume | "+this.infos.name;
  }

  render() {
    const infos = this.infos;
    return (
      <div>
        {Object.keys(infos.Resume).map(function(object,i){
          return (
            <section key={'resume'+i}>
              <h2>{object}</h2>
              {infos.Resume[object].map((sub)=>(<Main object={sub} />))}
            </section>
          );
        })}
      </div>
    );
  }
}
