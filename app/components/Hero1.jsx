"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero1 = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/crosant.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-3xl text-white"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-6">
          Our Delicious Menu
        </h1>

        <p className="text-lg sm:text-xl text-gray-200">
          Explore our wide variety of freshly baked cakes, pastries, breads and
          desserts crafted with passion and the finest ingredients.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero1;