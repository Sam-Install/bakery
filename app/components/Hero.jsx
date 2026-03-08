"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/crosant.jpeg",
    title: "Freshly Baked",
    subtitle: "Bread & Pastries",
    text: "Experience the warmth of freshly baked bread and delicious pastries made daily with love.",
  },
  {
    image: "/heroCake.png",
    title: "Sweet Moments",
    subtitle: "Delicious Cakes",
    text: "Celebrate every moment with our handcrafted cakes made from the finest ingredients.",
  },
  {
    image: "/n2.png",
    title: "Taste The",
    subtitle: "Bakery Tradition",
    text: "From classic recipes to modern delights, we bake happiness into every bite.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      
      <div className="absolute inset-0 bg-black/50" />

      
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

        <div className="max-w-3xl text-white space-y-6">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            {slides[current].title}
          </h1>

          <h2 className="text-2xl sm:text-3xl text-orange-400 font-medium">
            {slides[current].subtitle}
          </h2>

          <p className="text-lg text-gray-200">
            {slides[current].text}
          </p>

        
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">

         
         <Link href='/about'>

<button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md text-white font-medium">
              Learn More
            </button>

         </Link>   

          <Link href='/cakes'>
          
          <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-md">
              See Cakes
            </button>
          
          </Link>  

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;