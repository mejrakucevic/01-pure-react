import React, { useState } from "react";

function Practice() {
  const [name, setName] = useState("Guest");

  const updateName = () => {
    setName("Mejra");
  };

  return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default Practice;
