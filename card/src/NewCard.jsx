import React from "react";
import "./newCard.css";
function NewCard() {
  return (
    <>
      <div className="form">
        <form>
          <label>
            Title : <input type="text" />
          </label>
          <br />
          <br />
          <label>
            Img Link : <input type="text" />
          </label>
          <br />
          <br />
          <label>
            Button Link : <input type="text" />
          </label>
          <br />
          <br />
          <button>Add Card</button>
        </form>
      </div>
    </>
  );
}

export default NewCard;
