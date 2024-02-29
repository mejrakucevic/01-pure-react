// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const Increment = () => {
//     setCount(count + 1);
//   };

//   const Decrement = () => {
//     setCount(count - 1);
//   };

//   const Reset = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>{count}</h1>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//         <button onClick={Reset}>Reset</button>
//       </div>
//     </>
//   );
// }

// export default Counter;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
