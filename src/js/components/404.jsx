import React, { Component } from 'react';
import { Link } from 'react-router';

export function NotFound (props) {
  const languages = props.object;
  const langDEF = Object.keys(languages)[0];
  const catDEF = Object.keys(languages[langDEF].data)[0];
  return(
    <div id="page">
      <header>
        <nav>
          <div className="spacer"></div>
          {Object.keys(languages).length > 1 && Object.keys(languages).map((language)=>(
            <Link to={"/"+language+"/"+Object.keys(languages[language].data)[0]} key={language+"category"} title={language}>{language}</Link>
          ))}
        </nav>
        <h1>No language "{props.params.lang}" found</h1>
        <p>You might be interested in :</p>
        {Object.keys(languages).map((language)=>(
          <ul className="failed" key={"suggestion"+language}>
            {Object.keys(languages[language].data).map((cat,i)=>(<li key={"sugCat"+language+"-"+i}>
            <Link to={'/'+language+'/'+cat}>/{language}/{cat}</Link>
            </li>))}
          </ul>
        ))}
      </header>
    </div>
  );
}
