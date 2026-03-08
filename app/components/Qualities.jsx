"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBreadSlice, FaTruck, FaLeaf, FaHeart } from "react-icons/fa";

const qualities = [
  {
    icon: <FaBreadSlice size={40} className="text-orange-500" />,
    title: "Fresh Baked Products",
    description:
      "Every loaf and pastry is baked fresh daily using high quality ingredients.",
  },
  {
    icon: <FaTruck size={40} className="text-orange-500" />,
    title: "Quick Delivery",
    description:
      "We deliver your favorite bakery items quickly while they are still fresh.",
  },
  {
    icon: <FaLeaf size={40} className="text-orange-500" />,
    title: "Quality Ingredients",
    description:
      "Only carefully selected ingredients are used to guarantee taste and quality.",
  },
  {
    icon: <FaHeart size={40} className="text-orange-500" />,
    title: "Made With Love",
    description:
      "Our bakers craft every product with passion and dedication.",
  },
];

const Qualities = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Why Choose Our Bakery
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          We bring you freshly baked goodness made with passion and premium ingredients.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {qualities.map((quality, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md text-center cursor-pointer"
          >
            <div className="flex justify-center mb-5">
              {quality.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {quality.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {quality.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Qualities;