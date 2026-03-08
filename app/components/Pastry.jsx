"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const phone = "254753879163";

const pastries = [
  {
    name: "Chocolate Cake",
    image: "/cake1.jpg",
    description: "Rich chocolate layered cake with smooth cocoa cream.",
    price: "KSh 2,000",
  },
  {
    name: "Strawberry Cream Cake",
    image: "/cake2.jpg",
    description: "Soft sponge cake layered with fresh strawberries.",
    price: "KSh 2,200",
  },
  {
    name: "Red Velvet Cake",
    image: "/cake3.jpg",
    description: "Classic red velvet cake with cream cheese frosting.",
    price: "KSh 2,500",
  },
  {
    name: "Vanilla Celebration Cake",
    image: "/cake4.jpg",
    description: "Light vanilla sponge cake perfect for celebrations.",
    price: "KSh 1,800",
  },
  {
    name: "Cakes",
    image: "/n2.png",
    description: "Flaky buttery cake baked fresh every morning.",
    price: "KSh 100",
  },
  {
    name: "Muffins",
    image: "/n1.png",
    description: "Soft muffins topped with rich chocolate glaze.",
    price: "KSh 200/6pack",
  },
  {
    name: "Birthday Cakes",
    image: "/heroCake.png",
    description: "Birthday Cakes , can be custom made to your liking",
    price: "ksh 1000-10000",
  },
  {
    name: "Croissants",
    image: "/crosant.jpeg",
    description: "Soft croissnts filled with sweet blueberry flavor.",
    price: "KSh 220",
  },


];

const Pastry = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">

      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-orange-500 font-medium">
          Our Menu
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
          Cakes & Pastries
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Browse our delicious selection of cakes, pastries and baked treats
          made fresh every day.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {pastries.map((item, index) => {

          const message = `Hello, I would like to order the ${item.name} from Sweet Oven Bakery.`;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
            >

              {/* Image */}
              <div className="relative w-full h-[240px] overflow-hidden group">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-3">

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.description}
                </p>

                <p className="text-orange-500 font-semibold">
                  {item.price}
                </p>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-5 py-2 rounded-md text-sm"
                >
                  <FaWhatsapp />
                  Order Now
                </a>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Custom Order Section */}
      <div className="mt-20 text-center max-w-2xl mx-auto">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Need a Custom Cake or Special Order?
        </h2>

        <p className="text-gray-600 mb-8">
          Do you have a special cake, pastry, or dessert you would like us to
          bake for your celebration? Contact us directly and we will happily
          prepare it just the way you want.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          {/* WhatsApp */}
          <a
            href="https://wa.me/254753879163"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md"
          >
            <FaWhatsapp />
            WhatsApp Order
          </a>

          {/* Call */}
          <a
            href="tel:0753879163"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-md"
          >
            <FaPhoneAlt />
            Call Us
          </a>

        </div>

      </div>

    </section>
  );
};

export default Pastry;