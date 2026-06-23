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
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex items-center bg-[#1A2B1C]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1A10] via-[#1A2B1C] to-[#142214]" />

      {/* Saffron warm glow — top left */}
      <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#D4A843]/15 blur-[140px]" />

      {/* Sage cool glow — bottom right */}
      <div className="absolute bottom-[-20%] right-[-12%] w-[900px] h-[900px] rounded-full bg-[#4A7C59]/12 blur-[160px]" />

      {/* Ivory soft glow — center right */}
      <div className="absolute top-[35%] right-[18%] w-[360px] h-[360px] rounded-full bg-[#F0EBD6]/5 blur-[90px]" />

      {/* Subtle saffron grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#D4A843_0.8px,transparent_1px)] [background-size:60px_60px]" />

      <div className="container mx-auto px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 relative z-10 min-h-[100dvh] flex items-center py-16">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-9 lg:gap-11 items-center lg:items-start text-center lg:text-left px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20"
          >
            {/* Name */}
            <div className="space-y-1 w-full">
              <h1 className="leading-none font-serif font-bold tracking-[-3px]">
                <span className="block text-[#F0EBD6] text-[3.6rem] md:text-[5rem] lg:text-[6.6rem] xl:text-[7.2rem]">
                  Maitreyee
                </span>
                <span className="block bg-gradient-to-r from-[#F0EBD6] via-[#D4A843] to-[#E8C060] bg-clip-text text-transparent text-[3.6rem] md:text-[5rem] lg:text-[6.6rem] xl:text-[7.2rem] -mt-3">
                  Debi
                </span>
              </h1>
            </div>

            {/* Professions */}
            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <div className="h-px w-12 bg-[#D4A843]" />
              <p className="text-[#F0EBD6]/90 text-lg font-light tracking-wider">
                Lawyer • Author • Writer
              </p>
              <div className="h-px w-12 bg-[#D4A843]" />
            </div>

            {/* Quote */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 1 }}
  className="relative max-w-2xl w-full bg-[#F0EBD6]/5 border border-[#D4A843]/20 backdrop-blur-3xl rounded-3xl shadow-xl"
  style={{ padding: '1rem 2rem' }}   // ← Strong fallback
>
  <p 
    className="text-[1.65rem] md:text-[1.8rem] leading-tight text-[#F0EBD6]/95 font-light tracking-wide"
    style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
  >
    My journey is woven with culture, justice, and the dreams of children.
  </p>
</motion.div>

            {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg lg:max-w-none justify-center lg:justify-start pt-6">
  <motion.a
    href="#about"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="group bg-[#D4A843] hover:bg-[#8B2E2E] text-[#1A2B1C] hover:text-[#F0EBD6] font-semibold text-xl rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#D4A843]/30 transition-all duration-300"
    style={{ padding: '16px 32px' }}   // Small padding
  >
    Discover My Journey
    <span className="group-hover:translate-x-1.5 transition">→</span>
  </motion.a>

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="border-2 border-[#4A7C59]/60 hover:border-[#D4A843] text-[#F0EBD6] font-medium text-xl rounded-2xl backdrop-blur-md hover:bg-[#D4A843]/10 transition-all duration-300"
    style={{ padding: '16px 32px' }}   // Small padding
  >
    Get In Touch
  </motion.a>
</div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[420px] xl:max-w-[480px]">
              <div className="absolute -inset-10 bg-gradient-to-br from-[#D4A843]/25 to-[#4A7C59]/10 rounded-[3.5rem] blur-3xl -z-10" />

              <div className="relative aspect-[4/4.9] overflow-hidden rounded-3xl border border-[#D4A843]/20 shadow-2xl bg-[#1A2B1C]/30">
                <AnimatePresence mode="wait">
                  {images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{
                        opacity: currentImage === index ? 1 : 0,
                        scale: currentImage === index ? 1 : 1.05,
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={img}
                        alt="Maitreyee Debi"
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A2B1C]/50" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#F0EBD6]/40"
      >
        <span className="text-xs tracking-[3px] font-light">SCROLL TO EXPLORE</span>
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#D4A843]/50 to-transparent mt-2" />
      </motion.div>
    </section>
  );
}