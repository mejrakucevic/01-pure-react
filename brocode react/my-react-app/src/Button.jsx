function Button() {
  // let count = 0;
  // const handleClick = () => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`You clicked me ${count} times`);
  //   } else console.log(`Stop clicking me brah`);
  // };

  const handleClick = (event) => {
    event.target.textContent = "OUCH";
    return <img src="./pics/happy.gif" alt="" />;
  };
  return (
    <>
      <div className="container">
        <button onClick={(event) => handleClick(event)}>Click Me 🔪🩸</button>
      </div>
    </>
  );
}

// const clickHandler = (e) => {
//   e.target.textContent = "BOOOOOOOOOOOOOOOOO";
// };
// return (
//   <>
//     <button onClick={(e) => clickHandler(e)}>Click me</button>
//   </>
// );

export default Button;
