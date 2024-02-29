import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} type="text" />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          name="text"
          id=""
          cols="30"
          rows="10"
          onChange={handleComment}
        ></textarea>
        <p>{comment}</p>
      </div>
    </>
  );
}

export default OnChange;
