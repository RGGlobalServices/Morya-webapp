import React from "react";
import AnimatedSection from "./AnimatedSection";

const AboutUs = () => {
  return (
    <AnimatedSection>
      <section id="about" className="text-gray-900 text-center pt-20">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          At <span className="text-blue-400">Morya Computer</span>, we empower businesses with technology solutions. 
          Established in 2024, we provide IT products, services, and support to streamline your operations.
        </p>
      </section>
    </AnimatedSection>
  );
};

export default AboutUs;
