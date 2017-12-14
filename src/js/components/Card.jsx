import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="card">
          <h3>{this.props.object.title}</h3>
          <p>{this.props.object.description}</p>
          <p>Scope: {this.props.object.scope}</p>
          <p>Progression: {this.props.object.version}</p>
          {this.props.object.exemples ? <ul>Examples: {this.props.object.exemples.map((o,i)=>(<li key={"exemple"+this.props.index+"-"+i}><a href={o} target="_blank"className="list">{o}</a></li>))}</ul> : ''}
        <a href={this.props.object.link} target="_blank" className="external">{this.props.object.link}</a>
      </article>
    );
  }
}
