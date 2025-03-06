import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile menu toggle icon

const sections = [
  { name: "Home", id: "home", color: "from-red-400 to-red-600" },
  { name: "About", id: "about", color: "from-blue-400 to-blue-600" },
  { name: "Services", id: "services", color: "from-green-400 to-green-600" },
  { name: "Gallery", id: "gallery", color: "from-purple-400 to-purple-600" },
  { name: "Payment", id: "payment", color: "from-yellow-400 to-yellow-600" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="fixed top-0 left-0 w-full z-50 p-4 backdrop-blur-lg bg-white/10 shadow-lg border-b border-white/20"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center space-x-3"
        >
          <NavLink to="/" className="flex items-center space-x-1">
            <img src="/assets/Morya-Computer.png" alt="Morya Computers Logo" className="h-12 w-auto rounded-full" />
           <span className="text-xl font-bold text-black drop-shadow-lg">Morya Computers</span>
          </NavLink>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {location.pathname === "/contact" ? (
                  <NavLink
                    to="/"
                    className={`text-white bg-gradient-to-r ${section.color} px-4 py-2 rounded-lg shadow-md transition`}
                  >
                    {section.name}
                  </NavLink>
                ) : (
                  <Link
                    to={section.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`text-white bg-gradient-to-r ${section.color} px-4 py-2 rounded-lg shadow-md transition`}
                  >
                    {section.name}
                  </Link>
                )}
              </motion.div>
            </li>
          ))}

          {/* Contact Page Button */}
          <li>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <NavLink
                to="/contact"
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Contact
              </NavLink>
            </motion.div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Hidden by default, appears when menuOpen is true) */}
      {menuOpen && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 shadow-lg"
        >
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="text-white text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {section.name}
            </Link>
          ))}
          <NavLink
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
