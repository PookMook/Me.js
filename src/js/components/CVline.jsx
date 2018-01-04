import React, { Component } from 'react';


export function Main(props){
  if(props.object.cardType == "Skillset"){
    return(<SkillSet object={props.object}/>);
  }
  else if(props.object.cardType === "Experience"){
    return(<Experience object={props.object}/>);
  }
  else if(props.object.cardType === "Education"){
    return(<Education object={props.object}/>);
  }
  else{
    return(<p>{JSON.stringify(props.object)}</p>)
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
