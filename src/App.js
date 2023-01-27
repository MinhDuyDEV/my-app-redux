import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import Card from "./uis/Card";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("🚀 ~ file: App.js:9 ~ App ~ globalOptions", globalOptions);
  const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode());
  const [darkMode, setDarkMode] = useDarkMode();
  // };
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log("🚀 ~ file: App.js:14 ~ App ~ darkMode", darkMode);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <div>
      <Card></Card>
      <button
        onClick={handleToggleDarkMode}
        className="p-3 mt-10 bg-blue-500 rounded-lg"
      >
        Toggle dark mode
      </button>
    </div>
  );
}

export default App;
