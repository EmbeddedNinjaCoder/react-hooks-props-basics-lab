import React from "react";

function Links(props) {
  console.log(props.git);
  console.log(props.linked);
  //console.log(props);
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={props.git}>https://github.com/liza</a>
      <a href={props.linked}>https://www.linkedin.com/in/liza/</a>
    </div>
  );
}

export default Links;
