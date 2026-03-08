"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">

        {/* Logo */}
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Home<span className="text-orange-400">Bakers</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white text-lg font-medium tracking-wide">

          <li className="hover:text-orange-400 transition duration-300">
            <a href="/" className="font-[var(--font-heading)]">
              Home
            </a>
          </li>

          <li className="hover:text-orange-400 transition duration-300">
            <a href="/about" className="font-[var(--font-heading)]">
              About
            </a>
          </li>

          <li className="hover:text-orange-400 transition duration-300">
            <a href="/cakes" className="font-[var(--font-heading)]">
              Cakes
            </a>
          </li>

          <li className="hover:text-orange-400 transition duration-300">
            <a href="/contact" className="font-[var(--font-heading)]">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">

          <ul className="flex flex-col items-center gap-6 py-10 text-gray-800 text-lg">

            <li>
              <a
                href="/"
                className="font-[var(--font-heading)] hover:text-orange-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="font-[var(--font-heading)] hover:text-orange-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/cakes"
                className="font-[var(--font-heading)] hover:text-orange-400 transition"
              >
                Cakes
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="font-[var(--font-heading)] hover:text-orange-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;