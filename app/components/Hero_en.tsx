
"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero_en() {

const images = [
  "/images/banner/banner1.jpeg",
  "/images/banner/banner2.jpg",
  "/images/banner/banner3.jpg",
  "/images/banner/banner4.jpg",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3000); // 3 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <section className="relative min-h-screen bg-[#1f1147] overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>


<div className="container mx-auto px-8 lg:px-20 min-h-screen flex items-center">
  <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
    
    {/* LEFT CONTENT */}
    <div className="z-10">
      <p className="tracking-[6px] uppercase text-[#d9a441] text-sm mb-6">
        Bengali · Canadian · Torontonian
      </p>

      <h1 className="text-6xl lg:text-8xl font-bold text-white leading-none">
        Maitreyee
        <br />
        Debi
      </h1>

      <p className="italic text-gray-300 text-2xl mt-4">
        Maitreyee Debi
      </p>

      <div className="mt-12">
        <p className="text-white text-xl font-medium mb-4">
          My journey is woven with culture and the dreams of children.
        </p>

        <p className="italic text-gray-400 text-lg">
          "My journey is woven with culture and the dreams of children."
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <span className="border border-[#d9a441] text-[#d9a441] px-6 py-3 rounded-full">
          ⚖ Lawyer
        </span>

        <span className="border border-[#d9a441] text-[#d9a441] px-6 py-3 rounded-full">
          📚 Author
        </span>

        <span className="border border-[#d9a441] text-[#d9a441] px-6 py-3 rounded-full">
          🎵 Musician
        </span>

        <span className="border border-[#d9a441] text-[#d9a441] px-6 py-3 rounded-full">
          🌸 Activist
        </span>
      </div>
    </div>

{/* RIGHT IMAGE */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">
    <Image
      src={images[currentImage]}
      alt="Maitreyee Debi"
      width={500}
      height={600}
      priority
      className="w-full max-w-md h-auto object-cover rounded-lg shadow-2xl transition-all duration-700"
    />

    {/* Dots Indicator */}
    <div className="flex justify-center gap-2 mt-4">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`h-2 w-2 rounded-full transition-all ${
            currentImage === index
              ? "bg-[#d9a441] w-6"
              : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  </div>
</div>

  </div>
</div>

    </section>
  );
}