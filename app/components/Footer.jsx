import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-8 md:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Bakery Info */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">
            Sweet<span className="text-orange-500">Oven</span>
          </h1>

          <p className="text-sm leading-relaxed">
            Sweet Oven Bakery is dedicated to bringing you freshly baked breads,
            cakes and pastries made with the finest ingredients and love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-orange-500 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/cakes" className="hover:text-orange-500 transition">
                Cakes
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

    
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h2>

          <ul className="space-y-4 text-sm">

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" />
              Diani,southCoast Kenya
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              0753 879 163
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              info@sweetoven.com
            </li>

          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Opening Hours
          </h2>

          <ul className="space-y-2 text-sm">
            <li>Mon - Fri: 7:00 AM - 8:00 PM</li>
            <li>Saturday: 8:00 AM - 9:00 PM</li>
            <li>Sunday: 9:00 AM - 6:00 PM</li>
          </ul>

          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/254753879163"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>


      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} Sweet Oven Bakery. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;