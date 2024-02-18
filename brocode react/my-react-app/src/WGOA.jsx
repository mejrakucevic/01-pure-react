import { useState } from "react";

function WGOA() {
  const [showImage, setShowImage] = useState(false);

  const handleBtnClick = () => {
    setShowImage(true);
  };

  const alertMsg = () => {
    alert("Yay!! Cant wait!");
  };
  // jos onChange da se doda za btns i prikaz slike posle Yes
  return (
    <div className="box">
      <h1>Will you go out with me? :3</h1>

      {!showImage && (
        <img src="./pics/ask.gif" alt="cute animal" className="img1"></img>
      )}

      {showImage && (
        <img src="./pics/happy.gif" alt="cute animal" className="img2"></img>
      )}

      <div className="buttons">
        <button className="yesBtn" onClick={handleBtnClick} {alertMsg}>
          Yes
        </button>
        <button className="noBtn">No</button>
      </div>
    </div>
  );
}

export default WGOA;
