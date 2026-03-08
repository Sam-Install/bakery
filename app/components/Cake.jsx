"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const phone = "254753879163";

const cakes = [
  {
    name: "Chocolate Delight",
    price: "KSh 2,000",
    image: "/cake1.jpg",
    description: "Rich chocolate layered cake topped with smooth cocoa cream."
  },
  {
    name: "Strawberry Cream Cake",
    price: "KSh 2,200",
    image: "/cake2.jpg",
    description: "Soft sponge cake layered with fresh strawberries and cream."
  },
  {
    name: "Vanilla Celebration Cake",
    price: "KSh 1,800",
    image: "/cake3.jpg",
    description: "Classic vanilla cake perfect for birthdays and celebrations."
  },
  {
    name: "Red Velvet Cake",
    price: "KSh 2,500",
    image: "/cake4.jpg",
    description: "Moist red velvet cake with creamy cheese frosting."
  },
];

const Cake = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-gray-50">

      {/* Section Title */}
      <div className="text-center mb-14">
        <h1 className="text-orange-500 font-medium">Our Cakes</h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
          Freshly Baked Cakes
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Discover our handcrafted cakes baked daily with the finest ingredients.
        </p>
      </div>

      {/* Cakes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {cakes.map((cake, index) => {

          const message = `Hello, I would like to order the ${cake.name} from Sweet Oven Bakery.`;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >

              {/* Image */}
              <div className="relative w-full h-[260px] overflow-hidden group">

                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-3">

                <h3 className="text-lg font-semibold text-gray-800">
                  {cake.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {cake.description}
                </p>

                {/* Price */}
                <p className="text-orange-500 font-semibold">
                  {cake.price}
                </p>

                {/* Order Button */}
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-md text-sm"
                >
                  <FaWhatsapp />
                  Order Now
                </a>

              </div>

            </motion.div>
          );
        })}
      </div>

      
      <div className="flex justify-center mt-14">

        <Link href="/cakes">

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-gray-900 hover:bg-black transition text-white px-8 py-3 rounded-md font-medium"
          >
            View Full Menu
            <FaArrowRight />
          </motion.button>

        </Link>

      </div>

    </section>
  );
};

export default Cake;