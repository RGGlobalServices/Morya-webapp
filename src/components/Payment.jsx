import React, { useState } from "react";

const Payment = () => {
  const [showUPI, setShowUPI] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="payment" className="py-20 text-center bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold mb-6">Make a Payment</h2>
      <p className="text-lg mb-4">Click below to reveal the UPI ID or QR Code for payment.</p>

      {/* UPI ID Section */}
      <div className="mt-6">
        <button
          onClick={() => setShowUPI(!showUPI)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          {showUPI ? "Back" : "Show UPI ID"}
        </button>

        {showUPI && (
          <div className="bg-white p-4 rounded-lg shadow-md inline-block text-xl font-semibold border border-gray-300 mt-4">
            <span className="text-blue-600">UPI ID: </span> <span className="text-black">p976520@ibl</span>
          </div>
        )}
      </div>

      {/* QR Code Section */}
      <div className="mt-6">
        <button
          onClick={() => setShowQR(!showQR)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          {showQR ? "Back" : "Scan QR Code"}
        </button>

        {showQR && (
          <div className="mt-4">
            <img
              src="/Gallery\payment-qr.jpg"
              alt="Scan QR Code to Pay"
              className="w-64 mx-auto rounded-lg shadow-lg border border-gray-300"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Payment;
