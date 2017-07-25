import React, { Component } from 'react';
import { store } from '../redux/store.js';
import { Card } from './Card.jsx';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.infos = store.getState().infos[0];
  }

  componentWillMount(){
    document.title = "Portfolio | "+this.infos.name;
  }

  render() {
    return (
      <div>
        <section>
        <h2>Active projects</h2>
        {this.infos.activeProject.map((o,i)=>(<Card key={"xp"+i} object={o} index={i}/>))}
        </section>
        <section>
        <h2>Past Projects</h2>
        {this.infos.portfolio.map((o,i)=>(<Card key={"xp"+i} object={o} index={i}/>))}
        </section>
      </div>
    );
  }
}
