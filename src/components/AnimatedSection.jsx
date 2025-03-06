import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
