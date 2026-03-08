"use client";

import Image from "next/image";
import React from "react";

const Owner = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

    
        <div className="relative w-full lg:w-1/2 h-[520px] rounded-xl overflow-hidden shadow-lg">

          <Image
            src="/c2.jpeg"
            alt="Bakery Owner"
            fill
            className="object-cover"
          />

        </div>

        
        <div className="w-full lg:w-1/2">

          <h1 className="text-orange-500 font-medium mb-3">
            Word From The Owner
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Baking With Passion & Love
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Sweet Oven Bakery, baking is more than just a business — it is
            our passion. Every loaf of bread, cake, and pastry we create is made
            with dedication, care, and the finest ingredients to ensure every
            bite brings joy to our customers.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our goal has always been simple: to bring people together through
            delicious baked treats that create memorable moments for families,
            friends, and celebrations.
          </p>

        
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              John Mwangi
            </h3>

            <p className="text-orange-500 text-sm">
              Founder & Head Baker
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Owner;