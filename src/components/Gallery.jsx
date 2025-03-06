import React from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const images = [
    { src: "/Gallery/download.jpeg", alt: "Product 1" },
    { src: "/Gallery/download (1).jpeg", alt: "Product 2" },
    { src: "/Gallery/download (2).jpeg", alt: "Product 3" },
    { src: "/Gallery/download (3).jpeg", alt: "Product 4" },
    { src: "/Gallery/download (4).jpeg", alt: "Product 5" },
    { src: "/Gallery/download (5).jpeg", alt: "Product 6" },
    { src: "/Gallery/download (6).jpeg", alt: "Product 7" },
    { src: "/Gallery/download (7).jpeg", alt: "Product 8" },
    { src: "/Gallery/download (8).jpeg", alt: "Product 9" },
    { src: "/Gallery/download (9).jpeg", alt: "Product 10" },
    { src: "/Gallery/download (10).jpeg", alt: "Product 11" },
    { src: "/Gallery/download (11).jpeg", alt: "Product 12" },
    { src: "/Gallery/download (12).jpeg", alt: "Product 13" },
    { src: "/Gallery/download (13).jpeg", alt: "Product 14" },
    { src: "/Gallery/download (14).jpeg", alt: "Product 15" },
  ];

  return (
    <section id="gallery" className="py-20 text-center bg-white text-gray-900">
      <h2 className="text-4xl font-bold mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {images.map((img, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover rounded-md shadow-md" />
            <h3 className="mt-4 text-lg font-semibold">{img.alt}</h3>
            <button
              onClick={() => navigate("/contact")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Enquiry
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
