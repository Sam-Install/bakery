"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaSmile, FaStore, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Abs = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[520px] group rounded-xl overflow-hidden shadow-xl"
        >

          <Image
            src="/about.jpg"
            alt="Sweet Oven Bakery"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

    
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

            <p className="text-white text-2xl font-semibold text-center px-6">
              Crafted With Love & Passion
            </p>

          </div>

        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >

          <h1 className="text-orange-500 font-medium mb-3">
            About Sweet Oven Bakery
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            One Of The Best Bakeries In Town
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            At Sweet Oven Bakery we specialize in freshly baked breads,
            delicious pastries, cakes, and traditional bakery treats.
            Our mission is to deliver high-quality baked goods made with
            carefully selected ingredients and passion for baking.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -8 }}
              className="text-center bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <FaUsers className="mx-auto text-orange-500 text-3xl mb-3" />
              <h3 className="text-2xl font-semibold text-gray-800">100+</h3>
              <p className="text-sm text-gray-500">Customers Served</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="text-center bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <FaSmile className="mx-auto text-orange-500 text-3xl mb-3" />
              <h3 className="text-2xl font-semibold text-gray-800">100%</h3>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="text-center bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <FaStore className="mx-auto text-orange-500 text-3xl mb-3" />
              <h3 className="text-2xl font-semibold text-gray-800">5+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </motion.div>

          </div>

        
      <Link href='/about'>
      
      
       <div className="mt-10 flex justify-center lg:justify-start">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-md font-medium shadow-md"
            >
              More About Us
              <FaArrowRight />
            </motion.button>

          </div>
      
      </Link>   

        </motion.div>

      </div>

    </section>
  );
};

export default Abs;