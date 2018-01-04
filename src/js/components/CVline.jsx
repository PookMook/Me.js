import React, { Component } from 'react';


export function Main(props){
  switch(props.object.cardType){
    case "Skillset":
      return(<SkillSet {...props}/>);
    break;

    case "Experience":
      return(<Experience {...props}/>);
    break;

    case "Education":
      return(<Education {...props}/>);
    break;

    case "Project":
      return(<Project {...props}/>);
    break;

    case "Achievement":
      return(<Achievement {...props}/>);
    break;

    case "Hobby":
      return(<Hobby {...props}/>);
    break;

    default:
      return(<p>{JSON.stringify(props.object)}</p>);
    break;
  }
}


export function Education (props) {
    return (
      <article className="line">
        <p>{props.object.date}</p>
        <div>
          <h3>{props.object.institution}</h3>
          <p><strong>{props.object.level}</strong> {props.object.title}</p>
        </div>
        <p>{props.object.city}</p>
      </article>
    );
}
export function Experience (props) {
    return (
      <article className="line">
        <p>{props.object.date}</p>
        <div>
          <h3>{props.object.title}</h3>
          {props.object.description.split('\n').map((o,i)=>(<p key={"experience"+props.index+"-"+i}>{o}</p>))}
        </div>
        <p>{props.object.city}</p>
      </article>
    );
}
export function Achievement (props) {
    return (
      <article className="achivement">
        <h3>{props.object.title}</h3>
        <p>{props.object.description}</p>
        <p>Required : <u>{props.object.required}</u></p>
      </article>
    );
}

export function SkillSet (props) {
    return (
      <article>
        <p>
          <strong>{props.object.title}</strong> : {props.object.subskills.join(', ')}
        </p>
      </article>
    );
}

export function Project (props) {
    return (
      <article className="card">
          <h3>{props.object.title}</h3>
          <p>{props.object.description}</p>
          <p>Scope: {props.object.scope}</p>
          <p>Progression: {props.object.version}</p>
          {props.object.exemples ? <ul>Examples: {props.object.exemples.map((o,i)=>(<li key={"exemple"+props.index+"-"+i}><a href={o} target="_blank"className="list">{o}</a></li>))}</ul> : ''}
        <a href={props.object.link} target="_blank" className="external">{props.object.link}</a>
      </article>
    );
}
export function Hobby (props) {
  return(
    <article>
      <h3>{props.object.title}</h3>
      <p>{props.object.description}</p>
    </article>
  )
}
