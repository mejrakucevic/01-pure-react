import React, { useState } from "react";

function Practice() {
  // const [name, setName] = useState("Guest");
  // const updateName = () => {
  //   setName("Mejra");
  // };
  // return (
  //   <div>
  //     <p>Name: {name} </p>
  //     <button onClick={updateName}>Set Name</button>
  //   </div>
  // );
  // const [attribute, setAttribute] = useState("");
  // const handleClick = () => {
  //   setAttribute("depresed lol");
  // };
  // return (
  //   <>
  //     <div className="container">
  //       <h1>Do you like Conan gray?</h1>
  //       <button onClick={handleClick}>Yes</button>
  //       <h2>You're...{attribute}</h2>
  //     </div>
  //   </>
  // );

  const [increment, setIncrement] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const incrementer = () => {
    setIncrement(increment + 1);
  };

  const employed = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <>
      <div className="container">
        <h1>Number Incrementer</h1>

        <h2>Counter: {increment}</h2>
        <button onClick={incrementer}>+</button>

        <p>Is an adult: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={employed}></button>
      </div>
    </>
  );
}

export default Practice;
