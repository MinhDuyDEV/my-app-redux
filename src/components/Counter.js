import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue(10));
  };
  return (
    <div className="flex flex-col items-center p-5 shadow bg-white font-semibold text-lg w-[400px] mt-10 mx-auto">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border rounded-lg border-blue-200 hover:bg-blue-400"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border rounded-lg border-blue-200 hover:bg-blue-400"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border rounded-lg border-blue-200 hover:bg-blue-400"
          onClick={handleIncrementByValue}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
