import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const currenTime = date.getHours();
let greeting = null;


let customStyle ={
  color:""
};


if(currenTime<12){
  greeting = "Good Morning";
  customStyle.color="red";
}
else if(currenTime<18){
  greeting = "Good afternoon";
  customStyle.color="yellow";
}

else {
  greeting = "Good evening";
  customStyle.color="blue";
}

ReactDOM.render(
  <>
    <h1 style={customStyle}>
      {greeting}
      </h1>
    
  </>,
  document.getElementById("root")
);
