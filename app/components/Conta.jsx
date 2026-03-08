"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Conta = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

        {/* Contact Details */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-orange-500 font-medium mb-3">
            Contact Information
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Visit or Reach Us
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            We'd love to hear from you! Whether you want to place a custom cake
            order, ask about our menu, or simply say hello, feel free to contact
            Sweet Oven Bakery anytime.
          </p>

          <ul className="space-y-6 text-gray-700">

            {/* Phone */}
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500 text-lg" />
              <span>0753 879 163</span>
            </li>

            {/* Email */}
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-lg" />
              <span>info@sweetovenbakery.com</span>
            </li>

            {/* Location */}
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-lg" />
              <span>Diani, South Coast - Kenya</span>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-lg" />
              <a
                href="https://wa.me/254753879163"
                target="_blank"
                className="hover:text-green-500 transition"
              >
                Chat with us on WhatsApp
              </a>
            </li>

          </ul>

        </div>


        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Diani%20Beach%20South%20Coast%20Kenya&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Conta;