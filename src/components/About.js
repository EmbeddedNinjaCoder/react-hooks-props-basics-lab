import React from "react";
import Links from "./Links";

function About(props) {
  // console.log(props.github);
  // console.log(props.linkedin);
  //console.log(props.bio);

  if (props.bio === undefined || props.bio === "") {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links git={props.github} linked={props.linkedin} />
      </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links git={props.github} linked={props.linkedin} />
      </div>
    );
  }

  // return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     <p>{props.bio}</p>
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     {/* add your <Links /> component here */}
  //   </div>
  // );
}

export default About;
