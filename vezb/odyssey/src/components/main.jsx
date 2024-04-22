import React from "react";
import { useState } from "react";
import pc from "./pics/pc.png";
import cart from "./pics/cart.png";

function Main() {
  const [name, setName] = useState("");

  const [code, setCode] = useState(false);

  const [age, setAge] = useState();

  const [cartt, setCart] = useState(0);

  const handleCartChange = () => {
    setCart(cartt + 1);
  };

  function handleSetAge(e) {
    setAge(e.target.value);
  }

  const handleClick = () => {
    setCode(!code);
  };

  function handleSetName(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <header>
        <h1>Header</h1>
        <img src={cart} alt="" />
        <h3>{cartt}</h3>
      </header>
      <main>
        <section>
          <input
            value={name}
            onChange={handleSetName}
            type="text"
            placeholder="John Smith"
          />
          <br />
          <input
            value={age}
            onChange={handleSetAge}
            type="number"
            placeholder="25"
          />
          <h2>Name: {name}</h2>
          <h2>Age: {age}</h2>
          <p>--------------------------------------</p>
          <h3>Mastercard code</h3>
          <button onClick={handleClick}>Show</button>
          {code && <h3>3600-4600-3456-9686</h3>}
          <p>--------------------------------------</p>
          <img src={pc} alt="pcimage" />
          <p>$1299</p>
          <h3>To cart</h3> <button onClick={handleCartChange}>Add</button>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Main;
