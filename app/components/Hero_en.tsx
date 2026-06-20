"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero_en() {
  const images = [
    "/images/banner/banner1.jpeg",
    "/images/banner/banner2.jpg",
    "/images/banner/banner3.jpg",
    "/images/banner/banner4.jpg",
    "/images/banner/banner5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1a0d3d] flex items-center">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d3d] via-[#2a1b4d] to-[#17053d]" />
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#d9a441]/25 blur-[180px]" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] rounded-full bg-purple-600/20 blur-[200px]" />
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-white/10 blur-[120px]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d9a441_0.8px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="
              max-w-2xl pt-4 lg:pt-0
              flex flex-col gap-8
              items-center lg:items-start
              text-center lg:text-left
            "
          >

            {/* Name */}
            <h1 className="leading-[0.82] font-black tracking-[-2px]">
              <span className="block text-white text-[3rem] md:text-[5rem] lg:text-[7rem]">
                Maitreyee
              </span>
              <span className="block bg-gradient-to-r from-[#f5e8c7] via-[#d9a441] to-amber-300 bg-clip-text text-transparent text-[3rem] md:text-[5rem] lg:text-[7rem] mt-[-18px]">
                Debi
              </span>
            </h1>

            {/* Professions */}
            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <div className="h-px w-20 bg-[#d9a441]" />
              <p className="text-white/95 font-light tracking-wide">
                Lawyer • Author • Musician • Activist
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative p-12 md:p-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl"
            >
              <p className="text-[1.75rem] md:text-[1.9rem] leading-relaxed text-white font-light tracking-wide text-center ">
                My journey is woven with culture and the dreams of children.
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  min-w-[260px]
                  min-h-[64px]
                  px-10
                  bg-[#d9a441] hover:bg-amber-300
                  text-black font-semibold text-lg
                  rounded-2xl
                  flex items-center justify-center gap-3
                  shadow-xl shadow-[#d9a441]/30
                "
              >
                Discover My Journey
                <span>→</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  min-w-[260px]
                  min-h-[64px]
                  px-10
                  border-2 border-white/40 hover:border-white
                  text-white font-medium text-lg
                  rounded-2xl
                  backdrop-blur-md
                  transition-all duration-300
                  hover:bg-white/10
                  flex items-center justify-center
                "
              >
                Get In Touch
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#d9a441]/60 via-amber-300/20 to-transparent rounded-[4rem] blur-3xl -z-10" />

              <div className="relative w-[280px] md:w-[320px] lg:w-[400px] aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  {images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{
                        opacity: currentImage === index ? 1 : 0,
                        scale: currentImage === index ? 1 : 1.08,
                      }}
                      transition={{ duration: 1.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={img}
                        alt="Maitreyee Debi"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40"
      >
        <span className="text-[10px] tracking-[3px] mb-2">
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </motion.div>

    </section>
  );
}