import React from "react";
import AnimatedSection from "./AnimatedSection";

const products = [
  "4G SIM Camera (2 Lens)",
  "Old & New Laptops & PC Repair/Sales",
  "Electric Item Parts Selling & Repair",
  "CCTV & WiFi Setup",
  "Online Services & Money Transfer",
  "Windows Installation & WiFi Fitting",
];

const ProductsServices = () => {
  return (
    <section id="services" className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Products & Services</h2>
      <ul className="max-w-2xl mx-auto">
        {products.map((item, index) => (
          <li key={index} className="py-2 border-b border-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsServices;
