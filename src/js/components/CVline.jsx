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
