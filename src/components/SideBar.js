import React from "react";
import { useSelector } from "react-redux";
const links = ["Dashboard", "E-commerce", "Super market", "Long vision"];
const Sidebar = () => {
  const { showSideBar } = useSelector((state) => state.global);
  return (
    <div
      className={`w-[300px] bg-white rounded shadow-lg fixed top-5 left-5 bottom-5 transition-all ${
        showSideBar ? "" : "-translate-x-[200%]"
      }`}
    >
      {links.map((item) => (
        <div className="p-4 cursor-pointer hover:bg-gray-50" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
