import React from "react";
import { useState } from "react";
import pc from "./pics/pc.png";
import cart from "./pics/cart.png";
import "../App.css";

function Main() {
  const [name, setName] = useState("");

  const [code, setCode] = useState(false);

  const [age, setAge] = useState();

  const [cartt, setCart] = useState(0);

  const [comm, setComm] = useState();

  function handleCommentInput(e) {
    setComm(e.target.value);
  }

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

  const [pcs, setPcs] = useState([]);
  const [pcId, setpcId] = useState("");
  const [pcYear, setpcYear] = useState(new Date().getFullYear());
  const [pcBrand, setpcBrand] = useState("");

  function handleAddPc() {
    const newPc = { idd: pcId, year: pcYear, brand: pcBrand };

    setPcs((p) => [...p, newPc]);
  }

  function handleRemovePc(index) {}

  function handleIdChange(e) {
    setpcId(e.target.value);
  }

  function handleYearChange(e) {
    setpcYear(e.target.value);
  }

  function handleBrandChange(e) {
    setpcBrand(e.target.value);
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
          <h2 className="cmt">Let us know what you think!</h2>
          <textarea
            onChange={handleCommentInput}
            value={comm}
            placeholder="your comment here!"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <p>{comm}</p>
          <div className="arrays">
            <ul>
              {pcs.map((pc, index) => (
                <li key={index}>
                  {pc.idd} {pc.year} {pc.brand}
                </li>
              ))}
            </ul>
            <h1>Add your pc</h1>
            <input
              type="text"
              placeholder="Model ID"
              value={pcId}
              onChange={handleIdChange}
            />
            <br />
            <input
              type="number"
              placeholder="Production Date"
              value={pcYear}
              onChange={handleYearChange}
            />
            <br />
            <input
              type="text"
              placeholder="Brand ID"
              value={pcBrand}
              onChange={handleBrandChange}
            />
            <br />
            <button onClick={handleAddPc}>Add</button>
          </div>
        </section>

        <p>--------------------------------------</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Main;
