import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <>
   <h1>Lucky number is { Math.floor(Math.random()*10)}</h1>
  </>,
  document.getElementById("root")
);
