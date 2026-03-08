"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero3 = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/n2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          Get In Touch With Us
        </h1>

        <h2 className="text-xl sm:text-2xl text-orange-400 mb-6">
          We'd Love To Hear From You
        </h2>

        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
          Whether you're placing a custom cake order, planning a special
          celebration, or simply have a question about our bakery, feel free to
          reach out. Our team at Sweet Oven Bakery is always ready to assist you
          and make your experience delightful.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero3;