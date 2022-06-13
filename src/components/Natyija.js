import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "../redux/Counter";
import { useDispatch } from "react-redux";
const Natyija = () => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);
  return (
    <div className="natija">
      <h1>{store.counter.data}</h1>
      <button
        style={{
          width: "100px",
          height: "50px",
          border: "none",
          color: "white",
          background: "crimson",
        }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        style={{
          width: "100px",
          height: "50px",
          border: "none",
          color: "white",
          background: "blue",
        }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Natyija;
