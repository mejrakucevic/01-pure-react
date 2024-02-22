import React, { useState } from "react";

function Practice() {
  const [showImage, setShowImg] = useState(false);

  const [showBtn, setShowBtn] = useState(true);

  const handleClick = () => {
    setShowImg(true);
    setShowBtn(false);
  };

  return (
    <>
      <div className="container">
        {showBtn && <button onClick={handleClick}>Click me!</button>}
        {showImage && <img src="./pics/frankie.jpg" alt="frank ocean"></img>}
      </div>
    </>
  );
}

export default Practice;
