import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "IT Infrastructure", icon: "💻" },
  { name: "Networking Solutions", icon: "🌐" },
  { name: "Cloud Services", icon: "☁️" },
  { name: "Cybersecurity", icon: "🔒" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <h2 className="text-center text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {services.map((service) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={service.name}
            className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
          >
            <span className="text-4xl">{service.icon}</span>
            <h3 className="mt-4 text-lg font-semibold">{service.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
