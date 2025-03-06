import React from "react";
import logo from "../assets/Morya-Computer.png";

const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <img src={logo} alt="Morya Computers Logo" className="w-40 mb-4" />
      <h1 className="text-4xl font-bold">Morya Computers & Services</h1>

       {/* Owner Name */}
       <p className="text-lg mt-4 font-semibold">Owner: Prashant Sunil More</p>
        {/* Contact Details */}
      <p className="text-lg mt-2">📞 +91 9876543210</p>
      <p className="text-lg">📧 more36101@gmail.com</p>
    </section>
  );
};

export default HeroSection;