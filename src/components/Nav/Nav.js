import React from "react";
import logo from "../../assets/rod.png";

const Nav = () => {
  return (
    <div className="h-12 bg-gray-600 text-white flex justify-center items-center">
      <img src={logo} alt="logo" className="w-10 cursor-pointer" />
    </div>
  );
};

export default Nav;
