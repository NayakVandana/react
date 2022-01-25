import React from 'react';
import ReactDOM from 'react-dom';
import * as comp from "./App";


ReactDOM.render(
  <>
    {comp.pi}
    {comp.Add(10,20)}
    {comp.Sub(10,5)}
    {comp.Mul(5,5)}
  </>,
  document.getElementById("root")
);
