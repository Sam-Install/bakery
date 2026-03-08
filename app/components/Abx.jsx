"use client";

import Image from "next/image";
import React from "react";

const Abx = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-orange-500 font-medium mb-3">
            Who We Are
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Sweet Oven Bakery
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Sweet Oven Bakery is passionate about creating freshly baked
            breads, cakes, pastries and desserts that bring joy to every
            occasion. Our recipes combine traditional baking techniques with
            high-quality ingredients to deliver delicious treats every day.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you're celebrating a birthday, wedding, or simply craving
            something sweet, our bakery is dedicated to providing beautifully
            crafted baked goods made with care, love and attention to detail.
          </p>

          <h3 className="text-lg font-semibold text-orange-500">
            Freshly baked happiness every single day.
          </h3>

        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 h-[420px] rounded-xl overflow-hidden shadow-lg">

          <Image
            src="/crosant.jpeg"
            alt="Sweet Oven Bakery"
            fill
            className="object-cover"
          />

        </div>
        

      </div>

    </section>
  );
};

export default Abx;