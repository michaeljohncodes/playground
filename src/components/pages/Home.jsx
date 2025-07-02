import { useState } from "react";
// import Button from "../reuseable/Button";

const Home = () => {
  const [myCounter, setMyCounter] = useState(2);
  const [squareRoot, setSquareRoot] = useState(false);

  const increaseCounter = () => {
    setMyCounter(myCounter + 1);
  };

  const decreaseCounter = () => {
    setMyCounter(myCounter - 1);
  };

  const showSqrt = () => {
    setSquareRoot(!squareRoot);
  };

  return (
    <div>
      <h1>current count = {myCounter}</h1>
      <button
        onClick={increaseCounter}
        style={{
          background: "red",
          color: "white",
          fontSize: "10px",
          padding: "10px",
          marginRight: "10px",
        }}
      >
        Increase count
      </button>
      <button
        onClick={decreaseCounter}
        style={{
          background: "black",
          color: "white",
          fontSize: "10px",
          padding: "10px",
          marginRight: "10px",
        }}
      >
        Decrease count
      </button>

      <button
        onClick={showSqrt}
        style={{
          background: "black",
          color: "white",
          fontSize: "10px",
          padding: "10px",
        }}
      >
        {squareRoot ? "Hide SquareRoot" : "Show SquareRoot"}
      </button>
      {squareRoot ? (
        <div className="bg-amber-400 w-70">
          square root of count is {Math.pow(myCounter, 2)}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
