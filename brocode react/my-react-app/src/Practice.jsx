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

  const [attribute, setAttribute] = useState("");
  const [attribute2, setAttribute2] = useState("");

  const handleClick = () => {
    setAttribute("depresed lol");
  };

  const handleClick2 = () => {
    setAttribute2("also depressed but probably wholesome");
  };
  return (
    <>
      <div className="container">
        <h1>Do you like Conan gray?</h1>
        <button onClick={handleClick}>Yes</button>
        <h2>You're...{attribute}</h2>
        <div className="container2">
          <h1>How about Clairo?</h1>
          <button onClick={handleClick2}>Yes</button>
          <h2>You're...{attribute2}</h2>
        </div>
      </div>
    </>
  );
}

export default Practice;
