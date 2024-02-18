function WGOA() {
  // jos onChange da se doda za btns i prikaz slike posle Yes
  return (
    <div className="box">
      <h1>Will you go out with me? :3</h1>

      <img src="./pics/ask.gif" alt="cute animal" className="img1" />

      <div className="buttons">
        <button className="yesBtn">Yes</button>
        <button className="noBtn">No</button>
      </div>
    </div>
  );
}

export default WGOA;
