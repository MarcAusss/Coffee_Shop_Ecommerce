"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/Coffees_PNG/1.png",
  "/images/Coffees_PNG/2.png",
  "/images/Coffees_PNG/3.png",
  "/images/Coffees_PNG/4.png",
  "/images/Coffees_PNG/5.png",
  "/images/Coffees_PNG/6.png",
  "/images/Coffees_PNG/7.png",
  "/images/Coffees_PNG/8.png",
  "/images/Coffees_PNG/9.png",
  "/images/Coffees_PNG/10.png",
  "/images/Coffees_PNG/11.png",
  "/images/Coffees_PNG/12.png",
  "/images/Coffees_PNG/13.png",
];

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayIndices = () => {
    const farleft = (current + images.length - 2) % images.length;
    const left = (current + images.length - 1) % images.length;
    const right = (current + 1) % images.length;
    const farright = (current + 2) % images.length;
    return [farleft, left, current, right, farright];
  };

  const displayIndices = getDisplayIndices();

  const positions = [
    "-translate-x-[240%]",
    "-translate-x-[120%]",
    "translate-x-0",
    "translate-x-[120%]",
    "translate-x-[240%]",
  ];

  const getImageClass = (index: number) => {
    switch (index) {
      case 0:
      case 4:
        return "opacity-10 scale-50 blur-sm";
      case 1:
      case 3:
        return "opacity-30 scale-75 blur-[1px]";
      case 2:
        return "opacity-100 scale-100 z-10";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-[50vh] bg-[#fdfcf9] flex items-center justify-center overflow-hidden bg-design">
      {/* Center circle background */}
      <div className="absolute z-0 w-[280px] h-[280px] bg-[#966A4C] rounded-full shadow-inner" />

      {/* Sliding images container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {displayIndices.map((imageIndex, i) => (
          <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            alt={`Product ${imageIndex}`}
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out h-[55vh] aspect-[3/4] object-cover rounded-xl ${positions[i]} ${getImageClass(i)} ${
              i === 2 ? "" : ""
            }`}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </div>
    </div>
  );
}
