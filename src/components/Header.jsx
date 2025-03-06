import React from "react";
import logo from "../images/Morya-Computer.png"; // Ensure logo is in assets folder

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center z-50">
      <img src={logo} alt="Morya Computers Logo" className="h-12 mr-3" />
      <h1 className="text-2xl font-bold text-gray-900">Morya Computers & Services</h1>
    </header>
  );
};

export default Header;
