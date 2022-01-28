import React, { useState } from "react";

function Card(props) {
  const [title, setTitle] = useState(props.title);

  function changeTitle() {
    setTitle("Uppdated!!!");
  }
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} alt="" />
        <h3>{title}</h3>
        <p>
          Just add your desired image size (width & height) after our URL, and
          you'll get a random image.
        </p>
        <a href={props.link}>Read More </a>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </>
  );
}

export default Card;