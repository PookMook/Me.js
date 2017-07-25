import React, { Component } from 'react';
import { store } from '../redux/store.js';

export class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infos = store.getState().infos[0];
    return (
      <article className="line">
        <p>{this.props.object.date}</p>
        <div>
          <h3>{this.props.object.institution}</h3>
          <p><strong>{this.props.object.level}</strong> {this.props.object.title}</p>
        </div>
        <p>{this.props.object.city}</p>
      </article>
    );
  }
}
export class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infos = store.getState().infos[0];
    return (
      <article className="line">
        <p>{this.props.object.date}</p>
        <div>
          <h3>{this.props.object.title}</h3>
          {this.props.object.description.split('\n').map((o,i)=>(<p key={"experience"+this.props.index+"-"+i}>{o}</p>))}
        </div>
        <p>{this.props.object.city}</p>
      </article>
    );
  }
}
export class Achievement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infos = store.getState().infos[0];
    return (
      <article className="achivement">
        <h3>{this.props.object.title}</h3>
        <p>{this.props.object.description}</p>
        <p>Required : <u>{this.props.object.required}</u></p>
      </article>
    );
  }
}
