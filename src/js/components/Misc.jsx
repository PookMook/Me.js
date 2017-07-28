import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Achievement} from './CVline.jsx';

export default class Misc extends React.Component {
  constructor(props) {
    super(props);
    this.infos = store.getState().infos[0];
  }

  componentWillMount(){
    document.title = "Misc | "+this.infos.name;
  }

  render() {
    return (
      <div>
        <section>
        <h2>Achievements</h2>
        {this.infos.achievements.map((o,i)=>(<Achievement key={"achievements"+i} object={o} />))}
        </section>
        <section>
        <h2>Hobbies</h2>
        {this.infos.hobbies.map((o,i)=>(<article key={"hobbies"+i}><h3>{o.title}</h3><p>{o.description}</p></article>))}
        </section>
      </div>
    );
  }
}
