"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/heroCake.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6">
          Custom Cakes Made For Your Special Moments
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          From birthdays and weddings to celebrations of every kind, we create
          fresh, beautiful, and delicious custom cakes designed to match your
          style and taste perfectly.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero2;