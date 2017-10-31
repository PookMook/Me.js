import React, { Component } from 'react';
import { store } from '../redux/store.js';
import {Education, Experience, Achievement} from './CVline.jsx';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.infos = store.getState().infos[0];
  }

  componentWillMount(){
    document.title = "Resume | "+this.infos.name;
  }

  render() {
    return (
      <div>
        <section>
          <h2>Skillsets</h2>
          {this.infos.skills.map((o,i)=>(<article key={"skillset"+i}><p><strong>{o.title}</strong> : {o.subskills.join(', ')} </p></article>))}
        </section>
        <section>
        <h2>Experiences</h2>
        {this.infos.experiences.map((o,i)=>(<Experience key={"xp"+i} object={o} index={i}/>))}
        </section>
        <section>
          <h2>Education</h2>
          {this.infos.education.map((o,i)=>(<Education key={"education"+i} object={o}/>))}
        </section>
      </div>
    );
  }
}
