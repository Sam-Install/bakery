"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Mary Wanjiku",
    review:
      "The cakes from Sweet Oven Bakery are absolutely amazing! Fresh, soft and beautifully decorated. My family loved the chocolate cake.",
  },
  {
    name: "James Otieno",
    review:
      "I ordered a birthday cake and it was perfect. The flavor, design and delivery were excellent. Highly recommend this bakery!",
  },
  {
    name: "Faith Achieng",
    review:
      "Their pastries and cakes are always fresh and delicious. Sweet Oven Bakery has become my favorite place for desserts.",
  },
];

const Feedback = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">

      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-orange-500 font-medium">
          Customer Feedback
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
          What Our Customers Say
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          We are proud to serve our community with fresh and delicious bakery
          products. Here is what our happy customers say.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {reviews.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >

            {/* Stars */}
            <div className="flex gap-1 text-orange-400 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              "{item.review}"
            </p>

            {/* Customer Name */}
            <h3 className="font-semibold text-gray-800">
              {item.name}
            </h3>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Feedback;