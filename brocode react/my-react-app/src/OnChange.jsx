import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [card, setCard] = useState("");
  const [shipping, setShipping] = useState("");

  function handleShipping(event) {
    setShipping(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handleCardChange(event) {
    setCard(event.target.value);
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
        <select name="" id="" value={card} onChange={handleCardChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Gifcard</option>
        </select>
        <p>Payment Method: {card}</p>
        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShipping}
          />
          Pick up{" "}
        </label>{" "}
        <br />
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShipping}
        />
        <label>Delivery</label>
        <p>Shipping Method: {shipping}</p>
      </div>
    </>
  );
}

export default OnChange;
