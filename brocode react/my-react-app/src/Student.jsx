function Question1() {
  function sayHello() {
    let evermore = 1;

    if (evermore >= 1) {
      alert("Evermore!");
    }
  }

  return (
    <>
      <h1 className="question">What is your favourite month of the year?</h1>
      <div className="buttons">
        <button className="btn" onClick={sayHello}>
          Autumn
        </button>
        <button className="btn">Winter</button>
        <button className="btn">Summer</button>{" "}
      </div>
    </>
  );
}

// Questions.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   Student: PropTypes.bool,
// };

export default Question1;
