import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ProductsServices from "./components/ProductsServices";
import Gallery from "./components/Gallery";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="mt-24"> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <ProductsServices />
                <Gallery />
                <Address />
                <Payment />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
