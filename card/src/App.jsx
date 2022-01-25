import React from "react";
import Card from "./Card";
import "./style.css";
import Data from "./Data";

function myFunction(val) {
  return <Card imgSrc={val.img} title={val.title} link={val.link} />;
}

function App() {
  return (
    <>
      <div className="cards">{Data.map(myFunction)}</div>
    </>
  );
}

export default App;