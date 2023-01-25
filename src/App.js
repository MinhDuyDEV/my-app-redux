import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>The counter from app: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
